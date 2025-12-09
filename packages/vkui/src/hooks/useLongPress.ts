import type * as React from 'react';
import { useCallback, useEffect, useRef } from 'react';

const DEFAULT_DELAY = 500;
const DEFAULT_THRESHOLD = 10;

export interface UseLogpressOptions {
  /** Время в миллисекундах до срабатывания long press (по умолчанию 500) */
  delay?: number;
  /** Блокировать контекстное меню при долгом нажатии (по умолчанию true) */
  shouldPreventDefault?: boolean;
  /** Порог сдвига в пикселях (по умолчанию 10) */
  threshold?: number;
}

/**
 * Хук для обработки долгого нажатия (long press / long touch).
 *
 * Стратегия:
 * - Если среда поддерживает PointerEvent, используем только pointer-обработчики.
 * - Также отслеживаем activePointerId для многоуказательного взаимодействия.
 */
export function useLongPress<T extends HTMLElement = HTMLElement>(
  onLongPress: (event: React.PointerEvent<T>) => void,
  {
    delay = DEFAULT_DELAY,
    shouldPreventDefault = true,
    threshold = DEFAULT_THRESHOLD,
  }: UseLogpressOptions = {},
): React.DOMAttributes<T> {
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const startX = useRef<number>(0);
  const startY = useRef<number>(0);
  const movedRef = useRef<boolean>(false);
  const preventerRef = useRef<{ target: HTMLElement; fn: (e: Event) => void } | null>(null);

  const activePointerId = useRef<number | null>(null);

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
    },
    [clear],
  );

  const start = useCallback(
    (pointerEvent: React.PointerEvent<T>) => {
      activePointerId.current = pointerEvent.pointerId;
      movedRef.current = false;

      startX.current = pointerEvent.clientX;
      startY.current = pointerEvent.clientY;

      if (shouldPreventDefault) {
        const target = pointerEvent.target as HTMLElement;
        const fn = (e: Event) => e.preventDefault();
        target.addEventListener('contextmenu', fn);
        preventerRef.current = { target, fn };
      }

      clear();
      timerRef.current = setTimeout(() => {
        if (!movedRef.current) {
          onLongPress(pointerEvent);
        }
        clear();
      }, delay);
    },
    [onLongPress, delay, shouldPreventDefault, clear],
  );

  const move = useCallback(
    (pointerEvent: React.PointerEvent<T>) => {
      if (activePointerId.current !== pointerEvent.pointerId) {
        return;
      }

      const dx = Math.abs(pointerEvent.clientX - startX.current || 0);
      const dy = Math.abs(pointerEvent.clientY - startY.current || 0);
      const moved = Math.hypot(dx, dy) > threshold;
      if (moved) {
        movedRef.current = true;
        clear();
      }
    },
    [clear, threshold],
  );

  const end = useCallback(
    (pointerEvent: React.PointerEvent<T>) => {
      if (activePointerId.current !== pointerEvent.pointerId) {
        return;
      }

      clear();
      if (preventerRef.current) {
        preventerRef.current.target.removeEventListener('contextmenu', preventerRef.current.fn);
        preventerRef.current = null;
      }

      activePointerId.current = null;
    },
    [clear],
  );

  return {
    onPointerDown: start,
    onPointerMove: move,
    onPointerUp: end,
    onPointerCancel: end,
  };
}
