'use client';

import * as React from 'react';
import { hasReactNode } from '@vkontakte/vkjs';
import { mergeStyle } from '../../helpers/mergeStyle';
import { useExternRef } from '../../hooks/useExternRef';
import { type UseFocusTrapProps } from '../../hooks/useFocusTrap';
import { usePatchChildren } from '../../hooks/usePatchChildren';
import { createPortal } from '../../lib/createPortal';
import {
  autoUpdateFloatingElement,
  convertFloatingDataToReactCSSProperties,
  type FloatingComponentProps,
  useFloating,
  useFloatingMiddlewaresBootstrap,
  usePlacementChangeCallback,
} from '../../lib/floating';
import { warnOnce } from '../../lib/warnOnce';
import { DEFAULT_ARROW_HEIGHT, DEFAULT_ARROW_PADDING } from '../FloatingArrow/DefaultIcon';
import type { FloatingArrowProps } from '../FloatingArrow/FloatingArrow';
import { FocusTrap } from '../FocusTrap/FocusTrap';
import { useNavTransition } from '../NavTransitionContext/NavTransitionContext';
import { TOOLTIP_MAX_WIDTH, TooltipBase, type TooltipBaseProps } from '../TooltipBase/TooltipBase';
import { onboardingTooltipContainerAttr } from './OnboardingTooltipContainer';
import { useOnboardingTooltipContext } from './OnboardingTooltipContext';
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
  | 'onPlacementChange'
  | 'disableFlipMiddleware'
  | 'disableFocusTrap'
>;

type AllowedTooltipBaseProps = Omit<
  TooltipBaseProps,
  'arrowProps' | 'closeIconLabel' | 'onCloseIconClick'
>;

type AllowedFloatingArrowProps = {
  /**
   * Сдвиг стрелки относительно текущих координат.
   */
  arrowOffset?: FloatingArrowProps['offset'];
  /**
   * Включает абсолютное смещение по `arrowOffset`.
   */
  isStaticArrowOffset?: FloatingArrowProps['isStaticOffset'];
};

export interface OnboardingTooltipProps
  extends AllowedFloatingComponentProps,
    AllowedTooltipBaseProps,
    AllowedFloatingArrowProps,
    Pick<UseFocusTrapProps, 'restoreFocus'> {
  /**
   * Скрывает стрелку, указывающую на якорный элемент.
   */
  disableArrow?: boolean;
  /**
   * Callback, который вызывается при клике по любому месту в пределах экрана.
   */
  onClose?: (this: void) => void;
  /**
   * [a11y] Метка для подложки-кнопки, для описания того, что произойдёт при клике.
   */
  overlayLabel?: string;
}

/**
 * @see https://vkcom.github.io/VKUI/#/Tooltip
 */
export const OnboardingTooltip = ({
  'id': idProp,
  children,
  'shown': shownProp = true,
  arrowPadding = DEFAULT_ARROW_PADDING,
  arrowHeight = DEFAULT_ARROW_HEIGHT,
  offsetByMainAxis = 0,
  offsetByCrossAxis = 0,
  arrowOffset = 0,
  isStaticArrowOffset = false,
  onClose,
  'placement': placementProp = 'bottom-start',
  maxWidth = TOOLTIP_MAX_WIDTH,
  'style': styleProp,
  getRootRef,
  disableArrow = false,
  onPlacementChange,
  disableFlipMiddleware = false,
  overlayLabel = 'Закрыть',
  title,
  'aria-label': ariaLabel,
  'aria-labelledby': ariaLabelledBy,
  restoreFocus,
  disableFocusTrap,
  ...restProps
}: OnboardingTooltipProps): React.ReactNode => {
  const generatedId = React.useId();
  const tooltipId = idProp || generatedId;
  const { entering } = useNavTransition();
  const { containerRef: tooltipContainerRef } = useOnboardingTooltipContext();

  const [arrowRef, setArrowRef] = React.useState<HTMLDivElement | null>(null);
  const [tooltipContainer, setTooltipContainer] = React.useState<HTMLElement | null>(null);
  const [positionStrategy, setPositionStrategy] = React.useState<'fixed' | 'absolute'>('absolute');
  const shown = shownProp && tooltipContainer && !entering;

  const { middlewares, strictPlacement } = useFloatingMiddlewaresBootstrap({
    placement: placementProp,
    offsetByMainAxis,
    offsetByCrossAxis,
    arrowRef,
    arrow: !disableArrow,
    arrowHeight,
    arrowPadding,
    disableFlipMiddleware,
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

  usePlacementChangeCallback(placementProp, resolvedPlacement, onPlacementChange);

  const titleId = React.useId();
  if (process.env.NODE_ENV === 'development' && !title && !ariaLabel && !ariaLabelledBy) {
    warn(
      'Если "title" не используется, то необходимо задать либо "aria-label", либо "aria-labelledby" (см. правило axe aria-dialog-name)',
    );
  }

  let tooltip: React.ReactPortal | null = null;
  if (shown) {
    const floatingStyle = convertFloatingDataToReactCSSProperties({
      strategy: positionStrategy,
      x: floatingDataX,
      y: floatingDataY,
    });

    tooltip = createPortal(
      <FocusTrap
        role="dialog"
        aria-modal="true"
        aria-label={ariaLabel}
        aria-labelledby={title ? titleId : ariaLabel ? undefined : ariaLabelledBy}
        onClose={onClose}
        disabled={disableFocusTrap}
        restoreFocus={restoreFocus}
      >
        <button aria-label={overlayLabel} className={styles.overlay} onClickCapture={onClose} />
        <TooltipBase
          {...restProps}
          id={tooltipId}
          title={title}
          titleId={title ? titleId : undefined}
          getRootRef={tooltipRef}
          style={mergeStyle(floatingStyle, styleProp)}
          maxWidth={maxWidth}
          arrowProps={
            disableArrow
              ? undefined
              : {
                  offset: arrowOffset,
                  isStaticOffset: isStaticArrowOffset,
                  coords: arrowCoords,
                  placement: resolvedPlacement,
                  getRootRef: setArrowRef,
                }
          }
        />
      </FocusTrap>,
      tooltipContainer,
    );
  }

  React.useEffect(
    function initialize() {
      const referenceEl = childRef.current;
      if (!referenceEl) {
        return;
      }
      const tooltipContainer =
        tooltipContainerRef.current ||
        // eslint-disable-next-line no-restricted-properties
        referenceEl.closest<HTMLDivElement>(`[${onboardingTooltipContainerAttr}]`);
      if (tooltipContainer) {
        setTooltipContainer(tooltipContainer);
        setPositionStrategy(referenceEl.style.position === 'fixed' ? 'fixed' : 'absolute');
        refs.setReference(referenceEl);
      }
    },
    [childRef, refs, tooltipContainerRef],
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
