import React, { ElementType, HTMLAttributes, useState } from 'react';
import getClassName from '../../helpers/getClassName';
import classNames from '../../lib/classNames';
import usePlatform from '../../hooks/usePlatform';
import { HasRootRef } from '../../types';

export interface FormFieldProps extends
  HTMLAttributes<HTMLElement>,
  HasRootRef<HTMLElement> {
  Component?: ElementType;
}

const FormField: React.FunctionComponent<FormFieldProps> = ({
  Component,
  className,
  children,
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
      className={classNames(getClassName('FormField', platform), className)}
    >
      <div className="FormField__background" />
      {children}
      <div className={classNames('FormField__border', {
        'FormField__border--hover': hover,
      })} />
    </Component>
  );
};

FormField.defaultProps = {
  Component: 'div',
};

export default FormField;
