import * as React from 'react';
import { HoverPopper, HoverPopperProps } from '../HoverPopper/HoverPopper';
import { ClickPopper, ClickPopperProps } from '../ClickPopper/ClickPopper';
import { getClassName } from '../../helpers/getClassName';
import { usePlatform } from '../../hooks/usePlatform';
import './Dropdown.css';

export interface DropdownProps extends Omit<HoverPopperProps, 'arrow'>, Omit<ClickPopperProps, 'arrow'> {
  action?: 'click' | 'hover';
}

export const Dropdown: React.FC<DropdownProps> = ({ children, action = 'click', ...popperProps }: DropdownProps) => {
  const platform = usePlatform();

  switch (action) {
    case 'click':
      return <ClickPopper vkuiClass={getClassName('Dropdown', platform)} {...popperProps}>{children}</ClickPopper>;
    case 'hover':
      return <HoverPopper vkuiClass={getClassName('Dropdown', platform)} {...popperProps}>{children}</HoverPopper>;
  }
};
