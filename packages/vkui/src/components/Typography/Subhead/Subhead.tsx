import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { useAdaptivity } from '../../../hooks/useAdaptivity';
import { SizeType } from '../../../lib/adaptivity';
import { Typography, TypographyProps } from '../Typography';
import styles from './Subhead.module.css';

const sizeYClassNames = {
  none: styles['Subhead--sizeY-none'],
  [SizeType.COMPACT]: styles['Subhead--sizeY-compact'],
};

export type SubheadProps = TypographyProps;

/**
 * @see https://vkcom.github.io/VKUI/#/Subhead
 */
export const Subhead = ({
  className,
  Component = 'h5',
  normalize = true,
  htmlFor,
  ...restProps
}: SubheadProps) => {
  const { sizeY = 'none' } = useAdaptivity();

  return (
    <Typography
      Component={Component}
      normalize={normalize}
      className={classNames(
        className,
        styles['Subhead'],
        sizeY !== SizeType.REGULAR && sizeYClassNames[sizeY],
      )}
      {...restProps}
    />
  );
};
