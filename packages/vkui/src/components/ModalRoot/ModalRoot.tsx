'use client';

import * as React from 'react';
import { noop } from '@vkontakte/vkjs';
import { warnOnce } from '../../lib/warnOnce';
import { AppRootPortal } from '../AppRoot/AppRootPortal';
import { ModalOverlay } from '../ModalOverlay/ModalOverlay';
import { ModalRootContext, ModalRootOverlayContext } from './ModalRootContext';
import type { ModalRootProps } from './types';

const warn = warnOnce('ModalRoot');
/**
 * @see https://vkcom.github.io/VKUI/#/ModalRoot
 */
export const ModalRoot = ({
  activeModal,
  children,
  modalOverlayTestId,
  noFocusToDialog,
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

      // callbacks
      onOpen,
      onOpened,
      onClose,
      onClosed,

      // TODO [>=8] Удалить метод
      updateModalHeight:
        /* istanbul ignore next: deprecated */
        process.env.NODE_ENV === 'development'
          ? () => {
              warn('Метод updateModalHeight() устарел и будет удалён в VKUI v8');
            }
          : noop,

      // TODO [>=8] Удалить метод
      registerModal:
        /* istanbul ignore next: deprecated */
        process.env.NODE_ENV === 'development'
          ? () => {
              warn('Метод registerModal() устарел и будет удалён в VKUI v8');
            }
          : noop,
    }),
    [activeModal, modalOverlayTestId, noFocusToDialog, onClose, onClosed, onOpen, onOpened],
  );
  const modalOverlayRef = React.useRef<HTMLDivElement>(null);
  return (
    <AppRootPortal usePortal={usePortal}>
      <ModalRootContext.Provider value={contextValue}>
        <ModalRootOverlayContext.Provider value={modalOverlayRef}>
          <ModalOverlay
            position="fixed"
            visible={typeof activeModal === 'string'}
            getRootRef={modalOverlayRef}
          />
          {children}
        </ModalRootOverlayContext.Provider>
      </ModalRootContext.Provider>
    </AppRootPortal>
  );
};
