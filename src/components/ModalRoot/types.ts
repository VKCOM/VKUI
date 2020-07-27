export enum ModalType {
  PAGE = 'page',
  CARD = 'card',
}

export type TranslateRange = [number, number];

export interface ModalsStateEntry {
  id: string;
  onClose?: () => any;
  type?: ModalType;

  settlingHeight?: number;
  dynamicContentHeight?: boolean;
  expandable?: boolean;

  modalElement?: HTMLElement | null;
  innerElement?: HTMLElement | null;
  headerElement?: HTMLElement | null;
  contentElement?: HTMLElement | null;
  footerElement?: HTMLElement | null;

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

  touchStartTime?: Date;
  touchStartContentScrollTop?: number;
  touchMovePositive?: boolean | null;
  touchShiftYPercent?: number;

  expanded?: boolean;
  collapsed?: boolean;
  hidden?: boolean;

  contentScrolled?: boolean;
  contentScrollStopTimeout?: number;

  expandedRange?: TranslateRange;
  collapsedRange?: TranslateRange;
  hiddenRange?: TranslateRange;
}
