import * as React from 'react';
import { useStableCallback } from './useStableCallback';

/**
 * Обертка над `requestAnimationFrame`
 *
 * ```ts
 * const animate = React.useCallback((delta: number) => {
 *   console.log('Delta:', delta);
 * }, []);
 *
 * useAnimationFrame(animate);
 * ```
 *
 * @param callback Функция, которая будет вызываться каждый раз при обновлении анимации.
 * Принимает параметр `delta` - время в миллисекундах, прошедшее с первого кадра анимации.
 */
export function useAnimationFrame(callback: (delta: number) => void, disableAnimation = false) {
  const handleRef = React.useRef<number>(undefined);
  const startTimestampRef = React.useRef<number>(undefined);
  const stableCallback = useStableCallback(callback);

  React.useEffect(() => {
    if (disableAnimation) {
      return;
    }

    const animate = (timestamp: number) => {
      if (startTimestampRef.current === undefined) {
        startTimestampRef.current = timestamp;
      }

      const delta = timestamp - startTimestampRef.current;
      stableCallback(delta);

      handleRef.current = requestAnimationFrame(animate);
    };

    handleRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(handleRef.current!);
  }, [disableAnimation, stableCallback]);
}
