import type * as React from 'react';
import { type SnackbarProps } from '../../components/Snackbar/Snackbar';
import { type PartialFields, type RequiredFields } from '../../types';

type SnackbarConfig = PartialFields<Omit<SnackbarProps, 'open' | 'offsetY'>, 'onClose'>;

export type SnackbarsMap = Record<string, SnackbarData[]>;

export interface SnackbarApi {
  open: (config: SnackbarConfig) => string;
  update: (id: string, config: Omit<SnackbarConfig, 'id' | 'placement'>) => void;
  close: (id: string) => void;
  closeAll: () => void;
  getSnackbars: () => SnackbarData[];
}

export interface UseSnackbarParameters {
  maxSnackbarsCount?: number;
}

export type UseSnackbarResult = [SnackbarApi, React.ReactElement | null];

export type SnackbarData = RequiredFields<Omit<SnackbarProps, 'offsetY'>, 'id' | 'placement'>;

export { type SnackbarPlacement } from '../../components/Snackbar/types';
export { SnackbarProps };
