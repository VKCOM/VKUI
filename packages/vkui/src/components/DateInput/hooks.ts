import * as React from 'react';

interface UseDateInputValueOptions {
  value?: Date;
  defaultValue?: Date;
  onChange?: (value?: Date) => void;
}

export interface UseDateInputValueReturn {
  value?: Date;
  updateValue: (v?: Date) => void;
  setInternalValue: (v?: Date) => void;
  getLastUpdatedValue: () => Date | undefined;
}

const getStateValue = <T>(defaultStateValue: T, value?: T, defaultValue?: T): T => {
  if (value !== undefined) {
    return value;
  }
  if (defaultValue !== undefined) {
    return defaultValue;
  }
  return defaultStateValue;
};

export const useDateInputValue = ({
  value,
  defaultValue,
  onChange,
}: UseDateInputValueOptions): UseDateInputValueReturn => {
  const isControlled = value !== undefined;

  const [internalValue, setInternalValue] = React.useState<Date | undefined>(
    getStateValue(undefined, value, defaultValue),
  );
  const lastUpdatedValueRef = React.useRef<Date | undefined>(
    getStateValue(undefined, value, defaultValue),
  );

  React.useEffect(() => {
    if (isControlled) {
      setInternalValue(value);
      lastUpdatedValueRef.current = value;
    }
  }, [isControlled, value]);

  const getLastUpdatedValue = React.useCallback(() => lastUpdatedValueRef.current, []);

  const updateValue = React.useCallback(
    (newValue?: Date) => {
      if (!isControlled) {
        setInternalValue(newValue);
        lastUpdatedValueRef.current = newValue;
      }
      onChange?.(newValue);
    },
    [isControlled, onChange],
  );

  return {
    value: internalValue,
    updateValue,
    setInternalValue,
    getLastUpdatedValue,
  };
};
