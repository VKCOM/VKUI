import * as React from 'react';

export function usePrevious<T>(value: T): T | undefined {
  const ref = React.useRef<T | undefined>();

  React.useEffect(() => {
    ref.current = value;
  });

  return ref.current;
}
