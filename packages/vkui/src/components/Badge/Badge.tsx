import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { HTMLAttributesWithRootRef } from '../../types';
import { RootComponent } from '../RootComponent/RootComponent';
import styles from './Badge.module.css';

const stylesMode = {
  new: styles['Badge--mode-new'],
  prominent: styles['Badge--mode-prominent'],
};

export interface BadgeProps extends HTMLAttributesWithRootRef<HTMLSpanElement> {
  mode: 'new' | 'prominent';
}

/**
 * @see https://vkcom.github.io/VKUI/#/Badge
 */
export const Badge = ({ mode = 'new', ...restProps }: BadgeProps) => (
  <RootComponent
    Component="span"
    baseClassName={classNames(styles['Badge'], stylesMode[mode])}
    {...restProps}
  />
);
