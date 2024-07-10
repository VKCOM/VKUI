import * as React from 'react';
import { useIsomorphicLayoutEffect } from '../../lib/useIsomorphicLayoutEffect';

class LayoutEffectCall {
  #fns: Array<() => void> = [];

  /**
   * Выполняет переданные функции
   */
  run() {
    for (const fn of this.#fns) {
      fn();
    }

    this.#fns = [];
  }

  /**
   * Вызовет функцию после изменения DOM, но до того как пользователь увидит
   * изменения
   */
  add = (fn: () => void) => {
    this.#fns.push(fn);
  };
}

/**
 * Возвращает функцию которая вызывает callback после изменения DOM, но до того
 * как пользователь увидит изменения
 */
export function useLayoutEffectCall() {
  const ref = React.useRef<LayoutEffectCall | null>(null);
  if (!ref.current) {
    ref.current = new LayoutEffectCall();
  }

  useIsomorphicLayoutEffect(() => {
    ref.current!.run();
  });

  return ref.current.add;
}
