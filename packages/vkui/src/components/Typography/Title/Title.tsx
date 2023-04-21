import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { Typography, TypographyProps } from '../Typography';
import styles from './Title.module.css';

export interface TitleProps extends TypographyProps {
  level?: '1' | '2' | '3';
}

/**
 * @see https://vkcom.github.io/VKUI/#/Title
 */
export const Title = ({
  className,
  level = '1',
  Component,
  normalize = true,
  ...restProps
}: TitleProps) => {
  if (!Component) {
    Component = ('h' + level) as React.ElementType;
  }

  return (
    <Typography
      Component={Component}
      normalize={normalize}
      className={classNames(
        className,
        {
          '1': styles['Title--level-1'],
          '2': styles['Title--level-2'],
          '3': styles['Title--level-3'],
        }[level],
      )}
      {...restProps}
    />
  );
};
