'use client';

import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { useAdaptivity } from '../../hooks/useAdaptivity';
import type { HasAlign, HasDataAttribute, HasRef, HasRootRef } from '../../types';
import { FormField, type FormFieldOwnProps, type FormFieldProps } from '../FormField/FormField';
import {
  UnstyledTextField,
  type UnstyledTextFieldAsInputProps,
} from '../UnstyledTextField/UnstyledTextField';
import styles from './Input.module.css';

const sizeYClassNames = {
  none: styles.sizeYNone,
  compact: styles.sizeYCompact,
};

export interface InputBaseProps
  extends HasRootRef<HTMLDivElement>,
    HasAlign,
    Omit<FormFieldProps, 'maxHeight'> {}

export interface InputLegacyProps
  extends InputBaseProps,
    React.InputHTMLAttributes<HTMLInputElement>,
    HasRef<HTMLInputElement> {
  /**
   *
   */
  slotsProps?: undefined;
}

export interface InputModernProps
  extends InputBaseProps,
    Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'>,
    Pick<
      React.InputHTMLAttributes<HTMLInputElement>,
      'type' | 'value' | 'defaultValue' | 'name' | 'disabled' | 'onChange'
    > {
  /**
   *
   */
  slotsProps: {
    input?: Omit<
      React.InputHTMLAttributes<HTMLInputElement>,
      'type' | 'value' | 'defaultValue' | 'name' | 'disabled' | 'onChange'
    > &
      HasRootRef<HTMLInputElement> &
      HasDataAttribute;
  };
}

export type InputProps = InputLegacyProps | InputModernProps;

const useProps = (
  props: Omit<
    InputProps,
    'align' | 'className' | 'getRootRef' | 'style' | 'before' | 'after' | 'status' | 'mode'
  >,
): [FormFieldOwnProps, Omit<UnstyledTextFieldAsInputProps, 'as'>] => {
  const [formFieldProps, inputProps] = React.useMemo<
    [FormFieldOwnProps, Omit<UnstyledTextFieldAsInputProps, 'as'>]
  >(() => {
    if (props.slotsProps) {
      const {
        slotsProps,
        type = 'text',
        value,
        defaultValue,
        onChange,
        disabled,
        name,
        ...rootProps
      } = props as InputModernProps;
      const inputProps = {
        type,
        value,
        defaultValue,
        onChange,
        name,
        disabled,
        ...props.slotsProps.input,
      };
      return [rootProps, inputProps];
    } else {
      const { type = 'text', getRef, ...inputProps } = props as InputLegacyProps;

      return [{}, { ...inputProps, getRootRef: getRef, type }];
    }
  }, [props]);
  return [formFieldProps, inputProps];
};

/**
 * @see https://vkui.io/components/input
 */
export const Input = ({
  align = 'left',
  className,
  getRootRef,
  style,
  before,
  after,
  status,
  mode,
  ...restProps
}: InputProps): React.ReactNode => {
  const { sizeY = 'none' } = useAdaptivity();
  const [formFieldRestProps, inputRestProps] = useProps(restProps);

  return (
    <FormField
      style={style}
      className={classNames(
        styles.host,
        align === 'right' && styles.alignRight,
        align === 'center' && styles.alignCenter,
        sizeY !== 'regular' && sizeYClassNames[sizeY],
        before && styles.hasBefore,
        after && styles.hasAfter,
        className,
      )}
      getRootRef={getRootRef}
      before={before}
      after={after}
      disabled={inputRestProps.disabled}
      mode={mode}
      status={status}
      {...formFieldRestProps}
    >
      <UnstyledTextField {...inputRestProps} as="input" className={styles.el} />
    </FormField>
  );
};
