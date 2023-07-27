import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { usePlatform } from '../../hooks/usePlatform';
import { Platform } from '../../lib/platform';
import { Button, ButtonProps } from '../Button/Button';
import { Tappable } from '../Tappable/Tappable';
import { AlertActionInterface } from './Alert';
import styles from './Alert.module.css';

const AlertActionIos = ({ action, ...restProps }: AlertActionProps) => {
  const { title, action: actionProp, autoClose, mode, ...restActionProps } = action;

  return (
    <Tappable
      Component={restActionProps.href ? 'a' : 'button'}
      className={classNames(
        styles['Alert__action'],
        mode === 'destructive' && styles['Alert__action--mode-destructive'],
        mode === 'cancel' && styles['Alert__action--mode-cancel'],
      )}
      {...restActionProps}
      {...restProps}
    >
      {title}
    </Tappable>
  );
};

const AlertActionBase = ({ action, ...restProps }: AlertActionProps) => {
  const { title, action: actionProp, autoClose, mode, ...restActionProps } = action;
  const platform = usePlatform();

  let buttonMode: ButtonProps['mode'] = 'tertiary';

  if (platform === Platform.VKCOM) {
    buttonMode = action.mode === 'cancel' ? 'secondary' : 'primary';
  }

  return (
    <Button
      className={classNames(
        styles['Alert__button'],
        mode === 'cancel' && styles['Alert__button--mode-cancel'],
      )}
      mode={buttonMode}
      size="m"
      {...restActionProps}
      {...restProps}
    >
      {title}
    </Button>
  );
};

export interface AlertActionProps {
  action: AlertActionInterface;
  onClick: VoidFunction;
}
export const AlertAction = (props: AlertActionProps) => {
  const platform = usePlatform();

  if (platform === Platform.IOS) {
    return <AlertActionIos {...props} />;
  }

  return <AlertActionBase {...props} />;
};
