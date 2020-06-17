import React, { FunctionComponent, HTMLAttributes } from 'react';
import getClassName from '../../helpers/getClassName';
import classNames from '../../lib/classNames';
import usePlatform from '../../hooks/usePlatform';
import { HasFormLabels, HasFormStatus } from '../../types';

export interface FormLayoutGroupProps extends
  HTMLAttributes<HTMLDivElement>,
  HasFormStatus,
  HasFormLabels {}

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
