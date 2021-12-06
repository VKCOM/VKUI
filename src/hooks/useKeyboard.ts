import * as React from "react";
import { useDOM } from "../lib/dom";
import { useGlobalEventListener } from "./useGlobalEventListener";

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

  const coveredViewportPercentage = Math.round(
    (1 - innerHeight / availHeight) * 100
  );
  return coveredViewportPercentage > 24;
}

export function useKeyboard(): SoftwareKeyboardState {
  const { window, document } = useDOM();

  const [keyboardState, setKeyboardState] =
    React.useState<SoftwareKeyboardState>({
      isOpened: false,
      isPrecise: false,
    });

  const transitionalTimeout = React.useRef<ReturnType<
    typeof setTimeout
  > | null>(null);

  const eventOptions = {
    passive: true,
    capture: false,
  };

  /**
   У полей с autoFocus не отлавливаются события focus, для этого вызываем вручную,
   чтобы иметь хоть какое-то понимание происходящего.
   */
  React.useEffect(() => {
    onFocus(true);
  }, [onFocus]);

  function onFocus(event: FocusEvent | true) {
    clearTimeout(transitionalTimeout.current);

    let returnObject = {
      isOpened:
        (event === true || event.type === "focusin") &&
        (document.activeElement?.tagName === "INPUT" ||
          document.activeElement?.tagName === "TEXTAREA"),
      isPrecise: false,
    };

    // Ожидаем прохождение анимации раскрытия клавиатуры
    transitionalTimeout.current = setTimeout(() => {
      returnObject.isPrecise = getPreciseKeyboardState(window);
      setKeyboardState(returnObject);
    }, 300);
  }

  useGlobalEventListener(document, "focusout", onFocus, eventOptions);
  useGlobalEventListener(document, "focusin", onFocus, eventOptions);

  return keyboardState;
}
