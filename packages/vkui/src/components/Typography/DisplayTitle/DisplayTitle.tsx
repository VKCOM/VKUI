'use client';

import { classNames } from '@vkontakte/vkjs';
import { useAdaptivity } from '../../../hooks/useAdaptivity';
import { Typography, type TypographyProps } from '../Typography';
import styles from './DisplayTitle.module.css';

const stylesLevel = {
  '1': styles.level1,
  '2': styles.level2,
  '3': styles.level3,
  '4': styles.level4,
};

const densityClassNames = {
  none: styles.densityNone,
  compact: styles.densityCompact,
};

export interface DisplayTitleProps extends TypographyProps {
  /**
   * Уровень заголовка (от 1 до 4).
   */
  level?: '1' | '2' | '3' | '4';
}

/**
 * Используется для крупных заголовков.
 *
 * @see https://vkui.io/components/typography#display-title
 */
export const DisplayTitle = ({
  className,
  level = '1',
  Component = 'span',
  normalize = true,
  inline = false,
  ...restProps
}: DisplayTitleProps): React.ReactNode => {
  const { density = 'none' } = useAdaptivity();

  return (
    <Typography
      Component={Component}
      normalize={normalize}
      inline={inline}
      className={classNames(
        className,
        density !== 'regular' && densityClassNames[density],
        stylesLevel[level],
      )}
      {...restProps}
    />
  );
};
