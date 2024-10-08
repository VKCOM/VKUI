import * as React from 'react';
import { Icon20Cancel } from '@vkontakte/icons';
import { classNames } from '@vkontakte/vkjs';
import { Tappable, type TappableProps } from '../Tappable/Tappable';
import { VisuallyHidden } from '../VisuallyHidden/VisuallyHidden';
import styles from './ModalDismissButton.module.css';

export type ModalDismissButtonProps = Omit<TappableProps, 'mode' | 'onClose'>;

/**
 * @see https://vkcom.github.io/VKUI/#/ModalDismissButton
 */
export const ModalDismissButton = ({
  children = 'Закрыть',
  className,
  ...restProps
}: ModalDismissButtonProps): React.ReactNode => {
  return (
    <Tappable
      className={classNames(styles.host, className)}
      {...restProps}
      activeMode={styles.active}
      hoverMode={styles.hover}
    >
      {children && <VisuallyHidden>{children}</VisuallyHidden>}
      <Icon20Cancel />
    </Tappable>
  );
};
