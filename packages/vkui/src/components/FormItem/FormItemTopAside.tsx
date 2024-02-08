import * as React from 'react';
import { HasComponent, HasRootRef } from '../../types';
import { Subhead } from '../Typography/Subhead/Subhead';
import styles from './FormItem.module.css';

export interface FormItemTopAsideProps
  extends React.AllHTMLAttributes<HTMLElement>,
    HasRootRef<HTMLElement>,
    HasComponent {}

export const FormItemTopAside = ({ children, ...restProps }: FormItemTopAsideProps) => {
  return (
    <Subhead className={styles['FormItemTop__aside']} {...restProps}>
      {children}
    </Subhead>
  );
};
