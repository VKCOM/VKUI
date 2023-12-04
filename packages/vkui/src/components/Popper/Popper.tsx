import * as React from 'react';
import { useExternRef } from '../../hooks/useExternRef';
import {
  autoUpdateFloatingElement,
  convertFloatingDataToReactCSSProperties,
  type Placement,
  useFloating,
  useFloatingMiddlewaresBootstrap,
  type UseFloatingMiddlewaresBootstrapOptions,
  type VirtualElement,
} from '../../lib/floating';
import { useIsomorphicLayoutEffect } from '../../lib/useIsomorphicLayoutEffect';
import type { HTMLAttributesWithRootRef } from '../../types';
import { AppRootPortal } from '../AppRoot/AppRootPortal';
import {
  DEFAULT_ARROW_HEIGHT,
  DEFAULT_ARROW_PADDING,
  DefaultIcon,
} from '../PopperArrow/DefaultIcon';
import {
  PopperArrow,
  type PopperArrowProps as PopperArrowPropsPrivate,
} from '../PopperArrow/PopperArrow';
import { RootComponent } from '../RootComponent/RootComponent';
import styles from './Popper.module.css';

export interface PopperRenderContentProps {
  className: string;
}

export type PopperArrowProps = Omit<
  PopperArrowPropsPrivate,
  'getRootRef' | 'coords' | 'placement' | 'Icon'
>;

export interface PopperCommonProps
  extends HTMLAttributesWithRootRef<HTMLDivElement>,
    Pick<
      UseFloatingMiddlewaresBootstrapOptions,
      | 'placement'
      | 'sameWidth'
      | 'hideWhenReferenceHidden'
      | 'offsetByMainAxis'
      | 'offsetByCrossAxis'
      | 'arrow'
      | 'arrowRef'
      | 'arrowPadding'
      | 'arrowHeight'
      | 'customMiddlewares'
    > {
  /**
   * Позволяет набросить на стрелку пользовательские атрибуты.
   */
  arrowProps?: PopperArrowProps;
  /**
   * Пользовательская SVG иконка.
   *
   * Требования:
   *
   * 1. Иконка по умолчанию должна быть направлена вверх (a.k.a `IconUp`).
   * 2. Чтобы избежать проблемы с пространством между стрелкой и контентом на некоторых экранах,
   *    растяните кривую по высоте на `1px` и увеличьте на этот размер `height` и `viewBox` SVG.
   *    (см. https://github.com/VKCOM/VKUI/pull/4496).
   * 3. Передайте высоту иконки в параметр `arrowHeight`. В значении высоты можно исключить хак с `1px` из п.2.
   * 4. Убедитесь, что компонент принимает все валидные для SVG параметры.
   * 5. Убедитесь, что SVG и её элементы наследует цвет через `fill="currentColor"`.
   */
  ArrowIcon?: PopperArrowPropsPrivate['Icon'];
  /**
   * Принудительно использовать портал.
   */
  forcePortal?: boolean;
  /**
   * Кастомный root-элемент портала.
   * При передаче вместе с `forcePorta=true` игнорируется `portalRoot` и `disablePortal`
   * из контекста `AppRoot`.
   */
  portalRoot?: HTMLElement | React.RefObject<HTMLElement> | null;
  /**
   * Подписывается на изменение геометрии `targetRef`, чтобы пересчитать свою позицию.
   */
  autoUpdateOnTargetResize?: boolean;
  /**
   * В зависимости от области видимости, позиция может смениться на более оптимальную,
   * чтобы Popper вместился в эту область видимости.
   */
  onPlacementChange?(placement: Placement): void;
}

export interface PopperProps extends PopperCommonProps {
  targetRef: React.RefObject<HTMLElement> | VirtualElement;
}

/**
 * @see https://vkcom.github.io/VKUI/#/Popper
 */
export const Popper = ({
  // UseFloatingMiddlewaresBootstrapProps
  placement: placementProp = 'bottom-start',
  sameWidth,
  hideWhenReferenceHidden,
  offsetByMainAxis = 8,
  offsetByCrossAxis = 0,
  arrow,
  arrowHeight = DEFAULT_ARROW_HEIGHT,
  arrowPadding = DEFAULT_ARROW_PADDING,
  customMiddlewares,

  // UseFloatingProps
  autoUpdateOnTargetResize = false,

  // ArrowProps
  arrowProps,
  ArrowIcon = DefaultIcon,

  // rest
  targetRef,
  getRootRef,
  children,
  portalRoot,
  forcePortal = true,
  style: styleProp,
  onPlacementChange,
  ...restProps
}: PopperProps) => {
  const [arrowRef, setArrowRef] = React.useState<HTMLDivElement | null>(null);

  const { strictPlacement, middlewares } = useFloatingMiddlewaresBootstrap({
    placement: placementProp,
    sameWidth,
    arrow,
    arrowRef,
    arrowHeight,
    arrowPadding,
    offsetByMainAxis,
    offsetByCrossAxis,
    hideWhenReferenceHidden,
    customMiddlewares,
  });

  const {
    x: floatingDataX,
    y: floatingDataY,
    strategy: floatingPositionStrategy,
    placement: resolvedPlacement,
    refs,
    middlewareData,
  } = useFloating({
    placement: strictPlacement,
    middleware: middlewares,
    whileElementsMounted(...args) {
      /* istanbul ignore next: не знаю как проверить */
      return autoUpdateFloatingElement(...args, {
        elementResize: autoUpdateOnTargetResize,
      });
    },
  });
  const { arrow: arrowCoords } = middlewareData;

  const handleRootRef = useExternRef<HTMLDivElement>(refs.setFloating, getRootRef);

  useIsomorphicLayoutEffect(() => {
    refs.setReference('current' in targetRef ? targetRef.current : targetRef);
  }, [refs.setReference, targetRef]);

  useIsomorphicLayoutEffect(() => {
    if (placementProp !== resolvedPlacement && onPlacementChange) {
      onPlacementChange(resolvedPlacement);
    }
  }, [onPlacementChange, resolvedPlacement, placementProp]);

  const dropdown = (
    <RootComponent
      {...restProps}
      baseClassName={styles['Popper']}
      getRootRef={handleRootRef}
      style={{
        ...styleProp,
        ...convertFloatingDataToReactCSSProperties(
          floatingPositionStrategy,
          floatingDataX,
          floatingDataY,
          sameWidth ? null : undefined,
          middlewareData,
        ),
      }}
    >
      {arrow && (
        <PopperArrow
          {...arrowProps}
          coords={arrowCoords}
          placement={resolvedPlacement}
          getRootRef={setArrowRef}
          Icon={ArrowIcon}
        />
      )}
      {children}
    </RootComponent>
  );

  return (
    <AppRootPortal forcePortal={forcePortal} portalRoot={portalRoot}>
      {dropdown}
    </AppRootPortal>
  );
};
