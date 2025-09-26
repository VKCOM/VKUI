import type { UIEvent } from 'react';
import { type UseFocusTrapProps } from '../../hooks/useFocusTrap';
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
    Omit<ModalCardBaseProps, 'id' | 'onClose' | 'onTransitionEnd' | keyof UseBottomSheetHandlers>,
    Pick<UseFocusTrapProps, 'restoreFocus'> {
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
   *
   * > Важно установить фокус после открытия в любое место модалки используя событие `onOpened`, иначе не будет работать закрытие по нажатию `Esc`.
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
  /**
   * Позволяет отключить захват фокуса.
   *
   * Нужно использовать, когда поверх одной модалки открывается другая, чтобы два `FocusTrap` не конфликтовали.
   */
  disableFocusTrap?: UseFocusTrapProps['disabled'];
  /**
   * Отключает отображение и взаимодействие с фоном модалки.
   * > При использовании `ModalCard` внутри `ModalRoot` есть особенность использования этого свойства.
   * > Об этом можно почитать на странице документации [`ModalRoot`](/components/modal-root#disable-modal-overlay).
   */
  disableModalOverlay?: boolean;
  /**
   * Отключает анимацию открытия модалки.
   */
  disableOpenAnimation?: boolean;
  /**
   * Отключает анимацию закрытия модалки.
   */
  disableCloseAnimation?: boolean;
}
