import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { warnOnce } from '../../lib/warnOnce';
import { HasComponent, HasRef } from '../../types';
import styles from './FormLayout.module.css';

const preventDefault = (e: React.FormEvent) => e.preventDefault();

export type FormLayoutProps = React.AllHTMLAttributes<HTMLElement> &
  HasRef<HTMLElement> &
  HasComponent;

const warn = warnOnce('FormLayout');
/**
 * @deprecated since v5.4.0
 * @see https://vkcom.github.io/VKUI/#/FormLayout
 */
export const FormLayout = ({
  children,
  Component = 'form',
  getRef,
  onSubmit = preventDefault,
  className,
  ...restProps
}: FormLayoutProps) => {
  if (process.env.NODE_ENV === 'development') {
    warn('Компонент устарел и будет удален в v6. Используйте https://vkcom.github.io/VKUI/#/Form');
  }

  return (
    <Component
      {...restProps}
      className={classNames(styles['FormLayout'], className)}
      onSubmit={onSubmit}
      ref={getRef}
    >
      {children}
      {Component === 'form' && (
        <input type="submit" className={styles['FormLayout__submit']} value="" />
      )}
    </Component>
  );
};
