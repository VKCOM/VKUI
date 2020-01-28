import React, { ElementType, HTMLAttributes, ReactNode } from 'react';
import getClassName from '../../helpers/getClassName';
import classNames from '../../lib/classNames';
import usePlatform from '../../hooks/usePlatform';
import { HasChildren, HasFormStatus, HasRootRef } from '../../types/props';

export interface FormFieldProps extends
  HTMLAttributes<HTMLElement>,
  HasRootRef<HTMLElement>,
  HasChildren,
  HasFormStatus {
  Component?: ElementType;
  top?: ReactNode;
  bottom?: ReactNode;
}

const FormField: React.FunctionComponent<FormFieldProps> = ({
  Component,
  className,
  children,
  status,
  getRootRef,
  ...restProps
}: FormFieldProps) => {
  const platform = usePlatform();
  return (
    <Component
      {...restProps}
      ref={getRootRef}
      className={classNames(getClassName('FormField', platform), {
        [`FormField--s-${status}`]: status !== 'default',
      }, className)}
    >
      {children}
      <div className="FormField__border" />
    </Component>
  );
};

FormField.defaultProps = {
  status: 'default',
  Component: 'div',
};

export default FormField;
