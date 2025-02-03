'use client';

import * as React from 'react';
import { Tappable, type TappableProps } from '../Tappable/Tappable';
import { VisuallyHidden } from '../VisuallyHidden/VisuallyHidden';
import styles from './ModalOutsideButton.module.css';

export interface ModalOutsideButtonProps extends TappableProps {
  /**
   * Текст для скринридера
   */
  'aria-label'?: string;
  /**
   * Рекомендуется использовать иконки размером `20px`
   */
  'children': React.ReactNode;
}

/**
 * @see https://vkcom.github.io/VKUI/#/ModalOutsideButton
 */
export const ModalOutsideButton = ({
  children,
  'aria-label': ariaLabel,
  ...restProps
}: ModalOutsideButtonProps) => {
  return (
    <Tappable
      baseClassName={styles.host}
      activeMode={styles.active}
      hoverMode={styles.hover}
      {...restProps}
    >
      {ariaLabel && <VisuallyHidden>{ariaLabel}</VisuallyHidden>}
      {children}
    </Tappable>
  );
};
