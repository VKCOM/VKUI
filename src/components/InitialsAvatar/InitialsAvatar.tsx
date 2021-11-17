import { HTMLAttributes } from 'react';
import { HasRootRef } from '../../types';
import { classNames } from '../../lib/classNames';
import Avatar, { AvatarProps, AVATAR_DEFAULT_SIZE } from '../Avatar/Avatar';

import './InitialsAvatar.css';

/**
 * Градиенты, которые можно использовать в алгоритме поиска градиентов по числовому идентификатору пользователя.
 * @example user.id % 6 + 1
 */
export type InitialsAvatarNumberGradients = 1 | 2 | 3 | 4 | 5 | 6;
export type InitialsAvatarTextGradients =
  | 'red'
  | 'pink'
  | 'orange'
  | 'yellow'
  | 'green'
  | 'l-blue'
  | 'blue'
  | 'violet';

export interface InitialsAvatarProps extends HTMLAttributes<HTMLDivElement>, HasRootRef<HTMLDivElement>, Pick<AvatarProps, 'size'| 'shadow'> {
  children?: React.ReactNode;
  gradientColor?: InitialsAvatarTextGradients | InitialsAvatarNumberGradients;
}

const COLORS_NUMBER_TO_TEXT_MAP: Record<InitialsAvatarNumberGradients, InitialsAvatarTextGradients> = {
  1: 'red',
  2: 'orange',
  3: 'yellow',
  4: 'green',
  5: 'l-blue',
  6: 'violet',
};

function getInitialsFontSize(avatarSize: number) {
  const calculatedFontSize = Math.ceil(avatarSize * 0.36);
  const evenFix = calculatedFontSize % 2;
  return calculatedFontSize + evenFix;
}

export const InitialsAvatar: React.FC<InitialsAvatarProps> = ({
  size = AVATAR_DEFAULT_SIZE,
  children,
  gradientColor,
  style,
  ...restProps
}: InitialsAvatarProps) => {
  const gradientName = typeof gradientColor === 'string' ? gradientColor : COLORS_NUMBER_TO_TEXT_MAP[gradientColor];

  return (
    <Avatar
      {...restProps}
      style={{
        ...style,
        fontSize: getInitialsFontSize(size || AVATAR_DEFAULT_SIZE),
      }}
      size={size}
      vkuiClass={classNames(
        'InitialsAvatar',
        `InitialsAvatar--color-${gradientName}`,
      )}
    >
      <span aria-hidden="true" vkuiClass="InitialsAvatar__text">
        {children}
      </span>
    </Avatar>
  );
};
