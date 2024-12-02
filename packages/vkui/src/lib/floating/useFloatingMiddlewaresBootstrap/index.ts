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
import {
  type ArrowOptions,
  type FlipOptions,
  type FloatingPadding,
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
  /**
   * Настройки изменения размещение плавающего элемента, чтобы держать его в поле зрения.
   * Более подробно можно почитать в документации @see https://floating-ui.com/docs/flip
   */
  flipOptions?: FlipOptions;
  /**
   * Безопасная зона вокруг плавающего элемента, чтобы тот не выходил за края контента.
   */
  overflowPadding?: number | FloatingPadding;
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
  overflowPadding = 0,
  flipOptions = {
    fallbackAxisSideDirection: 'start',
  },
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

    // см. https://floating-ui.com/docs/flip#conflict-with-autoplacement
    if (isAutoPlacement) {
      middlewares.push(autoPlacementMiddleware({ alignment: getAutoPlacementAlign(placement) }));
    } else if (!disableFlipMiddleware) {
      middlewares.push(flipMiddleware(flipOptions));
    }

    middlewares.push(
      shiftMiddleware({
        padding: overflowPadding,
      }),
    );

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

    return { middlewares, strictPlacement: isAutoPlacement ? undefined : placement };
  }, [
    placement,
    offsetByCrossAxis,
    arrow,
    arrowHeight,
    offsetByMainAxis,
    disableFlipMiddleware,
    overflowPadding,
    sameWidth,
    customMiddlewares,
    hideWhenReferenceHidden,
    flipOptions,
    arrowRef,
    arrowPadding,
  ]);
};
