import type * as React from 'react';
import { useCallback, useEffect, useRef } from 'react';
import { useDOM } from '../lib/dom';

const DEFAULT_DELAY = 500;
const DEFAULT_THRESHOLD = 10;
const LAST_TOUCH_IGNORE_MS = 700; // интервал, в котором игнорируем mouse после touch

export interface UseLogpressOptions {
  /** Время в миллисекундах до срабатывания long press (по умолчанию 500) */
  delay?: number;
  /** Блокировать контекстное меню при долгом нажатии (по умолчанию true) */
  shouldPreventDefault?: boolean;
  /** Порог сдвига в пикселях (по умолчанию 10) */
  threshold?: number;
}

type AnyPointerEvent<T extends HTMLElement = HTMLElement> =
  | React.MouseEvent<T>
  | React.TouchEvent<T>
  | React.PointerEvent<T>;

/**
 * Хук для обработки долгого нажатия (long press / long touch).
 *
 * Реализует защиту от двойного срабатывания, когда одновременно приходят
 * разные типы событий (pointer + mouse / touch + mouse).
 *
 * Стратегия:
 * - Если среда поддерживает PointerEvent, используем только pointer-обработчики.
 * - Иначе — fallback: touch + mouse, но игнорируем mouse-событие, если оно
 *   произошло вскоре после touch (эмуляция) — по таймауту LAST_TOUCH_IGNORE_MS.
 * - Также отслеживаем activePointerId для многоуказательного взаимодействия.
 */
