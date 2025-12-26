'use client';

import { classNames } from '@vkontakte/vkjs';
import { useAdaptivity } from '../../../hooks/useAdaptivity';
import { Typography, type TypographyProps } from '../Typography';
import styles from './Text.module.css';

const densityClassNames = {
  none: styles.densityNone,
  compact: styles.densityCompact,
};

export type TextProps = TypographyProps;

/**
 * Основной наборный текст.
 *
 * @see https://vkui.io/components/typography#text
 */
export const Text = ({
  className,
  Component = 'span',
  normalize = true,
  inline = false,
  ...restProps
}: TextProps): React.ReactNode => {
  const { density = 'none' } = useAdaptivity();

  return (
    <Typography
      Component={Component}
      normalize={normalize}
      inline={inline}
      className={classNames(
        className,
        styles.host,
        density !== 'regular' && densityClassNames[density],
      )}
      {...restProps}
    />
  );
};
