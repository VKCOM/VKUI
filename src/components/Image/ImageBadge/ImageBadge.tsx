import * as React from 'react';
import { classNamesString } from '../../../lib/classNames';
import { type ImageBaseBadgeProps, ImageBase, ImageBaseContext } from '../../ImageBase/ImageBase';
import styles from './ImageBadge.module.css';

export type ImageBadgeProps = ImageBaseBadgeProps;

export const ImageBadge = ({ className, ...restProps }: ImageBadgeProps) => {
  const { size } = React.useContext(ImageBaseContext);
  return (
    <ImageBase.Badge
      {...restProps}
      className={classNamesString(
        styles['ImageBadge'],
        size < 96 && styles['ImageBadge--shifted'],
        className,
      )}
    />
  );
};
