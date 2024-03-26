import * as React from 'react';
import { useCustomEnsuredControl } from '../../hooks/useEnsuredControl';
import { useIsomorphicLayoutEffect } from '../../lib/useIsomorphicLayoutEffect';
import { AppRootPortal } from '../AppRoot/AppRootPortal';
import { ModalPageV2 } from './ModalPageV2';
import type { ModalPageV2Props } from './types';

export const ModalPageRoot = ({
  open: openProp,
  onOpen,
  onOpened,
  onClosed,
  dynamicContentHeight,
  // preventClose,
  ...restProps
}: ModalPageV2Props) => {
  const [openLocalState] = useCustomEnsuredControl({
    value: openProp,
    defaultValue: openProp,
  });
  const [openFinalState, setOpenFinalState] = React.useState(() => openLocalState);
  const [willBeHide, setWillBeHide] = React.useState(false);
  const hasCSSAnimation = React.useRef(false);

  const handleAnimationStart = () => {
    hasCSSAnimation.current = true;
  };

  const handleAnimationEnd = () => {
    if (willBeHide) {
      setOpenFinalState(false);
      setWillBeHide(false);
    }
  };

  useIsomorphicLayoutEffect(() => {
    if (willBeHide || openLocalState === openFinalState) {
      return;
    }

    if (openLocalState) {
      setOpenFinalState(true);
    } else if (hasCSSAnimation.current && !willBeHide) {
      setWillBeHide(true);
    } else {
      setOpenFinalState(false);
    }
  }, [openLocalState, willBeHide]);

  if (!openFinalState) {
    return null;
  }

  return (
    <AppRootPortal usePortal>
      <ModalPageV2
        willBeHide={willBeHide}
        onAnimationStart={handleAnimationStart}
        onAnimationEnd={handleAnimationEnd}
        {...restProps}
      />
    </AppRootPortal>
  );
};
