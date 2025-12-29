'use client';

import { classNames } from '@vkontakte/vkjs';
import { useAdaptivity } from '../../../hooks/useAdaptivity';
import type { DensityTypeValues } from '../../../lib/adaptivity';
import { type HasCaps, Typography, type TypographyProps } from '../Typography';
import styles from './Caption.module.css';

const stylesLevel = {
  '1': styles.level1,
  '2': styles.level2,
  '3': styles.level3,
};

const densityClassNames = {
  none: styles.densityNone,
  compact: styles.densityCompact,
};

export function captionClassNames(
  density: 'none' | DensityTypeValues,
  level: '1' | '2' | '3' | undefined = '1',
  caps = false,
) {
  return classNames(
    density !== 'regular' && densityClassNames[density],
    caps && styles.caps,
    stylesLevel[level],
  );
}

export interface CaptionProps extends TypographyProps, HasCaps {
  /**
   * Уровень заголовка (от 1 до 3).
   */
  level?: '1' | '2' | '3';
}

/**
 * Используется для мелких подписей.
 *
 * @see https://vkui.io/components/typography#caption
 */
export const Caption = ({
  className,
  level = '1',
  caps,
  Component = 'span',
  normalize = true,
  inline = false,
  ...restProps
}: CaptionProps): React.ReactNode => {
  const { density = 'none' } = useAdaptivity();

  return (
    <Typography
      Component={Component}
      normalize={normalize}
      inline={inline}
      className={classNames(className, captionClassNames(density, level, caps))}
      {...restProps}
    />
  );
};
