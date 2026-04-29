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
  open?: boolean | undefined;
  /**
   * Сохранять ли компонент в DOM при `open={false}`.
   *
   * @default false
   */
  keepMounted?: boolean | undefined;
  /**
   * Отключает фокус на интерактивный элемент после открытия модалки.
   *
   * > Важно установить фокус после открытия в любое место модалки используя событие `onOpened`, иначе не будет работать закрытие по нажатию `Esc`.
   */
  noFocusToDialog?: boolean | undefined;
  /**
   * `data-testid` для оверлея.
   */
  modalOverlayTestId?: string | undefined;
  /**
   * Будет вызвано при начале открытия модалки.
   */
  onOpen?: VoidFunction | undefined;
  /**
   * Будет вызвано при окончательном открытии модалки.
   */
  onOpened?: VoidFunction | undefined;
  /**
   * Будет вызвано при начале закрытия модалки.
   */
  onClose?: ((reason: ModalCardCloseReason, event?: UIEvent<HTMLElement>) => void) | undefined;
  /**
   * Будет вызвано при окончательном закрытии модалки.
   */
  onClosed?: VoidFunction | undefined;
  /**
   * Позволяет отключить захват фокуса.
   *
   * Нужно использовать, когда поверх одной модалки открывается другая, чтобы два `FocusTrap` не конфликтовали.
   */
  disableFocusTrap?: boolean | undefined;
  /**
   * Отключает отображение и взаимодействие с фоном модалки.
   */
  disableModalOverlay?: boolean | undefined;
  /**
   * Отключает анимацию открытия модалки.
   */
  disableOpenAnimation?: boolean | undefined;
  /**
   * Отключает анимацию закрытия модалки.
   */
  disableCloseAnimation?: boolean | undefined;
  /**
   * Управление поведением возврата фокуса при закрытии всплывающего окна.
   * @default true
   */
  restoreFocus?: boolean | (() => boolean | HTMLElement) | undefined;
}
