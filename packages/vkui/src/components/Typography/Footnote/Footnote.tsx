import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { HasCaps, Typography, TypographyProps } from '../Typography';
import styles from './Footnote.module.css';

export interface FootnoteProps extends TypographyProps, HasCaps {}

/**
 * @see https://vkcom.github.io/VKUI/#/Footnote
 */
export const Footnote = ({
  className,
  caps,
  Component = 'span',
  normalize = true,
  ...restProps
}: FootnoteProps) => (
  <Typography
    Component={Component}
    normalize={normalize}
    className={classNames(className, styles['Footnote'], caps && styles['Footnote--caps'])}
    {...restProps}
  />
);
