import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { HasRootRef } from '../../types';
import { RootComponent } from '../RootComponent/RootComponent';
import styles from './FocusVisible.module.css';

const stylesMode = {
  inside: styles['FocusVisible--mode-inside'],
  outside: styles['FocusVisible--mode-outside'],
  outline: styles['FocusVisible--mode-outline'],
};

export type FocusVisibleMode = 'inside' | 'outside' | 'outline';

export interface FocusVisibleProps extends HasRootRef<HTMLSpanElement> {
  visible: boolean | undefined;
  mode: FocusVisibleMode;
  thin?: boolean;
}

/**
 * @see https://vkcom.github.io/VKUI/#/FocusVisible
 */
export const FocusVisible = ({ visible, mode, thin, ...restProps }: FocusVisibleProps) => (
  <RootComponent
    {...restProps}
    aria-hidden
    baseClassName={classNames(
      styles['FocusVisible'],
      visible && styles['FocusVisible--visible'],
      thin && styles['FocusVisible--thin'],
      stylesMode[mode],
    )}
  />
);
