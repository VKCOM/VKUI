import { useState } from 'react';
import { getDOM } from '../lib/dom';
import { useGlobalEventListener } from './useGlobalEventListener';

interface SoftwareKeyboardState {
  isOpened: boolean;
  isPrecise: boolean;
}

/**
  Проверяет, закрыла ли клавиатура часть экрана, 24% подошло к большиству устройств
  Работает на iOS и Android, где софт-клавиатура закрывает часть viewport
*/
export function getPreciseKeyboardState(): boolean {
  const { window } = getDOM();
  const { availHeight } = window.screen;
  const { innerHeight } = window;

  const coveredViewportPercentage = Math.round((1 - innerHeight / availHeight) * 100);
  return coveredViewportPercentage > 24;
}

export function useKeyboard(): SoftwareKeyboardState {
  const [keyboardState, setKeyboardState] = useState<SoftwareKeyboardState>({
    isOpened: false,
    isPrecise: false,
  });

  const eventOptions = {
    passive: true,
    capture: false,
  };

  function onFocus(event: FocusEvent) {
    let returnObject = {
      isOpened: event.type === 'focusin',
      isPrecise: false,
    };

    // Ожидаем прохождение анимации раскрытия клавиатуры
    setTimeout(() => {
      returnObject.isPrecise = getPreciseKeyboardState();
      setKeyboardState(returnObject);
    }, 300);
  }

  useGlobalEventListener(document, 'focusout', onFocus, eventOptions);
  useGlobalEventListener(document, 'focusin', onFocus, eventOptions);

  return keyboardState;
}
