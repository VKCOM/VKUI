import * as React from 'react';
import { ImageBase, type ImageBaseOverlayProps, type ImageBaseProps } from '../ImageBase/ImageBase';
import { ImageBadge, type ImageBadgeProps } from './ImageBadge/ImageBadge';

export type { ImageBadgeProps, ImageBaseOverlayProps as ImageOverlayProps };

export const IMAGE_DEFAULT_SIZE = 48;

export interface ImageProps extends Omit<ImageBaseProps, 'badge'> {
  /**
   * Размер закругления.
   */
  borderRadius?: 's' | 'l' | 'm';
}

/**
 * @see https://vkcom.github.io/VKUI/#/Image
 */
export const Image = ({
  size = IMAGE_DEFAULT_SIZE,
  borderRadius: borderRadiusProp = 'm',
  style,
  className,
  ...restProps
}: ImageProps) => {
  let borderRadius: number;

  switch (borderRadiusProp) {
    case 's': {
      if (size <= 32) {
        borderRadius = 2;
      } else if (size <= 56) {
        borderRadius = 3;
      }
      borderRadius = 4;
      break;
    }
    case 'm': {
      if (size <= 32) {
        borderRadius = 3;
      } else if (size <= 48) {
        borderRadius = 4;
      } else if (size <= 72) {
        borderRadius = 6;
      } else if (size <= 80) {
        borderRadius = 8;
      }
      borderRadius = 10;
      break;
    }
    case 'l': {
      if (size <= 16) {
        borderRadius = 4;
      } else if (size <= 20) {
        borderRadius = 5;
      } else if (size <= 32) {
        borderRadius = 6;
      } else if (size <= 40) {
        borderRadius = 8;
      } else if (size <= 48) {
        borderRadius = 10;
      } else if (size <= 56) {
        borderRadius = 12;
      } else if (size <= 64) {
        borderRadius = 14;
      }
      borderRadius = 16;
    }
  }

  return (
    <ImageBase
      {...restProps}
      size={size}
      style={{ ...style, borderRadius }}
      className={className}
    />
  );
};

Image.Badge = ImageBadge;

Image.Overlay = ImageBase.Overlay;
