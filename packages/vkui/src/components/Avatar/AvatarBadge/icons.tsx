/* eslint-disable jsdoc/require-jsdoc */

import * as React from 'react';
import {
  Icon12Circle as Icon12CircleLib,
  Icon12OnlineMobile as Icon12OnlineMobileLib,
} from '@vkontakte/icons';

type IconsProps = Omit<React.ComponentProps<typeof Icon12CircleLib>, 'width' | 'height'> & {
  width: number;
  height: number;
};

export const Icon12Circle = ({ width, height, ...restProps }: IconsProps): React.ReactNode => {
  return (
    <Icon12CircleLib {...restProps} width={width >= 24 ? 15 : 12} height={height >= 24 ? 15 : 12} />
  );
};

export const Icon12OnlineMobile = ({
  width,
  height,
  ...restProps
}: IconsProps): React.ReactNode => {
  return (
    <Icon12OnlineMobileLib
      {...restProps}
      width={width >= 24 ? 9 : 8}
      height={height >= 24 ? 15 : 12}
    />
  );
};
