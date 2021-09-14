import * as React from 'react';
import { Keys, pressedKey } from '../lib/accessibility';
import { useDOM } from '../lib/dom';
import { useGlobalEventListener } from './useGlobalEventListener';

export function useKeyboardInputTracker(): boolean {
  const { document } = useDOM();

  const [isKeyboardInputActive, toggleKeyboardInput] = React.useState<boolean>(true);

  const enableKeyboardInput = React.useCallback((e: KeyboardEvent) => {
    toggleKeyboardInput(pressedKey(e) === Keys.TAB);
  }, []);

  const disableKeyboardInput = React.useCallback(() => {
    toggleKeyboardInput(false);
  }, []);

  const eventOptions = {
    passive: true,
    capture: true,
  };

  useGlobalEventListener(document, 'keydown', enableKeyboardInput, eventOptions);
  useGlobalEventListener(document, 'mousedown', disableKeyboardInput, eventOptions);
  useGlobalEventListener(document, 'touchstart', disableKeyboardInput, eventOptions);

  return isKeyboardInputActive;
}
