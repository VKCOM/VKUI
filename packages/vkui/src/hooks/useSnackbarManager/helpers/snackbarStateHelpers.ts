import { type SnackbarItem } from '../types';

export type SnackbarState = {
  snackbars: SnackbarItem[];
  snackbarsToClose: Set<string>;
};

export const addSnackbarToState = (state: SnackbarState, snackbar: SnackbarItem): SnackbarState => {
  return {
    ...state,
    snackbars: [...state.snackbars, snackbar],
  };
};

export const removeSnackbarFromState = (state: SnackbarState, id: string): SnackbarState => {
  return {
    snackbars: state.snackbars.filter((snackbar) => snackbar.id !== id),
    snackbarsToClose: (() => {
      const newSet = new Set(state.snackbarsToClose);
      newSet.delete(id);
      return newSet;
    })(),
  };
};

export const updateSnackbarPropsInState = (
  state: SnackbarState,
  id: string,
  config: Partial<SnackbarItem['snackbarProps']>,
): SnackbarState => {
  return {
    ...state,
    snackbars: state.snackbars.map((snackbar) =>
      snackbar.id === id
        ? { ...snackbar, snackbarProps: { ...snackbar.snackbarProps, ...config } }
        : snackbar,
    ),
  };
};

export const closeSnackbarInState = (state: SnackbarState, id: string): SnackbarState => {
  const newSnackbarsToClose = new Set(state.snackbarsToClose);
  newSnackbarsToClose.add(id);
  return {
    ...state,
    snackbarsToClose: newSnackbarsToClose,
  };
};

export const closeAllSnackbarsInState = (
  state: SnackbarState,
  showedSnackbars: Set<string>,
): SnackbarState => {
  return {
    snackbars: state.snackbars.filter(({ id }) => showedSnackbars.has(id)),
    snackbarsToClose: new Set(showedSnackbars),
  };
};

export const closeOverflowedSnackbarsInState = (
  state: SnackbarState,
  placementSnackbars: SnackbarItem[],
) => {
  const snackbarToClose = placementSnackbars.find((snackbar) => {
    return !state.snackbarsToClose.has(snackbar.id);
  });
  if (snackbarToClose) {
    return closeSnackbarInState(state, snackbarToClose.id);
  }
  return state;
};
