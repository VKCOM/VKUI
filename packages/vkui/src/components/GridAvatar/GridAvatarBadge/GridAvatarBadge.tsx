import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { ImageBase, type ImageBaseBadgeProps, ImageBaseContext } from '../../ImageBase/ImageBase';
import styles from './GridAvatarBadge.module.css';

export type GridAvatarBadgeProps = ImageBaseBadgeProps;

export const GridAvatarBadge = ({ className, ...restProps }: GridAvatarBadgeProps) => {
  const { size } = React.useContext(ImageBaseContext);
  return (
    <ImageBase.Badge
      {...restProps}
      className={classNames(
        styles['GridAvatarBadge'],
        size < 96 && styles['GridAvatarBadge--shifted'],
        className,
      )}
    />
  );
};
