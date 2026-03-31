import type * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
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
export const FormItemTopAside = ({ children, className, ...restProps }: FormItemTopAsideProps) => {
  return (
    <Subhead className={classNames(className, styles.aside)} {...restProps}>
      {children}
    </Subhead>
  );
};
