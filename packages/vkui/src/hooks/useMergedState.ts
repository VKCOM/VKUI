import * as React from 'react';

interface UseMergedStateOptions<T> {
  value?: T;
  defaultValue?: T;
  onChange?: (value: T) => void;
}

export interface UseMergedStateReturn<V> {
  value: V;
  updateValue: (v: V) => void;
  setInternalValue: (v: V) => void;
  getLastUpdatedValue: () => V;
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

export const useMergedState = <T>(
  defaultStateValue: T,
  options: UseMergedStateOptions<T>,
): UseMergedStateReturn<T> => {
  const { value, defaultValue, onChange } = options;
  const isControlled = value !== undefined;

  const [internalValue, setInternalValue] = React.useState<T>(
    getStateValue(defaultStateValue, value, defaultValue),
  );
  const lastUpdatedValueRef = React.useRef<T>(
    getStateValue(defaultStateValue, value, defaultValue),
  );

  React.useEffect(() => {
    if (isControlled) {
      setInternalValue(value);
      lastUpdatedValueRef.current = value;
    }
  }, [isControlled, value]);

  const getLastUpdatedValue = React.useCallback(() => lastUpdatedValueRef.current, []);

  const updateValue = React.useCallback(
    (newValue: T) => {
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
