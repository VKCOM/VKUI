import * as React from 'react';

/**
 * @deprecated постарайтесь избавится от этого хука или используйте `useStateWithPrev`
 */
export function usePrevious<T>(value: T): T | undefined {
  const ref = React.useRef<T | undefined>(undefined);

  React.useEffect(() => {
    ref.current = value;
  });

  /**
   * ref.current нельзя читать во время рендеринга
   *
   * - see https://react.dev/reference/react/useRef
   * - also https://react.dev/reference/react/useState#storing-information-from-previous-renders
   */
  return ref.current;
}
