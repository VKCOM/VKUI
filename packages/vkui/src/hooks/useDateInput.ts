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
}: UseDateInputDependencies<T, D>): {
  rootRef: React.RefObject<HTMLDivElement | null>;
  calendarRef: React.RefObject<HTMLDivElement | null>;
  open: boolean;
  openCalendar: () => void;
  closeCalendar: () => void;
  internalValue: string[];
  focusedElement: number | null;
  setFocusedElement: React.Dispatch<React.SetStateAction<number | null>>;
  handleKeyDown: (e: React.KeyboardEvent<HTMLSpanElement>) => void;
  clear: () => void;
  handleFieldEnter: () => void;
  removeFocusFromField: () => void;
} {
  const { document } = useDOM();
  const { value: open, setTrue: openCalendar, setFalse: closeCalendar } = useBooleanState(false);
  const rootRef = React.useRef<HTMLDivElement | null>(null);
  const calendarRef = React.useRef<HTMLDivElement | null>(null);
  const [internalValue, setInternalValue] = React.useState<string[]>([]);
  const [focusedElement, setFocusedElement] = React.useState<number | null>(null);
  const { window } = useDOM();

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
    }
  }, [onCalendarOpenChanged, open, openCalendar]);

  const removeFocusFromField = React.useCallback(() => {
    if (focusedElement !== null) {
      setFocusedElement(null);
      _onCalendarClose();
      window!.getSelection()?.removeAllRanges();
      setInternalValue(getInternalValue(value));
    }
  }, [focusedElement, _onCalendarClose, window, getInternalValue, value]);

  const handleClickOutside = React.useCallback(
    (e: MouseEvent) => {
      if (
        !rootRef.current?.contains(e.target as Node | null) &&
        !calendarRef.current?.contains(e.target as Node | null)
      ) {
        removeFocusFromField();
      }
    },
    [removeFocusFromField],
  );

  const selectFirst = React.useCallback(() => {
    setFocusedElement(0);
  }, []);

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

    if (element) {
      element.focus();
      _onCalendarOpen();
      range.selectNodeContents(element as Node);

      const selection = window!.getSelection();
      selection?.removeAllRanges();
      selection?.addRange(range);
    }
  }, [disabled, focusedElement, _onCalendarOpen, refs, window]);

  const clear = React.useCallback(() => {
    onClear?.();
    selectFirst();
  }, [onClear, selectFirst]);

  const handleFieldEnter = React.useCallback(() => {
    if (!open) {
      selectFirst();
    }
  }, [open, selectFirst]);

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
      } else if (
        e.key === 'Enter' ||
        (e.key === 'Tab' && focusedElement === maxElement) ||
        (e.key === 'Tab' && e.shiftKey && focusedElement === 0)
      ) {
        removeFocusFromField();
        return;
      } else if (e.key === 'ArrowLeft' || e.key === 'Left' || (e.key === 'Tab' && e.shiftKey)) {
        setFocusedElement(focusedElement <= 0 ? maxElement : focusedElement - 1);
      } else if (e.key === 'ArrowRight' || e.key === 'Right' || e.key === 'Tab') {
        setFocusedElement(focusedElement >= maxElement ? 0 : focusedElement + 1);
      } else if (e.key === 'Delete' || e.key === 'Del') {
        _value[focusedElement] = '';
      } else {
        return;
      }

      e.preventDefault();
      setInternalValue(_value);
      onInternalValueChange(_value);
    },
    [
      elementsConfig,
      focusedElement,
      internalValue,
      maxElement,
      onInternalValueChange,
      removeFocusFromField,
    ],
  );

  return {
    rootRef,
    calendarRef,
    open,
    openCalendar: _onCalendarOpen,
    closeCalendar: _onCalendarClose,
    internalValue,
    focusedElement,
    setFocusedElement,
    handleKeyDown,
    clear,
    handleFieldEnter,
    removeFocusFromField,
  };
}
