import React, {FunctionComponent, HTMLAttributes, ReactNode} from 'react';
import getClassName from '../../helpers/getClassName';
import classNames from '../../lib/classNames';
import usePlatform from '../../hooks/usePlatform';
import { HasChildren } from '../../types/props';

export interface FormLayoutGroupProps extends HTMLAttributes<HTMLDivElement>, HasChildren {
  top?: ReactNode;
  bottom?: ReactNode;
  status?: 'default' | 'error' | 'valid'
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
