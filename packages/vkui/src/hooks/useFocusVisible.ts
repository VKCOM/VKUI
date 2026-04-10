import { type FocusEvent, useCallback, useState } from 'react';
import { useKeyboardInputTracker } from './useKeyboardInputTracker';

/**
 * Определяет фокус элемента, когда его наличие необходимо обозначить визуально.
 *
 * Этот хук полезен для обозначения фокуса, когда для навигации используется
 * клавиатура
 *
 * @since 7.2.0
 */
export function useFocusVisible(): {
  focusVisible: boolean;
  onFocus: (event: FocusEvent<HTMLElement>) => void;
  onBlur: (event: FocusEvent<HTMLElement>) => void;
} {
  const [focusVisible, setFocusVisible] = useState(false);
  const keyboardInputRef = useKeyboardInputTracker();

  const onFocus = useCallback(
    (event: FocusEvent<HTMLElement>) => {
      event.stopPropagation();
      setFocusVisible(Boolean(keyboardInputRef.current));
    },
    [keyboardInputRef],
  );

  const onBlur = useCallback(
    (event: FocusEvent<HTMLElement>) => {
      event.stopPropagation();
      setFocusVisible(false);
    },
    [],
  );

  return {
    focusVisible,
    onFocus,
    onBlur,
  };
}
