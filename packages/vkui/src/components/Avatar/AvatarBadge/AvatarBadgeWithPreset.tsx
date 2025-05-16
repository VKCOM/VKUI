'use client';

import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { useConfigDirection } from '../../../hooks/useConfigDirection';
import {
  getBadgeIconSizeByImageBaseSize,
  ImageBase,
  type ImageBaseBadgeProps,
  ImageBaseContext,
} from '../../ImageBase/ImageBase';
import { Icon12Circle, Icon12OnlineMobile } from './icons';
import styles from './AvatarBadge.module.css';

export interface AvatarBadgeWithPresetProps
  extends Omit<ImageBaseBadgeProps, 'background' | 'children'> {
  /**
   * Использует предзаданные настройки.
   *
   * За каждым пресетом закреплена своя иконка и стили.
   */
  preset?: 'online' | 'online-mobile';
}

export const AvatarBadgeWithPreset = ({
  preset = 'online',
  className,
  ...restProps
}: AvatarBadgeWithPresetProps) => {
  const direction = useConfigDirection();
  const isRtl = direction === 'rtl';
  const { size } = React.useContext(ImageBaseContext);
  const badgeSize = getBadgeIconSizeByImageBaseSize(size);
  const isOnlinePreset = preset === 'online';
  const presetClassName = isOnlinePreset ? styles.presetOnline : styles.presetOnlineMobile;
  const Icon = isOnlinePreset ? Icon12Circle : Icon12OnlineMobile;

  return (
    <ImageBase.Badge
      background="stroke"
      className={classNames(styles.host, isRtl && styles.rtl, presetClassName, className)}
      {...restProps}
    >
      <Icon width={badgeSize} height={badgeSize} />
    </ImageBase.Badge>
  );
};