export function useLongpress<T extends HTMLElement = HTMLElement>(
  onLongPress: (event: AnyPointerEvent<T>) => void,
  options: UseLogpressOptions = {},
): React.DOMAttributes<T> {
  const {
    delay = DEFAULT_DELAY,
    shouldPreventDefault = true,
    threshold = DEFAULT_THRESHOLD,
  } = options;

  const { window } = useDOM();

  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const startX = useRef<number>(0);
  const startY = useRef<number>(0);
  const movedRef = useRef<boolean>(false);
  const preventerRef = useRef<{ target: HTMLElement; fn: (e: Event) => void } | null>(null);

  // Защита от двойных событий
  const supportsPointer = typeof window !== 'undefined' && 'PointerEvent' in window;
  const activePointerId = useRef<number | null>(null);
  const lastTouchTime = useRef<number | null>(null);

  const clear = useCallback(() => {
    if (timerRef.current !== null) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  useEffect(
    () => () => {
      clear();
      if (preventerRef.current) {
        preventerRef.current.target.removeEventListener('contextmenu', preventerRef.current.fn);
        preventerRef.current = null;
      }
      activePointerId.current = null;
      lastTouchTime.current = null;
    },
    [clear],
  );

  const shouldHandleEvent = useCallback(
    (event: AnyPointerEvent<T>) => {
      const eType = event.type;

      if (supportsPointer) {
        return eType.startsWith('pointer');
      }

      // Fallback: touch + mouse
      if (
        eType === 'touchstart' ||
        eType === 'touchmove' ||
        eType === 'touchend' ||
        eType === 'touchcancel'
      ) {
        lastTouchTime.current = Date.now();
        return true;
      }

      if (eType === 'mousedown') {
        // Если mousedown пришёл вскоре после touch — это эмуляция, игнорируем
        if (lastTouchTime.current && Date.now() - lastTouchTime.current < LAST_TOUCH_IGNORE_MS) {
          return false;
        }
        return true;
      }

      // mousemove / mouseup — позволяем
      return eType.startsWith('mouse');
    },
    [supportsPointer],
  );

  const start = useCallback(
    (event: AnyPointerEvent<T>) => {
      if (!shouldHandleEvent(event)) {
        return;
      }

      const pointerEvent = event as React.PointerEvent<T>;
      // Если pointer event — сохраняем pointerId и игнорируем другие указатели
      if (pointerEvent.pointerId !== undefined) {
        activePointerId.current = pointerEvent.pointerId;
      }

      movedRef.current = false;

      const touchEvent = event as React.TouchEvent<T>;
      const mouseEvent = event as React.MouseEvent<T>;

      if (touchEvent.type.startsWith('touch') && touchEvent.touches && touchEvent.touches[0]) {
        const touch = touchEvent.touches[0];
        startX.current = touch.clientX;
        startY.current = touch.clientY;
      } else if (
        mouseEvent.type.startsWith('mouse') &&
        mouseEvent.clientX !== undefined &&
        mouseEvent.clientY !== undefined
      ) {
        startX.current = mouseEvent.clientX;
        startY.current = mouseEvent.clientY;
      } else if (
        pointerEvent.type.startsWith('pointer') &&
        pointerEvent.clientX !== undefined &&
        pointerEvent.clientY !== undefined
      ) {
        startX.current = pointerEvent.clientX;
        startY.current = pointerEvent.clientY;
      }

      if (shouldPreventDefault) {
        const target = event.target as HTMLElement;
        const fn = (e: Event) => e.preventDefault();
        target.addEventListener('contextmenu', fn);
        preventerRef.current = { target, fn };
      }

      clear();
      timerRef.current = setTimeout(() => {
        if (!movedRef.current) {
          onLongPress(event);
        }
        clear();
      }, delay);
    },
    [onLongPress, delay, shouldPreventDefault, clear, shouldHandleEvent],
  );

  const move = useCallback(
    (event: AnyPointerEvent<T>) => {
      if (!shouldHandleEvent(event)) {
        return;
      }
      const pointerEvent = event as React.PointerEvent<T>;
      // Если pointer event — проверим pointerId
      if (pointerEvent.pointerId !== undefined) {
        if (
          activePointerId.current !== null &&
          activePointerId.current !== pointerEvent.pointerId
        ) {
          return; // событие от другого указателя — игнорируем
        }
      }

      let x = 0;
      let y = 0;

      const touchEvent = event as React.TouchEvent<T>;
      const mouseEvent = event as React.MouseEvent<T>;

      if (touchEvent.type.startsWith('touch') && touchEvent.touches && touchEvent.touches[0]) {
        const touch = touchEvent.touches[0];
        x = touch.clientX;
        y = touch.clientY;
      } else if (
        mouseEvent.type.startsWith('mouse') &&
        mouseEvent.clientX !== undefined &&
        mouseEvent.clientY !== undefined
      ) {
        x = mouseEvent.clientX;
        y = mouseEvent.clientY;
      } else if (
        pointerEvent.type.startsWith('pointer') &&
        pointerEvent.clientX !== undefined &&
        pointerEvent.clientY !== undefined
      ) {
        x = pointerEvent.clientX;
        y = pointerEvent.clientY;
      }

      const dx = Math.abs(x - startX.current || 0);
      const dy = Math.abs(y - startY.current || 0);
      const moved = Math.hypot(dx, dy) > threshold;
      if (moved) {
        movedRef.current = true;
        clear();
      }
    },
    [clear, threshold, shouldHandleEvent],
  );

  const end = useCallback(
    (event?: AnyPointerEvent<T> | Event) => {
      const pointerEvent = event as React.PointerEvent<T>;
      // Если pointer event — только от активного pointerId
      if (pointerEvent && pointerEvent.pointerId !== undefined) {
        if (
          activePointerId.current !== null &&
          activePointerId.current !== pointerEvent.pointerId
        ) {
          return;
        }
      }

      clear();
      if (preventerRef.current) {
        preventerRef.current.target.removeEventListener('contextmenu', preventerRef.current.fn);
        preventerRef.current = null;
      }

      // Сбрасываем активный pointerId, если это окончание взаимодействия
      if (supportsPointer) {
        activePointerId.current = null;
      }
    },
    [clear, supportsPointer],
  );

  return {
    // Pointer first — если среда поддерживает, остальные обработчики будут просто игнорированы внутри
    onPointerDown: start,
    onPointerMove: move,
    onPointerUp: end,
    onPointerCancel: end,

    // Фолбэк для браузеров без PointerEvent
    onTouchStart: start,
    onTouchMove: move,
    onTouchEnd: end,
    onTouchCancel: end,

    onMouseDown: start,
    onMouseMove: move,
    onMouseUp: end,
    onMouseLeave: end,
  };
}
