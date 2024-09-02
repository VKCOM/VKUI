import * as React from 'react';
import type { HasComponent, HasRootRef } from '../../../types';
import { Subhead } from '../../Typography/Subhead/Subhead';
import styles from '../FormItem.module.css';

export interface FormItemTopAsideProps
  extends React.AllHTMLAttributes<HTMLElement>,
    HasRootRef<HTMLElement>,
    HasComponent {}

/**
 * Отвечает за отрисовку дополнительного контента справа от заголовка поля.
 *
 * @since 6.1.0
 *
 */
export const FormItemTopAside: React.FC<FormItemTopAsideProps> = ({
  children,
  ...restProps
}: FormItemTopAsideProps) => {
  return (
    <Subhead className={styles['FormItemTop__aside']} {...restProps}>
      {children}
    </Subhead>
  );
};

FormItemTopAside.displayName = 'FormItemTopAside';
