import React from 'react';
import { classNames } from '../../lib/classNames';
import Avatar, { AvatarProps } from '../../components/Avatar/Avatar';
import { Icon16OnlineMobile } from '@vkontakte/icons';
import { isArray } from '@vkontakte/vkjs';

import './OwnerAvatar.css';

export type OwnerAvatarProps = {
  mode?: 'text' | 'default';
  online?: 'mobile' | boolean | React.ReactElement;
  avatarProps?: AvatarProps;
  className?: string;
  /**
   * Ограниченный сет размеров, так как под каждый выбирается определенный размер шрифты
   */
  size?: 96 | 88 | 80 | 72 | 64 | 56 | 48 | 44 | 40 | 36 | 32 | 28 | 24;
  /**
   * Передав массив строчек, можно получить сетку аватарок. Максимум 4 элемента
   */
  src?: string | string[];
} & (
  {
    mode?: 'text';
    text: string;
    gradientColor: 1 | 2 | 3 | 4 | 5 | 6;
  } |
  {
    mode?: 'default';
  }
);

const MIN_GRID_LENGTH = 1;
const MAX_GRID_LENGTH = 4;

const OwnerAvatar: React.FC<OwnerAvatarProps> = (props) => {
  let content = null;
  if (props.mode === 'text') {
    content = <div vkuiClass="OwnerAvatar__text">{props.text}</div>;
  } else if (isArray(props.src)) {
    content = (
      <div vkuiClass="OwnerAvatar__grid">
        {props.src.slice(0, MAX_GRID_LENGTH).map((src, i) => {
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
  if (props.online === 'mobile') {
    status = <div vkuiClass={classNames('OwnerAvatar__status', 'OwnerAvatar__status--mobile')}><Icon16OnlineMobile /></div>;
  } else if (props.online === true) {
    status = <div vkuiClass={classNames('OwnerAvatar__status', 'OwnerAvatar__status--common')} />;
  } else if (React.isValidElement(props.online)) {
    status = <div vkuiClass="OwnerAvatar__status">{props.online}</div>;
  }

  return (
    <Avatar
      {...props.avatarProps}
      src={!isArray(props.src) && props.mode === 'default' && props.src}
      vkuiClass={classNames(
        'OwnerAvatar',
        `OwnerAvatar--mode-${props.mode}`,
        `OwnerAvatar--size-${props.size}`,
        props.mode === 'text' && `OwnerAvatar--gradient-${props.gradientColor}`,
        isArray(props.src) && `OwnerAvatar--images-${Math.max(MIN_GRID_LENGTH, Math.min(MAX_GRID_LENGTH, props.src.length))}`,
        props.className,
        props.avatarProps?.className,
      )}
      size={props.size}
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
