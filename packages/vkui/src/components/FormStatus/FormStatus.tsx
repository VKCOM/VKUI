import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { HTMLAttributesWithRootRef } from '../../types';
import { Banner } from '../Banner/Banner';
import styles from './FormStatus.module.css';

export interface FormStatusProps extends HTMLAttributesWithRootRef<HTMLDivElement> {
  mode?: 'default' | 'error';
  header?: React.ReactNode;
}

/**
 * @see https://vkcom.github.io/VKUI/#/FormStatus
 */
export const FormStatus = ({
  mode,
  children,
  className,
  role = mode === 'error' ? 'alert' : 'status',
  ...restProps
}: FormStatusProps) => {
  return (
    <Banner
      {...restProps}
      role={role}
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
