import { type RefObject, useRef, useState } from 'react';
import { FOCUSABLE_ELEMENTS_LIST } from '../../lib/accessibility';
import { getActiveElementByAnotherElement, isHTMLElement } from '../../lib/dom';
import { useIsomorphicLayoutEffect } from '../../lib/useIsomorphicLayoutEffect';
import { useStableCallback } from '../useStableCallback';
import { type UseFocusTrapProps } from './useFocusTrap';

function isFocusableElement(el: Element): boolean {
  // eslint-disable-next-line no-restricted-properties
  return FOCUSABLE_ELEMENTS_LIST.some((sel) => el.matches(sel));
}

export const useRestoreFocus = ({
  restoreFocus,
  autoFocusDelay,
  getRestoreFocusTarget,
  mount,
  ref,
}: Pick<
  UseFocusTrapProps,
  'restoreFocus' | 'getRestoreFocusTarget' | 'autoFocusDelay' | 'mount'
> & {
  ref: RefObject<HTMLElement | null>;
}) => {
  const restoreFocusRef = useRef(restoreFocus);
  useIsomorphicLayoutEffect(() => {
    restoreFocusRef.current = restoreFocus;
  }, [restoreFocus]);

  const [restoreFocusTo, setRestoreFocusTo] = useState<Element | null>(null);

  const restoreFocusImpl = useStableCallback(() => {
    const shouldRestoreFocus =
      typeof restoreFocusRef.current === 'function'
        ? restoreFocusRef.current()
        : restoreFocusRef.current;

    if (!shouldRestoreFocus) {
      return;
    }

    const activeElement = getActiveElementByAnotherElement(ref.current);
    if (
      activeElement &&
      !ref.current?.contains(activeElement) &&
      isFocusableElement(activeElement)
    ) {
      return;
    }

    setTimeout(() => {
      const restoreFocusElement =
        (getRestoreFocusTarget && getRestoreFocusTarget()) ||
        (isHTMLElement(restoreFocusTo) && restoreFocusTo) ||
        null;

      if (restoreFocusElement) {
        restoreFocusElement.focus();
        setRestoreFocusTo(null);
      }
    }, autoFocusDelay);
  });

  useIsomorphicLayoutEffect(
    function calculateRestoreFocusTo() {
      if (!ref.current || !restoreFocusRef.current || !mount) {
        setRestoreFocusTo(null);
        return;
      }
      setRestoreFocusTo(getActiveElementByAnotherElement(ref.current));
    },
    [ref, mount],
  );

  useIsomorphicLayoutEffect(
    function tryToRestoreFocusOnUnmount() {
      return () => {
        restoreFocusImpl();
      };
    },
    [restoreFocusImpl],
  );

  useIsomorphicLayoutEffect(
    function tryToRestoreFocusWhenFakeUnmount() {
      if (!mount) {
        restoreFocusImpl();
      }
    },
    [mount, restoreFocusImpl],
  );
};
