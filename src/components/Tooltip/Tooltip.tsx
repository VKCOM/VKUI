import React, { Fragment, useState, ReactElement, ReactNode, isValidElement, FC, forwardRef, Ref, CSSProperties, HTMLAttributes, cloneElement, useMemo, Children } from 'react';
import ReactDOM from 'react-dom';
import { classNames } from '../../lib/classNames';
import { getClassName } from '../../helpers/getClassName';
import Subhead from '../Typography/Subhead/Subhead';
import { usePopper } from 'react-popper';
import { Placement } from '@popperjs/core';
import { tooltipContainerAttr } from './TooltipContainer';
import { useExternRef } from '../../hooks/useExternRef';
import { useDOM } from '../../lib/dom';
import { warnOnce } from '../../lib/warnOnce';
import { hasReactNode } from '../../lib/utils';
import { useGlobalEventListener } from '../../hooks/useGlobalEventListener';

interface SimpleTooltipProps extends Partial<TooltipProps> {
  target?: HTMLDivElement;
  arrowRef?: Ref<HTMLDivElement>;
  style?: {
    arrow: CSSProperties;
    container: CSSProperties;
  };
  attributes?: {
    arrow: HTMLAttributes<HTMLDivElement>;
    container: HTMLAttributes<HTMLDivElement>;
  };
}

const isDOMTypeElement = (element: ReactElement): element is React.DOMElement<any, any> => {
  return React.isValidElement(element) && typeof element.type === 'string';
};

const baseClassName = getClassName('Tooltip');
const warn = warnOnce('Tooltip');
const IS_DEV = process.env.NODE_ENV === 'development';

const SimpleTooltip = forwardRef<HTMLDivElement, SimpleTooltipProps>(
  function SimpleTooltip(
    { mode = 'accent', header, text, arrowRef, style = {}, attributes },
    ref,
  ) {
    return (
      <div vkuiClass={
        classNames(
          baseClassName,
          `Tooltip--${mode}`,
        )}>
        <div vkuiClass="Tooltip__container" ref={ref} style={style.container} {...attributes.container}>
          <div vkuiClass="Tooltip__corner" style={style.arrow} {...attributes.arrow} ref={arrowRef} />
          <div vkuiClass="Tooltip__content">
            {header && <Subhead weight="semibold" vkuiClass="Tooltip__title">{header}</Subhead>}
            {text && <Subhead weight="regular" vkuiClass="Tooltip__text">{text}</Subhead>}
          </div>
        </div>
      </div>
    );
  });

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
   * Если не задано, позиция по горизонтали определятся автоматически
   */
  alignX?: 'center' | 'left' | 'right';
  /**
   * Положение по вертикали (расположение над или под `children`).
   * Если не задано, позиция по вертикали определятся автоматически
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

function mapAlignX(x: TooltipProps['alignX']) {
  switch (x) {
    case 'left': return 'start';
    case 'right': return 'end';
    default: return '';
  }
};
function getPlacement(alignX: TooltipProps['alignX'], alignY: TooltipProps['alignY']): Placement {
  return [alignY || 'bottom', mapAlignX(alignX || 'left')].filter((p) => !!p).join('-') as Placement;
}

const Tooltip: FC<TooltipProps> = ({
  children, isShown, offsetX = 0, offsetY = 15,
  alignX, alignY, onClose, cornerOffset,
  ...restProps
}) => {
  const [tooltipRef, setTooltipRef] = useState<HTMLElement>();
  const [tooltipArrowRef, setTooltipArrowRef] = useState<HTMLElement>();
  const [target, setTarget] = useState<HTMLElement>();

  if (IS_DEV) {
    const multiChildren = Children.count(children) > 1;
    // Empty children is a noop
    const primitiveChild = hasReactNode(children) && typeof children !== 'object';
    (multiChildren || primitiveChild) && warn([
      'children must be a single React element, got',
      multiChildren && 'multiple',
      primitiveChild && JSON.stringify(children),
    ].filter(Boolean).join(' '));
  }

  /* eslint-disable no-restricted-properties */
  /* eslint-disable @typescript-eslint/no-unnecessary-type-assertion*/
  const tooltipContainer = useMemo(() => target?.closest(`[${tooltipContainerAttr}]`) as HTMLDivElement, [target]);
  const strategy = useMemo(() => target?.style.position === 'fixed' ? 'fixed' : 'absolute', [target]);
  /* eslint-enable @typescript-eslint/no-unnecessary-type-assertion*/
  /* eslint-enable no-restricted-properties */

  if (IS_DEV && target && !tooltipContainer) {
    throw new Error('Use TooltipContainer for Tooltip outside Panel (see docs)');
  }

  const placement = getPlacement(alignX, alignY);
  const { styles, attributes } = usePopper(target, tooltipRef, {
    strategy,
    placement,
    modifiers: [
      {
        name: 'offset', options: {
          offset: [
            offsetX,
            offsetY,
          ],
        },
      },
      {
        name: 'arrow', options: {
          element: tooltipArrowRef,
          padding: 14,
        },
      },
      {
        name: 'preventOverflow',
      },
      {
        name: 'flip',
      },
    ],
  });

  const { document } = useDOM();
  useGlobalEventListener(document, 'click', isShown && onClose, { passive: true });
  // NOTE: setting isShown to true used to trigger usePopper().forceUpdate()

  const childRef = isValidElement(children) &&
    (isDOMTypeElement(children) ? children.ref : children.props.getRootRef);
  const patchedRef = useExternRef(setTarget, childRef);
  const child = isValidElement(children) ? cloneElement(children, {
    [isDOMTypeElement(children) ? 'ref' : 'getRootRef']: patchedRef,
  }) : children;

  if (!alignX || !alignY) {
    cornerOffset = 0;
  }

  return (
    <Fragment>
      {child}
      {isShown && target != null && ReactDOM.createPortal(
        <SimpleTooltip
          {...restProps}
          ref={(el) => setTooltipRef(el)}
          arrowRef={(el) => setTooltipArrowRef(el)}
          style={{ arrow: styles.arrow, container: styles.popper }}
          attributes={{ arrow: attributes.arrow, container: attributes.popper }}
        />,
        tooltipContainer,
      )}
    </Fragment>
  );
};

Tooltip.defaultProps = {
  offsetX: 0,
  offsetY: 15,
  cornerOffset: 0,
  isShown: true,
  mode: 'accent',
};
export default Tooltip;
