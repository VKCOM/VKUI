
export const TYPE_CARD = 'modal-card';
export const TYPE_PAGE = 'modal-page';

export interface ModalsStateEntry {
  id: string;
  onClose?: () => {};
  type?: 'modal-card' | 'modal-page';

  settlingHeight?: number;
  dynamicContentHeight?: boolean;
  expandable?: boolean;

  modalElement?: HTMLElement;
  innerElement?: HTMLElement;
  headerElement?: HTMLElement;
  contentElement?: HTMLElement;
  footerElement?: HTMLElement;

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
  expandedRange?: [number, number];
  collapsedRange?: [number, number];
  hiddenRange?: [number, number];
  contentScrollStopTimeout?: number;
}
