'use client';

import { useContext } from 'react';
import * as React from 'react';
import { noop } from '@vkontakte/vkjs';
import { useSnackbar } from '../../hooks/useSnackbar';
import { type SnackbarApi } from '../../hooks/useSnackbar';
import { type HasChildren } from '../../types';

const SnackbarApiContext = React.createContext<SnackbarApi>({
  open: () => ({
    id: '',
    close: noop,
    update: noop,
    onClose: <R,>(resolve?: () => R) => {
      return Promise.resolve().then(resolve);
    },
  }),
  openCustom: () => ({
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
  setMaxSnackbarsCount: noop,
  setQueueStrategy: noop,
  setVerticalOffsetTop: noop,
  setVerticalOffsetBottom: noop,
});

export const useSnackbarApi = () => {
  return useContext(SnackbarApiContext);
};

export const SnackbarsController = ({ children }: HasChildren) => {
  const [api, snackbarHolder] = useSnackbar();

  return (
    <SnackbarApiContext.Provider value={api}>
      {children}
      {snackbarHolder}
    </SnackbarApiContext.Provider>
  );
};
