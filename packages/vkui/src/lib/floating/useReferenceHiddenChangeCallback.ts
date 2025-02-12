import * as React from 'react';
import { useIsomorphicLayoutEffect } from '../useIsomorphicLayoutEffect';
import { type UseFloatingData } from './types/common';
import { type FloatingComponentProps } from './types/component';

export function useReferenceHiddenChangeCallback(
  hideMiddleware: UseFloatingData['middlewareData']['hide'],
  onReferenceHiddenChange: FloatingComponentProps['onReferenceHiddenChange'],
) {
  const prevHiddenRef = React.useRef<boolean | undefined>(hideMiddleware?.referenceHidden);
  React.useEffect(() => {
    prevHiddenRef.current = hideMiddleware?.referenceHidden;
  });

  useIsomorphicLayoutEffect(
    function checkHiddenChanged() {
      if (!onReferenceHiddenChange) {
        return;
      }
      if (hideMiddleware?.referenceHidden !== prevHiddenRef.current) {
        onReferenceHiddenChange(hideMiddleware?.referenceHidden || false);
      }
    },
    [hideMiddleware?.referenceHidden, onReferenceHiddenChange],
  );
}
