import * as React from 'react';
import { classNames } from '../../lib/classNames';
import Avatar, { AvatarProps } from '../../components/Avatar/Avatar';
import { Icon16OnlineMobile } from '@vkontakte/icons';
import { isArray } from '@vkontakte/vkjs';

import './OwnerAvatar.css';

type OwnerAvatarModeDefault = {
};

type OwnerAvatarModeText = {
  text: string;
  gradientColor: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
};

type OwnerAvatarBaseProps = {
  mode?: 'text' | 'default';
  online?: 'mobile' | boolean | React.ReactElement;
  className?: string;
  /**
   * Ограниченный сет размеров, так как под каждый выбирается определенный размер шрифта
   */
  size?: 200 | 192 | 160 | 96 | 88 | 80 | 72 | 64 | 56 | 50 | 48 | 46 | 44 | 40 | 36 | 32 | 30 | 28 | 24 | 16;
  /**
   * Передав массив строчек, можно получить сетку аватарок. Максимум 4 элемента
   */
  src?: string | string[];
};

// TODO: Сделать условный тип, зависящий от mode, при этом не сломать спред параметров функции
export type OwnerAvatarProps = OwnerAvatarBaseProps & OwnerAvatarModeDefault & OwnerAvatarModeText & Omit<AvatarProps, 'mode' | 'src' | 'size'>;

const MIN_GRID_LENGTH = 1;
const MAX_GRID_LENGTH = 4;

const OwnerAvatar: React.FC<OwnerAvatarProps> = ({
  mode = 'default',
  online = false,
  size = 48,
  src,
  gradientColor,
  text,
  ...restProps
}) => {
  let content = null;
  if (mode === 'text') {
    content = <div vkuiClass="OwnerAvatar__text">{text}</div>;
  } else if (isArray(src)) {
    content = (
      <div vkuiClass="OwnerAvatar__grid">
        {src.slice(0, MAX_GRID_LENGTH).map((src, i) => {
          return (
            <Avatar
              key={i}
              src={src}
              mode="grid"
              size="unset"
              vkuiClass={classNames('OwnerAvatar__gridAvatar', `OwnerAvatar__gridAvatar--${i + 1}`)}
            />
          );
        })}
      </div>
    );
  }

  let status: React.ReactElement | null = null;
  if (online === 'mobile') {
    status = <div vkuiClass={classNames('OwnerAvatar__status', 'OwnerAvatar__status--mobile')}><Icon16OnlineMobile /></div>;
  } else if (online === true) {
    status = <div vkuiClass={classNames('OwnerAvatar__status', 'OwnerAvatar__status--common')} />;
  } else if (React.isValidElement(online)) {
    status = <div vkuiClass="OwnerAvatar__status">{online}</div>;
  }

  return (
    <Avatar
      {...restProps}
      src={!isArray(src) && mode === 'default' && src}
      vkuiClass={classNames(
        'OwnerAvatar',
        `OwnerAvatar--mode-${mode}`,
        `OwnerAvatar--size-${size}`,
        mode === 'text' && `OwnerAvatar--gradient-${gradientColor}`,
        isArray(src) && `OwnerAvatar--images-${Math.max(MIN_GRID_LENGTH, Math.min(MAX_GRID_LENGTH, src.length))}`,
      )}
      size={size}
    >
      {content}
      {status}
    </Avatar>
  );
};

OwnerAvatar.defaultProps = {
  mode: 'default',
  online: false,
  size: 48,
};

export {
  OwnerAvatar,
};
