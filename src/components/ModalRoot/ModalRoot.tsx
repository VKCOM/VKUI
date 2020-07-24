import React, { Component } from 'react';
import { HasChildren } from '../../types';
import withAdaptivity, { AdaptivityProps, ViewWidth } from '../../hoc/withAdaptivity';
import ModalRootTouch from './ModalRootTouch';
import ModalRootDesktop from './ModalRootDesktop';

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
    const { viewWidth } = this.props;
    const isDesktop = viewWidth >= ViewWidth.TABLET;

    const RootComponent = isDesktop ? ModalRootDesktop : ModalRootTouch;

    return (
      <RootComponent {...this.props} />
    );
  }
}

export default withAdaptivity(ModalRoot, {
  viewWidth: true,
});
