import { classNames } from '@vkontakte/vkjs';
import { Typography, TypographyProps } from '../Typography';
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
  colorType = 'inherit',
  ...restProps
}: ParagraphProps) => {
  return (
    <Typography
      Component={Component}
      normalize={normalize}
      inline={inline}
      colorType={colorType}
      className={classNames(className, styles['Paragraph'])}
      {...restProps}
    />
  );
};
