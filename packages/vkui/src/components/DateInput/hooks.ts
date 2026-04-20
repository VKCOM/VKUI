/* eslint-disable jsdoc/require-jsdoc */

import * as React from 'react';
import { convertDateFromTimeZone, convertDateToTimeZone } from '../../lib/date';

interface UseDateInputValueOptions {
  value?: Date | null | undefined;
  defaultValue?: Date | null | undefined;
  onChange?: ((value: Date | null) => void) | undefined;
  timezone?: string | undefined;
}

export interface UseDateInputValueReturn {
  value: Date | null;
  updateValue: (v: Date) => Date;
  setInternalValue: (v: Date | null) => void;
  getLastUpdatedValue: () => Date | null;
  clearValue: () => void;
}

const _convertDateToTimeZone = (date: Date | null, timezone?: string): Date | null => {
  return convertDateToTimeZone(date, timezone) || null;
};

const _convertDateFromTimeZone = (date: Date, timezone?: string): Date => {
  return convertDateFromTimeZone(date, timezone) as Date;
};

const getStateValue = (
  defaultStateValue: Date | null,
  value?: Date | null | undefined,
  defaultValue?: Date | null | undefined,
  timezone?: string | undefined,
): Date | null => {
  if (value !== undefined) {
    return _convertDateToTimeZone(value, timezone);
  }
  if (defaultValue !== undefined) {
    return _convertDateToTimeZone(defaultValue, timezone);
  }
  return _convertDateToTimeZone(defaultStateValue, timezone);
};

export const useDateInputValue = ({
  value,
  defaultValue,
  onChange,
  timezone,
}: UseDateInputValueOptions): UseDateInputValueReturn => {
  const [internalValue, setInternalValue] = React.useState<Date | null>(
    getStateValue(null, value, defaultValue, timezone),
  );
  const lastUpdatedValueRef = React.useRef<Date | null>(
    getStateValue(null, value, defaultValue, timezone),
  );
  const [prevValue, setPrevValue] = React.useState<Date | null | undefined>(value);

  const isControlled = value !== undefined;

  if (prevValue !== value && isControlled) {
    const newInternalValue = _convertDateToTimeZone(value, timezone);
    setInternalValue(newInternalValue);
    setPrevValue(value);
  }

  React.useEffect(() => {
    if (isControlled) {
      lastUpdatedValueRef.current = internalValue;
    }
  }, [isControlled, internalValue]);

  const getLastUpdatedValue = React.useCallback(() => lastUpdatedValueRef.current, []);

  const updateValue = React.useCallback(
    (newValue: Date) => {
      const valueForDisplay = _convertDateToTimeZone(newValue, timezone) as Date;
      if (!isControlled) {
        setInternalValue(valueForDisplay);
        lastUpdatedValueRef.current = valueForDisplay;
      }
      const originalTimezoneValue = _convertDateFromTimeZone(newValue, timezone);
      onChange?.(originalTimezoneValue);
      return originalTimezoneValue;
    },
    [isControlled, onChange, timezone],
  );

  const clearValue = () => {
    setInternalValue(null);
    lastUpdatedValueRef.current = null;
    onChange?.(null);
  };

  return {
    value: internalValue,
    updateValue,
    setInternalValue,
    getLastUpdatedValue,
    clearValue,
  };
};
