/** TODO [>=8] Удалить deprecated типы */

import type { AppRootPortalProps } from '../AppRoot/AppRootPortal';

/**
 * @deprecated будет удалён в **VKUI v8**
 */
export type ModalType = 'page' | 'card';

/**
 * @deprecated будет удалён в **VKUI v8**
 */
export type TranslateRange = [number, number];

/**
 * @deprecated будет удалён в **VKUI v8**
 */
export interface ModalElements {
  modalElement?: HTMLElement | null;
  innerElement?: HTMLElement | null;
  headerElement?: HTMLElement | null;
  contentElement?: HTMLElement | null;
  bottomInset?: HTMLElement | null;
}

/**
 * @deprecated будет удалён в **VKUI v8**
 */
export interface ModalsStateEntry extends ModalElements {
  id: string | null;
  /**
   * Событие начала открытия модалки.
   */
  onOpen?: VoidFunction;
  /**
   * Событие открытия модалки.
   */
  onOpened?: VoidFunction;
  /**
   * Событие начала закрытия модалки.
   */
  onClose?: VoidFunction;
  /**
   * Событие закрытия модалки.
   */
  onClosed?: VoidFunction;
  type?: ModalType;

  settlingHeight?: number;
  expandable?: boolean;

  /**
   * Процент текущего сдвига модалки
   */
  translateY?: number;
  /**
   * Процент сдвига модалки в изначальном состоянии
   */
  translateYFrom?: number;
  /**
   * Процент сдвига модалки во время взаимодействия с ней (потянуть, чтобы открыть или закрыть)
   */
  translateYCurrent?: number;

  touchStartContentScrollTop?: number;
  touchMovePositive?: boolean | null;
  touchShiftYPercent?: number;

  expanded?: boolean;
  collapsed?: boolean;
  hidden?: boolean;

  contentScrolled?: boolean;
  contentScrollStopTimeout?: ReturnType<typeof setTimeout>;

  expandedRange?: TranslateRange;
  collapsedRange?: TranslateRange;
  hiddenRange?: TranslateRange;
  /**
   * Отключает возможность закрыть модалку стандартными способами
   */
  preventClose?: boolean;
}

export type ModalRootActiveModal = string | null;

export type ModalRootCallbackFunction = (modalId: string) => void;

type ModalRootBaseProps = {
  activeModal?: ModalRootActiveModal;

  /**
   * `data-testid` для маски
   */
  modalOverlayTestId?: string;

  /**
   * Отключает фокус на контейнер диалогового окна при открытии.
   */
  noFocusToDialog?: boolean;

  usePortal?: AppRootPortalProps['usePortal'];
  /**
   * Будет вызвано при начале открытия активной модалки с её id
   */
  onOpen?: ModalRootCallbackFunction;

  /**
   * Будет вызвано при окончательном открытии активной модалки с её id
   */
  onOpened?: ModalRootCallbackFunction;

  /**
   * Будет вызвано при начале закрытия активной модалки с её id
   */
  onClose?: ModalRootCallbackFunction;

  /**
   * Будет вызвано при окончательном закрытии активной модалки с её id
   */
  onClosed?: ModalRootCallbackFunction;
};

export interface ModalRootProps extends ModalRootBaseProps {
  children: React.ReactElement | Iterable<React.ReactElement>;
}

type ModalRootContextBaseInterface = {
  /**
   * Обозначает, в контексте ли модального окна мы сейчас.
   */
  isInsideModal: boolean;

  /**
   * С **VKUI v7** задача с обновлением высоты контента при `dynamicContentHeight` решается через CSS.
   *
   * @deprecated будет удалён в **VKUI v8**
   */
  updateModalHeight: VoidFunction;

  /**
   * С **VKUI v7** регистрация модальных окон больше не требуется.
   *
   * @deprecated будет удалён в **VKUI v8**
   */
  registerModal: (data: ModalElements & Required<Pick<ModalsStateEntry, 'type' | 'id'>>) => void;
};

export interface ModalRootContextInterface
  extends ModalRootContextBaseInterface,
    ModalRootBaseProps {}

export interface UseModalRootContext extends ModalRootContextBaseInterface {
  onClose?: VoidFunction;
}
