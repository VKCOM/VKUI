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
  const [isFocused, setIsFocused] = useState(false);
  const keyboardInputRef = useKeyboardInputTracker();

  const onFocus = useCallback(
    (event: FocusEvent<HTMLElement>) => {
      event.stopPropagation();
      setIsFocused(true);
    },
    [setIsFocused],
  );

  const onBlur = useCallback(
    (event: FocusEvent<HTMLElement>) => {
      event.stopPropagation();
      setIsFocused(false);
    },
    [setIsFocused],
  );

  const focusVisible = keyboardInputRef.current && isFocused;

  return {
    focusVisible,
    onFocus,
    onBlur,
  };
}
