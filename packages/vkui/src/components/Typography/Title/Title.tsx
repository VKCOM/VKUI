'use client';

import { classNames } from '@vkontakte/vkjs';
import { useAdaptivity } from '../../../hooks/useAdaptivity';
import { Typography, type TypographyProps } from '../Typography';
import styles from './Title.module.css';

const stylesLevel = {
  '1': styles.level1,
  '2': styles.level2,
  '3': styles.level3,
};

const sizeYClassNames = {
  none: styles.sizeYNone,
  compact: styles.sizeYCompact,
};

export interface TitleProps extends TypographyProps {
  /**
   * Уровень заголовка (от 1 до 3).
   */
  level?: '1' | '2' | '3';
}

/**
 * Используется для заголовков.
 *
 * @see https://vkui.io/components/typography#title
 */
export const Title = ({
  className,
  level = '1',
  Component = 'span',
  normalize = true,
  inline = false,
  ...restProps
}: TitleProps): React.ReactNode => {
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
