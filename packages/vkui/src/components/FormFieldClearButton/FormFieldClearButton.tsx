'use client';

import * as React from 'react';
import { Icon16Cancel } from '@vkontakte/icons';
import { stopPropagation } from '../../lib/utils';
import type { HasDataAttribute } from '../../types';
import { IconButton } from '../IconButton/IconButton';

export interface FormFieldClearButtonProps extends HasDataAttribute {
  className?: string;
  onClick: () => void;
  disabled?: boolean;
}

export const FormFieldClearButton = ({
  className,
  onClick,
  ...restProps
}: FormFieldClearButtonProps): React.ReactNode => {
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
