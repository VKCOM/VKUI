import * as React from 'react';

/**
 * Обертка над `requestAnimationFrame`. В функцию `` пере
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

  const frameRequestCallback = React.useCallback(
    (timestamp: number) => {
      if (disableAnimation) {
        return;
      }

      if (startTimestampRef.current === undefined) {
        startTimestampRef.current = timestamp;
      }

      const delta = timestamp - startTimestampRef.current;
      callback(delta);

      handleRef.current = requestAnimationFrame(frameRequestCallback);
    },
    [callback, disableAnimation],
  );

  React.useEffect(() => {
    handleRef.current = requestAnimationFrame(frameRequestCallback);
    return () => cancelAnimationFrame(handleRef.current!);
  }, [frameRequestCallback]);
}
