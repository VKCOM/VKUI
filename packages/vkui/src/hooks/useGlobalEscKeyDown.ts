import { useRef } from 'react';
import { Keys, pressedKey } from '../lib/accessibility';
import { useDOM } from '../lib/dom';
import { useIsomorphicLayoutEffect } from '../lib/useIsomorphicLayoutEffect';

const EVENT_OPTIONS = {
  passive: true,
  capture: true,
};

/**
 * Завязывается на document.
 *
 * @private
 */
export const useGlobalEscKeyDown = (
  init: boolean,
  callback?: (event: KeyboardEvent) => void,
  optionsProp?: AddEventListenerOptions,
): void => {
  const { document } = useDOM();

  const options = useRef<AddEventListenerOptions>(optionsProp || EVENT_OPTIONS);

  useIsomorphicLayoutEffect(() => {
    options.current = optionsProp || EVENT_OPTIONS;
  }, [options]);

  useIsomorphicLayoutEffect(() => {
    if (!document || !init || !callback) {
      return;
    }
    const handleKeyDown = (event: KeyboardEvent) => {
      if (pressedKey(event) === Keys.ESCAPE) {
        callback(event);
      }
    };
    document.addEventListener('keydown', handleKeyDown, options.current);
    return () => {
      document.removeEventListener('keydown', handleKeyDown, options.current);
    };
  }, [init, document, callback]);
};
