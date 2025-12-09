/* eslint-disable jsdoc/require-jsdoc */

import type { AppRootPortalProps } from '../AppRoot/AppRootPortal';

export type ModalRootActiveModal = string | null;

export type ModalRootCallbackFunction = (modalId: string) => void;

type ModalRootBaseProps = {
  /**
   * Открывает модальное окно с переданным id.
   */
  activeModal?: ModalRootActiveModal;

  /**
   * `data-testid` для маски.
   */
  modalOverlayTestId?: string;

  /**
   * Отключает фокус на контейнер диалогового окна при открытии.
   *
   * > Важно установить фокус после открытия в любое место модалки используя событие `onOpened`, иначе не будет работать закрытие по нажатию `Esc`.
   */
  noFocusToDialog?: boolean;

  usePortal?: AppRootPortalProps['usePortal'];
  /**
   * Будет вызвано при начале открытия активной модалки с её id.
   */
  onOpen?: ModalRootCallbackFunction;

  /**
   * Будет вызвано при окончательном открытии активной модалки с её id.
   */
  onOpened?: ModalRootCallbackFunction;

  /**
   * Будет вызвано при начале закрытия активной модалки с её id.
   */
  onClose?: ModalRootCallbackFunction;

  /**
   * Будет вызвано при окончательном закрытии активной модалки с её id.
   */
  onClosed?: ModalRootCallbackFunction;

  /**
   * Отключает отображение и взаимодействие с фоном модалки.
   */
  disableModalOverlay?: boolean;
};

export interface ModalRootProps extends ModalRootBaseProps {
  children: React.ReactElement | Iterable<React.ReactElement>;
}

type ModalRootContextBaseInterface = {
  /**
   * Обозначает, в контексте ли модального окна мы сейчас.
   */
  isInsideModal: boolean;
};

export interface ModalRootContextInterface
  extends ModalRootContextBaseInterface,
    ModalRootBaseProps {}

export interface UseModalRootContext extends ModalRootContextBaseInterface {
  activeModal?: string | null;
  onClose?: VoidFunction;
}
