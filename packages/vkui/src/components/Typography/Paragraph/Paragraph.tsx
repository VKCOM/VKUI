import { classNames } from '@vkontakte/vkjs';
import { Typography, type TypographyProps } from '../Typography';
import styles from './Paragraph.module.css';

export type ParagraphProps = TypographyProps;

/**
 * Используется для основного текста.
 *
 * @see https://vkcom.github.io/VKUI/#/Paragraph
 */
export const Paragraph = ({
  className,
  Component = 'span',
  normalize = false,
  inline = false,
  ...restProps
}: ParagraphProps): React.ReactNode => {
  return (
    <Typography
      Component={Component}
      normalize={normalize}
      inline={inline}
      className={classNames(className, styles['Paragraph'])}
      {...restProps}
    />
  );
};
