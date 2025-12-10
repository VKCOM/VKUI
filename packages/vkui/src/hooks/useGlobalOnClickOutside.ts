import type * as React from 'react';
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
  useIsomorphicLayoutEffect(() => {
    const someRefNotNull = refs.some((ref) => ref && ref.current !== null);
    if (!document || !someRefNotNull) {
      return;
    }
    const handleClick = (event: MouseEvent) => {
      const targetEl = event.target;
      const someRefHasTargetEl =
        isElement(targetEl) &&
        refs.some((ref) => ref && ref.current && ref.current.contains(targetEl));
      if (!someRefHasTargetEl) {
        callback(event);
      }
    };
    document.addEventListener(event, handleClick, {
      passive: true,
      capture: true,
    });
    return () => {
      document.removeEventListener(event, handleClick, true);
    };
  }, [document, callback, ...refs]);
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
