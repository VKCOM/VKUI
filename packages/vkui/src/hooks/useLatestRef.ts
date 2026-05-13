import * as React from 'react';
import { useIsomorphicLayoutEffect } from '../lib/useIsomorphicLayoutEffect';

export function useLatestRef<T>(value: T): React.RefObject<T> {
  const ref = React.useRef(value);

  useIsomorphicLayoutEffect(() => {
    ref.current = value;
  }, [value]);

  return ref;
}
