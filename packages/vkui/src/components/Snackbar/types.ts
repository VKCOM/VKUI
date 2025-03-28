/* eslint-disable jsdoc/require-jsdoc */

export type SnackbarPlacement =
  | 'top-start'
  | 'top'
  | 'top-end'
  | 'bottom-start'
  | 'bottom'
  | 'bottom-end';

export type ShiftData = {
  x: number;
  y: number;
  direction: number | null;
  width: number;
  height: number;
  shifted: boolean;
  isDesktop: boolean;
};
