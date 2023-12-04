import * as React from 'react';
import type { PlacementWithAuto } from '../../lib/floating/types/common';
import { FocusTrapProps } from '../FocusTrap/FocusTrap';

export type ToggleRef = Element | null | undefined | React.RefObject<Element>;

export interface SharedDropdownProps extends FocusTrapProps {
  closing: boolean;
  /**
   * Элемент, рядом с которым вылезает попап на десктопе.
   * Лучше передавать RefObject c current.
   */
  toggleRef: ToggleRef;
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
