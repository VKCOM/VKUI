import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { useAdaptivity } from '../../../hooks/useAdaptivity';
import { Typography, TypographyProps } from '../Typography';
import styles from './Subhead.module.css';

const sizeYClassNames = {
  none: styles.hostSizeYNone,
  ['compact']: styles.hostSizeYCompact,
};

export type SubheadProps = TypographyProps;

/**
 * Используется для подзаголовков 2 уровня.
 *
 * @see https://vkcom.github.io/VKUI/#/Subhead
 */
export const Subhead = ({
  className,
  Component = 'span',
  normalize = true,
  ...restProps
}: SubheadProps) => {
  const { sizeY = 'none' } = useAdaptivity();

  return (
    <Typography
      Component={Component}
      normalize={normalize}
      className={classNames(className, styles.host, sizeY !== 'regular' && sizeYClassNames[sizeY])}
      {...restProps}
    />
  );
};
