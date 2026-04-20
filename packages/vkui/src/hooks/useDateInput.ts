import { useCallback } from 'react';
import * as React from 'react';
import { useDOM } from '../lib/dom';
import { useIsomorphicLayoutEffect } from '../lib/useIsomorphicLayoutEffect';
import { useBooleanState } from './useBooleanState';
import { useGlobalOnClickOutside } from './useGlobalOnClickOutside';

export interface UseDateInputDependencies<T, D> {
  maxElement: number;
  refs: Array<React.RefObject<T | null>>;
  autoFocus?: boolean | undefined;
  disabled?: boolean | undefined;
  value?: D | null | undefined;
  elementsConfig: (index: number) => {
    length: number;
    min: number;
    max: number;
  };
  onInternalValueChange: (value: string[]) => void;
  getInternalValue: (value?: D | null | undefined) => string[];
  onClear: () => void;
  onCalendarOpenChanged?: ((opened: boolean) => void) | undefined;
  accessible?: boolean | undefined;
}

export function useDateInput<T extends HTMLElement, D>({
  maxElement,
  refs,
  autoFocus,
  disabled,
  elementsConfig,
  onClear,
  onInternalValueChange,
  getInternalValue,
  value,
  onCalendarOpenChanged,
  accessible,
}: UseDateInputDependencies<T, D>): {
  rootRef: React.RefObject<HTMLDivElement | null>;
  calendarRef: React.RefObject<HTMLDivElement | null>;
  open: boolean;
  openCalendar: () => void;
  closeCalendar: () => void;
  toggleCalendar: () => void;
  internalValue: string[];
  focusedElement: number | null;
  setFocusedElement: (v: number | null) => void;
  handleKeyDown: (e: React.KeyboardEvent<HTMLSpanElement>) => void;
  clear: () => void;
  handleFieldEnter: () => void;
  removeFocusFromField: () => void;
  handleRestoreFocus: () => boolean;
} {
  const [open, openCalendar, closeCalendar] = useBooleanState(false, onCalendarOpenChanged);
  const rootRef = React.useRef<HTMLDivElement | null>(null);
  const calendarRef = React.useRef<HTMLDivElement | null>(null);
  const [internalValue, setInternalValue] = React.useState<string[]>(() => getInternalValue(value));
  const [focusedElement, setFocusedElement] = React.useState<number | null>(null);
  const isClickedOutsideRef = React.useRef(false);
  const { window } = useDOM();

  const [prevValue, setPrevValue] = React.useState<D | null | undefined>(value);
  const [prevAutoFocus, setPrevAutoFocus] = React.useState<boolean | undefined>(undefined);

  if (prevValue !== value) {
    setInternalValue(getInternalValue(value));
    setPrevValue(value);
  }

  const setFocusedElementWithCalendarSync = React.useCallback(
    (newFocusedElement: number | null) => {
      setFocusedElement(newFocusedElement);
      if (newFocusedElement !== null && !accessible && !open) {
        openCalendar();
      }
    },
    [accessible, open, openCalendar],
  );

  if (prevAutoFocus !== autoFocus) {
    if (autoFocus && focusedElement === null) {
      setFocusedElement(0);
    }
    setPrevAutoFocus(autoFocus);
  }

  useIsomorphicLayoutEffect(() => {
    if (disabled || focusedElement === null) {
      return;
    }

    const range = window!.document.createRange();
    const element = refs[focusedElement].current;

    if (!element) {
      return;
    }

    element.focus();
    range.selectNodeContents(element as Node);

    // Fix для Firefox: setTimeout нужен чтобы отложить range selection на
    // какое-то время, иначе, при фокусе на InputLike
    // извне, контент визуально не будет выбран
    const timerId = setTimeout(() => {
      const selection = window!.getSelection();
      selection?.removeAllRanges();
      selection?.addRange(range);
    }, 0);

    return () => {
      clearTimeout(timerId);
    };
  }, [disabled, focusedElement, refs, window]);

  const shouldRestoreFocus = React.useCallback(() => {
    // если календарь был закрыт кликом вне календаря
    // то FocusTrap возвращать фокус не должен
    return !isClickedOutsideRef.current;
  }, []);

  const closeCalendarIfOpened = useCallback(() => {
    if (open) {
      closeCalendar();
    }
  }, [closeCalendar, open]);

  const resetFocusedElementState = React.useCallback(() => {
    if (focusedElement !== null) {
      setFocusedElementWithCalendarSync(null);
      window!.getSelection()?.removeAllRanges();
      setInternalValue(getInternalValue(value));
    }
  }, [focusedElement, setFocusedElementWithCalendarSync, getInternalValue, value, window]);

  const openCalendarIfClosed = useCallback(() => {
    if (!open) {
      openCalendar();
      if (accessible) {
        resetFocusedElementState();
      }
      isClickedOutsideRef.current = false;
    }
  }, [open, openCalendar, accessible, resetFocusedElementState]);

  const blurField = React.useCallback(() => {
    resetFocusedElementState();
    closeCalendarIfOpened();
  }, [resetFocusedElementState, closeCalendarIfOpened]);

  const toggleCalendar = useCallback(() => {
    resetFocusedElementState();
    if (open) {
      closeCalendarIfOpened();
    } else {
      openCalendarIfClosed();
    }
  }, [resetFocusedElementState, open, closeCalendarIfOpened, openCalendarIfClosed]);

  const handleClickOutside = React.useCallback(() => {
    isClickedOutsideRef.current = true;
    blurField();
  }, [blurField]);

  const focusFirstSegment = React.useCallback(() => {
    if (focusedElement !== null) {
      return;
    }

    setFocusedElementWithCalendarSync(0);
  }, [setFocusedElementWithCalendarSync, focusedElement]);

  useGlobalOnClickOutside(handleClickOutside, rootRef, calendarRef);

  const clear = React.useCallback(() => {
    onClear?.();
    focusFirstSegment();
  }, [onClear, focusFirstSegment]);

  const handleFieldEnter = React.useCallback(() => {
    focusFirstSegment();
  }, [focusFirstSegment]);

  const handleKeyDown = React.useCallback(
    (e: React.KeyboardEvent<HTMLSpanElement>) => {
      if (focusedElement === null) {
        return;
      }

      const nextInternalValue = [...internalValue];
      const config = elementsConfig(focusedElement);

      if (/^\d+$/.test(e.key)) {
        if (nextInternalValue[focusedElement].length >= config.length) {
          nextInternalValue[focusedElement] = e.key;
        } else {
          nextInternalValue[focusedElement] += e.key;
          if (
            nextInternalValue[focusedElement].length >= config.length &&
            focusedElement < maxElement
          ) {
            setFocusedElementWithCalendarSync(focusedElement + 1);
          }
        }
      } else if (e.key === 'Backspace') {
        if (!nextInternalValue[focusedElement]) {
          setFocusedElementWithCalendarSync(focusedElement <= 0 ? maxElement : focusedElement - 1);
        } else {
          nextInternalValue[focusedElement] = nextInternalValue[focusedElement].slice(0, -1);
        }
      } else if (e.key === 'ArrowDown' || e.key === 'Down') {
        let currentValue = Number(nextInternalValue[focusedElement]);
        nextInternalValue[focusedElement] = String(
          currentValue <= config.min ? config.max : currentValue - 1,
        ).padStart(config.length, '0');
      } else if (e.key === 'ArrowUp' || e.key === 'Up') {
        let currentValue = Number(nextInternalValue[focusedElement]);
        nextInternalValue[focusedElement] = String(
          currentValue >= config.max ? config.min : currentValue + 1,
        ).padStart(config.length, '0');
      } else if (e.key === 'ArrowLeft' || e.key === 'Left' || (e.key === 'Tab' && e.shiftKey)) {
        if (focusedElement <= 0) {
          if (e.key === 'Tab') {
            blurField();
          }
          return;
        }
        setFocusedElementWithCalendarSync(focusedElement - 1);
      } else if (e.key === 'ArrowRight' || e.key === 'Right' || e.key === 'Tab') {
        if (focusedElement >= maxElement) {
          if (e.key === 'Tab') {
            blurField();
          }
          return;
        }

        setFocusedElementWithCalendarSync(focusedElement + 1);
      } else if (e.key === 'Delete' || e.key === 'Del') {
        nextInternalValue[focusedElement] = '';
      } else if (e.key === ' ') {
        e.preventDefault();
        openCalendarIfClosed();
        return;
      } else {
        return;
      }

      e.preventDefault();
      setInternalValue(nextInternalValue);
      onInternalValueChange(nextInternalValue);
    },
    [
      setFocusedElementWithCalendarSync,
      openCalendarIfClosed,
      blurField,
      elementsConfig,
      focusedElement,
      internalValue,
      maxElement,
      onInternalValueChange,
    ],
  );

  return {
    rootRef,
    calendarRef,
    open,
    openCalendar: openCalendarIfClosed,
    closeCalendar: closeCalendarIfOpened,
    toggleCalendar,
    internalValue,
    focusedElement,
    setFocusedElement: setFocusedElementWithCalendarSync,
    handleKeyDown,
    clear,
    handleFieldEnter,
    removeFocusFromField: blurField,
    handleRestoreFocus: shouldRestoreFocus,
  };
}
