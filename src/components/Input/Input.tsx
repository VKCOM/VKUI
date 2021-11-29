import * as React from 'react';
import { getClassName } from '../../helpers/getClassName';
import { classNames } from '../../lib/classNames';
import { FormField, FormFieldProps } from '../FormField/FormField';
import { HasAlign, HasRef, HasRootRef } from '../../types';
import { withAdaptivity, AdaptivityProps } from '../../hoc/withAdaptivity';
import { usePlatform } from '../../hooks/usePlatform';
import './Input.css';

export interface InputProps extends
  React.InputHTMLAttributes<HTMLInputElement>,
  HasRef<HTMLInputElement>,
  HasRootRef<HTMLDivElement>,
  HasAlign,
  AdaptivityProps,
  FormFieldProps {}

export const Input: React.FunctionComponent<InputProps> = withAdaptivity(({
  align,
  getRef,
  className,
  getRootRef,
  sizeY,
  style,
  after,
  ...restProps
}: InputProps) => {
  const platform = usePlatform();
  return (
    <FormField
      vkuiClass={classNames(getClassName('Input', platform), { [`Input--${align}`]: !!align }, `Input--sizeY-${sizeY}`)}
      style={style}
      className={className}
      getRootRef={getRootRef}
      after={after}
      disabled={restProps.disabled}
    >
      <input {...restProps} vkuiClass="Input__el" ref={getRef} />
    </FormField>
  );
}, {
  sizeY: true,
});

Input.defaultProps = {
  type: 'text',
};
