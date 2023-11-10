import * as React from 'react';
import { Icon16Cancel } from '@vkontakte/icons';
import { stopPropagation } from '../../lib/utils';
import { IconButton } from '../IconButton/IconButton';

export interface CustomSelectClearButtonProps {
  className?: string;
  onClick(): void;
  disabled?: boolean;
}

export const CustomSelectClearButton = ({
  className,
  onClick,
  disabled,
}: CustomSelectClearButtonProps) => {
  return (
    <IconButton
      className={className}
      Component="div"
      onClick={(e) => {
        stopPropagation(e);
        onClick();
      }}
      aria-label="Очистить поле"
      onKeyDown={stopPropagation}
      role="button"
      activeMode="opacity"
      hoverMode="opacity"
      disabled={disabled}
    >
      <Icon16Cancel />
    </IconButton>
  );
};
