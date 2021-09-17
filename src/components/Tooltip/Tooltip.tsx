import * as React from 'react';
import ReactDOM from 'react-dom';
import { classNames } from '../../lib/classNames';
import { getClassName } from '../../helpers/getClassName';
import Subhead from '../Typography/Subhead/Subhead';
import { Modifier, usePopper } from 'react-popper';
import { Placement } from '@popperjs/core';
import { tooltipContainerAttr } from './TooltipContainer';
import { useExternRef } from '../../hooks/useExternRef';
import { useDOM } from '../../lib/dom';
import { warnOnce } from '../../lib/warnOnce';
import { hasReactNode } from '../../lib/utils';
import { useGlobalEventListener } from '../../hooks/useGlobalEventListener';
import './Tooltip.css';

interface SimpleTooltipProps extends Partial<TooltipProps> {
  target?: HTMLDivElement;
  arrowRef?: React.Ref<HTMLDivElement>;
  style?: {
    arrow: React.CSSProperties;
    container: React.CSSProperties;
  };
  attributes?: {
    arrow: React.HTMLAttributes<HTMLDivElement>;
    container: React.HTMLAttributes<HTMLDivElement>;
  };
}

const isDOMTypeElement = (element: React.ReactElement): element is React.DOMElement<any, any> => {
  return React.isValidElement(element) && typeof element.type === 'string';
};

const baseClassName = getClassName('Tooltip');
const warn = warnOnce('Tooltip');
const IS_DEV = process.env.NODE_ENV === 'development';

const SimpleTooltip = React.forwardRef<HTMLDivElement, SimpleTooltipProps>(
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
  children: React.ReactElement;
  mode?: 'accent' | 'light';
  /**
   * Если передан `false`, то рисуется просто `children`.
   */
  isShown?: boolean;
  /**
   * Текст тултипа.
   */
  text?: React.ReactNode;
  /**
   * Заголовок тултипа.
   */
  header?: React.ReactNode;
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
   * Сдвиг стрелочки относительно центра дочернего элемента.
   */
  cornerOffset?: number;
  /**
   * Сдвиг стрелочки относительно ширины тултипа
   */
  cornerAbsoluteOffset?: number;
  /**
   * Callback, который вызывается при клике по любому месту в пределах экрана.
   */
  onClose?: () => void;
}

declare type ArrowOffsetModifierOptions = {
  offset: number;
};
declare type ArrowOffsetModifier = Modifier<'arrowOffset', ArrowOffsetModifierOptions>;

function mapAlignX(x: TooltipProps['alignX']) {
  switch (x) {
    case 'left': return 'start';
    case 'right': return 'end';
    default: return '';
  }
}
function getPlacement(alignX: TooltipProps['alignX'], alignY: TooltipProps['alignY']): Placement {
  return [alignY || 'bottom', mapAlignX(alignX || 'left')].filter((p) => !!p).join('-') as Placement;
}
function isVerticalPlacement(placement: Placement) {
  return placement.startsWith('top') || placement.startsWith('bottom');
}

const Tooltip: React.FC<TooltipProps> = ({
  children, isShown, offsetX = 0, offsetY = 15,
  alignX, alignY, onClose, cornerOffset, cornerAbsoluteOffset,
  ...restProps
}) => {
  const [tooltipRef, setTooltipRef] = React.useState<HTMLElement>();
  const [tooltipArrowRef, setTooltipArrowRef] = React.useState<HTMLElement>();
  const [target, setTarget] = React.useState<HTMLElement>();

  if (IS_DEV) {
    const multiChildren = React.Children.count(children) > 1;
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
  const tooltipContainer = React.useMemo(() => target?.closest(`[${tooltipContainerAttr}]`) as HTMLDivElement, [target]);
  const strategy = React.useMemo(() => target?.style.position === 'fixed' ? 'fixed' : 'absolute', [target]);
  /* eslint-enable @typescript-eslint/no-unnecessary-type-assertion*/
  /* eslint-enable no-restricted-properties */

  if (IS_DEV && target && !tooltipContainer) {
    throw new Error('Use TooltipContainer for Tooltip outside Panel (see docs)');
  }

  const arrowOffsetModiifer = React.useMemo<ArrowOffsetModifier>(() => {
    return {
      name: 'arrowOffset',
      enabled: true,
      phase: 'main',
      fn({ state }) {
        if (isVerticalPlacement(state.placement)) {
          if (cornerAbsoluteOffset !== undefined) {
            state.modifiersData.arrow.x = cornerAbsoluteOffset;
          } else {
            state.modifiersData.arrow.x += cornerOffset;
          }
        } else {
          if (cornerAbsoluteOffset !== undefined) {
            state.modifiersData.arrow.y = cornerAbsoluteOffset;
          } else {
            state.modifiersData.arrow.y += cornerOffset;
          }
        }
      },
    };
  }, [cornerOffset, cornerAbsoluteOffset]);

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
      arrowOffsetModiifer,
    ],
  });

  const { document } = useDOM();
  useGlobalEventListener(document, 'click', isShown && onClose, { passive: true });
  // NOTE: setting isShown to true used to trigger usePopper().forceUpdate()

  const childRef = React.isValidElement(children) &&
    (isDOMTypeElement(children) ? children.ref : children.props.getRootRef);
  const patchedRef = useExternRef(setTarget, childRef);
  const child = React.isValidElement(children) ? React.cloneElement(children, {
    [isDOMTypeElement(children) ? 'ref' : 'getRootRef']: patchedRef,
  }) : children;

  return (
    <React.Fragment>
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
    </React.Fragment>
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
