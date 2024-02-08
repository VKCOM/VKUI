import * as React from 'react';
import { HasComponent, HasRootRef } from '../../types';
import { Subhead } from '../Typography/Subhead/Subhead';
import styles from './FormItem.module.css';

export interface FormItemTopLabelProps
  extends React.AllHTMLAttributes<HTMLElement>,
    HasRootRef<HTMLElement>,
    HasComponent {}

export const FormItemTopLabel = ({
  children,
  Component: componentProp,
  htmlFor,
  ...restProps
}: FormItemTopLabelProps) => {
  const component = componentProp || (htmlFor && 'label') || 'span';
  return (
    <Subhead
      className={styles['FormItemTop__label']}
      Component={component}
      htmlFor={htmlFor}
      {...restProps}
    >
      {children}
    </Subhead>
  );
};
