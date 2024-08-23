import { classNames } from '@vkontakte/vkjs';
import { type HasCaps, Typography, type TypographyProps } from '../Typography';
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
  ...restProps
}: FootnoteProps): React.ReactNode => (
  <Typography
    Component={Component}
    normalize={normalize}
    inline={inline}
    className={classNames(className, styles['Footnote'], caps && styles['Footnote--caps'])}
    {...restProps}
  />
);
