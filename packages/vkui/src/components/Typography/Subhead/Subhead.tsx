import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { useAdaptivity } from '../../../hooks/useAdaptivity';
import { SizeType } from '../../../lib/adaptivity';
import { TypographyProps } from '../types';
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
  children,
  weight,
  Component = 'h5',
  ...restProps
}: SubheadProps) => {
  const { sizeY = 'none' } = useAdaptivity();

  return (
    <Component
      {...restProps}
      className={classNames(
        className,
        styles['Subhead'],
        sizeY !== SizeType.REGULAR && sizeYClassNames[sizeY],
        weight &&
          {
            '1': styles['Subhead--weight-1'],
            '2': styles['Subhead--weight-2'],
            '3': styles['Subhead--weight-3'],
          }[weight],
      )}
    >
      {children}
    </Component>
  );
};
