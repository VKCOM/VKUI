import * as React from 'react';
import { Icon20Cancel } from '@vkontakte/icons';
import { classNames } from '@vkontakte/vkjs';
import { HTMLAttributesWithRootRef } from '../../types';
import { Tappable } from '../Tappable/Tappable';
import styles from './ModalDismissButton.module.css';

export type ModalDismissButtonProps = HTMLAttributesWithRootRef<HTMLButtonElement>;

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
