import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { HasComponent, HasRef } from '../../types';
import styles from './FormLayout.module.css';

const preventDefault = (e: React.FormEvent) => e.preventDefault();

export type FormLayoutProps = React.AllHTMLAttributes<HTMLElement> &
  HasRef<HTMLElement> &
  HasComponent;

/**
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
  return (
    <Component
      {...restProps}
      className={classNames(styles['FormLayout'], className)}
      onSubmit={onSubmit}
      ref={getRef}
    >
      <div className={styles['FormLayout__container']}>{children}</div>
      {Component === 'form' && (
        <input type="submit" className={styles['FormLayout__submit']} value="" />
      )}
    </Component>
  );
};
