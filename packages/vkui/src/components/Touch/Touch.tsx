'use client';

import * as React from 'react';
import { useExternRef } from '../../hooks/useExternRef';
import { useStableCallback } from '../../hooks/useStableCallback';
import { getWindow, isHTMLElement, isSVGElement } from '../../lib/dom';
import { coordX, coordY, touchEnabled, type VKUITouchEvent } from '../../lib/touch';
import { useIsomorphicLayoutEffect } from '../../lib/useIsomorphicLayoutEffect';
import type { HasComponent, HasRootRef } from '../../types';

/**
 * Костыль для правильной работы тайпскрипта.
 */
type HTMLorSVGElementWithEvents = {
  /**
   * AddEventListener.
   */
  addEventListener: (<K extends keyof HTMLElementEventMap>(
    type: K,
    listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any,
    options?: boolean | AddEventListenerOptions,
  ) => void) &
    (<K extends keyof SVGElementEventMap>(
      type: K,
      listener: (this: SVGElement, ev: SVGElementEventMap[K]) => any,
      options?: boolean | AddEventListenerOptions,
    ) => void);
  /**
   * RemoveEventListener.
   */
  removeEventListener: (<K extends keyof HTMLElementEventMap>(
    type: K,
    listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any,
    options?: boolean | EventListenerOptions,
  ) => void) &
    (<K extends keyof SVGElementEventMap>(
      type: K,
      listener: (this: SVGElement, ev: SVGElementEventMap[K]) => any,
      options?: boolean | EventListenerOptions,
    ) => void);
};

export interface CustomTouchEvent extends Gesture {
  /**
   * Оригинальное событие.
   */
  originalEvent: VKUITouchEvent;
}

export type HoverHandler = (outputEvent: MouseEvent) => void;

export type CustomTouchEventHandler = (event: CustomTouchEvent) => void;

export interface TouchProps
  extends React.AllHTMLAttributes<HTMLElement>,
    HasRootRef<HTMLElement>,
    HasComponent {
  /**
   * Использовать pointer-events для hover-состояний.
   * Работает на отключенных элементах (disabled inputs).
   */
  usePointerHover?: boolean;
  /**
   * Использовать фазу capture для событий.
   */
  useCapture?: boolean;
  /**
   * Порог расстояния в пикселях для активации свайпа.
   * @default 5
   */
  slideThreshold?: number;
  /**
   * Блокировать click-события после распознавания свайпа.
   */
  noSlideClick?: boolean;
  /**
   * Останавливать всплытие событий.
   */
  stopPropagation?: boolean;
  /**
   * Обработчик входа курсора в область.
   */
  onEnter?: HoverHandler;
  /**
   * Обработчик выхода курсора из области.
   */
  onLeave?: HoverHandler;
  /**
   * Общий обработчик начала взаимодействия.
   */
  onStart?: CustomTouchEventHandler;
  /**
   * Обработчик начала горизонтального перемещения.
   */
  onStartX?: CustomTouchEventHandler;
  /**
   * Обработчик начала вертикального перемещения.
   */
  onStartY?: CustomTouchEventHandler;
  /**
   * Общий обработчик перемещения.
   */
  onMove?: CustomTouchEventHandler;
  /**
   * Обработчик горизонтального перемещения.
   */
  onMoveX?: CustomTouchEventHandler;
  /**
   * Обработчик вертикального перемещения.
   */
  onMoveY?: CustomTouchEventHandler;
  /**
   * Общий обработчик завершения взаимодействия.
   */
  onEnd?: CustomTouchEventHandler;
  /**
   * Обработчик завершения горизонтального свайпа.
   */
  onEndX?: CustomTouchEventHandler;
  /**
   * Обработчик завершения вертикального свайпа.
   */
  onEndY?: CustomTouchEventHandler;
}

export interface Gesture {
  /**
   * Начальная X-координата касания.
   */
  startX: number;

  /**
   * Начальная Y-координата касания.
   */
  startY: number;

  /**
   * Время начала взаимодействия.
   */
  startT: Date;

  /**
   * Длительность взаимодействия в миллисекундах.
   */
  duration: number;

