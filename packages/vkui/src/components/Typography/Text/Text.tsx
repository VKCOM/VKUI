import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { useAdaptivity } from '../../../hooks/useAdaptivity';
import { SizeType } from '../../../lib/adaptivity';
import { Typography, TypographyProps } from '../Typography';
import styles from './Text.module.css';

const sizeYClassNames = {
  none: styles['Text--sizeY-none'],
  [SizeType.COMPACT]: styles['Text--sizeY-compact'],
};

export type TextProps = TypographyProps;

/**
 * @see https://vkcom.github.io/VKUI/#/Text
 */
export const Text = ({
  className,
  Component = 'span',
  normalize = true,
  ...restProps
}: TextProps) => {
  const { sizeY = 'none' } = useAdaptivity();

  return (
    <Typography
      Component={Component}
      normalize={normalize}
      className={classNames(
        className,
        styles['Text'],
        sizeY !== SizeType.REGULAR && sizeYClassNames[sizeY],
      )}
      {...restProps}
    />
  );
};
