import * as React from 'react';
import { isKeyboardFocusingStarted } from '../lib/accessibility';
import { useDOM } from '../lib/dom';
import { useIsomorphicLayoutEffect } from '../lib/useIsomorphicLayoutEffect';

export const ENABLE_KEYBOARD_INPUT_EVENT_NAME = 'enableKeyboardInput';
export const DISABLE_KEYBOARD_INPUT_EVENT_NAME = 'disableKeyboardInput';

const EVENT_OPTIONS = {
  passive: true,
  capture: true,
};

let keyboardInputState = false;
let mountedTrackers = 0;
let detachListeners: null | (() => void) = null;

const setKeyboardInputState = (nextValue: boolean) => {
  if (keyboardInputState !== nextValue) {
    keyboardInputState = nextValue;
  }
};

const attachKeyboardInputListeners = (document: Document) => {
  const handleKeydown = (event: KeyboardEvent) => {
    if (isKeyboardFocusingStarted(event)) {
      setKeyboardInputState(true);
    }
  };

  const handleCustomEnableKeyboardEvent = () => {
    setKeyboardInputState(true);
  };

  const handleCustomDisableKeyboardEvent = () => {
    setKeyboardInputState(false);
  };

  document.addEventListener('keydown', handleKeydown, EVENT_OPTIONS);
  document.addEventListener(
    ENABLE_KEYBOARD_INPUT_EVENT_NAME,
    handleCustomEnableKeyboardEvent,
    EVENT_OPTIONS,
  );
  document.addEventListener(
    DISABLE_KEYBOARD_INPUT_EVENT_NAME,
    handleCustomDisableKeyboardEvent,
    EVENT_OPTIONS,
  );
  document.addEventListener('mousedown', handleCustomDisableKeyboardEvent, EVENT_OPTIONS);
  document.addEventListener('touchstart', handleCustomDisableKeyboardEvent, EVENT_OPTIONS);

  return () => {
    document.removeEventListener('keydown', handleKeydown, EVENT_OPTIONS);
    document.removeEventListener(
      ENABLE_KEYBOARD_INPUT_EVENT_NAME,
      handleCustomEnableKeyboardEvent,
      EVENT_OPTIONS,
    );
    document.removeEventListener(
      DISABLE_KEYBOARD_INPUT_EVENT_NAME,
      handleCustomDisableKeyboardEvent,
      EVENT_OPTIONS,
    );
    document.removeEventListener('mousedown', handleCustomDisableKeyboardEvent, EVENT_OPTIONS);
    document.removeEventListener('touchstart', handleCustomDisableKeyboardEvent, EVENT_OPTIONS);
  };
};

export function useKeyboardInputTracker(): React.RefObject<boolean> {
  const { document } = useDOM();
  const keyboardFocusingStartedRef = React.useMemo(
    () =>
      ({
        get current() {
          return keyboardInputState;
        },
      }) as React.RefObject<boolean>,
    [],
  );

  useIsomorphicLayoutEffect(() => {
    /* istanbul ignore if: невозможный кейс, т.к. в SSR эффекты не вызываются. Проверка на будущее, если вдруг эффект будет вызываться. */
    if (!document) {
      return;
    }

    mountedTrackers += 1;

    if (!detachListeners) {
      detachListeners = attachKeyboardInputListeners(document);
    }

    return () => {
      mountedTrackers -= 1;
      if (mountedTrackers === 0 && detachListeners) {
        detachListeners();
        detachListeners = null;
      }
    };
  }, [document]);

  return keyboardFocusingStartedRef;
}
