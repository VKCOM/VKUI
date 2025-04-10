'use client';

import * as React from 'react';
import { Icon16Cancel } from '@vkontakte/icons';
import { stopPropagation } from '../../lib/utils';
import type { HasDataAttribute } from '../../types';
import { IconButton } from '../IconButton/IconButton';

export interface CustomSelectClearButtonProps extends HasDataAttribute {
  /**
   * `className` для компонента.
   */
  className?: string;
  /**
   * Обработчик нажатия на кнопку.
   */
  onClick: () => void;
  /**
   * Блокировка взаимодействия с компонентом.
   */
  disabled?: boolean;
}

export const CustomSelectClearButton = ({
  className,
  onClick,
  ...restProps
}: CustomSelectClearButtonProps): React.ReactNode => {
  return (
    <IconButton
      Component="button"
      label="Очистить поле"
      onKeyDown={stopPropagation}
      type="button"
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
