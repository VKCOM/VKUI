import { FC } from 'react';
import { withAdaptivity, AdaptivityProps } from '../../hoc/withAdaptivity';
import { ModalRootTouch } from './ModalRoot';
import { ModalRootDesktop } from './ModalRootDesktop';

export interface ModalRootProps extends AdaptivityProps {
  activeModal?: string | null;

  /**
   * Будет вызвано при закрытии активной модалки с её id
   */
  onClose?: (modalId: string) => void;
}

const ModalRootComponent: FC<ModalRootProps> = (props: ModalRootProps) => {
  const { isDesktop } = props;

  const RootComponent = isDesktop ? ModalRootDesktop : ModalRootTouch;

  return (
    <RootComponent {...props} />
  );
};

ModalRootComponent.displayName = 'ModalRoot';

export const ModalRoot = withAdaptivity(ModalRootComponent, {
  isDesktop: true,
});
