import Avatar, { AvatarProps } from '../Avatar/Avatar';
import { classNames } from '../../lib/classNames';
import { warnOnce } from '../../lib/warnOnce';
import { omit } from '../../lib/utils';

import './GridAvatar.css';

type ForbiddenAvatarProps = 'src' | 'mode' | 'shadow';
export interface GridAvatarProps extends Omit<AvatarProps, ForbiddenAvatarProps | 'src'> {
  src: string[];
}

const FORBIDDEN_AVATAR_PROPS_ARRAY: ForbiddenAvatarProps[] = ['src', 'mode', 'shadow'];

const MIN_GRID_LENGTH = 1;
const MAX_GRID_LENGTH = 4;

const warn = warnOnce('GridAvatar');

export const GridAvatar: React.FC<GridAvatarProps> = ({
  src = [],
  ...restProps
}) => {
  if (process.env.NODE_ENV === 'development' && src.length > MAX_GRID_LENGTH) {
    warn(`Размер пропа src (${src.length}) больше максимального (${MAX_GRID_LENGTH})`);
  }

  restProps = omit(restProps, ...FORBIDDEN_AVATAR_PROPS_ARRAY as any);

  const count = Math.max(MIN_GRID_LENGTH, Math.min(MAX_GRID_LENGTH, src.length));

  return (
    <Avatar
      vkuiClass={classNames(
        'GridAvatar',
        `GridAvatar--images-${count}`,
      )}
      {...restProps}
    >
      <div vkuiClass="GridAvatar__in">
        {src.slice(0, MAX_GRID_LENGTH).map((src, i) => {
          return (
            <div
              key={i}
              vkuiClass="GridAvatar__item"
              style={{ backgroundImage: `url(${src})` }}
            >
            </div>
          );
        })}
      </div>
    </Avatar>
  );
};
