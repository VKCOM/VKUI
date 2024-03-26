import { useCSSKeyframesAnimationController } from '../../lib/animation';
import { AppRootPortal } from '../AppRoot/AppRootPortal';
import { ModalPageV2 } from './ModalPageV2';
import type { ModalPageV2Props } from './types';

export const ModalPageRoot = ({
  open,
  onOpen,
  onOpened,
  onClosed,
  keepMounted,
  dynamicContentHeight,
  ...restProps
}: ModalPageV2Props) => {
  const [animationState, animationHandlers] = useCSSKeyframesAnimationController(
    open ? 'enter' : 'exit',
    {
      onEnter: onOpen,
      onEntered: onOpened,
      onExited: onClosed,
    },
  );

  if (!keepMounted && animationState === 'exited') {
    return null;
  }

  return (
    <AppRootPortal usePortal>
      <ModalPageV2 animationState={animationState} {...animationHandlers} {...restProps} />
    </AppRootPortal>
  );
};
