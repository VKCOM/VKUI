import * as React from 'react';
import { isHTMLElement } from '../../lib/dom';
import type { UseFocusTrapProps } from './useFocusTrap';

const DEFAULT_RESTORE_FOCUS_VALUE = true;

export const useRestoreFocusWrapper = (
  restoreFocus?: boolean | (() => boolean | HTMLElement | null | undefined),
): Required<Pick<UseFocusTrapProps, 'restoreFocus' | 'getRestoreFocusTarget'>> => {
  const restoreFocusTargetRef = React.useRef<HTMLElement | null>(null);
  const restoreFocusRef = React.useRef<boolean>(true);
  const restoreFocusCallback: () => boolean = React.useCallback(() => {
    if (typeof restoreFocus === 'function') {
      const restoreFocusResult = restoreFocus();
      if (isHTMLElement(restoreFocusResult)) {
        restoreFocusRef.current = true;
        restoreFocusTargetRef.current = restoreFocusResult;
      } else {
        restoreFocusRef.current =
          restoreFocusResult === undefined ? DEFAULT_RESTORE_FOCUS_VALUE : !!restoreFocusResult;
        restoreFocusTargetRef.current = null;
      }
    } else {
      restoreFocusRef.current =
        restoreFocus === undefined ? DEFAULT_RESTORE_FOCUS_VALUE : restoreFocus;
      restoreFocusTargetRef.current = null;
    }
    return restoreFocusRef.current;
  }, [restoreFocus]);

  const getRestoreFocusTarget: () => HTMLElement | null = React.useCallback(() => {
    return restoreFocusTargetRef.current;
  }, []);

  return {
    restoreFocus: restoreFocusCallback,
    getRestoreFocusTarget,
  };
};
