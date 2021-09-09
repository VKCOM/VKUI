import { useCallback, useState } from 'react';
import { KeyCode, pressedKey } from '../lib/accessibility';
import { useDOM } from '../lib/dom';
import { useGlobalEventListener } from './useGlobalEventListener';

export function useKeyboardInputTracker(): boolean {
  const { document } = useDOM();

  const [isKeyboardInputActive, toggleKeyboardInput] = useState<boolean>(true);

  const enableKeyboardInput = useCallback((e: KeyboardEvent) => {
    if (pressedKey(e) === KeyCode.TAB) {
      toggleKeyboardInput(true);
    }
  }, []);

  const disableKeyboardInput = useCallback(() => {
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
