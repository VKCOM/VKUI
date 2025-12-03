'use client';

import * as React from 'react';
import { ContextHolder } from './ContextHolder';
import { useActiveModalProps } from './helpers/useActiveModalProps';
import { useModalActions } from './helpers/useModalActions';
import { useModalState } from './helpers/useModalState';
import { type ModalRootApi, type UseModalRootProps, type UseModalRootReturn } from './types';

export const useModalRoot = ({
  saveHistory: saveHistoryProp = true,
  ...props
}: UseModalRootProps = {}): UseModalRootReturn => {
  const [saveHistory, setSaveHistory] = React.useState(saveHistoryProp);
  const [overlayShowed, setOverlayShowed] = React.useState(false);

  const modalState = useModalState();
  const { state, closeAll } = modalState;

  const { openModalPage, openModalCard, openCustomModalCard, openCustomModalPage, close, update } =
    useModalActions({
      modalState,
      saveHistory,
      setOverlayShowed,
    });

  const activeModalProps = useActiveModalProps(state);

  const disableModalOverlay = props.disableModalOverlay || activeModalProps.disableModalOverlay;
  const disableOpenAnimation = props.disableOpenAnimation || activeModalProps.disableOpenAnimation;
  const disableCloseAnimation =
    props.disableCloseAnimation || activeModalProps.disableCloseAnimation;

  const api: ModalRootApi = React.useMemo(
    () => ({
      openModalPage,
      openModalCard,
      openCustomModalCard,
      openCustomModalPage,
      close,
      update,
      closeAll,
      setSaveHistory,
    }),
    [
      close,
      closeAll,
      openCustomModalCard,
      openCustomModalPage,
      openModalCard,
      openModalPage,
      update,
    ],
  );

  const contextHolder: React.ReactElement | null = React.useMemo(() => {
    const onOverlayClosed = () => {
      setOverlayShowed(false);
      props.onOverlayClosed?.();
    };

    const shouldRender = state.modals.length > 0 || (!disableModalOverlay && overlayShowed);

    if (!shouldRender) {
      return null;
    }

    return (
      <ContextHolder
        {...props}
        disableOpenAnimation={disableOpenAnimation}
        disableCloseAnimation={disableCloseAnimation}
        disableModalOverlay={disableModalOverlay}
        modals={state.modals}
        activeModal={state.activeModal}
        onOverlayClosed={onOverlayClosed}
      />
    );
  }, [
    state.modals,
    state.activeModal,
    disableModalOverlay,
    overlayShowed,
    props,
    disableOpenAnimation,
    disableCloseAnimation,
  ]);

  return [api, contextHolder];
};
