import { FocusEvent, useCallback, useContext, useState } from 'react';
import { AppRootContext } from '../components/AppRoot/AppRootContext';

export function useFocusVisible(withKeyboardInputCheck = true) {
  const [isFocused, setIsFocused] = useState(false);
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
