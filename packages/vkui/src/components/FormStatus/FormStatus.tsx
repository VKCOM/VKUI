import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { Banner } from '../Banner/Banner';
import styles from './FormStatus.module.css';

export interface FormStatusProps extends React.HTMLAttributes<HTMLDivElement> {
  mode?: 'default' | 'error';
  header?: React.ReactNode;
}

/**
 * @see https://vkcom.github.io/VKUI/#/FormStatus
 */
export const FormStatus = ({ mode, children, className, ...restProps }: FormStatusProps) => {
  return (
    <Banner
      {...restProps}
      subheader={children}
      className={classNames(
        styles['FormStatus'],
        mode === 'error' && styles['FormStatus--mode-error'],
        className,
      )}
    />
  );
};
