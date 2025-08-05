'use client';

import { classNames } from '@vkontakte/vkjs';
import { useAdaptivity } from '../../../hooks/useAdaptivity';
import { Typography, type TypographyProps } from '../Typography';
import styles from './Headline.module.css';

const stylesLevel = {
  '1': styles.level1,
  '2': styles.level2,
};

const sizeYClassNames = {
  none: styles.sizeYNone,
  compact: styles.sizeYCompact,
};

export interface HeadlineProps extends TypographyProps {
  /**
   * Уровень заголовка (от 1 до 2).
   */
  level?: '1' | '2';
}

/**
 * Используется для подзаголовков.
 *
 * @see https://vkui.io/components/typography#headline
 */
export const Headline = ({
  className,
  level = '1',
  Component = 'span',
  normalize = true,
  inline = false,
  ...restProps
}: HeadlineProps): React.ReactNode => {
  const { sizeY = 'none' } = useAdaptivity();

  return (
    <Typography
      Component={Component}
      normalize={normalize}
      inline={inline}
      className={classNames(
        className,
        sizeY !== 'regular' && sizeYClassNames[sizeY],
        stylesLevel[level],
      )}
      {...restProps}
    />
  );
};
