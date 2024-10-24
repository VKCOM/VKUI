import * as React from 'react';

type Actions = {
  /**
   * Увеличивает значение счетчика и вызывает ре-рендер
   *
   * @param delta Значение на которое требуется увеличить счетчик. По умолчанию `1`
   */
  increment: (delta?: number) => void;
  /**
   * Уменьшает значение счетчика и вызывает ре-рендер
   *
   * @param delta Значение на которое требуется увеличить счетчик. По умолчанию `1`
   */
  decrement: (delta?: number) => void;

  /**
   * Функция, позволяющая обновить значение счетчика и вызвать ре-рендер
   */
  setCount: React.Dispatch<React.SetStateAction<number>>;
};

/**
 * Хук счетчика с возможностью задания начального значения и увеличения/уменьшения значения.
 *
 * @param initialValue начальное значение счетчика. По умолчанию `0`
 *
 * ## Пример
 *
 * ```js
 * const Component = () => {
 *   const [count, { increment, decrement, setCount }] = useCounter(0);
 *
 *   return (
 *     <div>
 *       <div>count: {count}</div>
 *
 *       <button onClick={() => increment()}> +1 </button>
 *       <button onClick={() => decrement()}> -1 </button>
 *       <button onClick={() => increment(5)}> +5 </button>
 *       <button onClick={() => decrement(5)}> -5 </button>
 *       <button onClick={() => setCount(0)}> set 0 </button>
 *     </div>
 *   );
 * }
 * ```
 */
export function useCounter(initialValue: number | (() => number) = 0): [number, Actions] {
  const [count, setCount] = React.useState(initialValue);

  const actions = React.useMemo(
    () => ({
      increment: (delta = 1) => setCount((x) => x + delta),
      decrement: (delta = 1) => setCount((x) => x - delta),
      setCount,
    }),
    [],
  );

  return [count, actions];
}
