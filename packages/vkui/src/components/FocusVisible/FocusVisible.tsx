import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import styles from './FocusVisible.module.css';

export type FocusVisibleMode = 'inside' | 'outside' | 'outline';

export interface FocusVisibleProps {
  visible: boolean | undefined;
  mode: FocusVisibleMode;
  thin?: boolean;
}

/**
 * @see https://vkcom.github.io/VKUI/#/FocusVisible
 */
export const FocusVisible = ({ visible, mode, thin, ...restProps }: FocusVisibleProps) => (
  <span
    {...restProps}
    aria-hidden
    className={classNames(
      styles['FocusVisible'],
      visible && styles['FocusVisible--visible'],
      thin && styles['FocusVisible--thin'],
      {
        inside: styles['FocusVisible--mode-inside'],
        outside: styles['FocusVisible--mode-outside'],
        outline: styles['FocusVisible--mode-outline'],
      }[mode],
    )}
  />
);
