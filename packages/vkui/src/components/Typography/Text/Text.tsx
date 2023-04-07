import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { useAdaptivity } from '../../../hooks/useAdaptivity';
import { SizeType } from '../../../lib/adaptivity';
import { HasRootRef } from '../../../types';
import { TypographyProps } from '../types';
import styles from './Text.module.css';

const sizeYClassNames = {
  none: styles['Text--sizeY-none'],
  [SizeType.COMPACT]: styles['Text--sizeY-compact'],
};

export interface TextProps extends TypographyProps, HasRootRef<HTMLElement> {}

/**
 * @see https://vkcom.github.io/VKUI/#/Text
 */
export const Text = ({
  className,
  children,
  weight,
  Component = 'span',
  getRootRef,
  normalize = true,
  ...restProps
}: TextProps) => {
  const { sizeY = 'none' } = useAdaptivity();

  return (
    <Component
      {...restProps}
      ref={getRootRef}
      className={classNames(
        className,
        styles['Text'],
        normalize && styles['Text--normalize'],
        sizeY !== SizeType.REGULAR && sizeYClassNames[sizeY],
        weight &&
          {
            '1': styles['Text--weight-1'],
            '2': styles['Text--weight-2'],
            '3': styles['Text--weight-3'],
          }[weight],
      )}
    >
      {children}
    </Component>
  );
};
