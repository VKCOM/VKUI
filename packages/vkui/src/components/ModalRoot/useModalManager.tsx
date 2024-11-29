import { useContext, useState } from 'react';
import { useIsomorphicLayoutEffect } from '../../lib/useIsomorphicLayoutEffect';
import type { AnyFunction } from '../../types';
import { ModalOverlay, type ModalOverlayProps } from '../ModalOverlay/ModalOverlay';
import { ModalRootContext } from './ModalRootContext';
import { VisuallyHiddenModalOverlay } from './VisuallyHiddenModalOverlay/VisuallyHiddenModalOverlay';
import type { ModalRootCallbackFunction } from './types';

export interface UseModalManager {
  id: string;
  open: boolean;
  keepMounted: boolean;
  modalOverlayTestId?: string;
  noFocusToDialog?: boolean;
  onOpen?: AnyFunction;
  onOpened?: AnyFunction;
  onClose?: AnyFunction;
  onClosed?: AnyFunction;
}

export interface UseModalManagerResolvedProps {
  open: boolean;
  noFocusToDialog?: boolean;
  modalOverlayTestId?: string;
  ModalOverlay: React.ComponentType<ModalOverlayProps>;
  onOpen?: AnyFunction;
  onOpened?: AnyFunction;
  onClose?: AnyFunction;
  onClosed?: AnyFunction;
}

export type UseModalManagerResult =
  | { mounted: false; shouldPreserveSnapPoint: boolean }
  | ({ mounted: true; shouldPreserveSnapPoint: boolean } & UseModalManagerResolvedProps);

export const useModalManager = ({
  id,
  open,
  keepMounted,
  modalOverlayTestId,
  noFocusToDialog,
  onOpen,
  onOpened,
  onClose,
  onClosed,
}: UseModalManager): UseModalManagerResult => {
  const context = useContext(ModalRootContext);
  const opened = context.isInsideModal ? context.activeModal === id : open;
  const shouldPreserveSnapPoint = context.isInsideModal ? context.activeModal !== null : false;

  const [unmounted, setUnmounted] = useState(keepMounted ? false : !opened);

  useIsomorphicLayoutEffect(
    function unsetUnmounted() {
      if (!keepMounted && opened) {
        setUnmounted((prev) => (prev ? false : prev));
      }
    },
    [opened, keepMounted],
  );

  if (unmounted) {
    return { mounted: false, shouldPreserveSnapPoint };
  }

  return {
    mounted: true,
    open: opened,
    shouldPreserveSnapPoint,
    noFocusToDialog: noFocusToDialog || context.noFocusToDialog,
    modalOverlayTestId: modalOverlayTestId || context.modalOverlayTestId,
    ModalOverlay: context.isInsideModal ? VisuallyHiddenModalOverlay : ModalOverlay,
    onOpen: onOpen || getContextCallback(id, context.onOpen),
    onOpened: onOpened || getContextCallback(id, context.onOpened),
    onClose: onClose || getContextCallback(id, context.onClose),
    onClosed: function handleClosed(...args: any[]) {
      if (!keepMounted) {
        setUnmounted(true);
      }

      if (onClosed) {
        onClosed(...args);
      } else {
        context.onClosed?.(id);
      }
    },
  };
};

function getContextCallback(id: string, fn: ModalRootCallbackFunction | undefined) {
  return fn ? () => fn(id) : undefined;
}
