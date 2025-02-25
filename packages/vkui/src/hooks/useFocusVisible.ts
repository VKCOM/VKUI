import { type FocusEvent, useCallback, useContext, useState } from 'react';
import { AppRootContext } from '../components/AppRoot/AppRootContext';

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

  // FIXME: Избавиться от чека контекста, так как без AppRoot не работает фокус
  const withKeyboardInputCheck = true;
  const { keyboardInput } = useContext(AppRootContext);

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

  const focusVisible = withKeyboardInputCheck ? keyboardInput && isFocused : isFocused;

  return {
    focusVisible,
    onFocus,
    onBlur,
  };
}
