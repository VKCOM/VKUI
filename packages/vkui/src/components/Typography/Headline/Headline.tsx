import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { useAdaptivity } from '../../../hooks/useAdaptivity';
import { Typography, TypographyProps } from '../Typography';
import styles from './Headline.module.css';

const stylesLevel = {
  '1': styles.hostLevel1,
  '2': styles.hostLevel2,
};

const sizeYClassNames = {
  none: styles.hostSizeYNone,
  ['compact']: styles.hostSizeYCompact,
};

export interface HeadlineProps extends TypographyProps {
  level?: '1' | '2';
}

/**
 * Используется для подзаголовков.
 *
 * @see https://vkcom.github.io/VKUI/#/Headline
 */
export const Headline = ({
  className,
  weight = '3',
  level = '1',
  Component = 'span',
  normalize = true,
  ...restProps
}: HeadlineProps) => {
  const { sizeY = 'none' } = useAdaptivity();

  return (
    <Typography
      Component={Component}
      normalize={normalize}
      weight={weight}
      className={classNames(
        className,
        sizeY !== 'regular' && sizeYClassNames[sizeY],
        stylesLevel[level],
      )}
      {...restProps}
    />
  );
};
