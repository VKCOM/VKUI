import React, { FunctionComponent, HTMLAttributes, ReactNode } from 'react';
import getClassName from '../../helpers/getClassName';
import classNames from '../../lib/classNames';
import usePlatform from '../../hooks/usePlatform';
import { HasChildren, HasFormStatus } from '../../types/props';

export interface FormLayoutGroupProps extends HTMLAttributes<HTMLDivElement>, HasChildren, HasFormStatus {
  top?: ReactNode;
  bottom?: ReactNode;
}

const FormLayoutGroup: FunctionComponent<FormLayoutGroupProps> = ({
  children,
  top,
  bottom,
  className,
  status,
  ...restProps
}: FormLayoutGroupProps) => {
  const platform = usePlatform();

  return (
    <div className={classNames(getClassName('FormLayoutGroup', platform), className)} {...restProps}>
      {children}
    </div>
  );
};

export default FormLayoutGroup;
