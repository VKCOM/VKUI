import * as React from 'react';
import { Icon16Cancel } from '@vkontakte/icons';
import { IconButton } from '../IconButton/IconButton';

interface CustomSelectClearButtonProps {
  className?: string;
  onClear?(): void;
}

export const CustomSelectClearButton = ({ className, onClear }: CustomSelectClearButtonProps) => {
  return (
    <IconButton
      className={className}
      Component="div"
      onClick={(e) => {
        e.stopPropagation();
        onClear?.();
      }}
      aria-label="Очистить поле"
      onKeyDown={(e) => e.stopPropagation()}
      role="button"
      activeMode="opacity"
      hoverMode="opacity"
    >
      <Icon16Cancel />
    </IconButton>
  );
};
