import * as React from 'react';
import { useIsomorphicLayoutEffect } from '../../../lib/useIsomorphicLayoutEffect';
import { type UseSnackbar } from '../types';

const DEFAULT_MAX_VISIBLE_SNACKBARS = 4;

export type UseSnackbarConfigReturn = {
  limit: number;
  queueStrategy: 'queue' | 'shift';
  verticalOffsetYStart: number | string | undefined;
  verticalOffsetYEnd: number | string | undefined;
  zIndex: number | string | undefined;
  setLimit: (count: number) => void;
  setQueueStrategy: (strategy: 'queue' | 'shift') => void;
  setVerticalOffsetYStart: (offset: number | string | undefined) => void;
  setVerticalOffsetYEnd: (offset: number | string | undefined) => void;
  setZIndex: (zIndex: number | string | undefined) => void;
};

export const useSnackbarConfig = (params: UseSnackbar.Parameters = {}): UseSnackbarConfigReturn => {
  const {
    limit: limitProp = DEFAULT_MAX_VISIBLE_SNACKBARS,
    queueStrategy: queueStrategyProp = 'shift',
    verticalOffsetYStart: verticalOffsetYStartProp,
    verticalOffsetYEnd: verticalOffsetYEndProp,
    zIndex: zIndexProp,
  } = params;

  const [limit, setLimit] = React.useState(limitProp);
  const [queueStrategy, setQueueStrategy] = React.useState(queueStrategyProp);
  const [verticalOffsetYStart, setVerticalOffsetYStart] = React.useState(verticalOffsetYStartProp);
  const [verticalOffsetYEnd, setVerticalOffsetYEnd] = React.useState(verticalOffsetYEndProp);
  const [zIndex, setZIndex] = React.useState(zIndexProp);

  useIsomorphicLayoutEffect(() => setLimit(limitProp), [limitProp]);
  useIsomorphicLayoutEffect(() => setQueueStrategy(queueStrategyProp), [queueStrategyProp]);
  useIsomorphicLayoutEffect(
    () => setVerticalOffsetYStart(verticalOffsetYStartProp),
    [verticalOffsetYStartProp],
  );
  useIsomorphicLayoutEffect(
    () => setVerticalOffsetYEnd(verticalOffsetYEndProp),
    [verticalOffsetYEndProp],
  );
  useIsomorphicLayoutEffect(() => setZIndex(zIndexProp), [zIndexProp]);

  return {
    limit,
    queueStrategy,
    verticalOffsetYStart,
    verticalOffsetYEnd,
    zIndex,
    setLimit,
    setQueueStrategy,
    setVerticalOffsetYStart,
    setVerticalOffsetYEnd,
    setZIndex,
  };
};
