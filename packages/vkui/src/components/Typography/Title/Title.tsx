import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { Typography, TypographyProps } from '../Typography';
import styles from './Title.module.css';

const stylesLevel = {
  '1': styles.hostLevel1,
  '2': styles.hostLevel2,
  '3': styles.hostLevel3,
};

export interface TitleProps extends TypographyProps {
  level?: '1' | '2' | '3';
}

/**
 * Используется для заголовков.
 *
 * @see https://vkcom.github.io/VKUI/#/Title
 */
export const Title = ({
  className,
  level = '1',
  Component = 'span',
  normalize = true,
  ...restProps
}: TitleProps) => {
  return (
    <Typography
      Component={Component}
      normalize={normalize}
      className={classNames(className, stylesLevel[level])}
      {...restProps}
    />
  );
};
