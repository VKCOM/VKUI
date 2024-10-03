'use client';

import { classNames } from '@vkontakte/vkjs';
import { useAdaptivity } from '../../../hooks/useAdaptivity';
import { Typography, type TypographyProps } from '../Typography';
import styles from './Text.module.css';

const sizeYClassNames = {
  none: styles.sizeYNone,
  compact: styles.sizeYCompact,
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
  ...restProps
}: TextProps): React.ReactNode => {
  const { sizeY = 'none' } = useAdaptivity();

  return (
    <Typography
      Component={Component}
      normalize={normalize}
      inline={inline}
      className={classNames(className, styles.host, sizeY !== 'regular' && sizeYClassNames[sizeY])}
      {...restProps}
    />
  );
};
