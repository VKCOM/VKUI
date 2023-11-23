import * as React from 'react';
import { Icon16Cancel } from '@vkontakte/icons';
import { stopPropagation } from '../../lib/utils';
import { HasDataAttribute } from '../../types';
import { IconButton } from '../IconButton/IconButton';

export interface CustomSelectClearButtonProps extends HasDataAttribute {
  className?: string;
  onClick(): void;
  disabled?: boolean;
}

export const CustomSelectClearButton = ({
  className,
  onClick,
  ...restProps
}: CustomSelectClearButtonProps) => {
  return (
    <IconButton
      Component="div"
      aria-label="Очистить поле"
      onKeyDown={stopPropagation}
      role="button"
      activeMode="opacity"
      hoverMode="opacity"
      {...restProps}
      className={className}
      onClick={(e) => {
        stopPropagation(e);
        e.preventDefault();
        onClick();
      }}
    >
      <Icon16Cancel />
    </IconButton>
  );
};
