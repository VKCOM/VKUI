import * as React from 'react';
import { useDOM } from '../../lib/dom';
import { classNames } from '@vkontakte/vkjs';
import { PopperCommonProps, Popper } from '../Popper/Popper';
import { FocusTrap } from '../FocusTrap/FocusTrap';
import { useTimeout } from '../../hooks/useTimeout';
import { useExternRef } from '../../hooks/useExternRef';
import { useEventListener } from '../../hooks/useEventListener';
import { useGlobalEventListener } from '../../hooks/useGlobalEventListener';
import { usePatchChildrenRef } from '../../hooks/usePatchChildrenRef';
import styles from './Popover.module.css';

export interface PopoverProps extends Omit<PopperCommonProps, 'arrow' | 'arrowClassName'> {
  /**
   * Механика вызова всплывающего окна.
   *
   * - `"click"` – показывается/скрывается только при нажатии.
   * - `"hover"` – помимо нажатия, будет показываться/скрывается при наведении/отведении мыши.
   *
   * > ⚠️`"hover"` на тач-устройствах будет работать как `"click"`, с одним лишь нюансом, что не будет закрываться
   * > при повторном нажатии на целевой элемент. Для закрытия необходимо нажать на область вне целевого элемента
   * > и выпадающего окна.
   */
  action?: 'click' | 'hover';
  /**
   * Если передан, то всплывающее окно будет показан/скрыт в зависимости от значения свойства.
   */
  shown?: boolean;
  /**
   * Количество миллисекунд, после которых произойдёт показ всплывающего окна.
   *
   * > Используется только для `action="hover"` при наведении/отведении мыши.
   */
  showDelay?: number;
  /**
   * Количество миллисекунд, после которых произойдёт скрытие всплывающего окна.
   *
   * > Используется только для `action="hover"` при наведении/отведении мыши.
   */
  hideDelay?: number;
  /**
   * Содержимое всплывающего окна.
   */
  content?: React.ReactNode;
  /**
   * Целевой элемент. Всплывающее окно появится возле него.
   *
   * > ⚠️ Если это пользовательский компонент, то он должен предоставлять параметры либо `getRootRef`, либо `ref` для получения ссылки на DOM-узел.
   */
  children?: React.ReactElement;
  /**
   * Вызывается при каждом изменении видимости всплывающего окна.
   */
  onShownChange?(shown: boolean): void;
}

/**
 * @see https://vkcom.github.io/VKUI/#/Popover
 */
export const Popover = ({
  action = 'click',
  shown: shownProp,
  showDelay = 150,
  hideDelay = 150,
  offsetDistance = 8,
  content,
  children,
  style: styleProp,
  className,
  getRef,
  onShownChange,
  ...restProps
}: PopoverProps) => {
  const { document } = useDOM();

  const hoverable = action === 'hover';
  const hovered = React.useRef(false);
  const [computedShown, setComputedShown] = React.useState(shownProp || false);
  const [dropdownNode, setPopperNode] = React.useState<HTMLElement | null>(null);

  const shown = typeof shownProp === 'boolean' ? shownProp : computedShown;

  const patchedPopperRef = useExternRef<HTMLDivElement>(setPopperNode, getRef);

  const [childRef, child] = usePatchChildrenRef(children);

  const setShown = (value: boolean) => {
    if (typeof shownProp !== 'boolean') {
      setComputedShown(value);
    }
    typeof onShownChange === 'function' && onShownChange(value);
  };

  const showTimeout = useTimeout(() => setShown(true), showDelay);

  const hideTimeout = useTimeout(() => setShown(false), hideDelay);

  const handleTargetEnter = () => {
    hovered.current = true;
    hideTimeout.clear();
    showTimeout.set();
  };

  const handleTargetClick = () => {
    if (hovered.current && shown) {
      return;
    }
    setShown(!shown);
  };

  const handleTargetLeave = () => {
    hovered.current = false;
    showTimeout.clear();
    hideTimeout.set();
  };

  const handleContentKeyDownEscape = () => {
    setShown(false);
  };

  const handleOutsideClick = (e: MouseEvent) => {
    if (
      dropdownNode &&
      !childRef.current?.contains(e.target as Node) &&
      !dropdownNode.contains(e.target as Node)
    ) {
      setShown(false);
    }
  };

  useGlobalEventListener(document, 'click', handleOutsideClick);
  const targetEnterListener = useEventListener('mouseenter', handleTargetEnter);
  const targetClickEvent = useEventListener('click', handleTargetClick);
  const targetLeaveListener = useEventListener('mouseleave', handleTargetLeave);

  React.useEffect(() => {
    if (!childRef.current) {
      return;
    }

    targetClickEvent.add(childRef.current);

    if (hoverable) {
      targetEnterListener.add(childRef.current);
      targetLeaveListener.add(childRef.current);
    }
  }, [childRef, hoverable, targetClickEvent, targetEnterListener, targetLeaveListener]);

  return (
    <React.Fragment>
      {child}
      {shown && (
        <Popper
          {...restProps}
          className={classNames(styles['Popover'], className)}
          targetRef={childRef}
          getRef={patchedPopperRef}
          offsetDistance={offsetDistance}
          style={
            // Reason: Typescript ругается на CSS Custom Properties в объекте
            // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
            {
              ...styleProp,
              '--vkui_internal--popover_safe_zone_padding': `${offsetDistance}px`,
            } as React.CSSProperties
          }
          renderContent={({ className: wrapperClassName }) => (
            <FocusTrap className={wrapperClassName} onClose={handleContentKeyDownEscape}>
              {content}
            </FocusTrap>
          )}
          onMouseOver={hoverable ? hideTimeout.clear : undefined}
          onMouseOut={hoverable ? handleTargetLeave : undefined}
        />
      )}
    </React.Fragment>
  );
};
