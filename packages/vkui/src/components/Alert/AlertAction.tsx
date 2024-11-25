'use client';

import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { usePlatform } from '../../hooks/usePlatform';
import type { AnchorHTMLAttributesOnly } from '../../types';
import { Button, type ButtonProps } from '../Button/Button';
import { Tappable } from '../Tappable/Tappable';
import type { AlertActionInterface } from './Alert';
import styles from './Alert.module.css';

export interface AlertActionProps
  extends Pick<AlertActionInterface, 'Component' | 'mode'>,
    AnchorHTMLAttributesOnly {
  children: string;
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
  const platform = usePlatform();

  let buttonMode: ButtonProps['mode'] = 'tertiary';

  if (platform === 'vkcom') {
    buttonMode = mode === 'cancel' ? 'secondary' : 'primary';
  }

  return (
    <Button
      className={classNames(styles.button, mode === 'cancel' && styles.buttonModeCancel)}
      mode={buttonMode}
      size="m"
      {...restProps}
    />
  );
};

export const AlertAction = (props: AlertActionProps): React.ReactNode => {
  const platform = usePlatform();

  if (platform === 'ios') {
    return <AlertActionIos {...props} />;
  }

  return <AlertActionBase {...props} />;
};
