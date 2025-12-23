import type { RefObject } from 'react';
import { contains, getActiveElementByAnotherElement } from '../../lib/dom';
import { useIsomorphicLayoutEffect } from '../../lib/useIsomorphicLayoutEffect';
import type { RequiredFields } from '../../types';
import { type UseFocusTrapProps } from './useFocusTrap.tsx';

export const useAutoFocus = (
  ref: RefObject<HTMLElement | null>,
  {
    autoFocus,
    disabled,
    mount,
    timeout,
    focusFirst,
  }: RequiredFields<UseFocusTrapProps, 'autoFocus' | 'disabled' | 'mount' | 'timeout'> & {
    focusFirst: () => void;
  },
) => {
  useIsomorphicLayoutEffect(
    function handleAutoFocus() {
      if (!ref.current || !autoFocus || disabled || !mount) {
        return;
      }

      const timeoutId = setTimeout(() => {
        if (!ref.current) {
          return;
        }

        const activeElement = getActiveElementByAnotherElement(ref.current);
        if (!contains(ref.current, activeElement)) {
          if (autoFocus === 'root') {
            ref.current.focus();
          } else {
            focusFirst();
          }
        }
      }, timeout);

      return () => clearTimeout(timeoutId);
    },
    [autoFocus, timeout, disabled, mount, focusFirst],
  );
};
