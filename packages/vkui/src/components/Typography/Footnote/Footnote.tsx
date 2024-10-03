'use client';

import { classNames } from '@vkontakte/vkjs';
import { useAdaptivity } from '../../../hooks/useAdaptivity';
import { type HasCaps, Typography, type TypographyProps } from '../Typography';
import styles from './Footnote.module.css';

const sizeYClassNames = {
  none: styles.sizeYNone,
  compact: styles.sizeYCompact,
};

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
}: FootnoteProps): React.ReactNode => {
  const { sizeY = 'none' } = useAdaptivity();

  return (
    <Typography
      Component={Component}
      normalize={normalize}
      inline={inline}
      className={classNames(
        className,
        sizeY !== 'regular' && sizeYClassNames[sizeY],
        styles.host,
        caps && styles.caps,
      )}
      {...restProps}
    />
  );
};
