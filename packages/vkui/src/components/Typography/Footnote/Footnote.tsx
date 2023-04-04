import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { HasCaps, TypographyProps } from '../types';
import styles from './Footnote.module.css';

export interface FootnoteProps extends TypographyProps, HasCaps {}

/**
 * @see https://vkcom.github.io/VKUI/#/Footnote
 */
export const Footnote = ({
  className,
  children,
  weight,
  caps,
  Component = 'span',
  ...restProps
}: FootnoteProps) => {
  return (
    <Component
      {...restProps}
      className={classNames(
        className,
        styles['Footnote'],
        caps && styles['Footnote--caps'],
        weight &&
          {
            '1': styles['Footnote--weight-1'],
            '2': styles['Footnote--weight-2'],
            '3': styles['Footnote--weight-3'],
          }[weight],
      )}
    >
      {children}
    </Component>
  );
};
