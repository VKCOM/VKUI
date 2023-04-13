import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { HasCaps, Typography, TypographyProps } from '../Typography';
import styles from './Caption.module.css';

export interface CaptionProps extends TypographyProps, HasCaps {
  level?: '1' | '2' | '3';
}

/**
 * @see https://vkcom.github.io/VKUI/#/Caption
 */
export const Caption = ({
  className,
  level = '1',
  caps,
  Component = 'span',
  normalize = true,
  ...restProps
}: CaptionProps) => {
  return (
    <Typography
      Component={Component}
      normalize={normalize}
      className={classNames(
        className,
        caps && styles['Caption--caps'],
        {
          '1': styles['Caption--level-1'],
          '2': styles['Caption--level-2'],
          '3': styles['Caption--level-3'],
        }[level],
      )}
      {...restProps}
    />
  );
};
