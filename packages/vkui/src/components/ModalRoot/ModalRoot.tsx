'use client';

import * as React from 'react';
import { AppRootPortal } from '../AppRoot/AppRootPortal';
import { ModalOverlay } from '../ModalOverlay/ModalOverlay';
import { ModalRootContext, ModalRootOverlayContext } from './ModalRootContext';
import type { ModalRootProps } from './types';

/**
 * @see https://vkui.io/components/modal-root
 */
export const ModalRoot = ({
  activeModal,
  children,
  modalOverlayTestId,
  noFocusToDialog,
  disableModalOverlay,
  usePortal,
  onOpen,
  onOpened,
  onClose,
  onClosed,
}: ModalRootProps): React.ReactNode => {
  const contextValue = React.useMemo(
    () => ({
      isInsideModal: true,

      // base props
      activeModal,
      modalOverlayTestId,
      noFocusToDialog,
      disableModalOverlay,

      // callbacks
      onOpen,
      onOpened,
      onClose,
      onClosed,
    }),
    [
      activeModal,
      disableModalOverlay,
      modalOverlayTestId,
      noFocusToDialog,
      onClose,
      onClosed,
      onOpen,
      onOpened,
    ],
  );
  const modalOverlayRef = React.useRef<HTMLDivElement>(null);
  return (
    <AppRootPortal usePortal={usePortal}>
      <ModalRootContext.Provider value={contextValue}>
        <ModalRootOverlayContext.Provider value={modalOverlayRef}>
          {!disableModalOverlay && (
            <ModalOverlay
              position="fixed"
              visible={typeof activeModal === 'string'}
              getRootRef={modalOverlayRef}
            />
          )}
          {children}
        </ModalRootOverlayContext.Provider>
      </ModalRootContext.Provider>
    </AppRootPortal>
  );
};
