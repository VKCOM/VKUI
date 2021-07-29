import { useEffect, useState } from 'react';
import { useDOM } from '../lib/dom';
import { useGlobalEventListener } from './useGlobalEventListener';

interface SoftwareKeyboardState {
  isOpened: boolean;
  isPrecise: boolean;
}

/**
 Проверяет, закрыла ли клавиатура часть экрана, 24% подошло к большиству устройств
 Работает на iOS и Android, где софт-клавиатура ресайзит viewport в браузерах
 */
export function getPreciseKeyboardState(window: any): boolean {
  const { availHeight } = window.screen;
  const { innerHeight } = window;

  const coveredViewportPercentage = Math.round((1 - innerHeight / availHeight) * 100);
  return coveredViewportPercentage > 24;
}

export function useKeyboard(): SoftwareKeyboardState {
  const { window, document } = useDOM();

  const [keyboardState, setKeyboardState] = useState<SoftwareKeyboardState>({
    isOpened: false,
    isPrecise: false,
  });

  const eventOptions = {
    passive: true,
    capture: false,
  };

  /**
   У полей с autoFocus не отлавливаются события focus, для этого вызываем вручную,
   чтобы иметь хоть какое-то понимание происходящего.
   */
  useEffect(() => {
    onFocus(true);
  }, [onFocus]);

  function onFocus(event: FocusEvent | true) {
    let returnObject = {
      isOpened: (event === true || event.type === 'focusin') && (
        document.activeElement?.tagName === 'INPUT' ||
        document.activeElement?.tagName === 'TEXTAREA'
      ),
      isPrecise: false,
    };

    // Ожидаем прохождение анимации раскрытия клавиатуры
    setTimeout(() => {
      returnObject.isPrecise = getPreciseKeyboardState(window);
      setKeyboardState(returnObject);
    }, 300);
  }

  useGlobalEventListener(document, 'focusout', onFocus, eventOptions);
  useGlobalEventListener(document, 'focusin', onFocus, eventOptions);

  return keyboardState;
}
