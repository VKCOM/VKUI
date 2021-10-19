import * as React from 'react';
import { HoverPopper, HoverPopperProps } from '../HoverPopper/HoverPopper';
import { ClickPopper, ClickPopperProps } from '../ClickPopper/ClickPopper';
import { getClassName } from '../../helpers/getClassName';
import { usePlatform } from '../../hooks/usePlatform';
import './Dropdown.css';

export interface DropdownProps extends HoverPopperProps, ClickPopperProps {
  action?: 'click' | 'hover';
  /**
   * @ignore
   * Можно было бы использовать Omit, но react-docgen-typescript в таком случае выкидывает из документации все свойства наследуемого интерфейса
   * https://github.com/styleguidist/react-docgen-typescript/issues/335
   */
  arrow?: HoverPopperProps['arrow'];
  /**
   * @ignore
   */
  arrowClassName?: HoverPopperProps['arrowClassName'];
}

export const Dropdown: React.FC<DropdownProps> = ({ action = 'click', ...popperProps }: DropdownProps) => {
  const platform = usePlatform();

  let Component;

  switch (action) {
    case 'click':
      Component = ClickPopper;
      break;
    case 'hover':
      Component = HoverPopper;
      break;
  }

  return (
    <Component vkuiClass={getClassName('Dropdown', platform)} {...popperProps} />
  );
};