  /**
   * Флаг активного нажатия.
   */
  isPressed: boolean;

  /**
   * Флаг вертикального перемещения.
   */
  isY: boolean;

  /**
   * Флаг горизонтального перемещения.
   */
  isX: boolean;

  /**
   * Флаг горизонтального свайпа.
   */
  isSlideX: boolean;

  /**
   * Флаг вертикального свайпа.
   */
  isSlideY: boolean;

  /**
   * Общий флаг свайпа (вертикального или горизонтального).
   */
  isSlide: boolean;

  /**
   * Текущая X-координата курсора/касания.
   */
  clientX: number;

  /**
   * Текущая Y-координата курсора/касания.
   */
  clientY: number;

  /**
   * Смещение по X относительно начальной точки.
   */
  shiftX: number;

  /**
   * Смещение по Y относительно начальной точки.
   */
  shiftY: number;

  /**
   * Абсолютное смещение по X.
   */
  shiftXAbs: number;

  /**
   * Абсолютное смещение по Y.
   */
  shiftYAbs: number;
}

/**
 * @see https://vkui.io/components/touch
 */
export const Touch = ({
  onStart,
  onStartX,
  onStartY,
  onMove,
  onMoveX,
  onMoveY,
  onEnter,
  onLeave,
  onEnd,
  onEndX,
  onEndY,
  onClickCapture,
  usePointerHover,
  slideThreshold = 5,
  useCapture = false,
  Component = 'div',
  getRootRef,
  noSlideClick = false,
  stopPropagation = false,
  ...restProps
}: TouchProps) => {
  const hostRef = useExternRef(getRootRef);
  const [isTouchEnabled] = React.useState(touchEnabled);
  const gestureRef = React.useRef<Gesture | null>(null);
  const didSlide = React.useRef(false);
  const disposeTargetNativeGestureEvents = React.useRef<VoidFunction | null>(null);

  const cleanupTargetNativeGestureEvents = () => {
    gestureRef.current = null;
    if (disposeTargetNativeGestureEvents.current) {
      disposeTargetNativeGestureEvents.current();
      disposeTargetNativeGestureEvents.current = null;
    }
  };

  React.useEffect(() => cleanupTargetNativeGestureEvents, []);

  const isTouchEvent = (event: MouseEvent | TouchEvent) => {
    return event.type.startsWith('touch');
  };

  /**
   * Note: используем `useStableCallback()`, чтобы не терялась область видимости `onEnd`/`onEndX`/`onEndY`.
   */
  const handleNativePointerUp = useStableCallback((event: MouseEvent | TouchEvent) => {
    const gesture = gestureRef.current;

    /* istanbul ignore if: нужно для Typescript */
    if (!gesture) {
      return;
    }

    if (gesture.isPressed) {
      dispatchUserHandlers(event, gesture, [onEnd, onEndX, onEndY], stopPropagation);
    }

    if (isTouchEvent(event)) {
      // https://github.com/VKCOM/VKUI/issues/4414
      // если тач-устройство и был зафиксирован touchmove,
      // то событие клика не вызывается
      if (gesture.isSlide) {
        didSlide.current = false;
      }
      // Если это был тач-евент, симулируем отмену hover
      if (onLeave) {
        onLeave(event as MouseEvent);
      }
    } else {
      didSlide.current = Boolean(gesture.isSlide);
    }

    cleanupTargetNativeGestureEvents();
  });

  /**
   * Note: используем `useStableCallback()`, чтобы не терялась область видимости `onMove`/`onMoveX`/`onMoveY`.
   */
  const handleNativePointerMove = useStableCallback((event: MouseEvent | TouchEvent) => {
    const gesture = gestureRef.current;

    /* istanbul ignore if: нужно для Typescript */
    if (!gesture) {
      return;
    }

    const clientX = coordX(event);
    const clientY = coordY(event);

    // смещения
    const shiftX = clientX - gesture.startX;
    const shiftY = clientY - gesture.startY;

    // абсолютные значения смещений
    const shiftXAbs = Math.abs(shiftX);
    const shiftYAbs = Math.abs(shiftY);

    // Если определяем мультитач, то прерываем жест
    if ('touches' in event && event.touches.length > 1) {
      return handleNativePointerUp(event);
    }

    // если мы ещё не определились
    if (!gesture.isX && !gesture.isY) {
      const willBeX = shiftXAbs >= slideThreshold && shiftXAbs > shiftYAbs;
      const willBeY = shiftYAbs >= slideThreshold && shiftYAbs > shiftXAbs;
      const willBeSlidedX = willBeX && (!!onMoveX || !!onMove);
      const willBeSlidedY = willBeY && (!!onMoveY || !!onMove);

      gesture.isY = willBeY;
      gesture.isX = willBeX;
      gesture.isSlideX = willBeSlidedX;
      gesture.isSlideY = willBeSlidedY;
      gesture.isSlide = willBeSlidedX || willBeSlidedY;
    }

    if (gesture.isSlide) {
      gesture.clientX = clientX;
      gesture.clientY = clientY;
      gesture.shiftX = shiftX;
      gesture.shiftY = shiftY;
      gesture.shiftXAbs = shiftXAbs;
      gesture.shiftYAbs = shiftYAbs;

      dispatchUserHandlers(event, gesture, [onMove, onMoveX, onMoveY], stopPropagation);
    }
  });

  const handlePointerDown = useStableCallback(
    (event: React.MouseEvent<HTMLElement> | React.TouchEvent<HTMLElement> | TouchEvent) => {
      // Если touchstart сэмулировало mousedown, то заканчиваем обработку
      if (gestureRef.current !== null) {
        return;
      }

      const nativeEvent = 'nativeEvent' in event ? event.nativeEvent : event;

      gestureRef.current = initGesture(coordX(nativeEvent), coordY(nativeEvent));

      const shouldCallDirectionHandlerOnlyIsSlide = false;
      dispatchUserHandlers(
        event,
        gestureRef.current,
        [onStart, onStartX, onStartY],
        stopPropagation,
        shouldCallDirectionHandlerOnlyIsSlide,
      );

      const eventOptions = { capture: useCapture, passive: false };

      // FIXME: заменить touch/mouse-события ниже на pointer-события после того, как бразуеры из
      // .browserslistrc начнут поддерживать его (см. https://developer.mozilla.org/en-US/docs/Web/API/Pointer_events#browser_compatibility).
      if (isTouchEvent(nativeEvent)) {
        if (isHTMLElement(event.target) || isSVGElement(event.target)) {
          // Тач-события не всплывают, поэтому навешиваем события на целевой элемент
          // см. #235, #1968, https://stackoverflow.com/a/45760014
          const target: HTMLorSVGElementWithEvents = event.target;

          target.addEventListener('touchmove', handleNativePointerMove, eventOptions);
          target.addEventListener('touchend', handleNativePointerUp, eventOptions);
          target.addEventListener('touchcancel', handleNativePointerUp, eventOptions);

          disposeTargetNativeGestureEvents.current = () => {
            target.removeEventListener('touchmove', handleNativePointerMove, eventOptions);
            target.removeEventListener('touchend', handleNativePointerUp, eventOptions);
            target.removeEventListener('touchcancel', handleNativePointerUp, eventOptions);
          };
        }
      } else {
        // Используем события на Document, т.к. mouse-события на целевом элементе могут теряться при
        // выходе за границы этого элемента.
        const doc = getWindow(event.currentTarget).document;

        doc.addEventListener('mousemove', handleNativePointerMove, eventOptions);
        doc.addEventListener('mouseup', handleNativePointerUp, eventOptions);
        doc.addEventListener('mouseleave', handleNativePointerUp, eventOptions);

        disposeTargetNativeGestureEvents.current = () => {
          doc.removeEventListener('mousemove', handleNativePointerMove, eventOptions);
          doc.removeEventListener('mouseup', handleNativePointerUp, eventOptions);
          doc.removeEventListener('mouseleave', handleNativePointerUp, eventOptions);
        };
      }
    },
  );

  const handlePointerEnter = onEnter
    ? (event: React.MouseEvent<HTMLElement>) => onEnter(event.nativeEvent)
    : undefined;

  const handlePointerLeave = onLeave
    ? (event: React.MouseEvent<HTMLElement>) => onLeave(event.nativeEvent)
    : undefined;

  /**
   * Отменяет нативное браузерное поведение для вложенных ссылок и изображений.
   */
  const handleDragStart = (event: React.DragEvent<HTMLElement>) => {
    const target = event.target as HTMLElement;
    if (target.tagName === 'A' || target.tagName === 'IMG') {
      event.preventDefault();
    }
  };

  /**
   * Отменяет переход по вложенной ссылке, если был зафиксирован свайп.
   */
  const handleClickCapture: typeof onClickCapture = (event) => {
    if (!didSlide.current) {
      return onClickCapture && onClickCapture(event);
    }

    if (noSlideClick) {
      event.stopPropagation();

      // https://github.com/VKCOM/VKUI/issues/1977
      // https://github.com/VKCOM/VKUI/issues/3892
      event.preventDefault();
    } else {
      onClickCapture && onClickCapture(event);
    }

    didSlide.current = false;
  };

  useIsomorphicLayoutEffect(
    function initializeNativeTouchStartEventWithPassiveFalse() {
      const hostEl = hostRef.current;
      if (!hostEl || !isTouchEnabled) {
        return;
      }

      const options = { capture: useCapture, passive: false };
      hostEl.addEventListener('touchstart', handlePointerDown, options);

      return () => {
        hostEl.removeEventListener('touchstart', handlePointerDown, options);
      };
    },
    [hostRef, isTouchEnabled, useCapture, handlePointerDown],
  );

  return (
    <Component
      {...restProps}
      ref={hostRef}
      onDragStart={handleDragStart}
      onClickCapture={handleClickCapture}
      // onEnter
      onPointerEnter={usePointerHover ? handlePointerEnter : undefined}
      onMouseEnter={!usePointerHover ? handlePointerEnter : undefined}
      // onLeave
      onPointerLeave={usePointerHover ? handlePointerLeave : undefined}
      onMouseLeave={!usePointerHover ? handlePointerLeave : undefined}
      // handlePointerDown(onTouchStart устанавливается отдельно через initializeNativeTouchEventStartWithPassiveFalse)
      onMouseDownCapture={useCapture ? handlePointerDown : undefined}
      onMouseDown={!useCapture ? handlePointerDown : undefined}
    />
  );
};

