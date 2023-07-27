import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { HasRootRef } from '../../types';
import styles from './Card.module.css';

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    HasRootRef<HTMLDivElement> {
  mode?: 'tint' | 'shadow' | 'outline' | 'outline-tint';
}

/**
 * @see https://vkcom.github.io/VKUI/#/Card
 */
export const Card = ({
  mode = 'tint',
  children,
  getRootRef,
  className,
  ...restProps
}: CardProps) => {
  const withBorder = mode === 'outline' || mode === 'outline-tint';
  return (
    <div
      {...restProps}
      ref={getRootRef}
      className={classNames(
        styles['Card'],
        mode === 'outline' && styles['Card--mode-outline'],
        mode === 'shadow' && styles['Card--mode-shadow'],
        withBorder && styles['Card--withBorder'],
        className,
      )}
    >
      {children}
    </div>
  );
};
