import { useEffect, useState } from 'react';
import {
  getVisualViewport,
  isHTMLContentEditableElement,
  useDOM,
  type VisualViewport,
} from '../lib/dom';
import { touchEnabled } from '../lib/touch';

export interface VirtualKeyboardState {
  opened: boolean;
}

/**
 * > см. [Неудобно работать с клавиатурой в ModalPage на iOS #3792](https://github.com/VKCOM/VKUI/discussions/3792)
 *
 * Для реализации модальных окон на тач-устройств, мы вынуждены отслеживать открытие виртуальной
 * клавиатуры. По состоянию `opened` компоненты должны временно блокировать дальнейшее взаимодействие
 * с ними. Например, отключить закрытие по свайпу, чтобы не мешать пользователю работать с полями
 * ввода.
 *
 * Помимо этого в **Safari** и в **Chrome Android** нам нужно отслеживать прокрутку области видимости
 * пользователем, т.к. в упомянутых браузерах, виртуальная клавиатура поднимает контент вверх
 * не изменяя её высоту. Из-за этого появляется возможность прокручивать `window`, что визуально
 * выглядит плохо. В хуке мы ловим фокус на поля ввода и далее, если это тач-устройство, то
 * отлавливаем события касания и слайда пальцем, чтобы вызывать закрытие клавиатуры через расфокус
 * поля ввода.
 *
 * **Troubleshooting**
 *
 * - В **Safari** и в **Chrome Android** шапка будет выдвигаться вверх – хаки с выставлением `offsetTop`
 *   из `VisualViewport` порождают reflow/repaint и прыгания контента.
 * - Не обрабатывается кейс с **Safari**, где клавиатура может измениться по высоте если переключится
 *   на список эмодзи – в этом случае у пользователя остаётся возможность прокрутить поднятную
 *   область видимости.
 *
 * **Полезные ссылки**
 *
 * - [The Eccentric Ways of iOS Safari with the Keyboard](https://web.archive.org/web/20240920081850/https://blog.opendigerati.com/the-eccentric-ways-of-ios-safari-with-the-keyboard-b5aa3f34228d?gi=5411141a13e0)
 * - [Dealing with the visual viewport](https://web.archive.org/web/20240920082109/https://rdavis.io/articles/dealing-with-the-visual-viewport)
 * - [How to get the document height in iOS Safari when the on-screen keyboard is open](https://web.archive.org/web/20240920082743/https://martijnhols.nl/gists/how-to-get-document-height-ios-safari-osk)
 */
export function useVirtualKeyboardState(enabled = true): VirtualKeyboardState {
  const { window, document } = useDOM();

  const [activeElement, setActiveElement] = useState<HTMLElement | null>(null);

  useEffect(
    function initializeFocusEvents() {
      if (!enabled || !touchEnabled() || !window || !document) {
        return;
      }

      const handleFocus = (event: FocusEvent | true) => {
        const activeElement = event === true ? document.activeElement : (event.target as Element);

        if (isHTMLContentEditableElement(activeElement)) {
          if (event === true) {
            setActiveElement(activeElement);
            return;
          }

          switch (event.type) {
            case 'focusin':
              setActiveElement(activeElement);
              break;
            case 'focusout':
              setActiveElement(null);
              break;
          }
        }
      };

      /**
       * У полей с autoFocus не отлавливаются события `focus`, для этого вызываем обработчик
       * вручную, чтобы иметь хоть какое-то понимание происходящего.
       */
      handleFocus(true);

      const eventOptions = { passive: true, capture: false };

      document.addEventListener('focusin', handleFocus, eventOptions);
      document.addEventListener('focusout', handleFocus, eventOptions);

      return () => {
        document.removeEventListener('focusin', handleFocus, eventOptions);
        document.removeEventListener('focusout', handleFocus, eventOptions);
      };
    },
    [enabled, window, document],
  );

  useEffect(
    function initializeHookToCloseAfterOpening() {
      if (!enabled || !activeElement || !touchEnabled() || !window || !document) {
        return;
      }

      let initialVV: VisualViewport | null = null;

      const handleTouchStart = function handleTouchStart(this: Window) {
        initialVV = getVisualViewport(window);
      };

      const handleTouchMove = function handleTouchMove(this: Window) {
        if (initialVV !== null) {
          const nextVV = getVisualViewport(this);
          if (initialVV.offsetTop !== nextVV.offsetTop) {
            activeElement.blur();
            setActiveElement(null);
          }
        }
      };

      const eventOptions = { passive: true, capture: false };

      window.addEventListener('touchstart', handleTouchStart, eventOptions);
      window.addEventListener('touchmove', handleTouchMove, eventOptions);

      return () => {
        window.removeEventListener('touchstart', handleTouchStart, eventOptions);
        window.removeEventListener('touchmove', handleTouchMove, eventOptions);
      };
    },
    [enabled, activeElement, window, document],
  );

  return { opened: activeElement !== null };
}