function initGesture(startX: number, startY: number): Gesture {
  return {
    startX,
    startY,
    startT: new Date(),
    duration: 0,
    isPressed: true,
    isY: false,
    isX: false,
    isSlideX: false,
    isSlideY: false,
    isSlide: false,
    clientX: 0,
    clientY: 0,
    shiftX: 0,
    shiftY: 0,
    shiftXAbs: 0,
    shiftYAbs: 0,
  };
}

type Handlers = [
  CustomTouchEventHandler | undefined,
  CustomTouchEventHandler | undefined,
  CustomTouchEventHandler | undefined,
];

function dispatchUserHandlers(
  event: MouseEvent | TouchEvent | React.MouseEvent | React.TouchEvent,
  gesture: Gesture,
  [handler, handlerX, handlerY]: Handlers,
  stopPropagation?: boolean,
  shouldCallDirectionHandlerOnlyIsSlide = true,
) {
  if (stopPropagation) {
    event.stopPropagation();
  }

  const data = {
    ...gesture,
    originalEvent: event as unknown as VKUITouchEvent,
    duration: Date.now() - gesture.startT.getTime(),
  };

  if (handler) {
    handler(data);
  }

  if (handlerX) {
    if (shouldCallDirectionHandlerOnlyIsSlide) {
      if (gesture.isSlideX) {
        handlerX(data);
      }
    } else {
      handlerX(data);
    }
  }

  if (handlerY) {
    if (shouldCallDirectionHandlerOnlyIsSlide) {
      if (gesture.isSlideY) {
        handlerY(data);
      }
    } else {
      handlerY(data);
    }
  }
}
