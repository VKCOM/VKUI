import * as React from 'react';
import { useIsomorphicLayoutEffect } from '../../lib/useIsomorphicLayoutEffect';

/**
 * Пропускаем первый рендер, чтобы завязываться на актуальные размеры
 */
export function useSkipFirstRender() {
  const [inited, setInited] = React.useState(false);

  useIsomorphicLayoutEffect(() => {
    setInited(true);
  }, []);

  return inited;
}
