import type * as React from 'react';
import type { PlacementWithAuto } from '../../lib/floating/types/common';
import type { HasComponent, HasRootRef } from '../../types';

export type ToggleRef = Element | null | undefined | React.RefObject<Element | null>;

type UseFocusTrapProps = {
  /**
   * Форсированное отключение захвата фокуса.
   *
   * @default false
   */
  disabled?: boolean | undefined;
  /**
   * Управление поведением автофокуса при появлении всплывающего окна.
   * При прокидывании `true` фокус будет установлен на первый элемент.
   * При прокидывании `root` фокус будет установлен в корень.
   * @default true
   */
  autoFocus?: boolean | 'root' | undefined;
  /**
   * Управление поведением возврата фокуса при закрытии всплывающего окна.
   * @default true
   */
  restoreFocus?: boolean | (() => boolean | HTMLElement) | undefined;
  /**
   * Время в миллисекундах после которого срабатывает автофокус при появлении всплывающего окна.
   * @default 0
   */
  timeout?: number | undefined;
};

export interface SharedDropdownProps
  extends UseFocusTrapProps,
    Omit<React.AllHTMLAttributes<HTMLElement>, keyof UseFocusTrapProps>,
    HasRootRef<HTMLElement>,
    HasComponent {
  /**
   * Состояние закрытия всплывающего окна.
   */
  closing: boolean;
  /**
   * Элемент, рядом с которым вылезает всплывающий элемент на десктопе.
   * Лучше передавать `RefObject` c current.
   */
  toggleRef: ToggleRef;
  /**
   * Позиционирование всплывающего окна для десктопа.
   * Компонент выберет наилучшее расположение сам, но можно задать приоритетное направление с помощью этого свойства.
   */
  placement?: PlacementWithAuto | undefined;
  /**
   * Отступ, где заданное кол-во единиц равняется пикселям.
   * */
  popupOffsetDistance?: number | undefined;
  /**
   * По умолчанию событие `onClick` не всплывает.
   */
  allowClickPropagation?: boolean | undefined;
  /**
   * Вызывается при нажатии на кнопку `Escape`.
   */
  onClose?: VoidFunction | undefined;
}
