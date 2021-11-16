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
  | 'red'
  | 'pink'
  | 'orange'
  | 'yellow'
  | 'green'
  | 'l-blue'
  | 'blue'
  | 'violet';

type ForbiddenAvatarProps = 'src' | 'mode';
export interface InitialsAvatarProps extends Omit<AvatarProps, ForbiddenAvatarProps | 'children'> {
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

const FORBIDDEN_AVATAR_PROPS_ARRAY: ForbiddenAvatarProps[] = ['src', 'mode'];

function getInitialsFontSize(avatarSize: number) {
  const calculatedFontSize = Math.ceil(avatarSize * 0.36);
  const evenFix = calculatedFontSize % 2;
  return calculatedFontSize + evenFix;
}

export const InitialsAvatar: React.FC<InitialsAvatarProps> = ({
  children,
  gradientColor,
  ...restProps
}: InitialsAvatarProps) => {
  const gradientName = typeof gradientColor === 'string' ? gradientColor : COLORS_NUMBER_TO_TEXT_MAP[gradientColor];

  restProps = omit(restProps, ...FORBIDDEN_AVATAR_PROPS_ARRAY as any);

  return (
    <Avatar
      {...restProps}
      shadow={false}
      style={{
        ...restProps.style,
        fontSize: getInitialsFontSize(restProps.size || 48),
      }}
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
