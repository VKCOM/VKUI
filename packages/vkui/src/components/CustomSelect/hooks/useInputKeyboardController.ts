'use client';

import * as React from 'react';
import { callMultiple } from '../../../lib/callMultiple';
import { type SelectProps } from '../CustomSelect';
import { type UseFocusedOptionControllerReturn } from './useFocusedOptionController';

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
  const onKeyboardInput = React.useCallback(() => {
    open();
    resetFocusedOption();
  }, [open, resetFocusedOption]);

  const areOptionsShown = React.useCallback(() => {
    return scrollBoxRef.current !== null;
  }, [scrollBoxRef]);

  const handleKeyDownSelect = React.useCallback(
    (event: React.KeyboardEvent) => {
      if (event.key.length === 1 && event.key !== ' ') {
        onKeyboardInput();
        return;
      }

      ['ArrowUp', 'ArrowDown', 'Escape', 'Enter'].includes(event.key) &&
        areOptionsShown() &&
        event.preventDefault();

      switch (event.key) {
        case 'ArrowUp':
          if (opened) {
            areOptionsShown() && focusOption('prev');
          } else {
            open();
          }
          break;
        case 'ArrowDown':
          if (opened) {
            areOptionsShown() && focusOption('next');
          } else {
            open();
          }
          break;
        case 'Escape':
          close();
          break;
        case 'Backspace':
        case 'Delete': {
          open();
          resetFocusedOption();

          break;
        }
        case 'Enter':
        case 'Spacebar':
        case ' ':
          if (opened) {
            areOptionsShown() && selectFocused();
          } else {
            open();
          }
          break;
      }
    },
    [
      areOptionsShown,
      onKeyboardInput,
      opened,
      close,
      focusOption,
      open,
      resetFocusedOption,
      selectFocused,
    ],
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
