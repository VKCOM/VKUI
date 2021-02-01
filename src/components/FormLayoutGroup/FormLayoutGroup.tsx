import React, { FunctionComponent, HTMLAttributes } from 'react';
import getClassName from '../../helpers/getClassName';
import classNames from '../../lib/classNames';
import usePlatform from '../../hooks/usePlatform';

export interface FormLayoutGroupProps extends HTMLAttributes<HTMLDivElement> {
  mode?: 'vertical' | 'horizontal';
}

const FormLayoutGroup: FunctionComponent<FormLayoutGroupProps> = ({
  children,
  className,
  mode,
  ...restProps
}: FormLayoutGroupProps) => {
  const platform = usePlatform();

  return (
    <div className={classNames(getClassName('FormLayoutGroup', platform), `FormLayoutGroup--${mode}`, className)} {...restProps}>
      {children}
    </div>
  );
};

FormLayoutGroup.defaultProps = {
  mode: 'vertical',
  removePlaceholder: 'Удалить',
};

export default FormLayoutGroup;
