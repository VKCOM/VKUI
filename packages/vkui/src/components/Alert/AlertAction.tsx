import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { usePlatform } from '../../hooks/usePlatform';
import { Platform } from '../../lib/platform';
import { Button, ButtonProps } from '../Button/Button';
import { Tappable } from '../Tappable/Tappable';
import { AlertActionInterface } from './Alert';
import styles from './Alert.module.css';

const AlertActionIos = ({ title, action, autoClose, mode, ...restProps }: AlertActionInterface) => {
  return (
    <Tappable
      Component={restProps.href ? 'a' : 'button'}
      className={classNames(
        styles['Alert__action'],
        mode === 'destructive' && styles['Alert__action--mode-destructive'],
        mode === 'cancel' && styles['Alert__action--mode-cancel'],
      )}
      {...restProps}
    >
      {title}
    </Tappable>
  );
};

const AlertActionBase = ({
  title,
  action,
  autoClose,
  mode,
  ...restProps
}: AlertActionInterface) => {
  const platform = usePlatform();

  let buttonMode: ButtonProps['mode'] = 'tertiary';

  if (platform === Platform.VKCOM) {
    buttonMode = mode === 'cancel' ? 'secondary' : 'primary';
  }

  return (
    <Button
      className={classNames(
        styles['Alert__button'],
        mode === 'cancel' && styles['Alert__button--mode-cancel'],
      )}
      mode={buttonMode}
      size="m"
      {...restProps}
    >
      {title}
    </Button>
  );
};

export const AlertAction = (props: AlertActionInterface) => {
  const platform = usePlatform();

  if (platform === Platform.IOS) {
    return <AlertActionIos {...props} />;
  }

  return <AlertActionBase {...props} />;
};
