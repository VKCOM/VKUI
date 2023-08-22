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

const getBorderRadiusBySize = (
  size: Exclude<ImageBaseProps['size'], undefined>,
  borderRadius: Exclude<ImageProps['borderRadius'], undefined>,
) => {
  switch (borderRadius) {
    case 's': {
      if (size <= 32) {
        return 2;
      }
      if (size <= 56) {
        return 3;
      }
      return 4;
    }
    case 'm': {
      if (size <= 32) {
        return 3;
      }
      if (size <= 48) {
        return 4;
      }
      if (size <= 72) {
        return 6;
      }
      if (size <= 80) {
        return 8;
      }
      return 10;
    }
    case 'l': {
      if (size <= 16) {
        return 4;
      }
      if (size <= 20) {
        return 5;
      }
      if (size <= 32) {
        return 6;
      }
      if (size <= 40) {
        return 8;
      }
      if (size <= 48) {
        return 10;
      }
      if (size <= 56) {
        return 12;
      }
      if (size <= 64) {
        return 14;
      }
      return 16;
    }
  }
};

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
  const borderRadius = React.useMemo(
    () => getBorderRadiusBySize(size, borderRadiusProp),
    [size, borderRadiusProp],
  );

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
