import * as React from 'react';

function basicStateInitializer<S>(initialArg: S | (() => S)): S {
  return initialArg instanceof Function ? initialArg() : initialArg;
}

function initializer<T>(initialArg: T | (() => T)): [T, T | undefined] {
  const initialState = basicStateInitializer(initialArg);

  return [initialState, undefined];
}

function basicStateReducer<S>(state: S, action: React.SetStateAction<S>): S {
  return action instanceof Function ? action(state) : action;
}

function reducer<T>(
  [prevState]: [T, T | undefined],
  action: React.SetStateAction<T>,
): [T, T | undefined] {
  const newState = basicStateReducer(prevState, action);

  return [newState, prevState];
}

/**
 * Возвращает значение с текущим и предыдущим состоянием
 *
 * # Пример
 *
 * ```ts
 * const [[count, prevCount], setCount] = useStateWithPrev(initialState);
 * ```
 */
export function useStateWithPrev<T>(
  initialState: T | (() => T),
): [[T, T | undefined], React.Dispatch<React.SetStateAction<T>>] {
  return React.useReducer(reducer, undefined, () => initializer(initialState));
}
