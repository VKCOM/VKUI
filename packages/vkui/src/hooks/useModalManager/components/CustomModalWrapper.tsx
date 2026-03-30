'use client';

import { useContext, useState } from 'react';
import { ModalRootContext } from '../../../components/ModalRoot/ModalRootContext';
import { VisuallyHiddenModalOverlay } from '../../../components/ModalRoot/VisuallyHiddenModalOverlay/VisuallyHiddenModalOverlay';
import type { ModalRootCallbackFunction } from '../../../components/ModalRoot/types';
import { callMultiple } from '../../../lib/callMultiple';
import { useIsomorphicLayoutEffect } from '../../../lib/useIsomorphicLayoutEffect';
import type { RequiredFields } from '../../../types';
import { type CustomModalItem, type OpenCustomModalProps } from '../types';

export type UseModalRootManager = RequiredFields<
  OpenCustomModalProps,
  'onClose' | 'onClosed' | 'id'
>;

export type UseModalRootManagerResolvedProps = Required<Omit<OpenCustomModalProps, 'id'>> & {
  open: boolean;
  mounted: boolean;
};

function getContextCallback(id: string, fn: ModalRootCallbackFunction | undefined) {
  return fn ? () => fn(id) : undefined;
}

export const useCustomModalManager = ({
  id,
  onClose,
  onClosed,
  onOpen,
  onOpened,
  disableModalOverlay,
  disableOpenAnimation,
  disableCloseAnimation,
}: UseModalRootManager): UseModalRootManagerResolvedProps => {
  const context = useContext(ModalRootContext);
  const opened = context.activeModal === id;

  const [unmounted, setUnmounted] = useState(!opened);

  useIsomorphicLayoutEffect(
    function unsetUnmounted() {
      if (opened) {
        setUnmounted((prev) => (prev ? false : prev));
      }
    },
    [opened],
  );

  return {
    mounted: !unmounted,
    open: opened,
    disableModalOverlay: (disableModalOverlay || context.disableModalOverlay) ?? false,
    disableCloseAnimation: (disableCloseAnimation || context.disableCloseAnimation) ?? false,
    disableOpenAnimation: (disableOpenAnimation || context.disableOpenAnimation) ?? false,
    onOpen: callMultiple(onOpen, getContextCallback(id, context.onOpen)),
    onOpened: callMultiple(onOpened, getContextCallback(id, context.onOpened)),
    onClose: callMultiple(onClose, getContextCallback(id, context.onClose)),
    onClosed: function handleClosed(...args: any[]) {
      setUnmounted(true);

      callMultiple(
        onClosed,
        getContextCallback(id, context.onClose && context.onClosed?.bind(this, id)),
      )(...args);
    },
  };
};

export const CustomModalWrapper = ({
  component,
  additionalProps,
  modalProps,
  close,
}: Omit<CustomModalItem, 'type'>) => {
  const { mounted, open, ...restModalProps } = useCustomModalManager(modalProps);

  if (!mounted) {
    return null;
  }

  const Modal = component;

  return (
    <>
      {!restModalProps.disableModalOverlay && (
        <VisuallyHiddenModalOverlay
          visible={open}
          onClick={close}
          disableCloseAnimation={restModalProps.disableCloseAnimation}
          disableOpenAnimation={restModalProps.disableOpenAnimation}
        />
      )}
      <Modal {...additionalProps} opened={open} modalProps={restModalProps} close={close} />
    </>
  );
};
