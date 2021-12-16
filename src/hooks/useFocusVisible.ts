import { useContext, useState } from "react";
import { AppRootContext } from "../components/AppRoot/AppRootContext";

export function useFocusVisible() {
  const [isFocused, setIsFocused] = useState(false);
  const { keyboardInput } = useContext(AppRootContext);

  function onFocus() {
    setIsFocused(true);
  }

  function onBlur() {
    setIsFocused(false);
  }

  const focusVisible = keyboardInput && isFocused;

  return {
    focusVisible,
    onFocus,
    onBlur,
  };
}
