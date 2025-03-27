'use client';

import { useContext } from 'react';
import * as React from 'react';
import { noop } from '@vkontakte/vkjs';
import { type HasChildren } from '../../types';
import { type SnackbarApi, useSnackbar } from '../Snackbar/useSnackbar';

const SnackbarApiContext = React.createContext<SnackbarApi>({
  open: () => '',
  close: noop,
  closeAll: noop,
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
