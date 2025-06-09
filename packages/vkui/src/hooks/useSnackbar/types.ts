import type * as React from 'react';
import { type SnackbarProps } from '../../components/Snackbar/Snackbar';
import { type SnackbarPlacement } from '../../components/Snackbar/types';
import { type PartialFields } from '../../types';

type SnackbarConfig = PartialFields<Omit<SnackbarProps, 'open' | 'offsetY'>, 'onClose'>;

export type SnackbarsMap = Record<string, SnackbarData[]>;

export interface SnackbarApi {
  open: (config: SnackbarConfig) => string;
  update: (id: string, config: Omit<SnackbarConfig, 'id'>) => void;
  close: (id: string) => void;
  closeAll: () => void;
  clearQueue: (placement?: SnackbarPlacement) => void;
}

export type UseSnackbarResult = [SnackbarApi, React.ReactElement | null];

export type SnackbarData = { props: SnackbarProps; id: string };

export { type SnackbarPlacement } from '../../components/Snackbar/types';
export { SnackbarProps };
