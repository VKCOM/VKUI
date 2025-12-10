/* eslint-disable jsdoc/require-jsdoc */

import { useContext, useId, useState } from 'react';
import { getNavId } from '../../lib/getNavId';
import { useIsomorphicLayoutEffect } from '../../lib/useIsomorphicLayoutEffect';
import { warnOnce } from '../../lib/warnOnce';
import type { AnyFunction } from '../../types';
import { ModalOverlay, type ModalOverlayProps } from '../ModalOverlay/ModalOverlay';
import { ModalRootContext } from './ModalRootContext';
import { VisuallyHiddenModalOverlay } from './VisuallyHiddenModalOverlay/VisuallyHiddenModalOverlay';
import type { ModalRootCallbackFunction } from './types';

const warn = warnOnce('useModalManager');
export interface UseModalManager {
  id?: string;
  open: boolean;
  keepMounted: boolean;
  modalOverlayTestId?: string;
  noFocusToDialog?: boolean;
  disableModalOverlay?: boolean;
  onOpen?: AnyFunction;
  onOpened?: AnyFunction;
  onClose?: AnyFunction;
  onClosed?: AnyFunction;
}

export interface UseModalManagerResolvedProps {
  id: string;
  open: boolean;
  noFocusToDialog?: boolean;
  disableModalOverlay?: boolean;
  modalOverlayTestId?: string;
  ModalOverlay: React.ComponentType<ModalOverlayProps>;
  onOpen?: AnyFunction;
  onOpened?: AnyFunction;
  onClose?: AnyFunction;
  onClosed?: AnyFunction;
}

export type UseModalManagerResult =
  | { mounted: false; shouldPreserveSnapPoint: boolean; id: UseModalManagerResolvedProps['id'] }
  | ({ mounted: true; shouldPreserveSnapPoint: boolean } & UseModalManagerResolvedProps);

export const useModalManager = ({
  id: idProp,
  open,
  keepMounted,
  modalOverlayTestId,
  noFocusToDialog,
  disableModalOverlay,
  onOpen,
  onOpened,
  onClose,
  onClosed,
}: UseModalManager): UseModalManagerResult => {
  const context = useContext(ModalRootContext);
  const generatingId = useId();
  const id = getNavId({ nav: idProp }, context.isInsideModal ? warn : undefined) || generatingId;
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
    return { mounted: false, shouldPreserveSnapPoint, id };
  }

  return {
    id,
    mounted: true,
    open: opened,
    shouldPreserveSnapPoint,
    noFocusToDialog: noFocusToDialog || context.noFocusToDialog,
    modalOverlayTestId: modalOverlayTestId || context.modalOverlayTestId,
    disableModalOverlay: disableModalOverlay || context.disableModalOverlay,
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
