'use client';

import {
  type CSSProperties,
  type Dispatch,
  type SetStateAction,
  type UIEvent,
  type UIEventHandler,
  useMemo,
  useState,
} from 'react';
import { noop } from '@vkontakte/vkjs';
import { useStableCallback } from '../../hooks/useStableCallback';
import { useIsomorphicLayoutEffect } from '../useIsomorphicLayoutEffect';
import { BottomSheetController, type InitialSnapPoint } from './controllers/BottomSheetController';
import { CSSTransitionController } from './controllers/CSSTransitionController';

export type UseBottomSheetOptions = {
  sheetCSSProperty: string;
  backdropCSSProperty: string;
  initialSnapPoint?: InitialSnapPoint;
  blocked?: boolean;
  onDismiss?: VoidFunction;
};

export type UseBottomSheetHandlers = {
  onTouchStart: UIEventHandler<HTMLElement>;
  onTouchMove: UIEventHandler<HTMLElement>;
  onTouchEnd: UIEventHandler<HTMLElement>;
  onTouchCancel: UIEventHandler<HTMLElement>;
  onMouseDown: UIEventHandler<HTMLElement>;
  onMouseMove: UIEventHandler<HTMLElement>;
  onMouseUp: UIEventHandler<HTMLElement>;
  onMouseLeave: UIEventHandler<HTMLElement>;
};

export type UseBottomSheetResult = [
  {
    initialStyle?: CSSProperties;
    setSheetEl: Dispatch<SetStateAction<HTMLElement | null>>;
    setSheetScrollEl: Dispatch<SetStateAction<HTMLElement | null>>;
    setBackdropEl: Dispatch<SetStateAction<HTMLElement | null>>;
  },
  UseBottomSheetHandlers | undefined,
];

/**
 * # Checklist
 *
 * ## Возможности
 *
 * - [x] есть возможность открывать до определенного размера (см. `initialSnapPoint`)
 * - [x] есть возможность закрыть при сильном смахивании вниз
 * - [x] есть возможность отключить взаимодействие на определённых элементах используя data-атрибут
 * - [x] есть возможность отключить взаимодействие на определённых элементах используя stopPropagation()
 *
 * ## Анимации
 *
 * - [x] оверлей становится светлее в зависимости от процента сворачивания
 *    - [x] при `initialSnapPoint !== 'auto'` процент высчитывается относительно переданного `initialSnapPoint`
 * - [x] при перетаскивании за пределы есть анимация натяжения
 *   > note: в `ModalPage` этого эффекта нет при высоте 100% из-за `max-block-size: 100%`
 *
 * ## Пограничные кейсы
 *
 * - [x] ⚠️ не блокирует взаимодействие с _горизонтальным_ скроллом
 * - [x] ⚠️ не блокирует взаимодействие с _вертикальным_ скроллом
 * - [x] ⚠️ не блокирует взаимодействие с полями ввода
 * - [x] ⚠️ не блокирует взаимодействие с элементами вне корневого элемента
 *
 * @private
 */
export const useBottomSheet = (
  enabled: boolean,
  {
    blocked,
    initialSnapPoint,
    sheetCSSProperty,
    backdropCSSProperty,
    onDismiss: onDismissProp,
  }: UseBottomSheetOptions,
): UseBottomSheetResult => {
  const [sheetScrollEl, setSheetScrollEl] = useState<HTMLElement | null>(null);
  const [sheetEl, setSheetEl] = useState<HTMLElement | null>(null);
  const [backdropEl, setBackdropEl] = useState<HTMLElement | null>(null);

  const initialStyle = useMemo<CSSProperties | undefined>(() => {
    if (!enabled) {
      return;
    }

    const { unit, currentSnapPoint } =
      BottomSheetController.parseInitialSnapPoint(initialSnapPoint);

    return unit === '%' ? { [sheetCSSProperty]: `${currentSnapPoint}${unit}` } : undefined;
  }, [enabled, initialSnapPoint, sheetCSSProperty]);

  const onDismiss = useStableCallback(onDismissProp || noop);
  const bsController = useMemo<BottomSheetController | null>(() => {
    if (!enabled || sheetEl === null) {
      return null;
    }

    return new BottomSheetController(sheetEl, {
      sheetScrollEl: sheetScrollEl || null,
      sheetTransitionController: new CSSTransitionController<string>(sheetEl, sheetCSSProperty),
      backdropTransitionController: backdropEl
        ? new CSSTransitionController(backdropEl, backdropCSSProperty)
        : null,
      onDismiss,
    });
  }, [
    enabled,
    sheetEl,
    sheetCSSProperty,
    sheetScrollEl,
    backdropEl,
    backdropCSSProperty,
    onDismiss,
  ]);

  const onPanStart = function onPanStart(event: UIEvent<HTMLElement>) {
    if (!blocked) {
      bsController!.panStart(event.nativeEvent);
    }
  };

  const onPanMove = function onPanMove(event: UIEvent<HTMLElement>) {
    bsController!.panMove(event.nativeEvent);
  };

  const onPanEnd = function onPanEnd() {
    bsController!.panEnd();
  };

  useIsomorphicLayoutEffect(
    function init() {
      if (bsController) {
        bsController.init(initialSnapPoint);
      }
    },
    [initialSnapPoint, bsController],
  );

  useIsomorphicLayoutEffect(
    () =>
      function unmount() {
        if (bsController) {
          bsController.destroy();
        }
      },
    [bsController],
  );

  return [
    {
      initialStyle,
      setSheetEl,
      setSheetScrollEl,
      setBackdropEl,
    },
    bsController !== null
      ? {
          onTouchStart: onPanStart,
          onTouchMove: onPanMove,
          onTouchEnd: onPanEnd,
          onTouchCancel: onPanEnd,
          onMouseDown: onPanStart,
          onMouseMove: onPanMove,
          onMouseUp: onPanEnd,
          onMouseLeave: onPanEnd,
        }
      : undefined,
  ];
};
