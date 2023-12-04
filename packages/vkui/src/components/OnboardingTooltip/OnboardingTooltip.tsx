import * as React from 'react';
import { hasReactNode } from '@vkontakte/vkjs';
import { useExternRef } from '../../hooks/useExternRef';
import { usePatchChildren } from '../../hooks/usePatchChildren';
import { createPortal } from '../../lib/createPortal';
import {
  autoUpdateFloatingElement,
  convertFloatingDataToReactCSSProperties,
  type FloatingComponentProps,
  type PlacementWithAuto,
  useFloating,
  type UseFloatingMiddleware,
  useFloatingMiddlewaresBootstrap,
} from '../../lib/floating';
import { useIsomorphicLayoutEffect } from '../../lib/useIsomorphicLayoutEffect';
import { warnOnce } from '../../lib/warnOnce';
import { useNavTransition } from '../NavTransitionContext/NavTransitionContext';
import { DEFAULT_ARROW_HEIGHT, DEFAULT_ARROW_PADDING } from '../PopperArrow/DefaultIcon';
import { TOOLTIP_MAX_WIDTH, TooltipBase, type TooltipBaseProps } from '../TooltipBase/TooltipBase';
import { onboardingTooltipContainerAttr } from './OnboardingTooltipContainer';
import styles from './OnboardingTooltip.module.css';

const warn = warnOnce('OnboardingTooltip');

type AllowedFloatingComponentProps = Pick<
  FloatingComponentProps,
  | 'arrowHeight'
  | 'arrowPadding'
  | 'arrowRef'
  | 'placement'
  | 'offsetByMainAxis'
  | 'offsetByCrossAxis'
  | 'shown'
  | 'children'
>;

type AllowedTooltipBaseProps = Omit<TooltipBaseProps, 'arrowProps'>;

export interface OnboardingTooltipProps
  extends AllowedFloatingComponentProps,
    AllowedTooltipBaseProps {
  /**
   * Сдвиг стрелочки относительно центра дочернего элемента.
   */
  arrowCornerOffset?: number;
  /**
   * Сдвиг стрелочки относительно ширины тултипа
   */
  arrowCornerAbsoluteOffset?: number;
  /**
   * Callback, который вызывается при клике по любому месту в пределах экрана.
   */
  onClose?(this: void): void;
}

/**
 * @see https://vkcom.github.io/VKUI/#/Tooltip
 */
export const OnboardingTooltip = ({
  id: idProp,
  children,
  shown: shownProp = true,
  arrowPadding = DEFAULT_ARROW_PADDING,
  arrowHeight = DEFAULT_ARROW_HEIGHT,
  offsetByMainAxis = 0,
  offsetByCrossAxis = 0,
  arrowCornerOffset = 0,
  arrowCornerAbsoluteOffset,
  onClose,
  placement: placementProp = 'bottom-start',
  maxWidth = TOOLTIP_MAX_WIDTH,
  style: styleProp,
  getRootRef,
  ...restProps
}: OnboardingTooltipProps) => {
  const generatedId = React.useId();
  const tooltipId = idProp || generatedId;
  const { entering } = useNavTransition();

  const [arrowRef, setArrowRef] = React.useState<HTMLDivElement | null>(null);
  const [tooltipContainer, setTooltipContainer] = React.useState<HTMLElement | null>(null);
  const [positionStrategy, setPositionStrategy] = React.useState<'fixed' | 'absolute'>('absolute');
  const shown = shownProp && tooltipContainer && !entering;

  const customMiddlewares = React.useMemo(
    () => [getArrowOffsetMiddleware(arrowCornerOffset, arrowCornerAbsoluteOffset)],
    [arrowCornerAbsoluteOffset, arrowCornerOffset],
  );
  const { middlewares, strictPlacement } = useFloatingMiddlewaresBootstrap({
    placement: placementProp,
    offsetByMainAxis,
    offsetByCrossAxis,
    arrowRef,
    arrow: true,
    arrowHeight,
    arrowPadding,
    customMiddlewares,
  });
  const {
    x: floatingDataX,
    y: floatingDataY,
    refs,
    placement: resolvedPlacement,
    middlewareData: { arrow: arrowCoords },
  } = useFloating({
    strategy: positionStrategy,
    placement: strictPlacement,
    middleware: middlewares,
    whileElementsMounted: autoUpdateFloatingElement,
  });
  const tooltipRef = useExternRef<HTMLDivElement>(getRootRef, refs.setFloating);
  const [childRef, child] = usePatchChildren(children, {
    'aria-describedby': shown ? tooltipId : undefined,
  });

  let tooltip: React.ReactPortal | null = null;
  if (shown) {
    const floatingStyle = convertFloatingDataToReactCSSProperties(
      positionStrategy,
      floatingDataX,
      floatingDataY,
    );

    if (styleProp) {
      Object.assign(floatingStyle, styleProp);
    }

    tooltip = createPortal(
      <>
        <TooltipBase
          {...restProps}
          id={tooltipId}
          getRootRef={tooltipRef}
          style={floatingStyle}
          maxWidth={maxWidth}
          arrowProps={{
            coords: arrowCoords,
            placement: resolvedPlacement,
            getRootRef: setArrowRef,
          }}
        />
        <div className={styles['OnboardingTooltip__overlay']} onClickCapture={onClose} />
      </>,
      tooltipContainer,
    );
  }

  useIsomorphicLayoutEffect(
    function initialize() {
      const referenceEl = childRef.current;
      if (referenceEl) {
        setTooltipContainer(
          referenceEl.closest<HTMLDivElement>(`[${onboardingTooltipContainerAttr}]`), // eslint-disable-line no-restricted-properties
        );
        setPositionStrategy(referenceEl.style.position === 'fixed' ? 'fixed' : 'absolute');
        refs.setReference(referenceEl);
      }
    },
    [childRef],
  );

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

    if (refs.reference.current && !tooltipContainer) {
      throw new Error('Use TooltipContainer for Tooltip outside Panel (see docs)');
    }
  }

  return (
    <React.Fragment>
      {child}
      {tooltip}
    </React.Fragment>
  );
};

function getArrowOffsetMiddleware(
  cornerOffset: number,
  cornerAbsoluteOffset?: number,
): UseFloatingMiddleware {
  return {
    name: 'arrowOffset',
    fn({ placement, middlewareData }) {
      if (!middlewareData.arrow) {
        return Promise.resolve({});
      }

      const isVerticalPlacement = (placement: PlacementWithAuto) =>
        placement.startsWith('top') || placement.startsWith('bottom');

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
  };
}
