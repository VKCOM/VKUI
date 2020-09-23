import React, { ElementType, HTMLAttributes, useState } from 'react';
import getClassName from '../../helpers/getClassName';
import classNames from '../../lib/classNames';
import usePlatform from '../../hooks/usePlatform';
import { HasFormStatus, HasRootRef } from '../../types';

export interface FormFieldProps extends
  HTMLAttributes<HTMLElement>,
  HasRootRef<HTMLElement>,
  HasFormStatus {
  Component?: ElementType;
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
  const [hover, setHover] = useState(false);

  const handleMouseEnter = (e: MouseEvent) => {
    e.stopPropagation();
    setHover(true);
  };

  const handleMouseLeave = (e: MouseEvent) => {
    e.stopPropagation();
    setHover(false);
  };

  return (
    <Component
      {...restProps}
      ref={getRootRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={classNames(getClassName('FormField', platform), {
        [`FormField--s-${status}`]: status !== 'default',
      }, className)}
    >
      {children}
      <div className={classNames('FormField__border', {
        'FormField__border--hover': hover,
      })} />
    </Component>
  );
};

FormField.defaultProps = {
  status: 'default',
  Component: 'div',
};

export default FormField;
