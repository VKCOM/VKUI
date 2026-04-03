import { useRef } from 'react';
import { Keys, pressedKey } from '../lib/accessibility';
import { useDOM } from '../lib/dom';
import { useIsomorphicLayoutEffect } from '../lib/useIsomorphicLayoutEffect';

type EscHandler = {
  callback: (event: KeyboardEvent) => void;
};

type EscHandlersStore = {
  handlers: EscHandler[];
  onKeyDown: (event: KeyboardEvent) => void;
};

const ESC_HANDLERS_BY_DOCUMENT = new WeakMap<Document, EscHandlersStore>();

function getOrCreateEscHandlersStore(document: Document) {
  const existingStore = ESC_HANDLERS_BY_DOCUMENT.get(document);
  if (existingStore) {
    return existingStore;
  }

  const store: EscHandlersStore = {
    handlers: [],
    onKeyDown(event) {
      if (pressedKey(event) !== Keys.ESCAPE || store.handlers.length === 0) {
        return;
      }

      const activeHandler = store.handlers[store.handlers.length - 1];
      activeHandler.callback(event);
    },
  };

  document.addEventListener('keydown', store.onKeyDown);
  ESC_HANDLERS_BY_DOCUMENT.set(document, store);

  return store;
}

/**
 * Завязывается на document.
 *
 * @private
 */
export const useGlobalEscKeyDown = (
  enabled: boolean,
  callback?: (event: KeyboardEvent) => void,
): void => {
  const { document } = useDOM();

  const init = enabled && !!callback;

  const stableRef = useRef<((event: KeyboardEvent) => void) | null>(null);

  useIsomorphicLayoutEffect(() => {
    stableRef.current = callback ?? null;
  }, [callback]);

  useIsomorphicLayoutEffect(() => {
    if (!document || !init) {
      return;
    }

    const store = getOrCreateEscHandlersStore(document);
    const handler: EscHandler = {
      callback: (event) => {
        stableRef.current?.(event);
      },
    };
    store.handlers.push(handler);

    return () => {
      const index = store.handlers.indexOf(handler);
      if (index !== -1) {
        store.handlers.splice(index, 1);
      }

      if (store.handlers.length === 0) {
        document.removeEventListener('keydown', store.onKeyDown);
        ESC_HANDLERS_BY_DOCUMENT.delete(document);
      }
    };
  }, [init, document, stableRef]);
};
