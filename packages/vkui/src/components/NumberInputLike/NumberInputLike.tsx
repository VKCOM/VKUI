'use client';

import { InputLike, type InputLikeProps } from '../InputLike/InputLike';
/* eslint-disable jsdoc/require-jsdoc */

export interface NumberInputLikeProps extends Omit<InputLikeProps, 'value'> {
  value?: number | string;
  maxValue?: number;
  minValue?: number;
}

const stringifyValue = (
  value: NumberInputLikeProps['value'],
  length: number,
): string | undefined => {
  if (value === undefined) {
    return undefined;
  }
  if (typeof value === 'string') {
    return value;
  }
  return String(value).padStart(length, '0');
};

export const NumberInputLike: React.FC<NumberInputLikeProps> = ({
  value,
  length,
  minValue,
  maxValue,
  readOnly,
  disabled,
  label,
  onKeyDown,
  'aria-label': ariaLabel,
  ...restProps
}) => {
  const stringValue = stringifyValue(value, length);
  return (
    <InputLike
      role="spinbutton"
      value={stringValue}
      length={length}
      aria-valuemin={minValue}
      aria-valuemax={maxValue}
      aria-valuenow={value !== undefined ? Number(value) : undefined}
      aria-valuetext={stringValue}
      aria-readonly={readOnly}
      aria-disabled={disabled}
      aria-label={label}
      label={label}
      tabIndex={readOnly ? -1 : 0}
      onKeyDown={readOnly ? undefined : onKeyDown}
      {...restProps}
    />
  );
};
