import * as React from 'react';
import { Icon20Cancel } from '@vkontakte/icons';
import { classNames } from '@vkontakte/vkjs';
import {
  ModalOutsideButton,
  type ModalOutsideButtonProps,
} from '../ModalOutsideButton/ModalOutsideButton';
import { VisuallyHidden } from '../VisuallyHidden/VisuallyHidden';
import styles from './ModalDismissButton.module.css';

export interface ModalDismissButtonProps extends Omit<ModalOutsideButtonProps, 'children'> {
  /**
   * Содержимое кнопки.
   */
  children?: React.ReactNode;
}

/**
 * @see https://vkui.io/components/modal-dismiss-button
 */
export const ModalDismissButton = ({
  children = 'Закрыть',
  className,
  ...restProps
}: ModalDismissButtonProps): React.ReactNode => {
  return (
    <ModalOutsideButton className={classNames(styles.host, className)} {...restProps}>
      {children && <VisuallyHidden>{children}</VisuallyHidden>}
      <Icon20Cancel />
    </ModalOutsideButton>
  );
};
