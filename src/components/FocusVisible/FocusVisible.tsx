import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import styles from './FocusVisible.module.css';

export type FocusVisibleMode = 'inside' | 'outside';

export interface FocusVisibleProps {
  mode: FocusVisibleMode;
}

/**
 * @see https://vkcom.github.io/VKUI/#/FocusVisible
 */
export const FocusVisible = ({ mode }: FocusVisibleProps) => (
  <span
    aria-hidden="true"
    className={classNames(styles['FocusVisible'], styles[`FocusVisible--mode-${mode}`])}
  />
);
