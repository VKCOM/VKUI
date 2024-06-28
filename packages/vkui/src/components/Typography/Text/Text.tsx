import { classNames } from '@vkontakte/vkjs';
import { useAdaptivity } from '../../../hooks/useAdaptivity';
import { Typography, TypographyProps } from '../Typography';
import styles from './Text.module.css';

const sizeYClassNames = {
  none: styles['Text--sizeY-none'],
  ['compact']: styles['Text--sizeY-compact'],
};

export type TextProps = TypographyProps;

/**
 * Основной наборный текст.
 *
 * @see https://vkcom.github.io/VKUI/#/Text
 */
export const Text = ({
  className,
  Component = 'span',
  normalize = true,
  inline = false,
  colorType = 'inherit',
  ...restProps
}: TextProps) => {
  const { sizeY = 'none' } = useAdaptivity();

  return (
    <Typography
      Component={Component}
      normalize={normalize}
      inline={inline}
      colorType={colorType}
      className={classNames(
        className,
        styles['Text'],
        sizeY !== 'regular' && sizeYClassNames[sizeY],
      )}
      {...restProps}
    />
  );
};
