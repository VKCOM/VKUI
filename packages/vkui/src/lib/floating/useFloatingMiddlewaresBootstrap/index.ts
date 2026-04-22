import * as React from 'react';
import { LockFloatingPositionContext } from '../LockFloatingPosition/LockFloatingPosition';
import {
  arrowMiddleware,
  autoPlacementMiddleware,
  flipMiddleware,
  type FlipMiddlewareOptions,
  hideMiddleware,
  offsetMiddleware,
  shiftMiddleware,
  type ShiftMiddlewareOptions,
  sizeMiddleware,
} from '../adapters';
import { checkIsNotAutoPlacement, getAutoPlacementAlign } from '../functions';
import type {
  ArrowOptions,
  Placement,
  PlacementWithAuto,
  UseFloatingMiddleware,
} from '../types/common';

export interface UseFloatingMiddlewaresBootstrapOptions {
  /**
   * По умолчанию компонент выберет наилучшее расположение сам, но приоритетное можно задать с помощью этого свойства.
   */
  placement?: PlacementWithAuto | undefined;
  /**
   * Указанное значение `placement` форсируется, даже если для выпадающего элемента недостаточно места.
   * Не оказывает влияния при `placement` значениях - `'auto' | 'auto-start' | 'auto-end'`
   */
  disableFlipMiddleware?: boolean | undefined;
  /**
   * Позволяет отключить смещение по главной оси,
   * которое не даёт всплывающему элементу выходить за границы видимой области.
   */
  disableShiftMiddleware?: boolean | undefined;
  /**
   * Задаёт резервный вариант размещения по перпендикулярной оси.
   */
  flipMiddlewareFallbackAxisSideDirection?:
    | FlipMiddlewareOptions['fallbackAxisSideDirection']
    | undefined;
  /**
   * Отступ по главной оси.
   */
  offsetByMainAxis?: number | undefined;
  /**
   * Отступ по вспомогательной оси.
   */
  offsetByCrossAxis?: number | undefined;
  /**
   * Отступ для смещения.
   */
  overflowPadding?: ShiftMiddlewareOptions['padding'] | undefined;
  arrowRef?: ArrowOptions['element'] | undefined;
  /**
   * Отображать ли стрелку, указывающую на якорный элемент.
   */
  arrow?: boolean | undefined;
  /**
   * Высота стрелки. Складывается с `mainAxis`, чтобы стрелка не залезала на якорный элемент.
   */
  arrowHeight?: number | undefined;
  /**
   * Безопасная зона вокруг стрелки, чтобы та не выходила за края контента.
   */
  arrowPadding?: number | undefined;
  /**
   * Выставлять ширину равной target элементу.
   */
  sameWidth?: boolean | undefined;
  /**
   * Позволяет задать или переопределить модификаторы библиотеки **Floating UI** (подробнее в документации про [middleware](https://floating-ui.com/docs/middleware)).
   */
  customMiddlewares?: UseFloatingMiddleware[] | undefined;
  /**
   * Принудительно скрывает компонент если целевой элемент вышел за область видимости.
   */
  hideWhenReferenceHidden?: boolean | undefined;
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
  overflowPadding,
}: UseFloatingMiddlewaresBootstrapOptions): {
  middlewares: UseFloatingMiddleware[];
  strictPlacement: Placement | undefined;
} => {
  const lockFloatingPosition = React.useContext(LockFloatingPositionContext);
  return React.useMemo(() => {
    const isAutoPlacement = !checkIsNotAutoPlacement(placement);
    const middlewares: UseFloatingMiddleware[] = [
      offsetMiddleware({
        crossAxis: offsetByCrossAxis,
        mainAxis: arrow && arrowHeight ? offsetByMainAxis + arrowHeight : offsetByMainAxis,
      }),
    ];

    const shift = disableShiftMiddleware
      ? null
      : overflowPadding !== undefined
        ? shiftMiddleware({ padding: overflowPadding })
        : shiftMiddleware();

    // см. https://github.com/floating-ui/floating-ui/blob/%40floating-ui/core%401.7.1/website/pages/docs/flip.mdx#conflict-with-autoplacementjs
    if (isAutoPlacement) {
      middlewares.push(autoPlacementMiddleware({ alignment: getAutoPlacementAlign(placement) }));
      if (shift) {
        middlewares.push(shift);
      }
    } else if (!disableFlipMiddleware && !lockFloatingPosition) {
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
        arrowMiddleware(
          arrowPadding !== undefined
            ? { element: arrowRef ?? null, padding: arrowPadding }
            : { element: arrowRef ?? null },
        ),
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
    overflowPadding,
    lockFloatingPosition,
  ]);
};
