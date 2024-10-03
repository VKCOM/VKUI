'use client';

import { classNames } from '@vkontakte/vkjs';
import { useAdaptivity } from '../../../hooks/useAdaptivity';
import { type HasCaps, Typography, type TypographyProps } from '../Typography';
import styles from './Caption.module.css';

const stylesLevel = {
  '1': styles.level1,
  '2': styles.level2,
  '3': styles.level3,
};

const sizeYClassNames = {
  none: styles.sizeYNone,
  compact: styles.sizeYCompact,
};

export interface CaptionProps extends TypographyProps, HasCaps {
  level?: '1' | '2' | '3';
}

/**
 * Используется для мелких подписей.
 *
 * @see https://vkcom.github.io/VKUI/#/Caption
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
  const { sizeY = 'none' } = useAdaptivity();

  return (
    <Typography
      Component={Component}
      normalize={normalize}
      inline={inline}
      className={classNames(
        className,
        sizeY !== 'regular' && sizeYClassNames[sizeY],
        caps && styles.caps,
        stylesLevel[level],
      )}
      {...restProps}
    />
  );
};
