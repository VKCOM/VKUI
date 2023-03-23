import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { HasComponent, HasRootRef } from '../../types';
import styles from './Form.module.css';

export interface FormProps
  extends React.AllHTMLAttributes<HTMLElement>,
    HasRootRef<HTMLElement>,
    HasComponent {
  preventDefault?: boolean;
}

/**
 * @since v5.3.0
 * @see https://vkcom.github.io/VKUI/#/Form
 */
export const Form = ({
  Component = 'form',
  onSubmit: onSubmitProp,
  preventDefault = true,
  getRootRef,
  className,
  children,
  ...restProps
}: FormProps) => {
  const onSubmit = (e: React.FormEvent<HTMLElement>) => {
    preventDefault && e.preventDefault();
    onSubmitProp?.(e);
  };

  return (
    <Component
      {...restProps}
      className={classNames(styles['Form'], className)}
      onSubmit={onSubmit}
      ref={getRootRef}
    >
      {children}
    </Component>
  );
};
