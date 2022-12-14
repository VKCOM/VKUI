import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { Icon20Cancel } from '@vkontakte/icons';
import { Tappable } from '../Tappable/Tappable';
import styles from './ModalDismissButton.module.css';

export type ModalDismissButtonProps = React.HTMLAttributes<HTMLButtonElement>;

/**
 * @see https://vkcom.github.io/VKUI/#/ModalDismissButton
 */
export const ModalDismissButton = ({
  'aria-label': ariaLabel = 'Закрыть',
  className,
  ...restProps
}: ModalDismissButtonProps) => {
  return (
    <Tappable
      className={classNames(styles['ModalDismissButton'], className)}
      {...restProps}
      aria-label={ariaLabel}
      activeMode={styles['ModalDismissButton--active']}
      hoverMode={styles['ModalDismissButton--hover']}
    >
      <Icon20Cancel />
    </Tappable>
  );
};
