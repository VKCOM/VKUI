'use client';

import { classNames } from '@vkontakte/vkjs';
import { useAdaptivity } from '../../../hooks/useAdaptivity';
import { type SizeTypeValues } from '../../../lib/adaptivity';
import { type HasCaps, Typography, type TypographyProps } from '../Typography';
import styles from './Footnote.module.css';

const sizeYClassNames = {
  none: styles.sizeYNone,
  compact: styles.sizeYCompact,
};

export function footnoteClassNames(sizeY: 'none' | SizeTypeValues, caps = false) {
  return classNames(
    styles.host,
    sizeY !== 'regular' && sizeYClassNames[sizeY],
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
  const { sizeY = 'none' } = useAdaptivity();

  return (
    <Typography
      Component={Component}
      normalize={normalize}
      inline={inline}
      className={classNames(className, footnoteClassNames(sizeY, caps))}
      {...restProps}
    />
  );
};
