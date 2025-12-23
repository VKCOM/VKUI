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
          return modal.modalProps?.disableModalOverlay;
        }) ?? false,
      disableOpenAnimation:
        getActiveModalProp(state, (modal) => {
          return modal.modalProps?.disableOpenAnimation;
        }) ?? false,
      disableCloseAnimation:
        getActiveModalProp(state, (modal) => {
          return modal.modalProps?.disableCloseAnimation;
        }) ?? false,
    }),
    [state],
  );
};
