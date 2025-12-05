import * as React from 'react';
import { type SnackbarItem } from '../types';
import {
  addSnackbarToState,
  closeAllSnackbarsInState,
  closeOverflowedSnackbarsInState,
  closeSnackbarInState,
  removeSnackbarFromState,
  type SnackbarState,
  updateSnackbarPropsInState,
} from './snackbarStateHelpers';

export type UseSnackbarStateReturn = {
  state: SnackbarState;
  showedSnackbars: React.RefObject<Set<string>>;
  addSnackbar: (snackbar: SnackbarItem) => void;
  removeSnackbar: (id: string) => void;
  updateSnackbar: (id: string, config: Partial<SnackbarItem['snackbarProps']>) => void;
  closeSnackbar: (id: string) => void;
  closeAll: (showedSnackbars: Set<string>) => void;
  closeOverflowedSnackbars: (placementSnackbars: SnackbarItem[]) => void;
};

export const useSnackbarState = (): UseSnackbarStateReturn => {
  const [state, setState] = React.useState<SnackbarState>({
    snackbars: [],
    snackbarsToClose: new Set<string>(),
  });
  const showedSnackbars = React.useRef<Set<string>>(new Set());

  const addSnackbar = React.useCallback((snackbar: SnackbarItem) => {
    setState((oldState) => addSnackbarToState(oldState, snackbar));
  }, []);

  const removeSnackbar = React.useCallback((id: string) => {
    setState((oldState) => removeSnackbarFromState(oldState, id));
    showedSnackbars.current.delete(id);
  }, []);

  const updateSnackbar = React.useCallback(
    (id: string, config: Partial<SnackbarItem['snackbarProps']>) => {
      setState((oldState) => updateSnackbarPropsInState(oldState, id, config));
    },
    [],
  );

  const closeSnackbar = React.useCallback((id: string) => {
    setState((oldState) => closeSnackbarInState(oldState, id));
  }, []);

  const closeAll = React.useCallback((showedSnackbars: Set<string>) => {
    setState((oldState) => closeAllSnackbarsInState(oldState, showedSnackbars));
  }, []);

  const closeOverflowedSnackbars = React.useCallback((placementSnackbars: SnackbarItem[]) => {
    setState((oldState) => closeOverflowedSnackbarsInState(oldState, placementSnackbars));
  }, []);

  return {
    state,
    showedSnackbars,
    addSnackbar,
    removeSnackbar,
    updateSnackbar,
    closeSnackbar,
    closeAll,
    closeOverflowedSnackbars,
  };
};
