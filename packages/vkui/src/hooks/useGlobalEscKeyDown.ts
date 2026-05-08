import { Keys, pressedKey } from '../lib/accessibility';
import { useDOM } from '../lib/dom';
import { useIsomorphicLayoutEffect } from '../lib/useIsomorphicLayoutEffect';

/**
 * Завязывается на document.
 *
 * @private
 */
export const useGlobalEscKeyDown = (
  init: boolean,
  callback?: ((event: KeyboardEvent) => void) | undefined,
  optionsProp: AddEventListenerOptions | undefined = {},
): void => {
  const { document } = useDOM();

  const {
    capture = true,
    passive = true,
    once = false,
    signal,
  } = optionsProp;

  useIsomorphicLayoutEffect(() => {
    if (!document || !init || !callback) {
      return;
    }
    const handleKeyDown = (event: KeyboardEvent) => {
      if (pressedKey(event) === Keys.ESCAPE) {
        callback(event);
      }
    };
    const options: AddEventListenerOptions = {
      capture,
      passive,
      once,
      signal,
    };

    document.addEventListener('keydown', handleKeyDown, options);
    return () => {
      document.removeEventListener('keydown', handleKeyDown, options);
    };
  }, [init, document, callback, capture, passive, once, signal]);
};
