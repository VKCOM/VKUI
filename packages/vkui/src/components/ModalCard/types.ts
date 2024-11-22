import type { UIEvent } from 'react';
import type { NavIdProps } from '../../lib/getNavId';
import type { UseBottomSheetHandlers } from '../../lib/sheet';
import type { ModalCardBaseProps } from '../ModalCardBase/ModalCardBase';

export type ModalCardCloseReason =
  | 'click-overlay'
  | 'click-close-button'
  | 'escape-key'
  | 'swipe-down';

export interface ModalCardProps
  extends NavIdProps,
    Omit<ModalCardBaseProps, 'id' | 'onClose' | 'onTransitionEnd' | keyof UseBottomSheetHandlers> {
  /**
   * Состояние видимости.
   *
   * @default false
   */
  open?: boolean;
  /**
   * Сохранять ли компонент в DOM при `open={false}`.
   *
   * @default false
   */
  keepMounted?: boolean;
  /**
   * Отключает фокус на интерактивный элемент после открытия модалки.
   */
  noFocusToDialog?: boolean;
  /**
   * `data-testid` для оверлея.
   */
  modalOverlayTestId?: string;
  /**
   * Будет вызвано при начале открытия модалки.
   */
  onOpen?: VoidFunction;
  /**
   * Будет вызвано при окончательном открытии модалки.
   */
  onOpened?: VoidFunction;
  /**
   * Будет вызвано при начале закрытия модалки.
   */
  onClose?: (reason: ModalCardCloseReason, event?: UIEvent<HTMLElement>) => void;
  /**
   * Будет вызвано при окончательном закрытии модалки.
   */
  onClosed?: VoidFunction;
}
