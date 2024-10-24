import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import type { HTMLAttributesWithRootRef } from '../../types';
import { Banner } from '../Banner/Banner';
import styles from './FormStatus.module.css';

export interface FormStatusProps extends Omit<HTMLAttributesWithRootRef<HTMLDivElement>, 'title'> {
  mode?: 'default' | 'error';
  title?: React.ReactNode;
}

/**
 * @see https://vkcom.github.io/VKUI/#/FormStatus
 */
export const FormStatus = ({
  mode,
  children,
  className,
  role = mode === 'error' ? 'alert' : 'status',
  title,
  ...restProps
}: FormStatusProps): React.ReactNode => {
  return (
    <Banner
      {...restProps}
      title={title}
      role={role}
      subtitle={children}
      className={classNames(
        'vkuiInternalFormStatus',
        mode === 'error' && classNames(styles.modeError, 'vkuiInternalFormStatus--mode-error'),
        className,
      )}
    />
  );
};
