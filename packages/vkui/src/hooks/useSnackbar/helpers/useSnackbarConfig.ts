import * as React from 'react';
import { useIsomorphicLayoutEffect } from '../../../lib/useIsomorphicLayoutEffect';
import { type UseSnackbar } from '../types';

const DEFAULT_MAX_VISIBLE_SNACKBARS = 4;

export type UseSnackbarConfigReturn = {
  limit: number;
  queueStrategy: 'queue' | 'shift';
  verticalOffsetYStart: number | string | undefined;
  verticalOffsetYEnd: number | string | undefined;
  setLimit: (count: number) => void;
  setQueueStrategy: (strategy: 'queue' | 'shift') => void;
  setVerticalOffsetYStart: (offset: number | string | undefined) => void;
  setVerticalOffsetYEnd: (offset: number | string | undefined) => void;
};

export const useSnackbarConfig = (params: UseSnackbar.Parameters = {}): UseSnackbarConfigReturn => {
  const {
    limit: limitProp = DEFAULT_MAX_VISIBLE_SNACKBARS,
    queueStrategy: queueStrategyProp = 'queue',
    verticalOffsetYStart: verticalOffsetYStartProp,
    verticalOffsetYEnd: verticalOffsetYEndProp,
  } = params;

  const [limit, setLimit] = React.useState(limitProp);
  const [queueStrategy, setQueueStrategy] = React.useState(queueStrategyProp);
  const [verticalOffsetYStart, setVerticalOffsetYStart] = React.useState(verticalOffsetYStartProp);
  const [verticalOffsetYEnd, setVerticalOffsetYEnd] = React.useState(verticalOffsetYEndProp);

  useIsomorphicLayoutEffect(
    () => setLimit(limitProp),
    [limitProp],
  );
  useIsomorphicLayoutEffect(() => setQueueStrategy(queueStrategyProp), [queueStrategyProp]);
  useIsomorphicLayoutEffect(
    () => setVerticalOffsetYStart(verticalOffsetYStartProp),
    [verticalOffsetYStartProp],
  );
  useIsomorphicLayoutEffect(
    () => setVerticalOffsetYEnd(verticalOffsetYEndProp),
    [verticalOffsetYEndProp],
  );

  return {
    limit,
    queueStrategy,
    verticalOffsetYStart,
    verticalOffsetYEnd,
    setLimit,
    setQueueStrategy,
    setVerticalOffsetYStart,
    setVerticalOffsetYEnd,
  };
};
