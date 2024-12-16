import * as React from 'react';
import { isFunction, noop } from '@vkontakte/vkjs';

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
 *
 * Есть возможность передать функцию-коллбэк, которая будет
 * вызвана сразу после вызова setState с новым значением стейта
 * в качестве аргумента.
 *
 * ```ts
 * const onCountChange = React.useCallback((count) => {
 *   // обработчик нового значения count
 *   // будет вызван через 500мс
 * }, []);
 *
 *
 * const [count, setCount] = useStateWithDelay(initialState, 0, onCountChange);
 *
 * const click = () => {
 *   setCount(count + 1, 500)
 * }
 * ```
 */
export function useStateWithDelay<S>(
  initialState: S | (() => S),
  defaultDelay = 0,
  onStateChange: (v: S) => void = noop,
): [S, DispatchWithDelay<React.SetStateAction<S>>] {
  const [value, setValue] = React.useState(initialState);
  const timeout = React.useRef<ReturnType<typeof setTimeout>>(undefined);

  const handleSetValue = React.useCallback(
    (nextValue: React.SetStateAction<S>) => {
      if (isFunction(nextValue)) {
        setValue((prevValue) => {
          const value = nextValue(prevValue);
          onStateChange(value);

          return value;
        });
      } else {
        setValue(nextValue);
        onStateChange(nextValue);
      }
    },
    [onStateChange],
  );

  const setValueWithDelay = React.useCallback(
    (newValue: React.SetStateAction<S>, delay: number = defaultDelay) => {
      clearTimeout(timeout.current);
      if (delay === 0) {
        handleSetValue(newValue);
        return;
      }

      timeout.current = setTimeout(() => handleSetValue(newValue), delay);
    },
    [defaultDelay, handleSetValue],
  );

  return [value, setValueWithDelay];
}
