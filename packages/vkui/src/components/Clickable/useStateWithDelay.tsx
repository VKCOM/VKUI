import * as React from 'react';

type DispatchWithDelay<S> = (value: S, delay?: number) => void;

/**
 * Возвращает значение с состоянием и функции на обновление состояния
 * без и с задержкой.
 *
 * # Пример
 *
 * ```ts
 * const [count, setCount] = useStateWithDelay(initialState);
 *
 * const click = () => {
 *   setCount(count + 1, 500)
 * }
 * ```
 */
export function useStateWithDelay<S>(
  initialState: S | (() => S),
  defaultDelay = 0,
): [S, DispatchWithDelay<React.SetStateAction<S>>] {
  const [value, setValue] = React.useState(initialState);
  const timeout = React.useRef<ReturnType<typeof setTimeout>>();

  const setValueWithDelay = React.useCallback(
    (newValue: React.SetStateAction<S>, delay: number = defaultDelay) => {
      clearTimeout(timeout.current);
      if (delay === 0) {
        setValue(newValue);
        return;
      }

      timeout.current = setTimeout(() => setValue(newValue), delay);
    },
    [defaultDelay],
  );

  return [value, setValueWithDelay];
}
