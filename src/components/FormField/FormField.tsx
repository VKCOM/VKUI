import React, { ElementType, HTMLAttributes } from 'react';
import getClassName from '../../helpers/getClassName';
import classNames from '../../lib/classNames';
import usePlatform from '../../hooks/usePlatform';
import { HasFormLabels, HasFormStatus, HasRootRef } from '../../types';

export interface FormFieldProps extends
  HTMLAttributes<HTMLElement>,
  HasRootRef<HTMLElement>,
  HasFormStatus,
  HasFormLabels {
  Component?: ElementType;
}

const FormField: React.FunctionComponent<FormFieldProps> = ({
  Component,
  className,
  children,
  status,
  getRootRef,
  top,
  bottom,
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
