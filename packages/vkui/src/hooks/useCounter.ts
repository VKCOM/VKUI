import * as React from 'react';

type UseCounterReturn = {
  count: number;
  increment: () => void;
  decrement: () => void;
  setCount: React.Dispatch<React.SetStateAction<number>>;
};

/**
 * Хук счетчика с возможностью задания начального значения и увеличения/уменьшения на 1.
 */
export function useCounter(initialValue: number | (() => number) = 0): UseCounterReturn {
  const [count, setCount] = React.useState(initialValue);

  const increment = React.useCallback(() => setCount((x) => x + 1), []);

  const decrement = React.useCallback(() => setCount((x) => x - 1), []);

  return {
    count,
    increment,
    decrement,
    setCount,
  };
}
