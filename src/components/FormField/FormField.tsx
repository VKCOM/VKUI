import React, { AllHTMLAttributes, ElementType, ReactNode, useState } from 'react';
import { getClassName } from '../../helpers/getClassName';
import { classNames } from '../../lib/classNames';
import { usePlatform } from '../../hooks/usePlatform';
import { HasRootRef } from '../../types';
import { hasReactNode } from '../../lib/utils';
import { withAdaptivity, AdaptivityProps } from '../../hoc/withAdaptivity';

export interface FormFieldProps {
  /**
   * Иконка 12|16|20|24|28 или `IconButton`.
   */
  after?: ReactNode;
}

interface FormFieldOwnProps extends
  AllHTMLAttributes<HTMLElement>,
  HasRootRef<HTMLElement>,
  AdaptivityProps,
  FormFieldProps {
  Component?: ElementType;
  disabled?: boolean;
}

const FormField: React.FunctionComponent<FormFieldOwnProps> = withAdaptivity(({
  Component,
  children,
  getRootRef,
  after,
  disabled,
  sizeY,
  ...restProps
}: FormFieldOwnProps) => {
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
      vkuiClass={classNames(
        getClassName('FormField', platform),
        `FormField--sizeY-${sizeY}`,
        {
          'FormField--disabled': disabled,
        },
      )}
    >
      {children}
      {hasReactNode(after) && (
        <div vkuiClass="FormField__after">
          {after}
        </div>
      )}
      <div vkuiClass={classNames('FormField__border', {
        'FormField__border--hover': !disabled && hover,
      })} />
    </Component>
  );
}, {
  sizeY: true,
});

FormField.defaultProps = {
  Component: 'div',
};

export default FormField;
