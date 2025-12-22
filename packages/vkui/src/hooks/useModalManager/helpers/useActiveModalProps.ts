'use client';

import * as React from 'react';
import { getActiveModalProp, type ModalManagerState } from './modalStateHelpers';

type ActiveModalPropsResult = {
  disableModalOverlay: boolean;
  disableOpenAnimation: boolean;
  disableCloseAnimation: boolean;
};

export const useActiveModalProps = (state: ModalManagerState): ActiveModalPropsResult => {
  return React.useMemo(
    () => ({
      disableModalOverlay:
        getActiveModalProp(state, (modal) => {
          return modal.type === 'custom-card' || modal.type === 'custom-page'
            ? modal.modalProps?.disableModalOverlay
            : modal.disableModalOverlay;
        }) ?? false,
      disableOpenAnimation:
        getActiveModalProp(state, (modal) => {
          return modal.type === 'custom-card' || modal.type === 'custom-page'
            ? modal.modalProps?.disableOpenAnimation
            : modal.disableOpenAnimation;
        }) ?? false,
      disableCloseAnimation:
        getActiveModalProp(state, (modal) => {
          return modal.type === 'custom-card' || modal.type === 'custom-page'
            ? modal.modalProps?.disableCloseAnimation
            : modal.disableCloseAnimation;
        }) ?? false,
    }),
    [state],
  );
};
