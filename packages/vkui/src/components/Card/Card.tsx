import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { HTMLAttributesWithRootRef } from '../../types';
import { RootComponent } from '../RootComponent/RootComponent';
import styles from './Card.module.css';

export interface CardProps extends HTMLAttributesWithRootRef<HTMLDivElement> {
  mode?: 'tint' | 'shadow' | 'outline' | 'outline-tint';
}

/**
 * @see https://vkcom.github.io/VKUI/#/Card
 */
export const Card = ({ mode = 'tint', ...restProps }: CardProps) => {
  const withBorder = mode === 'outline' || mode === 'outline-tint';
  return (
    <RootComponent
      {...restProps}
      baseClassName={classNames(
        styles['Card'],
        mode === 'outline' && styles['Card--mode-outline'],
        mode === 'shadow' && styles['Card--mode-shadow'],
        withBorder && styles['Card--withBorder'],
      )}
    />
  );
};
