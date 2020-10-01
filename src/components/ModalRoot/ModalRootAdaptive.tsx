import React, { FC } from 'react';
import { HasChildren } from '../../types';
import withAdaptivity, { AdaptivityProps, ViewWidth } from '../../hoc/withAdaptivity';
import { ModalRootTouch } from './ModalRoot';
import { ModalRootDesktop } from './ModalRootDesktop';

export interface ModalRootProps extends HasChildren, AdaptivityProps {
  activeModal?: string | null;

  /**
   * Будет вызвано при закрытии активной модалки с её id
   */
  onClose?(modalId: string): void;
}

const ModalRootComponent: FC<ModalRootProps> = (props) => {
  const { viewWidth } = props;
  const isDesktop = viewWidth >= ViewWidth.TABLET;

  const RootComponent = isDesktop ? ModalRootDesktop : ModalRootTouch;

  return (
    <RootComponent {...props} />
  );
};

ModalRootComponent.displayName = 'ModalRoot';

export const ModalRoot = withAdaptivity(ModalRootComponent, {
  viewWidth: true,
});
