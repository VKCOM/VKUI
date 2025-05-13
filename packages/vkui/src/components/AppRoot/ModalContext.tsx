'use client';
import * as React from 'react';
import { noop } from '@vkontakte/vkjs';
import { type HasChildren } from '../../types';
import { useModalRoot } from '../ModalRoot/useModalRoot';
import { type ModalRootApi } from '../ModalRoot/useModalRoot/types';

const ModalsApiContext = React.createContext<ModalRootApi>({
  openCard: () => ({
    id: '',
    close: noop,
    update: noop,
    then: <R,>(resolve: () => R) => {
      return Promise.resolve().then(resolve);
    },
  }),
  openPage: () => ({
    id: '',
    close: noop,
    update: noop,
    then: <R,>(resolve: () => R) => {
      return Promise.resolve().then(resolve);
    },
  }),
  close: noop,
  closeAll: noop,
});

export const useModalsApi = () => {
  return React.useContext(ModalsApiContext);
};

export const ModalsController = ({ children }: HasChildren) => {
  const [api, modalsHolder] = useModalRoot({});

  return (
    <ModalsApiContext.Provider value={api}>
      {children}
      {modalsHolder}
    </ModalsApiContext.Provider>
  );
};
