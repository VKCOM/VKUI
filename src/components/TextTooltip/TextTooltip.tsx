import * as React from 'react';
import { HoverPopper } from '../HoverPopper/HoverPopper';
import { getClassName } from '../../helpers/getClassName';
import { usePlatform } from '../../hooks/usePlatform';
import { hasReactNode } from '../../lib/utils';
import { Placement } from '../Popper/Popper';
import { Subhead } from '../Typography/Subhead/Subhead';
import { prefixClass } from '../../lib/prefixClass';
import './TextTooltip.css';

// Приходится избегать экстендов от HoverPopperProps и PopperProps, потому что react-docgen не умеет в Omit.
// Ждём либо фикса react-docgen (что вряд ли), либо переезда на react-docgen-typescript, где такой проблемы нет.
export interface TextTooltipProps {
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
  /**
   * Текст тултипа
   */
  text?: React.ReactNode;
  /**
   * Заголовок тултипа
   */
  header?: React.ReactNode;
}

export const TextTooltip: React.FC<TextTooltipProps> = ({ children, text, header, ...popperProps }: TextTooltipProps) => {
  const platform = usePlatform();

  return (
    <HoverPopper
      vkuiClass={getClassName('TextTooltip', platform)}
      arrow
      arrowClassName={prefixClass('TextTooltip__arrow')}
      content={
        <React.Fragment>
          {hasReactNode(header) && <Subhead Component="span" weight="medium" vkuiClass="TextTooltip__header">{header}</Subhead>}
          {hasReactNode(text) && <Subhead Component="span" weight="regular" vkuiClass="TextTooltip__text">{text}</Subhead>}
        </React.Fragment>
      }
      {...popperProps}
    >
      {children}
    </HoverPopper>
  );
};
