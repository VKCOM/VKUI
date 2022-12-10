import * as React from 'react';
import { useBooleanState } from './useBooleanState';
import { useGlobalEventListener } from './useGlobalEventListener';
import { useDOM } from '../lib/dom';

export interface UseDateInputDependencies<T, D> {
  maxElement: number;
  refs: Array<React.RefObject<T>>;
  autoFocus?: boolean;
  disabled?: boolean;
  value?: D;
  elementsConfig(index: number): {
    length: number;
    min: number;
    max: number;
  };
  onInternalValueChange(value: string[]): void;
  getInternalValue(value?: D | undefined): string[];
  onChange?(value?: D | undefined): void;
}

export function useDateInput<T extends HTMLElement, D>({
  maxElement,
  refs,
  autoFocus,
  disabled,
  elementsConfig,
  onChange,
  onInternalValueChange,
  getInternalValue,
  value,
}: UseDateInputDependencies<T, D>) {
  const { document } = useDOM();
  const { value: open, setTrue: openCalendar, setFalse: closeCalendar } = useBooleanState(false);
  const rootRef = React.useRef<HTMLDivElement>(null);
  const calendarRef = React.useRef<HTMLDivElement>(null);
  const [internalValue, setInternalValue] = React.useState<string[]>([]);
  const [focusedElement, setFocusedElement] = React.useState<number | null>(null);
  const { window } = useDOM();

  const removeFocusFromField = React.useCallback(() => {
    if (open) {
      setFocusedElement(null);
      closeCalendar();
      window!.getSelection()?.removeAllRanges();
      setInternalValue(getInternalValue(value));
    }
  }, [closeCalendar, getInternalValue, open, value, window]);

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
      openCalendar();
      range.selectNodeContents(element as Node);

      const selection = window!.getSelection();
      selection?.removeAllRanges();
      selection?.addRange(range);
    }
  }, [disabled, focusedElement, openCalendar, refs, window]);

  const clear = React.useCallback(() => {
    onChange?.(undefined);
    selectFirst();
  }, [onChange, selectFirst]);

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
    openCalendar,
    closeCalendar,
    internalValue,
    focusedElement,
    setFocusedElement,
    handleKeyDown,
    clear,
    handleFieldEnter,
    removeFocusFromField,
  };
}
