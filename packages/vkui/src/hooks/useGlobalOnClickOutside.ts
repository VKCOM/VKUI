import * as React from 'react';
import { isElement, useDOM } from '../lib/dom';
import { useIsomorphicLayoutEffect } from '../lib/useIsomorphicLayoutEffect';

export const useGlobalOnEventOutside = <
  T extends React.RefObject<ElementType | null> | undefined | null,
  ElementType extends Element = Element,
>(
  event: Extract<keyof DocumentEventMap, 'click' | 'mousedown'>,
  callback: (event: MouseEvent) => void,
  ...refs: T[]
): void => {
  const { document } = useDOM();
  const callbackRef = React.useRef(callback);
  const refsRef = React.useRef(refs);

  useIsomorphicLayoutEffect(() => {
    callbackRef.current = callback;
    refsRef.current = refs;
  }, [callback, refs]);

  useIsomorphicLayoutEffect(() => {
    const someRefNotNull = refsRef.current.some((ref) => ref && ref.current !== null);
    if (!document || !someRefNotNull) {
      return;
    }
    const handleClick = (event: MouseEvent) => {
      const targetEl = event.target;
      const someRefHasTargetEl =
        isElement(targetEl) &&
        refsRef.current.some((ref) => ref && ref.current && ref.current.contains(targetEl));
      if (!someRefHasTargetEl) {
        callbackRef.current(event);
      }
    };
    document.addEventListener(event, handleClick, {
      passive: true,
      capture: true,
    });
    return () => {
      document.removeEventListener(event, handleClick, true);
    };
  }, [document, event]);
};

/**
 * Завязывается на document.
 *
 * @private
 */
export const useGlobalOnClickOutside = <
  T extends React.RefObject<ElementType | null> | undefined | null,
  ElementType extends Element = Element,
>(
  callback: (event: MouseEvent) => void,
  ...refs: T[]
): void => {
  useGlobalOnEventOutside('click', callback, ...refs);
};
