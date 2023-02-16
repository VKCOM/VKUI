import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { ImageBase, type ImageBaseBadgeProps, ImageBaseContext } from '../../ImageBase/ImageBase';
import styles from './ImageBadge.module.css';

export type ImageBadgeProps = ImageBaseBadgeProps;

export const ImageBadge = ({ className, ...restProps }: ImageBadgeProps) => {
  const { size } = React.useContext(ImageBaseContext);
  return (
    <ImageBase.Badge
      {...restProps}
      className={classNames(
        styles['ImageBadge'],
        size < 96 && styles['ImageBadge--shifted'],
        className,
      )}
    />
  );
};
