'use client';

import { useContext } from 'react';
import * as React from 'react';
import { noop } from '@vkontakte/vkjs';
import { type SnackbarApi, useSnackbar, type UseSnackbar } from '../../hooks/useSnackbar';
import { type HasChildren } from '../../types';

const SnackbarApiContext = React.createContext<SnackbarApi.Api>({
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
  setLimit: noop,
  setQueueStrategy: noop,
  setVerticalOffsetYStart: noop,
  setVerticalOffsetYEnd: noop,
});

export const useSnackbarApi = () => {
  return useContext(SnackbarApiContext);
};

export const SnackbarsManagerProvider = ({
  children,
  ...restProps
}: HasChildren & UseSnackbar.Parameters) => {
  const [api, snackbarHolder] = useSnackbar(restProps);

  return (
    <SnackbarApiContext.Provider value={api}>
      {children}
      {snackbarHolder}
    </SnackbarApiContext.Provider>
  );
};
