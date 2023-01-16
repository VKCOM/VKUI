import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { VisuallyHiddenInput } from '../VisuallyHiddenInput/VisuallyHiddenInput';
import { HasComponent, HasRef } from '../../types';
import styles from './FormLayout.module.css';

const preventDefault = (e: React.FormEvent) => e.preventDefault();

export type FormLayoutProps = React.AllHTMLAttributes<HTMLElement> &
  HasRef<HTMLElement> &
  HasComponent & {
    /**
     * Лейбл для скрытой кнопки отправки формы. Необходим, чтобы кнопка была доступной.
     */
    submitLabel?: string;
  };

/**
 * @see https://vkcom.github.io/VKUI/#/FormLayout
 */
export const FormLayout = ({
  children,
  Component = 'form',
  getRef,
  onSubmit = preventDefault,
  submitLabel = 'Отправить',
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
      {Component === 'form' && onSubmit !== preventDefault && (
        <VisuallyHiddenInput type="submit" value={submitLabel} />
      )}
    </Component>
  );
};
