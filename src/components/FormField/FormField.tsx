import React, { AllHTMLAttributes, ElementType, useState } from 'react';
import { getClassName } from '../../helpers/getClassName';
import { classNames } from '../../lib/classNames';
import { usePlatform } from '../../hooks/usePlatform';
import { HasRootRef } from '../../types';
import './FormField.css';

export interface FormFieldProps extends
  AllHTMLAttributes<HTMLElement>,
  HasRootRef<HTMLElement> {
  Component?: ElementType;
}

const FormField: React.FunctionComponent<FormFieldProps> = ({
  Component,
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
      vkuiClass={getClassName('FormField', platform)}
    >
      {children}
      <div vkuiClass={classNames('FormField__border', {
        'FormField__border--hover': hover,
      })} />
    </Component>
  );
};

FormField.defaultProps = {
  Component: 'div',
};

export default FormField;
