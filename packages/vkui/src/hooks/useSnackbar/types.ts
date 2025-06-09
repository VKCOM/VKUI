import type * as React from 'react';
import { type SnackbarProps } from '../../components/Snackbar/Snackbar';
import { type PartialFields } from '../../types';

type SnackbarConfig = PartialFields<SnackbarProps, 'onClose'>;

export type SnackbarsMap = Record<string, SnackbarData[]>;

export interface SnackbarApi {
  open: (config: SnackbarConfig) => string;
  close: (id: string) => void;
  closeAll: () => void;
}

export type UseSnackbarResult = [SnackbarApi, React.ReactElement | null];

export type SnackbarData = { props: SnackbarProps; id: string };

export { type SnackbarPlacement } from '../../components/Snackbar/types';
export { SnackbarProps };
