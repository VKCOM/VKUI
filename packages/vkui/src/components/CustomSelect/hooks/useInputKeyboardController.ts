import * as React from 'react';
import { Keys, pressedKey } from '../../../lib/accessibility';
import { callMultiple } from '../../../lib/callMultiple';
import { type SelectProps } from '../CustomSelect';
import { type UseFocusedOptionControllerReturn } from './useFocusedOptionController';

const KEYS_TO_PREVENT_DEFAULT: string[] = [Keys.ARROW_UP, Keys.ARROW_DOWN, Keys.ESCAPE, Keys.ENTER];

/* eslint-disable jsdoc/require-jsdoc */
interface UseInputKeyboardController
  extends Pick<UseFocusedOptionControllerReturn, 'resetFocusedOption' | 'focusOption'>,
    Pick<SelectProps, 'onInputKeyDown'> {
  opened: boolean;
  scrollBoxRef: React.RefObject<HTMLDivElement | null>;
  selectFocused: () => void;
  open: () => void;
  close: () => void;
}
/* eslint-enable jsdoc/require-jsdoc */

export function useInputKeyboardController({
  opened,
  resetFocusedOption,
  focusOption,
  scrollBoxRef,
  selectFocused,
  onInputKeyDown,
  open,
  close,
}: UseInputKeyboardController) {
  const handleKeyDownSelect = React.useCallback(
    (event: React.KeyboardEvent) => {
      const key = pressedKey(event);
      if (event.key.length === 1 && key !== Keys.SPACE) {
        open();
        resetFocusedOption();
        return;
      }
      if (!key) {
        return;
      }
      const areOptionsShown = () => scrollBoxRef.current !== null;

      if (KEYS_TO_PREVENT_DEFAULT.includes(key)) {
        event.preventDefault();
      }
      switch (key) {
        case Keys.ARROW_UP:
          if (opened) {
            areOptionsShown() && focusOption('prev');
          } else {
            open();
          }
          break;
        case Keys.ARROW_DOWN:
          if (opened) {
            areOptionsShown() && focusOption('next');
          } else {
            open();
          }
          break;
        case Keys.ESCAPE:
          close();
          break;
        case Keys.BACKSPACE:
        case Keys.DELETE: {
          open();
          resetFocusedOption();
          break;
        }
        case Keys.ENTER:
        case Keys.SPACE:
          if (opened) {
            areOptionsShown() && selectFocused();
          } else {
            open();
          }
          break;
      }
    },
    [scrollBoxRef, opened, close, focusOption, open, resetFocusedOption, selectFocused],
  );

  const handleInputKeydown = React.useCallback(
    (event: React.KeyboardEvent) => {
      onInputKeyDown?.(event, opened);
    },
    [opened, onInputKeyDown],
  );
  const _onInputKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void = callMultiple(
    handleKeyDownSelect,
    handleInputKeydown,
  );

  return _onInputKeyDown;
}
