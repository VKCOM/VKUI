import * as React from 'react';
import ReactDOM from 'react-dom';
import { hasReactNode } from '@vkontakte/vkjs';
import { useExternRef } from '../../hooks/useExternRef';
import {
  arrowMiddleware,
  autoPlacementMiddleware,
  autoUpdateFloatingElement,
  checkIsNotAutoPlacement,
  convertFloatingDataToReactCSSProperties,
  flipMiddleware,
  getAutoPlacementAlign,
  offsetMiddleware,
  type Placement,
  type PlacementWithAuto,
  shiftMiddleware,
  useFloating,
  type UseFloatingMiddleware,
} from '../../lib/floating';
import { warnOnce } from '../../lib/warnOnce';
import { HasRootRef } from '../../types';
import { useNavTransition } from '../NavTransitionContext/NavTransitionContext';
import { TooltipBase, type TooltipBaseProps } from '../TooltipBase/TooltipBase';
import { tooltipContainerAttr } from './TooltipContainer';
import styles from './Tooltip.module.css';

/**
 * Перебиваем `ref`.
 *
 * В оригинальном `React.DOMElement` задаётся `React.LegacyRef<T>`, в котором есть `string`.
 * Когда как `{ ref: "string" }` уже давно депрекейтнут.
 */
interface DOMElement<P extends React.HTMLAttributes<T> | React.SVGAttributes<T>, T extends Element>
  extends React.DOMElement<P, T> {
  ref: React.Ref<T>;
}

const isDOMTypeElement = <
  P extends React.HTMLAttributes<T> | React.SVGAttributes<T>,
  T extends Element,
>(
  element: React.ReactElement,
): element is DOMElement<P, T> => {
  return React.isValidElement(element) && typeof element.type === 'string';
};

const warn = warnOnce('Tooltip');

export interface TooltipProps
  extends Omit<
    TooltipBaseProps,
    'arrowCoords' | 'arrowPlacement' | 'getArrowRef' | 'floatingStyle' | 'withArrow'
  > {
  /**
   * **Важно**: если в `children` передан React-компонент, то необходимо убедиться в том, что он поддерживает
   * свойство `getRootRef`, которое должно возвращаться ссылку на корневой DOM-элемент компонента,
   * иначе тултип показан не будет. Если передан React-element, то такой проблемы нет.
   */
  children: React.ReactElement<HasRootRef<any>> | React.ReactElement;
  /**
   * Если передан `false`, то рисуется просто `children`.
   */
  isShown?: boolean;
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
   * Отображать ли стрелку, указывающую на якорный элемент
   */
  arrow?: boolean;
  /**
   * Безопасная зона вокруг стрелки, чтобы та не выходила за края контента.
   */
  arrowPadding?: number;
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
  /**
   * По умолчанию компонент выберет наилучшее расположение сам. Но его можно задать извне с помощью этого свойства
   */
  placement?: PlacementWithAuto;
}

function mapAlignX(x: TooltipProps['alignX']) {
  switch (x) {
    case 'left':
      return 'start';
    case 'right':
      return 'end';
    default:
      return '';
  }
}
function getDefaultPlacement(
  alignX: TooltipProps['alignX'],
  alignY: TooltipProps['alignY'],
): Placement {
  return [alignY || 'bottom', mapAlignX(alignX || 'left')]
    .filter((p) => !!p)
    .join('-') as Placement;
}
function isVerticalPlacement(placement: PlacementWithAuto) {
  return placement.startsWith('top') || placement.startsWith('bottom');
}

/**
 * @see https://vkcom.github.io/VKUI/#/Tooltip
 */
