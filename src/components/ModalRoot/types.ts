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

  translateY?: number;
  translateYFrom?: number;
  translateYCurrent?: number;
  touchStartTime?: Date;
  touchStartContentScrollTop?: number;
  touchMovePositive?: boolean | null;
  touchShiftYPercent?: number;
  expanded?: boolean;
  collapsed?: boolean;
  hidden?: boolean;
  contentScrolled?: boolean;
  expandedRange?: TranslateRange;
  collapsedRange?: TranslateRange;
  hiddenRange?: TranslateRange;
  contentScrollStopTimeout?: number;
}
