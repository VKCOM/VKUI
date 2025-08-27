'use client';
import * as React from 'react';
import { noop } from '@vkontakte/vkjs';
import { type ModalRootApi, useModalRoot } from '../../hooks/useModalRoot';
import { type HasChildren } from '../../types';

const ModalsApiContext = React.createContext<ModalRootApi>({
  openModalCard: () => ({
    id: '',
    close: noop,
    update: noop,
    onClose: <R,>(resolve?: () => R) => {
      return Promise.resolve().then(resolve);
    },
  }),
  openModalPage: () => ({
    id: '',
    close: noop,
    update: noop,
    onClose: <R,>(resolve?: () => R) => {
      return Promise.resolve().then(resolve);
    },
  }),
  openCustomModal: () => ({
    id: '',
    close: noop,
    update: noop,
    onClose: <R,>(resolve?: () => R) => {
      return Promise.resolve().then(resolve);
    },
  }),
  update: noop,
  close: noop,
  closeAll: noop,
  setSaveHistory: noop,
});

export const useModalsApi = () => {
  return React.useContext(ModalsApiContext);
};

export const ModalsController = ({ children }: HasChildren) => {
  const [api, modalsHolder] = useModalRoot();

  return (
    <ModalsApiContext.Provider value={api}>
      {children}
      {modalsHolder}
    </ModalsApiContext.Provider>
  );
};
