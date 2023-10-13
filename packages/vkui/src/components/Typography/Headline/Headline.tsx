import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { useAdaptivity } from '../../../hooks/useAdaptivity';
import { SizeType } from '../../../lib/adaptivity';
import { Typography, TypographyProps } from '../Typography';
import styles from './Headline.module.css';

const stylesLevel = {
  '1': styles['Headline--level-1'],
  '2': styles['Headline--level-2'],
};

const sizeYClassNames = {
  none: styles['Headline--sizeY-none'],
  [SizeType.COMPACT]: styles['Headline--sizeY-compact'],
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
  Component = 'h4',
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
        sizeY !== SizeType.REGULAR && sizeYClassNames[sizeY],
        stylesLevel[level],
      )}
      {...restProps}
    />
  );
};
