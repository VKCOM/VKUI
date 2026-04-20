import * as React from 'react';

type SetTrue = () => void;
type SetFalse = () => void;
type Toggle = () => void;

export const useBooleanState = (
  defaultValue = false,
  onChange?: (v: boolean) => void,
): [boolean, SetTrue, SetFalse, Toggle] => {
  const [value, setValue] = React.useState(defaultValue);

  const setTrue = React.useCallback(() => {
    setValue((value) => {
      if (!value) {
        onChange?.(true);
        return true;
      }
      return value;
    });
  }, [onChange]);

  const setFalse = React.useCallback(() => {
    setValue((value) => {
      if (value) {
        onChange?.(false);
        return false;
      }
      return value;
    });
  }, [onChange]);

  const toggle = React.useCallback(() => {
    setValue((value) => {
      onChange?.(!value);
      return !value;
    });
  }, [onChange]);

  return [value, setTrue, setFalse, toggle];
};
