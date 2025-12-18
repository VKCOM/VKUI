import * as React from 'react';
import { useIsomorphicLayoutEffect } from '../../../lib/useIsomorphicLayoutEffect';
import { type UseSnackbar } from '../types';

const DEFAULT_MAX_VISIBLE_SNACKBARS = 4;

export type UseSnackbarConfigReturn = {
  limit: number;
  queueStrategy: 'queue' | 'shift';
  offsetYStart: number | string | undefined;
  offsetYEnd: number | string | undefined;
  zIndex: number | string | undefined;
  setLimit: (count: number) => void;
  setQueueStrategy: (strategy: 'queue' | 'shift') => void;
  setOffsetYStart: (offset: number | string | undefined) => void;
  setOffsetYEnd: (offset: number | string | undefined) => void;
  setZIndex: (zIndex: number | string | undefined) => void;
};

export const useSnackbarConfig = (params: UseSnackbar.Props = {}): UseSnackbarConfigReturn => {
  const {
    limit: limitProp = DEFAULT_MAX_VISIBLE_SNACKBARS,
    queueStrategy: queueStrategyProp = 'shift',
    offsetYStart: offsetYStartProp,
    offsetYEnd: offsetYEndProp,
    zIndex: zIndexProp,
  } = params;

  const [limit, setLimit] = React.useState(limitProp);
  const [queueStrategy, setQueueStrategy] = React.useState(queueStrategyProp);
  const [offsetYStart, setOffsetYStart] = React.useState(offsetYStartProp);
  const [offsetYEnd, setOffsetYEnd] = React.useState(offsetYEndProp);
  const [zIndex, setZIndex] = React.useState(zIndexProp);

  useIsomorphicLayoutEffect(() => setLimit(limitProp), [limitProp]);
  useIsomorphicLayoutEffect(() => setQueueStrategy(queueStrategyProp), [queueStrategyProp]);
  useIsomorphicLayoutEffect(() => setOffsetYStart(offsetYStartProp), [offsetYStartProp]);
  useIsomorphicLayoutEffect(() => setOffsetYEnd(offsetYEndProp), [offsetYEndProp]);
  useIsomorphicLayoutEffect(() => setZIndex(zIndexProp), [zIndexProp]);

  return {
    limit,
    queueStrategy,
    offsetYStart,
    offsetYEnd,
    zIndex,
    setLimit,
    setQueueStrategy,
    setOffsetYStart,
    setOffsetYEnd,
    setZIndex,
  };
};
