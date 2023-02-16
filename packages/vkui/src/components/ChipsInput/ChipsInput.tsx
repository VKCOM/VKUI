import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { ChipOption } from '../Chip/Chip';
import { ChipsInputBase, ChipsInputBaseProps } from '../ChipsInputBase/ChipsInputBase';
import { FormField, FormFieldProps } from '../FormField/FormField';
import styles from './ChipsInput.module.css';

export interface ChipsInputProps<Option extends ChipOption>
  extends ChipsInputBaseProps<Option>,
    FormFieldProps {}

/**
 * @see https://vkcom.github.io/VKUI/#/ChipsInput
 */
export const ChipsInput = <Option extends ChipOption>({
  style,
  className,
  getRootRef,
  before,
  after,
  status,
  ...restProps
}: ChipsInputProps<Option>) => {
  return (
    <FormField
      getRootRef={getRootRef}
      className={classNames(styles['ChipsInput'], className)}
      style={style}
      disabled={restProps.disabled}
      before={before}
      after={after}
      role="application"
      aria-disabled={restProps.disabled}
      aria-readonly={restProps.readOnly}
      status={status}
    >
      <ChipsInputBase {...restProps} />
    </FormField>
  );
};
