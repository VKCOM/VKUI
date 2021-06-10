import React, {
  FC, ReactElement, ReactNode,
  Fragment, cloneElement, isValidElement,
  useState, useRef, useMemo,
} from 'react';
import { classNames } from '../../lib/classNames';
import { getClassName } from '../../helpers/getClassName';
import ReactDOM from 'react-dom';
import { useDOM } from '../../lib/dom';
import { useIsomorphicLayoutEffect } from '../../lib/useIsomorphicLayoutEffect';
import Subhead from '../Typography/Subhead/Subhead';
import { tooltipContainerAttr } from './TooltipContainer';
import { useExternRef } from '../../hooks/useExternRef';
import { useEventListener } from '../../hooks/useEventListener';

interface TooltipPortalProps extends Partial<TooltipProps> {
  target?: HTMLElement;
}

const isDOMTypeElement = (element: ReactElement): element is React.DOMElement<any, any> => {
  return React.isValidElement(element) && typeof element.type === 'string';
};

const baseClassName = getClassName('Tooltip');

const TooltipPortal: FC<TooltipPortalProps> = ({
  header,
  text,
  offsetX,
  offsetY,
  alignX,
  alignY,
  cornerOffset,
  mode,
  target,
  onClose,
}) => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>();
  const { document } = useDOM();

  /* eslint-disable no-restricted-properties */
  const fixedPortal = useMemo(() => target.closest(`[${tooltipContainerAttr}=fixed]`) != null, [target]);
  const portalTarget = useMemo(() => target.closest(`[${tooltipContainerAttr}]`), [target]);
  /* eslint-enable no-restricted-properties */

  const clickEvent = useEventListener('click', onClose);
  useIsomorphicLayoutEffect(() => clickEvent.add(document), []);

  useIsomorphicLayoutEffect(() => {
    const container = containerRef.current;
    const targetBounds = target.getBoundingClientRect();
    const portalBounds = portalTarget.getBoundingClientRect();

    const coords = {
      width: targetBounds.width,
      height: targetBounds.height,
      x: targetBounds.left - portalBounds.left,
      y: targetBounds.top - portalBounds.top,
    };

    setPos({
      x: coords.x + offsetX + (alignX === 'right' ? coords.width - container.offsetWidth : 0),
      y: coords.y + (alignY === 'top' ? -container.offsetHeight - offsetY : coords.height + offsetY),
    });
  }, [target, portalTarget]);

  return ReactDOM.createPortal(
    <div vkuiClass={
      classNames(
        baseClassName,
        `Tooltip--x-${alignX}`,
        `Tooltip--y-${alignY}`,
        `Tooltip--${mode}`,
        {
          'Tooltip--fixed': fixedPortal,
        },
      )}>
      <div vkuiClass="Tooltip__container" style={{ top: pos.y, left: pos.x }} ref={containerRef}>
        <div vkuiClass="Tooltip__corner" style={{ [alignX]: 20 + cornerOffset }} />
        <div vkuiClass="Tooltip__content">
          {header && <Subhead weight="semibold" vkuiClass="Tooltip__title">{header}</Subhead>}
          {text && <Subhead weight="regular" vkuiClass="Tooltip__text">{text}</Subhead>}
        </div>
      </div>
    </div>, portalTarget);
};

export interface TooltipProps {
  /**
   * **Важно**: если в `children` передан React-компонент, то необходимо убедиться в том, что он поддерживает
   * свойство `getRootRef`, которое должно возвращаться ссылку на корневой DOM-элемент компонента,
   * иначе тултип показан не будет. Если передан React-element, то такой проблемы нет.
   */
  children: ReactElement;
  mode?: 'accent' | 'light';
  /**
   * Если передан `false`, то рисуется просто `children`.
   */
  isShown?: boolean;
  /**
   * Текст тултипа.
   */
  text?: ReactNode;
  /**
   * Заголовок тултипа.
   */
  header?: ReactNode;
  /**
   * Положение по горизонтали (прижатие к левому или правому краю `children`).
   */
  alignX?: 'left' | 'right';
  /**
   * Положение по вертикали (расположение над или под `children`).
   */
  alignY?: 'top' | 'bottom';
  /**
   * Сдвиг по горизонтали (относительно портала, в котором рисуется тултип).
   */
  offsetX?: number;
  /**
   * Сдвиг по вертикали (относительно портала, в котором рисуется тултип).
   */
  offsetY?: number;
  /**
   * Сдвиг треугольника (относительно ширины тултипа).
   */
  cornerOffset?: number;
  /**
   * Callback, который вызывается при клике по любому месту в пределах экрана.
   */
  onClose?: () => void;
}

const Tooltip: FC<TooltipProps> = ({ children = null, isShown, ...portalProps }) => {
  const [target, setTarget] = useState<HTMLElement>();

  const childRef = isValidElement(children) &&
    (isDOMTypeElement(children) ? children.ref : (children.props as any).getRootRef);
  const patchedRef = useExternRef(setTarget, childRef);
  const child = isValidElement(children) ? cloneElement(children, {
    [isDOMTypeElement(children) ? 'ref' : 'getRootRef']: patchedRef,
  }) : children;

  return (
    <Fragment>
      {child}
      {isShown && target != null && <TooltipPortal {...portalProps} target={target} />}
    </Fragment>
  );
};

Tooltip.defaultProps = {
  offsetX: 0,
  offsetY: 15,
  alignX: 'left',
  alignY: 'bottom',
  cornerOffset: 0,
  isShown: true,
  mode: 'accent',
};

export default Tooltip;
