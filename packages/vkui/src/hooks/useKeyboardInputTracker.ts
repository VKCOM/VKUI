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

/**
 * Чтобы оптимизировать рендер, сохраняем в ref.
 *
 * В контекст можно передать через getter, подробнее в примере ниже.
 *
 * ```tsx
 * const keyboardInputTrackerRef = useKeyboardInputTracker();
 * <SomeContext.Provider value={{
 *  get keyboardInput() {
 *    return keyboardInputTrackerRef.current;
 *  }
 * }}>
 *  {children}
 * </SomeContext.Provider>
 * ```
 *
 * @private
 */
export function useKeyboardInputTracker(): React.MutableRefObject<boolean> {
  const { document } = useDOM();
  const keyboardFocusingStartedRef = React.useRef(false);

  useIsomorphicLayoutEffect(() => {
    /* istanbul ignore if: невозможный кейс, т.к. в SSR эффекты не вызываются. Проверка на будущее, если вдруг эффект будет вызываться. */
    if (!document) {
      return;
    }

    const handleKeydown = (event: KeyboardEvent) => {
      if (isKeyboardFocusingStarted(event)) {
        keyboardFocusingStartedRef.current = true;
      }
    };

    const handleCustomEnableKeyboardEvent = () => {
      keyboardFocusingStartedRef.current = true;
    };

    const handleCustomDisableKeyboardEvent = (event: Event) => {
      const isNVDAMouseDownOnEnterSpacePress =
        event.type === 'mousedown' && 'detail' in event && event.detail === 0;
      if (isNVDAMouseDownOnEnterSpacePress) {
        // NVDA screen reader вплоть до v2024.1 когда пользователь нажимает 'Enter' или 'Space'
        // отправляет событие 'mousedown' вместо keydown, что ложно сбрасывает наш флаг
        // и при открытии попапа или ActionSheet FocusTrap не работает, потому что
        // думает, что последнее взаимодействие было не с клавиатуры.
        // @see https://github.com/nvaccess/nvda/issues/11230#issuecomment-1918018067
        //
        // Единственный, пока что, способ определить, что это событие прилетело от NVDA это
        // проверить detail (счётчик кликов), что он равен 0,
        // для обычных событий от клавиатуры/тачпада это значение
        // всегда начинается с 1 (верно для популярных браузеров на Windows/MacOs).
        return;
      }

      keyboardFocusingStartedRef.current = false;
    };

    document.addEventListener('keydown', handleKeydown, EVENT_OPTIONS);
    document.addEventListener(ENABLE_KEYBOARD_INPUT_EVENT_NAME, handleCustomEnableKeyboardEvent, EVENT_OPTIONS); // prettier-ignore
    document.addEventListener(DISABLE_KEYBOARD_INPUT_EVENT_NAME, handleCustomDisableKeyboardEvent, EVENT_OPTIONS); // prettier-ignore
    document.addEventListener('mousedown', handleCustomDisableKeyboardEvent, EVENT_OPTIONS);
    document.addEventListener('touchstart', handleCustomDisableKeyboardEvent, EVENT_OPTIONS);

    return () => {
      document.removeEventListener('keydown', handleKeydown, EVENT_OPTIONS);
      document.removeEventListener(ENABLE_KEYBOARD_INPUT_EVENT_NAME, handleCustomEnableKeyboardEvent, EVENT_OPTIONS); // prettier-ignore
      document.removeEventListener(DISABLE_KEYBOARD_INPUT_EVENT_NAME, handleCustomDisableKeyboardEvent, EVENT_OPTIONS); // prettier-ignore
      document.removeEventListener('mousedown', handleCustomDisableKeyboardEvent, EVENT_OPTIONS);
      document.removeEventListener('touchstart', handleCustomDisableKeyboardEvent, EVENT_OPTIONS);
    };
  }, [document]);

  return keyboardFocusingStartedRef;
}
