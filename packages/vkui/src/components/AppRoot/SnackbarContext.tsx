'use client';

import { useContext } from 'react';
import * as React from 'react';
import { noop } from '@vkontakte/vkjs';
import { useSnackbar } from '../../hooks/useSnackbar';
import { type SnackbarApi } from '../../hooks/useSnackbar/types';
import { type HasChildren } from '../../types';

const SnackbarApiContext = React.createContext<SnackbarApi>({
  open: () => '',
  update: noop,
  close: noop,
  closeAll: noop,
  clearQueue: noop,
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
