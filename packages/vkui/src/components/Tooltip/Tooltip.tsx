import * as React from 'react';
import { classNames, hasReactNode } from '@vkontakte/vkjs';
import { useExternRef } from '../../hooks/useExternRef';
import { useGlobalEscKeyDown } from '../../hooks/useGlobalEscKeyDown';
import { usePatchChildren } from '../../hooks/usePatchChildren';
import { animationFadeClassNames } from '../../lib/animation';
import {
  type FloatingComponentProps,
  getArrowCoordsByMiddlewareData,
  useFloatingMiddlewaresBootstrap,
  useFloatingWithInteractions,
  usePlacementChangeCallback,
} from '../../lib/floating';
import { AppRootPortal } from '../AppRoot/AppRootPortal';
import { TooltipBase, type TooltipBaseProps } from '../TooltipBase/TooltipBase';
import { Subhead } from '../Typography/Subhead/Subhead';

type AllowedFloatingComponentProps = Pick<
  FloatingComponentProps,
  | 'arrowHeight'
  | 'arrowPadding'
  | 'hoverDelay'
  | 'placement'
  | 'offsetByMainAxis'
  | 'offsetByCrossAxis'
  | 'defaultShown'
  | 'onShownChange'
  | 'hideWhenReferenceHidden'
  | 'children'
  | 'zIndex'
  | 'usePortal'
  | 'onPlacementChange'
  | 'disableFlipMiddleware'
>;

type AllowedTooltipBaseProps = Omit<TooltipBaseProps, 'arrowProps'>;

export interface TooltipProps extends AllowedFloatingComponentProps, AllowedTooltipBaseProps {
  /**
   * Передача `boolean` позволяет контролировать состояния показа и скрытия вручную. Используйте
   * совместно с `onShawnChange`.
   *
   * > Если нужно разово инициировать показ тултипа при первом рендере, то используйте `defaultShown`.
   */
  shown?: boolean;
  /**
   * Добавляет возможность наводить на тултип.
   */
  enableInteractive?: boolean;
  /**
   * Скрывает стрелку, указывающую на якорный элемент.
   */
  disableArrow?: boolean;
  /**
   * Отключает закрытие по клику.
   */
  disableCloseAfterClick?: boolean;
}

/**
 * @see https://vkcom.github.io/VKUI/#/Tooltip
 */
export const Tooltip = ({
  // UseFloatingMiddlewaresBootstrapOptions
  placement: placementProp = 'bottom',
  arrowPadding = 10,
  arrowHeight = 8,
  offsetByMainAxis = 8,
  offsetByCrossAxis = 0,
  hideWhenReferenceHidden,
  disableFlipMiddleware = false,

  // useFloatingWithInteractions
  defaultShown,
  shown: shownProp,
  onShownChange,
  hoverDelay = 150,

  // инверсированные св-ва для useFloatingWithInteractions
  enableInteractive = false,
  disableArrow = false,
  disableCloseAfterClick = false,

  // Reference
  children,

  // AppRootProps
  usePortal,

  // TooltipBaseProps
  id: idProp,
  getRootRef,
  text,
  header,
  appearance = 'neutral',
  style: styleProp,
  className,
  zIndex = 'var(--vkui--z_index_popout)',
  onPlacementChange,
  ...popperProps
}: TooltipProps): React.ReactNode => {
  const generatedId = React.useId();
  const tooltipId = idProp || generatedId;

  const [arrowRef, setArrowRef] = React.useState<HTMLDivElement | null>(null);
  const { middlewares, strictPlacement } = useFloatingMiddlewaresBootstrap({
    placement: placementProp,

    offsetByMainAxis,
    offsetByCrossAxis,

    hideWhenReferenceHidden,

    arrow: !disableArrow,
    arrowRef,
    arrowPadding,
    arrowHeight,
    disableFlipMiddleware,
  });
  const {
    shown,
    willBeHide,
    placement,
    refs,
    referenceProps,
    floatingProps,
    middlewareData,
    onEscapeKeyDown,
  } = useFloatingWithInteractions({
    defaultShown,
    shown: shownProp,
    onShownChange,
    placement: strictPlacement,
    trigger: ['hover', 'focus'],
    hoverDelay,
    closeAfterClick: !disableCloseAfterClick,
    disableInteractive: !enableInteractive,
    middlewares,
  });
  const tooltipRef = useExternRef<HTMLDivElement>(getRootRef, refs.setFloating);

  usePlacementChangeCallback(placementProp, placement, onPlacementChange);

  let tooltip: React.ReactNode = null;
  if (shown) {
    referenceProps['aria-describedby'] = tooltipId;
    floatingProps.style.zIndex = zIndex;
    if (styleProp) {
      Object.assign(floatingProps.style, styleProp);
    }
    tooltip = (
      <AppRootPortal usePortal={usePortal}>
        <TooltipBase
          {...popperProps}
          {...floatingProps}
          id={tooltipId}
          getRootRef={tooltipRef}
          appearance={appearance}
          arrowProps={
            disableArrow
              ? undefined
              : {
                  placement,
                  coords: getArrowCoordsByMiddlewareData(middlewareData),
                  getRootRef: setArrowRef,
                }
          }
          text={
            <React.Fragment>
              {hasReactNode(header) && <Subhead weight="2">{header}</Subhead>}
              {hasReactNode(text) && <Subhead>{text}</Subhead>}
            </React.Fragment>
          }
          className={classNames(
            willBeHide ? animationFadeClassNames.out : animationFadeClassNames.in,
            className,
          )}
        />
      </AppRootPortal>
    );
  }
  const [, child] = usePatchChildren(children, referenceProps, refs.setReference);

  useGlobalEscKeyDown(shown, onEscapeKeyDown);

  return (
    <React.Fragment>
      {child}
      {tooltip}
    </React.Fragment>
  );
};
