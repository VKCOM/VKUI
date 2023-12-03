import * as React from 'react';
import { Icon16Cancel } from '@vkontakte/icons';
import { stopPropagation } from '../../../lib/utils';
import { HasDataAttribute } from '../../../types';
import { IconButton } from '../../IconButton/IconButton';

export interface ChipsSelectClearButtonProps extends HasDataAttribute {
  className?: string;
  onClick(): void;
}

export const ChipsSelectClearButton = ({
  className,
  onClick,
  ...restProps
}: ChipsSelectClearButtonProps) => {
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
      onClick={(event) => {
        stopPropagation(event);
        event.preventDefault();
        onClick();
      }}
    >
      <Icon16Cancel />
    </IconButton>
  );
};
