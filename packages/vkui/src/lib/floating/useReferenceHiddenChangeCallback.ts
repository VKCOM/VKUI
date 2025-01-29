import * as React from 'react';
import { useIsomorphicLayoutEffect } from '../useIsomorphicLayoutEffect';
import { type UseFloatingData } from './types/common';
import { type FloatingComponentProps } from './types/component';

export function useReferenceHiddenChangeCallback(
  hideMiddleware: UseFloatingData['middlewareData']['hide'],
  onReferenceHiddenChanged: FloatingComponentProps['onReferenceHiddenChanged'],
) {
  const prevHiddenRef = React.useRef<boolean | undefined>(hideMiddleware?.referenceHidden);
  React.useEffect(() => {
    prevHiddenRef.current = hideMiddleware?.referenceHidden;
  });

  useIsomorphicLayoutEffect(
    function checkHiddenChanged() {
      if (!onReferenceHiddenChanged) {
        return;
      }
      if (hideMiddleware?.referenceHidden !== prevHiddenRef.current) {
        onReferenceHiddenChanged(hideMiddleware?.referenceHidden || false);
      }
    },
    [hideMiddleware?.referenceHidden, onReferenceHiddenChanged],
  );
}
