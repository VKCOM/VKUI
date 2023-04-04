import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { HasRootRef } from '../../types';
import { Banner } from '../Banner/Banner';
import styles from './FormStatus.module.css';

export interface FormStatusProps
  extends React.HTMLAttributes<HTMLDivElement>,
    HasRootRef<HTMLElement> {
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
        'vkuiInternalFormStatus',
        mode === 'error' &&
          classNames(styles['FormStatus--mode-error'], 'vkuiInternalFormStatus--mode-error'),
        className,
      )}
    />
  );
};
