import * as React from 'react';
import { useIsomorphicLayoutEffect } from '../lib/useIsomorphicLayoutEffect';

/**
 * Inspired by https://github.com/facebook/react/issues/14099#issuecomment-440013892
 */
export function useStableCallback<
  Fn extends (...args: any[]) => any = (...args: unknown[]) => unknown,
>(fn: Fn): Fn;
export function useStableCallback<Args extends unknown[], Return>(
  fn: (...args: Args) => Return,
): (...args: Args) => Return;
export function useStableCallback<Args extends unknown[], Return>(
  fn: (...args: Args) => Return,
): (...args: Args) => Return {
  const ref = React.useRef(fn);
  useIsomorphicLayoutEffect(() => {
    ref.current = fn;
  });
  return React.useRef((...args: Args) => (0, ref.current)(...args)).current;
}
