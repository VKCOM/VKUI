import * as React from 'react';

export const useBooleanRef = (defaultValue = false) => {
  const valueRef = React.useRef(defaultValue);

  const setValue = React.useCallback((value: boolean) => {
    valueRef.current = value;
  }, []);

  const setTrue = React.useCallback(() => {
    valueRef.current = true;
  }, []);

  const setFalse = React.useCallback(() => {
    valueRef.current = false;
  }, []);

  const toggle = React.useCallback(() => {
    valueRef.current = !valueRef.current;
  }, []);

  return React.useMemo(
    () => ({
      setValue,
      setTrue,
      setFalse,
      toggle,
      get value() {
        return valueRef.current;
      },
    }),
    [setFalse, setTrue, setValue, toggle],
  );
};
