import { classNames } from '@vkontakte/vkjs';
import { HasCaps, Typography, TypographyProps } from '../Typography';
import styles from './Footnote.module.css';

export interface FootnoteProps extends TypographyProps, HasCaps {}

/**
 * Используется для основных подписей.
 *
 * @see https://vkcom.github.io/VKUI/#/Footnote
 */
export const Footnote = ({
  className,
  caps,
  Component = 'span',
  normalize = true,
  inline = false,
  colorType = 'inherit',
  ...restProps
}: FootnoteProps) => (
  <Typography
    Component={Component}
    normalize={normalize}
    inline={inline}
    colorType={colorType}
    className={classNames(className, styles['Footnote'], caps && styles['Footnote--caps'])}
    {...restProps}
  />
);
