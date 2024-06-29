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
): void => {
  const { document } = useDOM();
  useIsomorphicLayoutEffect(() => {
    if (!document || !init || !callback) {
      return;
    }
    const handleKeyDown = (event: KeyboardEvent) => {
      if (pressedKey(event) === Keys.ESCAPE) {
        callback(event);
      }
    };
    document.addEventListener('keydown', handleKeyDown, EVENT_OPTIONS);
    return () => {
      document.removeEventListener('keydown', handleKeyDown, EVENT_OPTIONS);
    };
  }, [init, document, callback]);
};
