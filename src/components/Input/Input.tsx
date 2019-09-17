import React, { FunctionComponent, HTMLAttributes } from 'react';
import classNames from '../../lib/classNames';
import FormField, { FormFieldProps } from '../FormField/FormField';
import { HasRef, HasRootRef } from '../../types/props';

export interface InputProps extends HTMLAttributes<HTMLInputElement>, HasRef<HTMLInputElement>, HasRootRef<HTMLDivElement> {
  alignment?: 'left' | 'center' | 'right';
  /**
   * Значение `verified` устарело и будет удалено в 3.0.0. Используйте вместо него `valid`
   */
  status?: FormFieldProps['status'];
  type?: string
}

const Input: FunctionComponent<InputProps> = ({
  alignment,
  status,
  getRef,
  className,
  getRootRef,
  ...restProps
}: InputProps) => {
  return (
    <FormField
      className={classNames('Input', className, { [`Input--${alignment}`]: !!alignment })}
      status={status}
      getRootRef={getRootRef}
    >
      <input {...restProps} className="Input__el" ref={getRef} />
    </FormField>
  );
};

Input.defaultProps = {
  type: 'text'
};

export default Input;
