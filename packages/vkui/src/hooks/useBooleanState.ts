import * as React from 'react';

export const useBooleanState = (
  defaultValue = false,
): {
  value: boolean;
  setTrue: () => void;
  setFalse: () => void;
  toggle: () => void;
} => {
  const [value, setValue] = React.useState(defaultValue);

  const setTrue = React.useCallback(() => {
    setValue(true);
  }, []);

  const setFalse = React.useCallback(() => {
    setValue(false);
  }, []);

  const toggle = React.useCallback(() => {
    setValue(!value);
  }, [value]);

  return { value, setTrue, setFalse, toggle };
};
