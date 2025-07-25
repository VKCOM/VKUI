'use client';

import * as React from 'react';
import { type Ref, useCallback } from 'react';
import { classNames } from '@vkontakte/vkjs';
import {
  type FloatingComponentProps,
  useFloatingElement,
  type UseFloatingElementProps,
} from '../../hooks/useFloatingElement';
import { animationFadeClassNames } from '../../lib/animation';
import { getArrowCoordsByMiddlewareData } from '../../lib/floating';
import { type ReferenceProps } from '../../lib/floating/useFloatingWithInteractions/types';
import { AppRootPortal } from '../AppRoot/AppRootPortal';
import { TooltipBase } from '../TooltipBase/TooltipBase';
import { type TooltipProps } from './Tooltip';

export type UseTooltipProps = Omit<TooltipProps, 'children'> & {
  [key: `data-${string}`]: string | number | boolean;
};

export type UseTooltipResult<ElementType extends HTMLElement = HTMLElement> = {
  /**
   * Реф на якорный элемент.
   */
  anchorRef: Ref<ElementType>;
  /**
   * Свойства для якорного элемента, содержит необходимые обработчики.
   */
  anchorProps: ReferenceProps<ElementType>;
  /**
   * Отрендеренный компонент тултипа.
   */
  tooltip: React.ReactNode | null;
};

export const useTooltip = ({
  // UseFloatingMiddlewaresBootstrapOptions
  placement: placementProp = 'bottom',
  arrowPadding = 10,
  arrowHeight = 8,
  offsetByMainAxis = 8,
  offsetByCrossAxis = 0,
  hideWhenReferenceHidden,
  disableFlipMiddleware = false,
  disableShiftMiddleware = false,
  disableTriggerOnFocus = false,
  onReferenceHiddenChange,

  // useFloatingWithInteractions
  defaultShown,
  shown: shownProp,
  onShownChange,
  hoverDelay = 150,
  strategy,

  // инверсированные св-ва для useFloatingWithInteractions
  enableInteractive = false,
  disableArrow = false,
  disableCloseAfterClick = false,

  // AppRootProps
  usePortal,

  // TooltipBaseProps
  id: idProp,
  getRootRef,
  appearance = 'neutral',
  style: styleProp,
  className,
  zIndex = 'var(--vkui--z_index_popout)',
  closable,
  onPlacementChange,
  ...popperProps
}: UseTooltipProps): UseTooltipResult => {
  const generatedId = React.useId();
  const tooltipId = idProp || generatedId;

  const renderFloatingComponent = useCallback(
    ({
      shown,
      floatingProps,
      floatingRef,
      placement: resultPlacement,
      middlewareData,
      setArrowRef,
      willBeHide,
      onClose,
    }: FloatingComponentProps<HTMLDivElement>) => {
      if (!shown) {
        return null;
      }
      return (
        <AppRootPortal usePortal={usePortal}>
          <TooltipBase
            {...popperProps}
            {...floatingProps}
            style={{
              ...floatingProps.style,
              zIndex,
              ...styleProp,
            }}
            id={tooltipId}
            getRootRef={floatingRef}
            appearance={appearance}
            arrowProps={
              disableArrow
                ? undefined
                : {
                    placement: resultPlacement,
                    coords: getArrowCoordsByMiddlewareData(middlewareData),
                    getRootRef: setArrowRef,
                  }
            }
            className={classNames(
              willBeHide ? animationFadeClassNames.out : animationFadeClassNames.in,
              className,
            )}
            onCloseIconClick={closable ? onClose : undefined}
          />
        </AppRootPortal>
      );
    },
    [
      appearance,
      className,
      closable,
      disableArrow,
      popperProps,
      styleProp,
      tooltipId,
      usePortal,
      zIndex,
    ],
  );

  const remapReferenceProps: Exclude<UseFloatingElementProps['remapReferenceProps'], undefined> =
    useCallback(
      ({ shown, ...referenceProps }) => ({
        ...referenceProps,
        ...(shown && { 'aria-describedby': tooltipId }),
      }),
      [tooltipId],
    );

  const { component, anchorRef, anchorProps } = useFloatingElement({
    placement: placementProp,
    arrow: !disableArrow,
    arrowHeight,
    arrowPadding,
    offsetByMainAxis,
    offsetByCrossAxis,
    hideWhenReferenceHidden,
    disableFlipMiddleware,
    disableShiftMiddleware,

    defaultShown,
    shown: shownProp,
    onShownChange,
    trigger: disableTriggerOnFocus ? 'hover' : ['hover', 'focus'],
    onReferenceHiddenChange,
    hoverDelay,
    closeAfterClick: !disableCloseAfterClick,
    disableInteractive: !enableInteractive,
    strategy,

    onPlacementChange,

    renderFloatingComponent,
    externalFloatingElementRef: getRootRef,
    remapReferenceProps,
  });

  return {
    anchorRef,
    anchorProps,
    tooltip: component,
  };
};
