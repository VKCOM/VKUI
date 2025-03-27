'use client';

import { ModalContext } from '../../context/ModalContext';
import { useModalManager } from '../ModalRoot/useModalManager';
import { ModalCardInternal } from './ModalCardInternal';
import type { ModalCardProps } from './types';

/**
 * @see https://vkcom.github.io/VKUI/#/ModalCard
 */
export const ModalCard = ({
  id: idProp,
  nav,
  open = false,
  modalOverlayTestId,
  noFocusToDialog,
  onOpen,
  onOpened,
  onClose,
  onClosed,
  keepMounted = false,
  ...restProps
}: ModalCardProps): React.ReactNode => {
  const {
    mounted,
    shouldPreserveSnapPoint: excludedProp,
    id,
    ...resolvedProps
  } = useModalManager({
    id: nav || idProp,
    open,
    keepMounted,
    modalOverlayTestId,
    noFocusToDialog,
    onOpen,
    onOpened,
    onClose,
    onClosed,
  });

  if (mounted === false) {
    return null;
  }

  return (
    <ModalContext.Provider value={id}>
      <ModalCardInternal
        id={id}
        aria-labelledby={`${id}-label`}
        titleId={`${id}-label`}
        {...resolvedProps}
        {...restProps}
      />
    </ModalContext.Provider>
  );
};
