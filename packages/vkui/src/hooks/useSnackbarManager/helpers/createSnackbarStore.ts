"use client";

import type { SnackbarItem, SnackbarPlacement } from "../types";
import {
  addSnackbarToState,
  closeAllSnackbarsInState,
  closeOverflowedSnackbarsInState,
  closeSnackbarInState,
  removeSnackbarFromState,
  type SnackbarState,
  updateSnackbarPropsInState,
} from "./snackbarStateHelpers";

export type SnackbarStore = {
  getState: () => SnackbarState;
  getSnackbarsByPlacement: (
    placement: SnackbarPlacement,
    limit: number
  ) => SnackbarItem[];
  subscribe: (listener: () => void) => () => void;
  showedSnackbars: Set<string>;
  addSnackbar: (snackbar: SnackbarItem) => void;
  removeSnackbar: (id: string) => void;
  updateSnackbar: (
    id: string,
    config: Partial<SnackbarItem["snackbarProps"]>
  ) => void;
  closeSnackbar: (id: string) => void;
  closeAll: (showedSnackbars: Set<string>) => void;
  closeOverflowedSnackbars: (placementSnackbars: SnackbarItem[]) => void;
};

export const createSnackbarStore = (): SnackbarStore => {
  let state: SnackbarState = {
    snackbars: [],
    snackbarsToClose: new Set<string>(),
  };
  const listeners = new Set<() => void>();
  const showedSnackbars = new Set<string>();

  const notify = () => {
    listeners.forEach((listener) => listener());
  };

  const setState = (updater: (oldState: SnackbarState) => SnackbarState) => {
    state = updater(state);
    notify();
  };

  return {
    getState: () => state,
    getSnackbarsByPlacement: (placement, limit) => {
      const result: SnackbarItem[] = [];
      for (const snackbar of state.snackbars) {
        if (snackbar.snackbarProps.placement !== placement) {
          continue;
        }
        const notClosedCount = result.filter(
          (s) => !state.snackbarsToClose.has(s.id)
        ).length;
        if (notClosedCount < limit) {
          result.push(snackbar);
        }
      }
      return result;
    },
    subscribe: (listener) => {
      listeners.add(listener);
      return () => listeners.delete(listener);
    },
    showedSnackbars,
    addSnackbar: (snackbar) => {
      setState((oldState) => addSnackbarToState(oldState, snackbar));
    },
    removeSnackbar: (id) => {
      setState((oldState) => removeSnackbarFromState(oldState, id));
      showedSnackbars.delete(id);
    },
    updateSnackbar: (id, config) => {
      setState((oldState) => updateSnackbarPropsInState(oldState, id, config));
    },
    closeSnackbar: (id) => {
      setState((oldState) => closeSnackbarInState(oldState, id));
    },
    closeAll: (showed) => {
      setState((oldState) => closeAllSnackbarsInState(oldState, showed));
    },
    closeOverflowedSnackbars: (placementSnackbars) => {
      setState((oldState) =>
        closeOverflowedSnackbarsInState(oldState, placementSnackbars)
      );
    },
  };
};
