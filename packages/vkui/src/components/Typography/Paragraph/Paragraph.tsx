import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { Typography, TypographyProps } from '../Typography';
import styles from './Paragraph.module.css';

export type ParagraphProps = TypographyProps;

/**
 * @see https://vkcom.github.io/VKUI/#/Paragraph
 */
export const Paragraph = ({
  className,
  Component = 'span',
  normalize = false,
  ...restProps
}: ParagraphProps) => {
  return (
    <Typography
      Component={Component}
      normalize={normalize}
      className={classNames(className, styles['Paragraph'])}
      {...restProps}
    />
  );
};
