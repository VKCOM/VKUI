import * as React from 'react';
import { useDocumentVisibilityState } from '../../hooks/useDocumentVisibilityState';
import { useStableCallback } from '../../hooks/useStableCallback';
import { TimeoutId } from '../../types';

export function useAutoPlay(timeout: number, slideIndex: number, callbackFnProp: VoidFunction) {
  const visible = useDocumentVisibilityState(Boolean(timeout));
  const callbackFn = useStableCallback(callbackFnProp);

  React.useEffect(
    function setAutoPlay() {
      let autoPlayTimeoutId: TimeoutId = null;

      if (timeout) {
        autoPlayTimeoutId = setTimeout(callbackFn, timeout);
      }

      return function clearAutoPlay() {
        if (autoPlayTimeoutId) {
          clearTimeout(autoPlayTimeoutId);
        }
      };
    },
    [visible, timeout, slideIndex, callbackFn],
  );
}
