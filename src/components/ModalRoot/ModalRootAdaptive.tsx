import * as React from 'react';
import { withAdaptivity, AdaptivityProps, ViewHeight, ViewWidth } from '../../hoc/withAdaptivity';
import { ModalRootTouch } from './ModalRoot';
import { ModalRootDesktop } from './ModalRootDesktop';

export interface ModalRootProps extends AdaptivityProps {
  activeModal?: string | null;

  /**
   * Будет вызвано при закрытии активной модалки с её id
   */
  onClose?: (modalId: string) => void;
}

const ModalRootComponent: React.FC<ModalRootProps> = (props: ModalRootProps) => {
  const { viewWidth, viewHeight, hasMouse } = props;
  const isDesktop = viewWidth >= ViewWidth.SMALL_TABLET && (hasMouse || viewHeight >= ViewHeight.MEDIUM);

  const RootComponent = isDesktop ? ModalRootDesktop : ModalRootTouch;

  return (
    <RootComponent {...props} />
  );
};

ModalRootComponent.displayName = 'ModalRoot';

export const ModalRoot = withAdaptivity(ModalRootComponent, {
  viewWidth: true,
  viewHeight: true,
  hasMouse: true,
});
