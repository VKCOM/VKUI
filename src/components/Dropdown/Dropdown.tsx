import * as React from 'react';
import { HoverPopper, HoverPopperProps } from '../HoverPopper/HoverPopper';
import { ClickPopper } from '../ClickPopper/ClickPopper';
import { getClassName } from '../../helpers/getClassName';
import { usePlatform } from '../../hooks/usePlatform';
import { Placement } from '../Popper/Popper';
import './Dropdown.css';

// Приходится избегать экстендов от HoverPopperProps, ClickPopperProps и PopperProps, потому что react-docgen не умеет в Omit.
// Ждём либо фикса react-docgen (что вряд ли), либо переезда на react-docgen-typescript, где такой проблемы нет.
export interface DropdownProps {
  /**
   * По умолчанию компонент выберет наилучшее расположение сам. Но его можно задать извне с помощью этого свойства
   */
  placement?: Placement;
  /**
   * Отступ по вспомогательной оси
   */
  offsetSkidding?: number;
  /**
   * Отступ по главной оси
   */
  offsetDistance?: number;
  onPlacementChange?: (data: { placement?: Placement }) => void;
  /**
   * Содержимое тултипа
   */
  content?: React.ReactNode;
  /**
   * Если передан, то тултип будет показыван/скрыт в зависимости от значения свойства
   */
  shown?: boolean;
  /**
   * Вызывается при каждом изменении видимости тултипа
   */
  onShownChange?: (shown: boolean) => void;
  /**
   * Либо jsx-элемент (div, button, etc.), либо компонент со свойством `getRootRef`, которое применяется к корневому элементу компонента
   */
  children?: React.ReactElement;

  action?: 'click' | 'hover';
  /**
   * Актуально только для action="hover"
   * Количество миллисекунд, после которых произойдет показ дропдауна
   */
  showDelay?: HoverPopperProps['showDelay'];
  /**
   * Актуально только для action="hover"
   * Количество миллисекунд, после которых произойдет скрытие дропдауна
   */
  hideDelay?: HoverPopperProps['hideDelay'];
}

export const Dropdown: React.FC<DropdownProps> = ({ action = 'click', hideDelay, showDelay, ...popperProps }: DropdownProps) => {
  const platform = usePlatform();

  let Component;
  let actionSpecificProps: Partial<DropdownProps> = {};

  switch (action) {
    case 'click':
      Component = ClickPopper;
      break;
    case 'hover':
      actionSpecificProps = { hideDelay, showDelay };
      Component = HoverPopper;
      break;
  }

  return (
    <Component vkuiClass={getClassName('Dropdown', platform)} {...actionSpecificProps} {...popperProps} />
  );
};
