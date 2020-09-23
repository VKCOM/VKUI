import React, { FunctionComponent, HTMLAttributes } from 'react';
import getClassName from '../../helpers/getClassName';
import classNames from '../../lib/classNames';
import usePlatform from '../../hooks/usePlatform';
import { HasFormLabels, HasFormStatus } from '../../types';

export interface FormLayoutGroupProps extends
  HTMLAttributes<HTMLDivElement>,
  HasFormStatus,
  HasFormLabels {
  mode?: 'vertical' | 'horizontal';
}

const FormLayoutGroup: FunctionComponent<FormLayoutGroupProps> = ({
  children,
  top,
  bottom,
  className,
  status,
  mode = 'vertical',
  ...restProps
}: FormLayoutGroupProps) => {
  const platform = usePlatform();

  return (
    <div className={classNames(getClassName('FormLayoutGroup', platform), `FormLayoutGroup--${mode}`, className)} {...restProps}>
      {children}
    </div>
  );
};

export default FormLayoutGroup;
