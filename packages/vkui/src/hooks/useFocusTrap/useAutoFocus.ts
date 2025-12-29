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
    autoFocusDelay,
    focusFirst,
  }: RequiredFields<UseFocusTrapProps, 'autoFocus' | 'disabled' | 'mount' | 'autoFocusDelay'> & {
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
      }, autoFocusDelay);

      return () => clearTimeout(timeoutId);
    },
    [autoFocus, autoFocusDelay, disabled, mount, focusFirst],
  );
};
