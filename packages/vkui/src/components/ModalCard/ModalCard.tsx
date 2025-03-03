'use client';

import { useId } from 'react';
import { ModalContext } from '../../context/ModalContext';
import { getNavId } from '../../lib/getNavId';
import { warnOnce } from '../../lib/warnOnce';
import { useModalManager } from '../ModalRoot/useModalManager';
import { ModalCardInternal } from './ModalCardInternal';
import type { ModalCardProps } from './types';

const warn = warnOnce('ModalCard');

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
  const generatingId = useId();
  const id = getNavId({ nav, id: idProp }, warn) || generatingId;

  const {
    mounted,
    shouldPreserveSnapPoint: excludedProp,
    ...resolvedProps
  } = useModalManager({
    id,
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
