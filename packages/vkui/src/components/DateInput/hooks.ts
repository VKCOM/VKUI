import * as React from 'react';
import { convertDateFromTimeZone, convertDateToTimeZone } from '../../lib/date';

interface UseDateInputValueOptions {
  value?: Date;
  defaultValue?: Date;
  onChange?: (value?: Date) => void;
  timezone?: string;
}

export interface UseDateInputValueReturn {
  value?: Date;
  updateValue: (v?: Date) => Date | undefined;
  setInternalValue: (v?: Date) => void;
  getLastUpdatedValue: () => Date | undefined;
}

const _convertDateToTimeZone = (date?: Date, timezone?: string): Date | undefined => {
  return convertDateToTimeZone(date, timezone) || undefined;
};

const _convertDateFromTimeZone = (date?: Date, timezone?: string): Date | undefined => {
  return convertDateFromTimeZone(date, timezone) || undefined;
};

const getStateValue = (
  defaultStateValue?: Date,
  value?: Date,
  defaultValue?: Date,
  timezone?: string,
): Date | undefined => {
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
  const isControlled = value !== undefined;

  const [internalValue, setInternalValue] = React.useState<Date | undefined>(
    getStateValue(undefined, value, defaultValue, timezone),
  );
  const lastUpdatedValueRef = React.useRef<Date | undefined>(
    getStateValue(undefined, value, defaultValue, timezone),
  );

  React.useEffect(() => {
    if (isControlled) {
      setInternalValue(_convertDateToTimeZone(value, timezone));
      lastUpdatedValueRef.current = _convertDateToTimeZone(value, timezone);
    }
  }, [isControlled, timezone, value]);

  const getLastUpdatedValue = React.useCallback(() => lastUpdatedValueRef.current, []);

  const updateValue = React.useCallback(
    (newValue?: Date) => {
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

  return {
    value: internalValue,
    updateValue,
    setInternalValue,
    getLastUpdatedValue,
  };
};
