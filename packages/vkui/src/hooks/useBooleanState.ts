import * as React from 'react';

type SetTrue = () => void;
type SetFalse = () => void;
type Toggle = () => void;

export const useBooleanArrayState = (
  defaultValue = false,
): [boolean, SetTrue, SetFalse, Toggle] => {
  const [value, setValue] = React.useState(defaultValue);

  const setTrue = React.useCallback(() => {
    setValue(true);
  }, []);

  const setFalse = React.useCallback(() => {
    setValue(false);
  }, []);

  const toggle = React.useCallback(() => {
    setValue((value) => !value);
  }, []);

  return [value, setTrue, setFalse, toggle];
};

export const useBooleanState = (
  defaultValue = false,
): {
  value: boolean;
  setTrue: () => void;
  setFalse: () => void;
  toggle: () => void;
} => {
  const [value, setTrue, setFalse, toggle] = useBooleanArrayState(defaultValue);

  return { value, setTrue, setFalse, toggle };
};
