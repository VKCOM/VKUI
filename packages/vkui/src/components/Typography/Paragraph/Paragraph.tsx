'use client';

import { classNames } from '@vkontakte/vkjs';
import { useAdaptivity } from '../../../hooks/useAdaptivity';
import { Typography, type TypographyProps } from '../Typography';
import styles from './Paragraph.module.css';

const densityClassNames = {
  none: styles.densityNone,
  compact: styles.densityCompact,
};

export type ParagraphProps = TypographyProps;

/**
 * Используется для основного текста.
 *
 * @see https://vkui.io/components/typography#paragraph
 */
export const Paragraph = ({
  className,
  Component = 'span',
  normalize = false,
  inline = false,
  ...restProps
}: ParagraphProps): React.ReactNode => {
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
