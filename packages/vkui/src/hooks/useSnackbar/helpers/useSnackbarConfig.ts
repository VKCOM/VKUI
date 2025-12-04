import * as React from 'react';
import { useIsomorphicLayoutEffect } from '../../../lib/useIsomorphicLayoutEffect';
import { type UseSnackbar } from '../types';

const DEFAULT_MAX_VISIBLE_SNACKBARS = 4;

export type UseSnackbarConfigReturn = {
  maxSnackbarsCount: number;
  queueStrategy: 'queue' | 'shift';
  verticalOffsetYStart: number | string | undefined;
  verticalOffsetYEnd: number | string | undefined;
  setMaxSnackbarsCount: (count: number) => void;
  setQueueStrategy: (strategy: 'queue' | 'shift') => void;
  setVerticalOffsetYStart: (offset: number | string | undefined) => void;
  setVerticalOffsetYEnd: (offset: number | string | undefined) => void;
};

export const useSnackbarConfig = (params: UseSnackbar.Parameters = {}): UseSnackbarConfigReturn => {
  const {
    maxSnackbarsCount: maxSnackbarsCountProp = DEFAULT_MAX_VISIBLE_SNACKBARS,
    queueStrategy: queueStrategyProp = 'queue',
    verticalOffsetYStart: verticalOffsetYStartProp,
    verticalOffsetYEnd: verticalOffsetYEndProp,
  } = params;

  const [maxSnackbarsCount, setMaxSnackbarsCount] = React.useState(maxSnackbarsCountProp);
  const [queueStrategy, setQueueStrategy] = React.useState(queueStrategyProp);
  const [verticalOffsetYStart, setVerticalOffsetYStart] = React.useState(verticalOffsetYStartProp);
  const [verticalOffsetYEnd, setVerticalOffsetYEnd] = React.useState(verticalOffsetYEndProp);

  useIsomorphicLayoutEffect(
    () => setMaxSnackbarsCount(maxSnackbarsCountProp),
    [maxSnackbarsCountProp],
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
    maxSnackbarsCount,
    queueStrategy,
    verticalOffsetYStart,
    verticalOffsetYEnd,
    setMaxSnackbarsCount,
    setQueueStrategy,
    setVerticalOffsetYStart,
    setVerticalOffsetYEnd,
  };
};
