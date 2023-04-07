import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { TypographyProps } from '../types';
import styles from './Title.module.css';

export interface TitleProps extends TypographyProps {
  level?: '1' | '2' | '3';
}

/**
 * @see https://vkcom.github.io/VKUI/#/Title
 */
export const Title = ({
  className,
  children,
  weight,
  level = '1',
  Component,
  normalize = true,
  ...restProps
}: TitleProps) => {
  if (!Component) {
    Component = ('h' + level) as React.ElementType;
  }

  return (
    <Component
      {...restProps}
      className={classNames(
        className,
        normalize && styles['Title--normalize'],
        {
          '1': styles['Title--level-1'],
          '2': styles['Title--level-2'],
          '3': styles['Title--level-3'],
        }[level],
        weight &&
          {
            '1': styles['Title--weight-1'],
            '2': styles['Title--weight-2'],
            '3': styles['Title--weight-3'],
          }[weight],
      )}
    >
      {children}
    </Component>
  );
};
