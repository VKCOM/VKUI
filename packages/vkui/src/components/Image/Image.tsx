import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { ImageBase, type ImageBaseOverlayProps, type ImageBaseProps } from '../ImageBase/ImageBase';
import { ImageBadge, type ImageBadgeProps } from './ImageBadge/ImageBadge';
import styles from './Image.module.css';

export type { ImageBadgeProps, ImageBaseOverlayProps as ImageOverlayProps };

const IMAGE_DEFAULT_SIZE = 48;

export interface ImageProps extends Omit<ImageBaseProps, 'badge'> {
  /**
   * Размер закругления.
   */
  borderRadius?: 's' | 'l' | 'm';
  /**
   * Размер закругления угла между сторонами начала блока и строки
   */
  borderStartStartRadius?: 's' | 'l' | 'm';
  /**
   * Размер закругления угла между стороной начала блока и стороной конца строки
   */
  borderStartEndRadius?: 's' | 'l' | 'm';
  /**
   * Размер закругления угла между стороной конца блока и стороной начала строки
   */
  borderEndStartRadius?: 's' | 'l' | 'm';
  /**
   * Размер закругления угла между сторонами конца блока и строки
   */
  borderEndEndRadius?: 's' | 'l' | 'm';
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

const getBorderRadiusBySizeInPx = (
  size: Exclude<ImageBaseProps['size'], undefined>,
  borderRadius: ImageProps['borderRadius'],
) => {
  if (!borderRadius) {
    return undefined;
  }

  return `${getBorderRadiusBySize(size, borderRadius)}px`;
};

/**
 * @see https://vkcom.github.io/VKUI/#/Image
 */
export const Image: React.FC<ImageProps> & {
  Badge: typeof ImageBadge;
  Overlay: typeof ImageBase.Overlay;
} = ({
  size = IMAGE_DEFAULT_SIZE,
  borderRadius = 'm',
  borderStartStartRadius,
  borderStartEndRadius,
  borderEndStartRadius,
  borderEndEndRadius,
  style,
  className,
  objectFit = 'cover',
  ...restProps
}: ImageProps) => {
  const borderStyles = React.useMemo(
    () => ({
      '--vkui_internal--Image_border_radius': getBorderRadiusBySizeInPx(size, borderRadius),
      '--vkui_internal--Image_border_start_start_radius': getBorderRadiusBySizeInPx(
        size,
        borderStartStartRadius,
      ),
      '--vkui_internal--Image_border_start_end_radius': getBorderRadiusBySizeInPx(
        size,
        borderStartEndRadius,
      ),
      '--vkui_internal--Image_border_end_start_radius': getBorderRadiusBySizeInPx(
        size,
        borderEndStartRadius,
      ),
      '--vkui_internal--Image_border_end_end_radius': getBorderRadiusBySizeInPx(
        size,
        borderEndEndRadius,
      ),
    }),
    [
      borderRadius,
      borderStartStartRadius,
      borderStartEndRadius,
      borderEndStartRadius,
      borderEndEndRadius,
      size,
    ],
  );

  return (
    <ImageBase
      {...restProps}
      objectFit={objectFit}
      size={size}
      style={{ ...borderStyles, ...style }}
      className={classNames(
        className,
        styles['Image'],
        borderStartStartRadius && styles['Image--borderStartStartRadius'],
        borderStartEndRadius && styles['Image--borderStartEndRadius'],
        borderEndStartRadius && styles['Image--borderEndStartRadius'],
        borderEndEndRadius && styles['Image--borderEndEndRadius'],
      )}
    />
  );
};

Image.displayName = 'Image';

Image.Badge = ImageBadge;
Image.Badge.displayName = 'Image.Badge';

Image.Overlay = ImageBase.Overlay;
Image.Overlay.displayName = 'Image.Overlay';
