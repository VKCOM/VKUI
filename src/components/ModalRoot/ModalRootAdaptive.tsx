import React, { FC } from 'react';
import { HasChildren } from '../../types';
import withAdaptivity, { AdaptivityProps, ViewWidth } from '../../hoc/withAdaptivity';
import { ModalRootTouch } from './ModalRoot';
import { ModalRootDesktop } from './ModalRootDesktop';
import { ViewHeight } from '../AdaptivityProvider/AdaptivityContext';

export interface ModalRootProps extends HasChildren, AdaptivityProps {
  activeModal?: string | null;

  /**
   * Будет вызвано при закрытии активной модалки с её id
   */
  onClose?(modalId: string): void;
}

const ModalRootComponent: FC<ModalRootProps> = (props) => {
  const RootComponent = props.viewWidth > ViewWidth.MOBILE && props.viewHeight === ViewHeight.HEIGHT_720
    ? ModalRootDesktop
    : ModalRootTouch;

  return <RootComponent {...props} />;
};

ModalRootComponent.displayName = 'ModalRoot';

export const ModalRoot = withAdaptivity(ModalRootComponent, {
  viewWidth: true,
  viewHeight: true,
});
