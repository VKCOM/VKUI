import * as React from 'react';
import { useDOM } from '../lib/dom';
import { useIsomorphicLayoutEffect } from '../lib/useIsomorphicLayoutEffect';
import { useGlobalEventListener } from './useGlobalEventListener';

interface SoftwareKeyboardState {
  isOpened: boolean;
}

/**
 Проверяет, закрыла ли клавиатура часть экрана, 24% подошло к большинству устройств
 Работает на iOS и Android, где софт-клавиатура ресайзит viewport в браузерах
 */
export function getPreciseKeyboardState(window: any): boolean {
  const {
    innerHeight,
    screen: { availHeight },
  } = window;

  const coveredViewportPercentage = Math.round((1 - innerHeight / availHeight) * 100);
  return coveredViewportPercentage > 24;
}

const eventOptions = {
  passive: true,
  capture: false,
};

/**
 * Проверяет фокус на элементах. Не может точно отображать
 */
export function useKeyboard(): SoftwareKeyboardState {
  const { document } = useDOM();

  const [isOpened, setIsOpened] = React.useState(false);

  const onFocus = React.useCallback(
    (event: FocusEvent | true) => {
      const isOpened =
        (event === true || event.type === 'focusin') &&
        (document?.activeElement?.tagName === 'INPUT' ||
          document?.activeElement?.tagName === 'TEXTAREA');
      setIsOpened(isOpened);
    },
    [document?.activeElement?.tagName],
  );

  /**
   У полей с autoFocus не отлавливаются события focus, для этого вызываем вручную,
   чтобы иметь хоть какое-то понимание происходящего.
   */
  React.useEffect(() => {
    onFocus(true);
  }, [onFocus]);

  useGlobalEventListener(document, 'focusout', onFocus, eventOptions);
  useGlobalEventListener(document, 'focusin', onFocus, eventOptions);

  return { isOpened };
}

const minKeyboardHeight = 30;
/**
 * Проверяет изменение визуального окна.
 *
 * Предупреждение: https://caniuse.com/?search=VisualViewport
 */
export function useVirtualKeyboard() {
  const [isOpened, setIsOpened] = React.useState<boolean | undefined>(undefined);

  const { document, window } = useDOM();

  const onResize = () => {
    if (!window || !document || !window.visualViewport || !document.scrollingElement) {
      return;
    }

    const calcIsOpen =
      window.visualViewport.height * window.visualViewport.scale + minKeyboardHeight <
      document.scrollingElement.clientHeight;

    if (isOpened !== calcIsOpen) {
      setIsOpened(calcIsOpen);
    }
  };

  useGlobalEventListener(window && window.visualViewport, 'resize', onResize);
  useIsomorphicLayoutEffect(onResize, []);

  return { isOpened };
}
