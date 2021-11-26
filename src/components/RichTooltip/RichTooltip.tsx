import * as React from 'react';
import { HoverPopper } from '../HoverPopper/HoverPopper';
import { getClassName } from '../../helpers/getClassName';
import { usePlatform } from '../../hooks/usePlatform';
import { useAppearance } from '../../hooks/useAppearance';
import { classNames } from '../../lib/classNames';
import { prefixClass } from '../../lib/prefixClass';
import { Placement } from '../Popper/Popper';
import './RichTooltip.css';

// Приходится избегать экстендов от HoverPopperProps и PopperProps, потому что react-docgen не умеет в Omit.
// Ждём либо фикса react-docgen (что вряд ли), либо переезда на react-docgen-typescript, где такой проблемы нет.
export interface RichTooltipProps {
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
   * Количество миллисекунд, после которых произойдет показ дропдауна
   */
  showDelay?: number;
  /**
   * Количество миллисекунд, после которых произойдет скрытие дропдауна
   */
  hideDelay?: number;
  /**
   * Либо jsx-элемент (div, button, etc.), либо компонент со свойством `getRootRef`, которое применяется к корневому элементу компонента
   */
  children?: React.ReactElement;
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
  arrow?: boolean;
}

export const RichTooltip: React.FC<RichTooltipProps> = ({ children, arrow = true, ...popperProps }: RichTooltipProps) => {
  const platform = usePlatform();
  const appearance = useAppearance();

  return (
    <HoverPopper
      vkuiClass={classNames(getClassName('RichTooltip', platform), {
        [`RichTooltip--${appearance}`]: !!appearance,
      })}
      arrow={arrow}
      arrowClassName={prefixClass('RichTooltip__arrow')}
      {...popperProps}
    >
      {children}
    </HoverPopper>
  );
};
