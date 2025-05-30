import { useCallback } from 'react';
import * as React from 'react';
import { useDOM } from '../lib/dom';
import { useBooleanState } from './useBooleanState';
import { useGlobalEventListener } from './useGlobalEventListener';

export interface UseDateInputDependencies<T, D> {
  maxElement: number;
  refs: Array<React.RefObject<T | null>>;
  autoFocus?: boolean;
  disabled?: boolean;
  value?: D | null;
  elementsConfig: (index: number) => {
    length: number;
    min: number;
    max: number;
  };
  onInternalValueChange: (value: string[]) => void;
  getInternalValue: (value?: D | null | undefined) => string[];
  onClear: () => void;
  onCalendarOpenChanged?: (opened: boolean) => void;
  accessible?: boolean;
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
  setFocusedElement: React.Dispatch<React.SetStateAction<number | null>>;
  handleKeyDown: (e: React.KeyboardEvent<HTMLSpanElement>) => void;
  clear: () => void;
  handleFieldEnter: () => void;
  removeFocusFromField: () => void;
  handleRestoreFocus: () => boolean;
} {
  const { document } = useDOM();
  const { value: open, setTrue: openCalendar, setFalse: closeCalendar } = useBooleanState(false);
  const rootRef = React.useRef<HTMLDivElement | null>(null);
  const calendarRef = React.useRef<HTMLDivElement | null>(null);
  const [internalValue, setInternalValue] = React.useState<string[]>([]);
  const [focusedElement, setFocusedElement] = React.useState<number | null>(null);
  const isClickedOutsideRef = React.useRef(false);
  const { window } = useDOM();

  const handleRestoreFocus = React.useCallback(() => {
    // если календарь был закрыт кликом вне календаря
    // то FocusTrap возвращать фокус не должен
    return !isClickedOutsideRef.current;
  }, []);

  const _onCalendarClose = useCallback(() => {
    if (open) {
      closeCalendar();
      onCalendarOpenChanged?.(false);
    }
  }, [closeCalendar, onCalendarOpenChanged, open]);

  const _onCalendarOpen = useCallback(() => {
    if (!open) {
      openCalendar();
      onCalendarOpenChanged?.(true);
      if (accessible) {
        setFocusedElement(null);
      }
      isClickedOutsideRef.current = false;
    }
  }, [onCalendarOpenChanged, open, openCalendar, accessible]);

  const resetFocusedElement = React.useCallback(() => {
    if (focusedElement !== null) {
      setFocusedElement(null);
      window!.getSelection()?.removeAllRanges();
      setInternalValue(getInternalValue(value));
    }
  }, [focusedElement, getInternalValue, value, window]);

  const removeFocusFromField = React.useCallback(() => {
    resetFocusedElement();
    _onCalendarClose();
  }, [resetFocusedElement, _onCalendarClose]);

  const toggleCalendar = useCallback(() => {
    resetFocusedElement();
    if (open) {
      _onCalendarClose();
    } else {
      _onCalendarOpen();
    }
  }, [resetFocusedElement, open, _onCalendarClose, _onCalendarOpen]);

  const handleClickOutside = React.useCallback(
    (e: MouseEvent) => {
      if (
        !rootRef.current?.contains(e.target as Node | null) &&
        !calendarRef.current?.contains(e.target as Node | null)
      ) {
        isClickedOutsideRef.current = true;
        removeFocusFromField();
      }
    },
    [removeFocusFromField],
  );

  const selectFirst = React.useCallback(() => {
    if (focusedElement !== null) {
      return;
    }

    setFocusedElement(0);
  }, [focusedElement]);

  useGlobalEventListener(document, 'click', handleClickOutside, {
    capture: true,
  });

  React.useEffect(() => {
    setInternalValue(getInternalValue(value));
  }, [getInternalValue, value]);

  React.useEffect(() => {
    if (autoFocus) {
      selectFirst();
    }
  }, [autoFocus, selectFirst]);

  React.useEffect(() => {
    if (disabled || focusedElement === null) {
      return;
    }

    const range = window!.document.createRange();

    let element = refs[focusedElement].current;

    let timerId: ReturnType<typeof setTimeout>;
    if (element) {
      element.focus();
      if (!accessible) {
        _onCalendarOpen();
      }
      range.selectNodeContents(element as Node);

      // Fix для Firefox: setTimeout нужен чтобы отложить range selection на
      // какое-то время, иначе, при фокусе на InputLike
      // извне, контент визуально не будет выбран
      timerId = setTimeout(() => {
        const selection = window!.getSelection();
        selection?.removeAllRanges();
        selection?.addRange(range);
      }, 0);
    }

    return () => {
      clearTimeout(timerId);
    };
  }, [disabled, focusedElement, refs, window, _onCalendarOpen, accessible]);

  const clear = React.useCallback(() => {
    onClear?.();
    selectFirst();
  }, [onClear, selectFirst]);

  const handleFieldEnter = React.useCallback(() => {
    selectFirst();
  }, [selectFirst]);

  const handleKeyDown = React.useCallback(
    (e: React.KeyboardEvent<HTMLSpanElement>) => {
      if (focusedElement === null) {
        return;
      }

      const _value = [...internalValue];
      const config = elementsConfig(focusedElement);

      if (/^\d+$/.test(e.key)) {
        if (_value[focusedElement].length >= config.length) {
          _value[focusedElement] = e.key;
        } else {
          _value[focusedElement] += e.key;
          if (_value[focusedElement].length >= config.length && focusedElement < maxElement) {
            setFocusedElement(focusedElement + 1);
          }
        }
      } else if (e.key === 'Backspace') {
        if (!_value[focusedElement]) {
          setFocusedElement(focusedElement <= 0 ? maxElement : focusedElement - 1);
        } else {
          _value[focusedElement] = _value[focusedElement].slice(0, -1);
        }
      } else if (e.key === 'ArrowDown' || e.key === 'Down') {
        let currentValue = Number(_value[focusedElement]);
        _value[focusedElement] = String(
          currentValue <= config.min ? config.max : currentValue - 1,
        ).padStart(config.length, '0');
      } else if (e.key === 'ArrowUp' || e.key === 'Up') {
        let currentValue = Number(_value[focusedElement]);
        _value[focusedElement] = String(
          currentValue >= config.max ? config.min : currentValue + 1,
        ).padStart(config.length, '0');
      } else if (e.key === 'ArrowLeft' || e.key === 'Left' || (e.key === 'Tab' && e.shiftKey)) {
        if (focusedElement <= 0) {
          if (e.key === 'Tab') {
            removeFocusFromField();
          }
          return;
        }
        setFocusedElement(focusedElement - 1);
      } else if (e.key === 'ArrowRight' || e.key === 'Right' || e.key === 'Tab') {
        if (focusedElement >= maxElement) {
          if (e.key === 'Tab') {
            removeFocusFromField();
          }
          return;
        }

        setFocusedElement(focusedElement + 1);
      } else if (e.key === 'Delete' || e.key === 'Del') {
        _value[focusedElement] = '';
      } else if (e.key === ' ') {
        e.preventDefault();
        _onCalendarOpen();
        return;
      } else {
        return;
      }

      e.preventDefault();
      setInternalValue(_value);
      onInternalValueChange(_value);
    },
    [
      _onCalendarOpen,
      removeFocusFromField,
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
    openCalendar: _onCalendarOpen,
    closeCalendar: _onCalendarClose,
    toggleCalendar,
    internalValue,
    focusedElement,
    setFocusedElement,
    handleKeyDown,
    clear,
    handleFieldEnter,
    removeFocusFromField,
    handleRestoreFocus,
  };
}
