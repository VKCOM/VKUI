import * as React from 'react';
import {
  arrowMiddleware,
  autoPlacementMiddleware,
  flipMiddleware,
  hideMiddleware,
  offsetMiddleware,
  shiftMiddleware,
  sizeMiddleware,
} from '../adapters';
import { checkIsNotAutoPlacement, getAutoPlacementAlign } from '../functions';
import type { ArrowOptions, PlacementWithAuto, UseFloatingMiddleware } from '../types/common';

export interface UseFloatingMiddlewaresBootstrapOptions {
  /**
   * По умолчанию компонент выберет наилучшее расположение сам. Но его можно задать извне с помощью этого свойства.
   */
  placement?: PlacementWithAuto;
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
}: UseFloatingMiddlewaresBootstrapOptions) => {
  return React.useMemo(() => {
    const isNotAutoPlacement = checkIsNotAutoPlacement(placement);
    const middlewares: UseFloatingMiddleware[] = [
      offsetMiddleware({
        crossAxis: offsetByCrossAxis,
        mainAxis: arrow && arrowHeight ? offsetByMainAxis + arrowHeight : offsetByMainAxis,
      }),
    ];

    // см. https://floating-ui.com/docs/flip#conflict-with-autoplacement
    if (isNotAutoPlacement) {
      middlewares.push(
        flipMiddleware({
          fallbackAxisSideDirection: 'start',
        }),
      );
    } else {
      middlewares.push(autoPlacementMiddleware({ alignment: getAutoPlacementAlign(placement) }));
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

    if (hideWhenReferenceHidden) {
      middlewares.push(hideMiddleware());
    }

    return { middlewares, strictPlacement: isNotAutoPlacement ? placement : undefined };
  }, [
    offsetByCrossAxis,
    arrowRef,
    arrow,
    arrowHeight,
    arrowPadding,
    offsetByMainAxis,
    sameWidth,
    customMiddlewares,
    placement,
    hideWhenReferenceHidden,
  ]);
};