export const Tooltip = ({
  children,
  isShown: isShownProp = true,
  offsetX = 0,
  offsetY = 15,
  alignX,
  alignY,
  onClose,
  cornerOffset = 0,
  cornerAbsoluteOffset,
  arrow = true,
  arrowPadding = 14,
  placement: placementProp,
  ...restProps
}: TooltipProps) => {
  const [arrowRef, setArrowRef] = React.useState<HTMLDivElement | null>(null);
  const [target, setTarget] = React.useState<HTMLElement | null>(null);
  /* eslint-disable no-restricted-properties */
  const tooltipContainer = React.useMemo(
    () => target?.closest<HTMLDivElement>(`[${tooltipContainerAttr}]`),
    [target],
  );
  const { entering } = useNavTransition();
  const isShown = isShownProp && tooltipContainer && !entering;

  const placement = placementProp || getDefaultPlacement(alignX, alignY);
  const isNotAutoPlacement = checkIsNotAutoPlacement(placement);

  if (process.env.NODE_ENV === 'development') {
    const multiChildren = React.Children.count(children) > 1;
    // Empty children is a noop
    const primitiveChild = hasReactNode(children) && typeof children !== 'object';
    (multiChildren || primitiveChild) &&
      warn(
        [
          'children должен быть одним React элементом, получено',
          multiChildren && 'несколько',
          primitiveChild && JSON.stringify(children),
        ]
          .filter(Boolean)
          .join(' '),
        'error',
      );
  }

  const floatingPositionStrategy = React.useMemo(
    () => (target?.style.position === 'fixed' ? 'fixed' : 'absolute'),
    [target],
  );

  if (process.env.NODE_ENV === 'development' && target && !tooltipContainer) {
    throw new Error('Use TooltipContainer for Tooltip outside Panel (see docs)');
  }

  const memoizedMiddlewares = React.useMemo(() => {
    const middlewares: UseFloatingMiddleware[] = [
      offsetMiddleware({
        crossAxis: offsetX,
        mainAxis: offsetY,
      }),
    ];

    // см. https://floating-ui.com/docs/flip#conflict-with-autoplacement
    if (isNotAutoPlacement) {
      middlewares.push(flipMiddleware());
    } else {
      middlewares.push(
        autoPlacementMiddleware({
          alignment: placement ? getAutoPlacementAlign(placement) : null,
        }),
      );
    }

    middlewares.push(shiftMiddleware());

    // см. https://floating-ui.com/docs/arrow#order
    if (arrow) {
      middlewares.push(
        arrowMiddleware({
          element: arrowRef,
          padding: arrowPadding,
        }),
      );
      middlewares.push({
        name: 'arrowOffset',
        fn({ placement, middlewareData }) {
          if (!middlewareData.arrow) {
            return Promise.resolve({});
          }
          if (isVerticalPlacement(placement)) {
            if (cornerAbsoluteOffset !== undefined) {
              middlewareData.arrow.x = cornerAbsoluteOffset;
            } else if (middlewareData.arrow.x !== undefined) {
              middlewareData.arrow.x += cornerOffset;
            }
          } else {
            if (cornerAbsoluteOffset !== undefined) {
              middlewareData.arrow.y = cornerAbsoluteOffset;
            } else if (middlewareData.arrow.y !== undefined) {
              middlewareData.arrow.y += cornerOffset;
            }
          }
          return Promise.resolve({});
        },
      });
    }

    return middlewares;
  }, [
    arrow,
    arrowRef,
    arrowPadding,
    cornerAbsoluteOffset,
    cornerOffset,
    offsetX,
    offsetY,
    placement,
    isNotAutoPlacement,
  ]);

  const {
    x: floatingDataX,
    y: floatingDataY,
    placement: resolvedPlacement,
    refs,
    middlewareData: { arrow: arrowCoords },
  } = useFloating({
    strategy: floatingPositionStrategy,
    placement: isNotAutoPlacement ? placement : undefined,
    middleware: memoizedMiddlewares,
    whileElementsMounted: autoUpdateFloatingElement,
  });

  const childRef = isDOMTypeElement<React.HTMLAttributes<HTMLElement>, HTMLElement>(children)
    ? children.ref
    : React.isValidElement<HasRootRef<HTMLElement>>(children)
    ? children.props.getRootRef
    : null;
  const patchedRef = useExternRef<HTMLElement>(setTarget, refs.setReference, childRef);
  const child = React.isValidElement(children)
    ? React.cloneElement(children, {
        [isDOMTypeElement(children) ? 'ref' : 'getRootRef']: patchedRef,
      })
    : children;

  return (
    <React.Fragment>
      {child}
      {isShown &&
        target != null &&
        ReactDOM.createPortal(
          <>
            <TooltipBase
              {...restProps}
              getRootRef={refs.setFloating}
              floatingStyle={convertFloatingDataToReactCSSProperties(
                floatingPositionStrategy,
                floatingDataX,
                floatingDataY,
              )}
              withArrow={arrow}
              arrowCoords={arrowCoords}
              arrowPlacement={resolvedPlacement}
              getArrowRef={setArrowRef}
            />
            <div className={styles['Tooltip__overlay']} onClickCapture={onClose} />
          </>,
          tooltipContainer,
        )}
    </React.Fragment>
  );
};
