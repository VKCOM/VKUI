'use client';

import { classNames } from '@vkontakte/vkjs';
import { useAdaptivity } from '../../../hooks/useAdaptivity';
import { Typography, type TypographyProps } from '../Typography';
import styles from './Subhead.module.css';

const sizeYClassNames = {
  none: styles.sizeYNone,
  compact: styles.sizeYCompact,
};

export type SubheadProps = TypographyProps;

/**
 * Используется для подзаголовков 2 уровня.
 *
 * @see https://vkui.io/components/typography#subhead
 */
export const Subhead = ({
  className,
  Component = 'span',
  normalize = true,
  inline = false,
  ...restProps
}: SubheadProps): React.ReactNode => {
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
