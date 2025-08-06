import { classNames } from '@vkontakte/vkjs';
import { defineComponentDisplayNames } from '../../lib/react/defineComponentDisplayNames';
import { ImageBase, type ImageBaseProps } from '../ImageBase/ImageBase';
import {
  ImageBaseOverlay,
  type ImageBaseOverlayProps,
} from '../ImageBase/ImageBaseOverlay/ImageBaseOverlay';
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

const AVATAR_DEFAULT_SIZE = 48;

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
  'red': styles.gradientRed,
  'orange': styles.gradientOrange,
  'yellow': styles.gradientYellow,
  'green': styles.gradientGreen,
  'blue': styles.gradientBlue,
  'l-blue': styles.gradientLBlue,
  'violet': styles.gradientViolet,
};

export interface AvatarProps extends Omit<ImageBaseProps, 'widthSize' | 'heightSize'> {
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
   * 6: 'violet'.
   *
   * > Если необходимо задать свой градиент, то используйте значение `"custom"` и определите цвет градиента либо через
   * > свой класс в `className`, либо через `style={{ backgroundImage: "..." }}`.
   */
  gradientColor?: InitialsAvatarNumberGradients | InitialsAvatarTextGradients | 'custom';
}

/**
 * @see https://vkui.io/components/avatar
 */
export const Avatar: React.FC<AvatarProps> & {
  Badge: typeof AvatarBadge;
  BadgeWithPreset: typeof AvatarBadgeWithPreset;
  Overlay: typeof ImageBase.Overlay;
  getInitialsFontSize: typeof getInitialsFontSize;
} = ({
  size = AVATAR_DEFAULT_SIZE,
  className,
  gradientColor,
  initials,
  fallbackIcon: fallbackIconProp,
  children,
  ...restProps
}: AvatarProps) => {
  const gradientName =
    typeof gradientColor === 'number' ? COLORS_NUMBER_TO_TEXT_MAP[gradientColor] : gradientColor;
  const isGradientNotCustom = gradientName && gradientName !== 'custom';

  const fallbackIcon = initials ? (
    <div
      className={styles.initials}
      style={{
        fontSize: getInitialsFontSize(size),
      }}
    >
      {initials}
    </div>
  ) : (
    fallbackIconProp
  );

  return (
    <ImageBase
      {...restProps}
      size={size}
      fallbackIcon={fallbackIcon}
      className={classNames(
        styles.host,
        gradientName && styles.hasGradient,
        isGradientNotCustom && gradientStyles[gradientName],
        className,
      )}
    >
      {children}
    </ImageBase>
  );
};

Avatar.Badge = AvatarBadge;
Avatar.BadgeWithPreset = AvatarBadgeWithPreset;
Avatar.Overlay = ImageBaseOverlay;
Avatar.getInitialsFontSize = getInitialsFontSize;

if (process.env.NODE_ENV !== 'production') {
  defineComponentDisplayNames(Avatar.Badge, 'Avatar.Badge');
  defineComponentDisplayNames(Avatar.BadgeWithPreset, 'Avatar.BadgeWithPreset');
  defineComponentDisplayNames(Avatar.Overlay, 'Avatar.Overlay');
}
