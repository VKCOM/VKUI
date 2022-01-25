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
  const {
    innerHeight,
    screen: { availHeight },
  } = window;

  const coveredViewportPercentage = Math.round(
    (1 - innerHeight / availHeight) * 100
  );
  return coveredViewportPercentage > 24;
}

const eventOptions = {
  passive: true,
  capture: false,
};

export function useKeyboard(): SoftwareKeyboardState {
  const { window, document } = useDOM();

  const [isOpened, setIsOpened] = React.useState(false);
  const [isPrecise, setIsPrecise] = React.useState(false);

  const transitionalTimeout = React.useRef<ReturnType<
    typeof setTimeout
  > | null>(null);

  const onFocus = React.useCallback(
    (event: FocusEvent | true) => {
      if (transitionalTimeout.current) {
        clearTimeout(transitionalTimeout.current);
      }

      const isOpened =
        (event === true || event.type === "focusin") &&
        (document?.activeElement?.tagName === "INPUT" ||
          document?.activeElement?.tagName === "TEXTAREA");
      setIsOpened(isOpened);
      setIsPrecise(false);

      // Ожидаем прохождение анимации раскрытия клавиатуры
      transitionalTimeout.current = setTimeout(() => {
        setIsOpened(isOpened);
        setIsPrecise(getPreciseKeyboardState(window));
      }, 300);
    },
    [document?.activeElement?.tagName, window]
  );

  /**
   У полей с autoFocus не отлавливаются события focus, для этого вызываем вручную,
   чтобы иметь хоть какое-то понимание происходящего.
   */
  React.useEffect(() => {
    onFocus(true);
  }, [onFocus]);

  useGlobalEventListener(document, "focusout", onFocus, eventOptions);
  useGlobalEventListener(document, "focusin", onFocus, eventOptions);

  return { isOpened, isPrecise };
}
