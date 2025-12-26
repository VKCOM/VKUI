'use client';

import { type ChangeEvent, useState } from 'react';
import * as React from 'react';
import { AdaptivityProvider } from '../AdaptivityProvider/AdaptivityProvider';
import { CustomSelect, type SelectProps } from '../CustomSelect/CustomSelect';
import styles from './CalendarTime.module.css';

const selectFilterFn = () => true;

const validateValue = (
  value: string,
  validValues: Array<{
    value: number;
    label: string;
  }>,
): boolean => {
  const numValue = Number(value);
  return !isNaN(numValue) && validValues.some((v) => v.value === numValue);
};

/* eslint-disable jsdoc/require-jsdoc */
interface CalendarTimePickerProps extends Pick<SelectProps, 'onInputKeyDown'> {
  value: Date;
  getNumericValue: (date: Date) => number;
  options: Array<{
    value: number;
    label: string;
  }>;
  onChange?: (value: Date) => void;
  setTime: (value: Date, time: number) => Date;
  inputRef: React.Ref<HTMLInputElement>;
  inputLabel?: string;
  inputTestId?: string;
}
/* eslint-enable jsdoc/require-jsdoc */

export const CalendarTimePicker = ({
  value,
  getNumericValue,
  options,
  onChange,
  setTime,
  inputRef,
  inputLabel,
  inputTestId,
  onInputKeyDown,
}: CalendarTimePickerProps) => {
  const [inputValue, setInputValue] = useState<string | undefined>(undefined);

  const onBlur = React.useCallback(() => {
    setInputValue(undefined);
  }, []);

  const _onChange = React.useCallback(
    (_: ChangeEvent<HTMLSelectElement>, newValue: SelectProps['value']) =>
      onChange?.(setTime(value, Number(newValue))),
    [onChange, setTime, value],
  );

  const onPickerValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    const numericValue = e.target.value.replace(/\D/g, '');
    setInputValue(numericValue);
    if (validateValue(numericValue, options)) {
      onChange?.(setTime(value, Number(numericValue)));
    }
  };

  return (
    <div className={styles.picker}>
      <AdaptivityProvider density="compact">
        <CustomSelect
          value={getNumericValue(value)}
          options={options}
          onChange={_onChange}
          forceDropdownPortal={false}
          searchable
          filterFn={selectFilterFn}
          onInputChange={onPickerValueChange}
          onInputKeyDown={onInputKeyDown}
          getSelectInputRef={inputRef}
          slotProps={{
            input: {
              'aria-label': inputLabel,
              'data-testid': inputTestId,
              'value': inputValue,
              onBlur,
            },
          }}
        />
      </AdaptivityProvider>
    </div>
  );
};
