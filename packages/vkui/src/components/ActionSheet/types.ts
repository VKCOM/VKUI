import * as React from 'react';
import type { PlacementWithAuto } from '../../lib/floating/types';
import { FocusTrapProps } from '../FocusTrap/FocusTrap';

export type PopupDirection =
  | 'top'
  | 'bottom'
  | ((elRef: React.RefObject<HTMLDivElement>) => 'top' | 'bottom');
export type ToggleRef = Element | null | undefined | React.RefObject<Element>;

export interface SharedDropdownProps extends FocusTrapProps {
  closing: boolean;
  /**
   * Элемент, рядом с которым вылезает попап на десктопе.
   * Лучше передавать RefObject c current.
   * В v6 будет обязательным.
   */
  toggleRef?: ToggleRef; // TODO [>=6]: сделать обязательным
  /**
   * Направление на десктопе
   *  @deprecated v5.7.0
   */
  popupDirection?: PopupDirection;
  /**
   * Позиционирование всплывающего окна для десктопа.
   * Компонент выберет наилучшее расположение сам, но можно задать приоритетное направление с помощью этого свойства
   */
  placement?: PlacementWithAuto;
  /**
   * Отступ, где заданное кол-во единиц равняется пикселям
   * */
  popupOffsetDistance?: number;
}
