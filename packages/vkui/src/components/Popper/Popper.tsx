import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
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
  sizeMiddleware,
  useFloating,
  type UseFloatingMiddleware,
} from '../../lib/floating';
import type { HasRef } from '../../types';
import { AppRootPortal } from '../AppRoot/AppRootPortal';
import {
  DEFAULT_ARROW_HEIGHT,
  DEFAULT_ARROW_PADDING,
  DefaultIcon,
} from '../PopperArrow/DefaultIcon';
import { PopperArrow, type PopperArrowProps } from '../PopperArrow/PopperArrow';
import styles from './Popper.module.css';

export interface PopperRenderContentProps {
  className: string;
}

export interface PopperCommonProps
  extends React.HTMLAttributes<HTMLDivElement>,
    HasRef<HTMLDivElement> {
  /**
   * По умолчанию компонент выберет наилучшее расположение сам. Но его можно задать извне с помощью этого свойства
   */
  placement?: PlacementWithAuto;
  /**
   * Отступ по вспомогательной оси
   */
  offsetSkidding?: number;
  /**
   * Отступ по главной оси
   */
  offsetDistance?: number;
  /**
   * Отображать ли стрелку, указывающую на якорный элемент
   */
  arrow?: boolean;
  /**
   * Высота стрелки. Складывается с `offsetDistance`, чтобы стрелка не залезала на якорный элемент.
   */
  arrowHeight?: number;
  /**
   * Безопасная зона вокруг стрелки, чтобы та не выходила за края контента.
   */
  arrowPadding?: number;
  /**
   * Стиль стрелки.
   */
  arrowClassName?: string;
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
  ArrowIcon?: PopperArrowProps['Icon'];
  /**
   * Выставлять ширину равной target элементу
   */
  sameWidth?: boolean;
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
   * Массив кастомных модификаторов для Popper (необходимо мемоизировать)
   */
  customMiddlewares?: UseFloatingMiddleware[];
  /**
   * При передаче содержимого в `children`, он будет обёрнут во внутренний контейнер.
   *
   * Если хочется управлять этим контейнером, то используйте данную функцию.
   *
   * > ⚠️ Параметр `children` будет проигнорирован.
   */
  renderContent?(props: PopperRenderContentProps): React.ReactNode;
  onPlacementChange?(data: { placement?: Placement }): void;
}

export interface PopperProps extends PopperCommonProps {
  targetRef: React.RefObject<HTMLElement>;
}

/**
 * @see https://vkcom.github.io/VKUI/#/Popper
 */
export const Popper = ({
  targetRef,
  children,
  getRef,
  placement: placementProp = 'bottom-start',
  onPlacementChange,
  arrow,
  arrowHeight = DEFAULT_ARROW_HEIGHT,
  arrowPadding = DEFAULT_ARROW_PADDING,
  arrowClassName,
  ArrowIcon = DefaultIcon,
  sameWidth,
  offsetDistance = 8,
  offsetSkidding = 0,
  forcePortal = true,
  portalRoot,
  autoUpdateOnTargetResize = false,
  style: styleProp,
  customMiddlewares,
  renderContent,
  className,
  ...restProps
}: PopperProps) => {
  const [arrowRef, setArrowRef] = React.useState<HTMLDivElement | null>(null);

  const isNotAutoPlacement = checkIsNotAutoPlacement(placementProp);

  const memoizedMiddlewares = React.useMemo(() => {
    const middlewares: UseFloatingMiddleware[] = [
      offsetMiddleware({
        crossAxis: offsetSkidding,
        mainAxis: arrow ? offsetDistance + arrowHeight : offsetDistance,
      }),
    ];

    // см. https://floating-ui.com/docs/flip#conflict-with-autoplacement
    if (isNotAutoPlacement) {
      middlewares.push(flipMiddleware());
    } else {
      middlewares.push(
        autoPlacementMiddleware({ alignment: getAutoPlacementAlign(placementProp) }),
      );
    }

    middlewares.push(shiftMiddleware());

    if (sameWidth) {
      middlewares.push(
        sizeMiddleware({
          apply({ rects, elements }) {
            Object.assign(elements.floating.style, {
              width: `${rects.reference.width}px`,
            });
          },
        }),
      );
    }

    if (customMiddlewares) {
      middlewares.push(...customMiddlewares);
    }

    // см. https://floating-ui.com/docs/arrow#order
    if (arrow) {
      middlewares.push(
        arrowMiddleware({
          element: arrowRef,
          padding: arrowPadding,
        }),
      );
    }

    return middlewares;
  }, [
    offsetSkidding,
    arrowRef,
    arrow,
    arrowHeight,
    arrowPadding,
    offsetDistance,
    isNotAutoPlacement,
    sameWidth,
    customMiddlewares,
    placementProp,
  ]);

  const {
    x: floatingDataX,
    y: floatingDataY,
    strategy: floatingPositionStrategy,
    placement: resolvedPlacement,
    refs,
    middlewareData: { arrow: arrowCoords },
  } = useFloating({
    placement: isNotAutoPlacement ? placementProp : undefined,
    middleware: memoizedMiddlewares,
    whileElementsMounted(...args) {
      return autoUpdateFloatingElement(...args, {
        elementResize: autoUpdateOnTargetResize,
      });
    },
  });

  const handleRootRef = useExternRef<HTMLDivElement>(refs.setFloating, getRef);

  React.useEffect(() => {
    refs.setReference(targetRef.current);
  }, [refs, targetRef]);

  React.useEffect(() => {
    if (resolvedPlacement && onPlacementChange) {
      onPlacementChange({ placement: resolvedPlacement });
    }
  }, [onPlacementChange, resolvedPlacement]);

  const dropdown = (
    <div
      {...restProps}
      className={classNames(styles['Popper'], className)}
      ref={handleRootRef}
      style={{
        ...styleProp,
        ...convertFloatingDataToReactCSSProperties(
          floatingPositionStrategy,
          floatingDataX,
          floatingDataY,
          sameWidth ? null : undefined,
        ),
      }}
    >
      {arrow && (
        <PopperArrow
          coords={arrowCoords}
          placement={resolvedPlacement}
          arrowClassName={arrowClassName}
          getRootRef={setArrowRef}
          Icon={ArrowIcon}
        />
      )}
      {renderContent ? renderContent({ className: '' }) : children}
    </div>
  );

  return (
    <AppRootPortal forcePortal={forcePortal} portalRoot={portalRoot}>
      {dropdown}
    </AppRootPortal>
  );
};
