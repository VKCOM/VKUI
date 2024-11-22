'use client';

import { useId } from 'react';
import { ModalContext } from '../../context/ModalContext';
import { getNavId } from '../../lib/getNavId';
import { warnOnce } from '../../lib/warnOnce';
import { useModalManager } from '../ModalRoot/useModalManager';
import { ModalPageInternal } from './ModalPageInternal';
import type { ModalPageProps } from './types';

const warn = warnOnce('ModalPage');

/**
 * @see https://vkcom.github.io/VKUI/#/ModalPage
 */
export const ModalPage = ({
  id: idProp,
  nav,
  open = false,
  modalOverlayTestId,
  noFocusToDialog,
  onOpen,
  onOpened,
  onClose,
  onClosed,
  size = 's',
  settlingHeight = 50,
  keepMounted = false,
  ...restProps
}: ModalPageProps) => {
  const generatingId = useId();
  const id = getNavId({ nav, id: idProp }, warn) || generatingId;

  const { mounted, ...resolvedProps } = useModalManager({
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

  if (!mounted) {
    return null;
  }

  return (
    <ModalContext.Provider value={id}>
      <ModalPageInternal
        id={id}
        size={size}
        aria-labelledby={`${id}-label`}
        settlingHeight={settlingHeight}
        {...resolvedProps}
        {...restProps}
      />
    </ModalContext.Provider>
  );
};
