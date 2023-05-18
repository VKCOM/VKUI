import { DOMContextInterface } from '../../lib/dom';
import { HasChildren, HasPlatform } from '../../types';
import { ConfigProviderContextInterface } from '../ConfigProvider/ConfigProviderContext';

export enum ModalType {
  PAGE = 'page',
  CARD = 'card',
}

export type TranslateRange = [number, number];

export type ModalsState = { [index: string]: ModalsStateEntry };

export interface ModalElements {
  modalElement?: HTMLElement | null;
  innerElement?: HTMLElement | null;
  headerElement?: HTMLElement | null;
  contentElement?: HTMLElement | null;
}

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
}

export interface ModalRootProps extends HasChildren {
  activeModal?: string | null;

  /**
   * Будет вызвано при начале открытия активной модалки с её id
   */
  onOpen?(modalId: string): void;

  /**
   * Будет вызвано при окончательном открытии активной модалки с её id
   */
  onOpened?(modalId: string): void;

  /**
   * Будет вызвано при начале закрытия активной модалки с её id
   */
  onClose?(modalId: string): void;

  /**
   * Будет вызвано при окончательном закрытии активной модалки с её id
   */
  onClosed?(modalId: string): void;
}

export interface ModalRootWithDOMProps extends HasPlatform, ModalRootProps, DOMContextInterface {
  /**
   * @ignore
   */
  configProvider?: ConfigProviderContextInterface;
}
