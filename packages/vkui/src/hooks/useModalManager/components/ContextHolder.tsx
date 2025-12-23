'use client';

import * as React from 'react';
import { ModalRoot } from '../../../components/ModalRoot/ModalRoot.tsx';
import { type ModalRootProps } from '../../../components/ModalRoot/types.ts';
import { type ModalStore } from '../helpers/createModalStore.ts';
import { useActiveModalProps } from '../helpers/useActiveModalProps.ts';

type ContextHolderProps = Omit<ModalRootProps, 'activeModal' | 'children'> & {
  store: ModalStore;
};

export function ContextHolder({
  store,
  onOverlayClosed: onOverlayClosedProp,
  onOverlayShowed: onOverlayShowedProp,
  disableModalOverlay: disableModalOverlayProp,
  disableOpenAnimation: disableOpenAnimationProp,
  disableCloseAnimation: disableCloseAnimationProp,
  ...restProps
}: ContextHolderProps) {
  const state = React.useSyncExternalStore(store.subscribe, store.getState, store.getState);

  const activeModalProps = useActiveModalProps(state);

  const disableModalOverlay = disableModalOverlayProp || activeModalProps.disableModalOverlay;
  const disableOpenAnimation = disableOpenAnimationProp || activeModalProps.disableOpenAnimation;
  const disableCloseAnimation = disableCloseAnimationProp || activeModalProps.disableCloseAnimation;

  const onOverlayClosed = React.useCallback(() => {
    store.setOverlayShowed(false);
    onOverlayClosedProp?.();
  }, [store, onOverlayClosedProp]);

  const onOverlayShowed = React.useCallback(() => {
    store.setOverlayShowed(true);
    onOverlayShowedProp?.();
  }, [store, onOverlayShowedProp]);

  const shouldRender = state.modals.length > 0 || (!disableModalOverlay && state.overlayShowed);

  if (!shouldRender) {
    return null;
  }

  return (
    <ModalRoot
      {...restProps}
      activeModal={state.activeModal}
      disableModalOverlay={disableModalOverlay}
      disableOpenAnimation={disableOpenAnimation}
      disableCloseAnimation={disableCloseAnimation}
      onOverlayClosed={onOverlayClosed}
      onOverlayShowed={onOverlayShowed}
    >
      {state.modals.map((modalData) => {
        switch (modalData.type) {
          case 'page':
          case 'card':
            const Modal = modalData.component;
            return (
              <Modal
                key={modalData.id}
                id={modalData.id}
                modalProps={modalData.modalProps}
                {...modalData.additionalProps}
                update={modalData.update}
                close={modalData.close}
              />
            );
        }
      })}
    </ModalRoot>
  );
}
