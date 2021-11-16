import { omit } from '../../lib/utils';
import { classNames } from '../../lib/classNames';
import Avatar, { AvatarProps } from '../Avatar/Avatar';

import './InitialsAvatar.css';

/**
 * Градиенты, которые можно использовать в алгоритме поиска градиентов по числовому идентификатору пользователя.
 * @example user.id % 6 + 1
 */
export type InitialsAvatarNumberGradients = 1 | 2 | 3 | 4 | 5 | 6;
export type InitialsAvatarTextGradients =
  | 'gray'
  | 'red'
  | 'pink'
  | 'orange'
  | 'yellow'
  | 'green'
  | 'l-blue'
  | 'blue'
  | 'violet';

type ForbiddenAvatarProps = 'src' | 'mode' | 'shadow';
export interface InitialsAvatarProps extends Omit<AvatarProps, ForbiddenAvatarProps | 'size' | 'children'> {
  children?: React.ReactNode;
  gradientColor: InitialsAvatarTextGradients | InitialsAvatarNumberGradients;
  /**
 * Ограниченный сет размеров, так как под каждый выбирается определенный размер шрифта
 */
  size?: 200 | 192 | 160 | 96 | 88 | 80 | 72 | 64 | 56 | 50 | 48 | 46 | 44 | 40 | 36 | 32 | 30 | 28 | 24 | 16;
}

const COLORS_NUMBER_TO_TEXT_MAP: Record<InitialsAvatarNumberGradients, InitialsAvatarTextGradients> = {
  1: 'red',
  2: 'orange',
  3: 'yellow',
  4: 'green',
  5: 'l-blue',
  6: 'violet',
};

const FORBIDDEN_AVATAR_PROPS_ARRAY: ForbiddenAvatarProps[] = ['src', 'mode', 'shadow'];

export const InitialsAvatar: React.FC<InitialsAvatarProps> = ({
  children,
  gradientColor = 'gray',
  size,
  ...restProps
}: InitialsAvatarProps) => {
  const gradientName = typeof gradientColor === 'string' ? gradientColor : COLORS_NUMBER_TO_TEXT_MAP[gradientColor];

  restProps = omit(restProps, ...FORBIDDEN_AVATAR_PROPS_ARRAY as any);

  return (
    <Avatar
      {...restProps}
      vkuiClass={classNames(
        'InitialsAvatar',
        `InitialsAvatar--color-${gradientName}`,
        `InitialsAvatar--size-${size}`,
      )}
    >
      <span aria-hidden="true" vkuiClass="InitialsAvatar__text">
        {children}
      </span>
    </Avatar>
  );
};
