import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { HasComponent, HasRef, HasRootRef } from '../../types';
import styles from './FormLayout.module.css';

const preventDefault = (e: React.FormEvent) => e.preventDefault();

export type FormLayoutProps = React.AllHTMLAttributes<HTMLElement> &
  HasRef<HTMLElement> &
  HasRootRef<HTMLElement> &
  HasComponent;

/**
 * @see https://vkcom.github.io/VKUI/#/FormLayout
 */
export const FormLayout = ({
  children,
  Component = 'form',
  getRootRef,
  onSubmit = preventDefault,
  className,
  ...restProps
}: FormLayoutProps) => {
  return (
    <Component
      {...restProps}
      className={classNames(styles['FormLayout'], className)}
      onSubmit={onSubmit}
      ref={getRootRef}
    >
      {children}
      {Component === 'form' && (
        <input type="submit" className={styles['FormLayout__submit']} value="" />
      )}
    </Component>
  );
};
