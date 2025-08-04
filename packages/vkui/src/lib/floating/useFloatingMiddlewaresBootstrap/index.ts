import * as React from 'react';
import {
  arrowMiddleware,
  autoPlacementMiddleware,
  flipMiddleware,
  type FlipMiddlewareOptions,
  hideMiddleware,
  offsetMiddleware,
  shiftMiddleware,
  sizeMiddleware,
} from '../adapters';
import { checkIsNotAutoPlacement, getAutoPlacementAlign } from '../functions';
import {
  type ArrowOptions,
  type Placement,
  type PlacementWithAuto,
  type UseFloatingMiddleware,
} from '../types/common';

export interface UseFloatingMiddlewaresBootstrapOptions {
  /**
   * По умолчанию компонент выберет наилучшее расположение сам, но приоритетное можно задать с помощью этого свойства.
   */
  placement?: PlacementWithAuto;
  /**
   * Указанное значение `placement` форсируется, даже если для выпадающего элемента недостаточно места.
   * Не оказывает влияния при `placement` значениях - `'auto' | 'auto-start' | 'auto-end'`
   */
  disableFlipMiddleware?: boolean;
  /**
   * Позволяет отключить смещение по главной оси,
   * которое не даёт всплывающему элементу выходить за границы видимой области.
   */
  disableShiftMiddleware?: boolean;
  /**
   * Задаёт резервный вариант размещения по перпендикулярной оси.
   */
  flipMiddlewareFallbackAxisSideDirection?: FlipMiddlewareOptions['fallbackAxisSideDirection'];
  /**
   * Отступ по главной оси.
   */
  offsetByMainAxis?: number;
  /**
   * Отступ по вспомогательной оси.
   */
  offsetByCrossAxis?: number;
  arrowRef?: ArrowOptions['element'];
  /**
   * Отображать ли стрелку, указывающую на якорный элемент.
   */
  arrow?: boolean;
  /**
   * Высота стрелки. Складывается с `mainAxis`, чтобы стрелка не залезала на якорный элемент.
   */
  arrowHeight?: number;
  /**
   * Безопасная зона вокруг стрелки, чтобы та не выходила за края контента.
   */
  arrowPadding?: number;
  /**
   * Выставлять ширину равной target элементу.
   */
  sameWidth?: boolean;
  /**
   * Массив кастомных модификаторов для Popper (необходимо мемоизировать).
   */
  customMiddlewares?: UseFloatingMiddleware[];
  /**
   * Принудительно скрывает компонент если целевой элемент вышел за область видимости.
   */
  hideWhenReferenceHidden?: boolean;
}

export const useFloatingMiddlewaresBootstrap = ({
  placement = 'bottom-start',
  arrowRef = null,
  arrow,
  arrowHeight,
  arrowPadding,
  sameWidth,
  offsetByMainAxis = 0,
  offsetByCrossAxis = 0,
  customMiddlewares,
  hideWhenReferenceHidden,
  disableFlipMiddleware = false,
  disableShiftMiddleware = false,
  flipMiddlewareFallbackAxisSideDirection = 'end',
}: UseFloatingMiddlewaresBootstrapOptions): {
  middlewares: UseFloatingMiddleware[];
  strictPlacement: Placement | undefined;
} => {
  return React.useMemo(() => {
    const isAutoPlacement = !checkIsNotAutoPlacement(placement);
    const middlewares: UseFloatingMiddleware[] = [
      offsetMiddleware({
        crossAxis: offsetByCrossAxis,
        mainAxis: arrow && arrowHeight ? offsetByMainAxis + arrowHeight : offsetByMainAxis,
      }),
    ];

    const shift = disableShiftMiddleware ? null : shiftMiddleware();

    // см. https://github.com/floating-ui/floating-ui/blob/%40floating-ui/core%401.7.1/website/pages/docs/flip.mdx#conflict-with-autoplacementjs
    if (isAutoPlacement) {
      middlewares.push(autoPlacementMiddleware({ alignment: getAutoPlacementAlign(placement) }));
      if (shift) {
        middlewares.push(shift);
      }
    } else if (!disableFlipMiddleware) {
      const flip = flipMiddleware({
        crossAxis: 'alignment',
        fallbackAxisSideDirection: flipMiddlewareFallbackAxisSideDirection,
      });

      // см. https://github.com/floating-ui/floating-ui/blob/%40floating-ui/core%401.7.1/website/pages/docs/flip.mdx#combining-with-shiftjs
      if (placement.includes('-')) {
        middlewares.push(flip);
        if (shift) {
          middlewares.push(shift);
        }
      } else {
        if (shift) {
          middlewares.push(shift);
        }
        middlewares.push(flip);
      }
    } else if (shift) {
      middlewares.push(shift);
    }

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

    // см. https://github.com/floating-ui/floating-ui/blob/%40floating-ui/core%401.7.1/website/pages/docs/arrow.mdx#order
    if (arrow) {
      middlewares.push(
        arrowMiddleware({
          element: arrowRef,
          padding: arrowPadding,
        }),
      );
    }

    if (hideWhenReferenceHidden) {
      middlewares.push(hideMiddleware());
    }

    return { middlewares, strictPlacement: isAutoPlacement ? undefined : placement };
  }, [
    placement,
    offsetByCrossAxis,
    arrow,
    arrowHeight,
    offsetByMainAxis,
    disableFlipMiddleware,
    disableShiftMiddleware,
    flipMiddlewareFallbackAxisSideDirection,
    sameWidth,
    customMiddlewares,
    hideWhenReferenceHidden,
    arrowRef,
    arrowPadding,
  ]);
};
