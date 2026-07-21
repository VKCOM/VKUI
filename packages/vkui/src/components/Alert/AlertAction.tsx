'use client';

import type * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { usePlatform } from '../../hooks/usePlatform';
import type { AnchorHTMLAttributesOnly } from '../../types';
import { Button } from '../Button/Button';
import { Tappable } from '../Tappable/Tappable';
import type { AlertActionInterface } from './Alert';
import styles from './Alert.module.css';

export interface AlertActionProps
  extends Pick<AlertActionInterface, 'Component' | 'mode'>,
    AnchorHTMLAttributesOnly {
  /**
   * Содержимое компонента.
   */
  children: string;
  /**
   * Обработчик нажатия.
   */
  onClick: React.MouseEventHandler<HTMLElement>;
}

const AlertActionIos = ({ mode, ...restProps }: AlertActionProps) => {
  return (
    <Tappable
      Component={restProps.href ? 'a' : 'button'}
      baseClassName={classNames(
        styles.action,
        mode === 'destructive' && styles.actionModeDestructive,
        mode === 'cancel' && styles.actionModeCancel,
      )}
      {...restProps}
    />
  );
};

const AlertActionBase = ({ mode, ...restProps }: AlertActionProps) => {
  return <Button mode="tertiary" size="m" {...restProps} />;
};

export const AlertAction = (props: AlertActionProps): React.ReactNode => {
  const platform = usePlatform();

  if (platform === 'ios') {
    return <AlertActionIos {...props} />;
  }

  return <AlertActionBase {...props} />;
};
