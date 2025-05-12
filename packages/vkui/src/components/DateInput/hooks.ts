/* eslint-disable jsdoc/require-jsdoc */

import * as React from 'react';
import { convertDateFromTimeZone, convertDateToTimeZone } from '../../lib/date';

interface UseDateInputValueOptions {
  value?: Date | null;
  defaultValue?: Date | null;
  onChange?: (value?: Date) => void;
  timezone?: string;
}

export interface UseDateInputValueReturn {
  value?: Date | null;
  updateValue: (v: Date) => Date;
  setInternalValue: (v?: Date | null) => void;
  getLastUpdatedValue: () => Date | null | undefined;
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
  value?: Date | null,
  defaultValue?: Date | null,
  timezone?: string,
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
  const [internalValue, setInternalValue] = React.useState<Date | null | undefined>(
    getStateValue(null, value, defaultValue, timezone),
  );
  const lastUpdatedValueRef = React.useRef<Date | null | undefined>(
    getStateValue(null, value, defaultValue, timezone),
  );

  const isControlled = value !== undefined;

  React.useEffect(() => {
    if (isControlled) {
      const newInternalValue = _convertDateToTimeZone(value, timezone);
      setInternalValue(newInternalValue);
      lastUpdatedValueRef.current = newInternalValue;
    }
  }, [isControlled, timezone, value]);

  const getLastUpdatedValue = React.useCallback(() => lastUpdatedValueRef.current, []);

  const updateValue = React.useCallback(
    (newValue: Date) => {
      if (!isControlled) {
        setInternalValue(newValue);
        lastUpdatedValueRef.current = newValue;
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
    onChange?.(undefined);
  };

  return {
    value: internalValue,
    updateValue,
    setInternalValue,
    getLastUpdatedValue,
    clearValue,
  };
};
