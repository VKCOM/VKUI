'use client';

import { classNames } from '@vkontakte/vkjs';
import { useAdaptivity } from '../../../hooks/useAdaptivity';
import type { DensityTypeValues } from '../../../lib/adaptivity';
import { type HasCaps, Typography, type TypographyProps } from '../Typography';
import styles from './Footnote.module.css';

const densityClassNames = {
  none: styles.densityNone,
  compact: styles.densityCompact,
};

export function footnoteClassNames(density: 'none' | DensityTypeValues, caps = false) {
  return classNames(
    styles.host,
    density !== 'regular' && densityClassNames[density],
    caps && styles.caps,
  );
}

export interface FootnoteProps extends TypographyProps, HasCaps {}

/**
 * Используется для основных подписей.
 *
 * @see https://vkui.io/components/typography#footnote
 */
export const Footnote = ({
  className,
  caps,
  Component = 'span',
  normalize = true,
  inline = false,
  ...restProps
}: FootnoteProps): React.ReactNode => {
  const { density = 'none' } = useAdaptivity();

  return (
    <Typography
      Component={Component}
      normalize={normalize}
      inline={inline}
      className={classNames(className, footnoteClassNames(density, caps))}
      {...restProps}
    />
  );
};
