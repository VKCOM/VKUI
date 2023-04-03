import * as React from 'react';
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
   * В v5 будет обязательным.
   */
  toggleRef?: ToggleRef;
  /**
   * Направление на десктопе
   */
  popupDirection?: PopupDirection;
  /**
   * Отступ, где заданное кол-во единиц равняется пикселям
   * */
  popupOffsetDistance?: number;
}
