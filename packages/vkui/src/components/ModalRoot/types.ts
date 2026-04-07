/* eslint-disable jsdoc/require-jsdoc */

import type { AppRootPortalProps } from '../AppRoot/AppRootPortal';

export type ModalRootActiveModal = string | null;

export type ModalRootCallbackFunction = (modalId: string) => void;

type ModalRootBaseProps = {
  /**
   * Открывает модальное окно с переданным id.
   */
  activeModal?: ModalRootActiveModal | undefined;

  /**
   * `data-testid` для маски.
   */
  modalOverlayTestId?: string | undefined;

  /**
   * Отключает фокус на контейнер диалогового окна при открытии.
   *
   * > Важно установить фокус после открытия в любое место модалки используя событие `onOpened`, иначе не будет работать закрытие по нажатию `Esc`.
   */
  noFocusToDialog?: boolean | undefined;

  usePortal?: AppRootPortalProps['usePortal'] | undefined;
  /**
   * Будет вызвано при начале открытия активной модалки с её id.
   */
  onOpen?: ModalRootCallbackFunction | undefined;

  /**
   * Будет вызвано при окончательном открытии активной модалки с её id.
   */
  onOpened?: ModalRootCallbackFunction | undefined;

  /**
   * Будет вызвано при начале закрытия активной модалки с её id.
   */
  onClose?: ModalRootCallbackFunction | undefined;

  /**
   * Будет вызвано при окончательном закрытии активной модалки с её id.
   */
  onClosed?: ModalRootCallbackFunction | undefined;

  /**
   * Отключает отображение и взаимодействие с фоном модалки.
   */
  disableModalOverlay?: boolean | undefined;

  /**
   * Отключает анимацию появления .
   */
  disableOpenAnimation?: boolean | undefined;
  /**
   * Отключает анимацию закрытия модалки.
   */
  disableCloseAnimation?: boolean | undefined;
};

export interface ModalRootProps extends ModalRootBaseProps {
  children: React.ReactElement | Iterable<React.ReactElement>;
  onOverlayClosed?: (() => void) | undefined;
  onOverlayShowed?: (() => void) | undefined;
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
  activeModal?: string | null | undefined;
  onClose?: VoidFunction | undefined;
}
