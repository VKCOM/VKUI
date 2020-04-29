import React, { Component } from 'react';
import { HasChildren } from '../../types';
import withAdaptivity, { AdaptivityProps, ViewMode } from '../../hoc/withAdaptivity';
import ModalRootTouch from './ModalRootTouch';
import ModalRootDesktop from './ModalRootDesktop';

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

export interface ModalRootProps extends HasChildren, AdaptivityProps {
  activeModal?: string | null;

  /**
   * Будет вызвано при закрытии активной модалки с её id
   */
  onClose?(modalId: string): void;
}

export interface ModalRootState {
  activeModal?: string;
  prevModal?: string;
  nextModal?: string;
  visibleModals?: string[];
  animated?: boolean;
  switching?: boolean;
  history?: string[];
  isBack?: boolean;
  inited?: boolean;
  touchDown?: boolean;
  dragging?: boolean;
}

class ModalRoot extends Component<ModalRootProps, ModalRootState> {
  render() {
    const { viewMode } = this.props;
    const isDesktop = viewMode >= ViewMode.TABLET;

    const RootComponent = isDesktop ? ModalRootDesktop : ModalRootTouch;

    return (
      <RootComponent {...this.props} />
    );
  }
}

export default withAdaptivity(ModalRoot, {
  viewMode: true,
});
