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
  dynamicContentHeight?: boolean;
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
