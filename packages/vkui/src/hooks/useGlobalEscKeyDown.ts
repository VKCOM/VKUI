import { useRef } from 'react';
import { Keys, pressedKey } from '../lib/accessibility';
import { useDOM } from '../lib/dom';
import { useIsomorphicLayoutEffect } from '../lib/useIsomorphicLayoutEffect';

const EVENT_OPTIONS = {
  passive: true,
  capture: true,
};

type EscHandler = {
  callback: (event: KeyboardEvent) => void;
};

type EscHandlersStore = {
  handlers: EscHandler[];
  onKeyDown: (event: KeyboardEvent) => void;
};

const ESC_HANDLERS_BY_DOCUMENT = new WeakMap<Document, EscHandlersStore>();
const ESC_KEY_HANDLED_SYMBOL = Symbol('vkui_esc_key_handled');

export function markEscKeyAsHandled(event: KeyboardEvent): void {
  Object.defineProperty(event, ESC_KEY_HANDLED_SYMBOL, {
    value: true,
    configurable: true,
  });
}

export function isEscKeyHandled(event: KeyboardEvent): boolean {
  return Boolean((event as unknown as Record<symbol, unknown>)[ESC_KEY_HANDLED_SYMBOL]);
}

function getOrCreateEscHandlersStore(document: Document, options: AddEventListenerOptions) {
  const existingStore = ESC_HANDLERS_BY_DOCUMENT.get(document);
  if (existingStore) {
    return existingStore;
  }

  const store: EscHandlersStore = {
    handlers: [],
    onKeyDown(event) {
      if (
        pressedKey(event) !== Keys.ESCAPE ||
        store.handlers.length === 0 ||
        isEscKeyHandled(event)
      ) {
        return;
      }

      const activeHandler = store.handlers[store.handlers.length - 1];
      markEscKeyAsHandled(event);
      activeHandler.callback(event);
    },
  };

  document.addEventListener('keydown', store.onKeyDown, options);
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
  optionsProp?: AddEventListenerOptions,
): void => {
  const { document } = useDOM();

  const init = enabled && !!callback;

  const stableRef = useRef<((event: KeyboardEvent) => void) | null>(null);

  const options = useRef<AddEventListenerOptions>(optionsProp || EVENT_OPTIONS);

  useIsomorphicLayoutEffect(() => {
    options.current = optionsProp || EVENT_OPTIONS;
    stableRef.current = callback ?? null;
  }, [options, callback]);

  useIsomorphicLayoutEffect(() => {
    if (!document || !init) {
      return;
    }

    const store = getOrCreateEscHandlersStore(document, options.current);
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
        document.removeEventListener('keydown', store.onKeyDown, options.current);
        ESC_HANDLERS_BY_DOCUMENT.delete(document);
      }
    };
  }, [init, document, stableRef]);
};
