import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { ImageBase, type ImageBaseOverlayProps, type ImageBaseProps } from '../ImageBase/ImageBase';
import { AvatarBadge, type AvatarBadgeProps } from './AvatarBadge/AvatarBadge';
import {
  AvatarBadgeWithPreset,
  type AvatarBadgeWithPresetProps,
} from './AvatarBadge/AvatarBadgeWithPreset';
import { getInitialsFontSize } from './helpers';
import styles from './Avatar.module.css';

export type {
  AvatarBadgeProps,
  AvatarBadgeWithPresetProps,
  ImageBaseOverlayProps as AvatarOverlayProps,
};

export const AVATAR_DEFAULT_SIZE = 48;

const COLORS_NUMBER_TO_TEXT_MAP = {
  1: 'red',
  2: 'orange',
  3: 'yellow',
  4: 'green',
  5: 'l-blue',
  6: 'violet',
} as const;

/**
 * Градиенты, которые можно использовать в алгоритме поиска градиентов по числовому идентификатору пользователя.
 * @example user.id % 6 + 1
 */
export type InitialsAvatarNumberGradients = keyof typeof COLORS_NUMBER_TO_TEXT_MAP;

export type InitialsAvatarTextGradients =
  | (typeof COLORS_NUMBER_TO_TEXT_MAP)[InitialsAvatarNumberGradients]
  | 'blue';

const gradientStyles = {
  'red': styles['Avatar--gradient-red'],
  'orange': styles['Avatar--gradient-orange'],
  'yellow': styles['Avatar--gradient-yellow'],
  'green': styles['Avatar--gradient-green'],
  'blue': styles['Avatar--gradient-blue'],
  'l-blue': styles['Avatar--gradient-l-blue'],
  'violet': styles['Avatar--gradient-violet'],
};

export interface AvatarProps extends ImageBaseProps {
  /**
   * Инициалы пользователя.
   *
   * > Note: Если аватарка не прогрузится, то пользователь увидит инициалы.
   *
   * > ⚠️ Перебивает `fallbackIcon`.
   */
  initials?: string;
  /**
   * Задаёт градиент для фона.
   *
   * Если передано число, то оно будет сконвертировано в строчное представление цвета по следующей схеме:
   *
   * 1: 'red'
   * 2: 'orange'
   * 3: 'yellow'
   * 4: 'green'
   * 5: 'l-blue'
   * 6: 'violet'
   *
   * > Если необходимо задать свой градиент, то используйте значение `"custom"` и определите цвет градиента либо через
   * > свой класс в `className`, либо через `style={{ backgroundImage: "..." }}`.
   */
  gradientColor?: InitialsAvatarNumberGradients | InitialsAvatarTextGradients | 'custom';
}

/**
 * @see https://vkcom.github.io/VKUI/#/Avatar
 */
export const Avatar = ({
  size = AVATAR_DEFAULT_SIZE,
  className,
  gradientColor,
  initials,
  fallbackIcon,
  children,
  ...restProps
}: AvatarProps) => {
  const gradientName =
    typeof gradientColor === 'number' ? COLORS_NUMBER_TO_TEXT_MAP[gradientColor] : gradientColor;
  const isGradientNotCustom = gradientName && gradientName !== 'custom';
  const rewrittenFallbackIcon = initials ? undefined : fallbackIcon;

  return (
    <ImageBase
      {...restProps}
      size={size}
      fallbackIcon={rewrittenFallbackIcon}
      className={classNames(
        styles['Avatar'],
        gradientName && styles[`Avatar--has-gradient`],
        isGradientNotCustom && gradientStyles[gradientName],
        className,
      )}
    >
      {initials && (
        <div
          className={styles['Avatar__initials']}
          style={{
            fontSize: getInitialsFontSize(size),
          }}
        >
          {initials}
        </div>
      )}
      {children}
    </ImageBase>
  );
};

Avatar.Badge = AvatarBadge;

Avatar.BadgeWithPreset = AvatarBadgeWithPreset;

Avatar.Overlay = ImageBase.Overlay;
