import * as React from 'react';
import { useIsomorphicLayoutEffect } from '../../lib/useIsomorphicLayoutEffect';

/**
 * Возвращает функцию которая вызывает callback после изменения DOM, но до того
 * как пользователь увидит изменения
 */
export function useLayoutEffectCall() {
  const [fns] = React.useState<Array<() => void>>(() => []);

  useIsomorphicLayoutEffect(() => {
    while (fns.length > 0) {
      fns.pop()!();
    }
  });

  const add = React.useCallback((fn: () => void) => fns.push(fn), [fns]);

  return add;
}
