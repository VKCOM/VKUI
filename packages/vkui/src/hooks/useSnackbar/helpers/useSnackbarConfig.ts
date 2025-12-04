import * as React from 'react';
import { useIsomorphicLayoutEffect } from '../../../lib/useIsomorphicLayoutEffect';
import { type UseSnackbar } from '../types';

const DEFAULT_MAX_VISIBLE_SNACKBARS = 4;

export type UseSnackbarConfigReturn = {
  maxSnackbarsCount: number;
  queueStrategy: 'queue' | 'shift';
  verticalOffsetTop: number | string | undefined;
  verticalOffsetBottom: number | string | undefined;
  setMaxSnackbarsCount: (count: number) => void;
  setQueueStrategy: (strategy: 'queue' | 'shift') => void;
  setVerticalOffsetTop: (offset: number | string | undefined) => void;
  setVerticalOffsetBottom: (offset: number | string | undefined) => void;
};

export const useSnackbarConfig = (params: UseSnackbar.Parameters = {}): UseSnackbarConfigReturn => {
  const {
    maxSnackbarsCount: maxSnackbarsCountProp = DEFAULT_MAX_VISIBLE_SNACKBARS,
    queueStrategy: queueStrategyProp = 'queue',
    verticalOffsetTop: verticalOffsetTopProp,
    verticalOffsetBottom: verticalOffsetBottomProp,
  } = params;

  const [maxSnackbarsCount, setMaxSnackbarsCount] = React.useState(maxSnackbarsCountProp);
  const [queueStrategy, setQueueStrategy] = React.useState(queueStrategyProp);
  const [verticalOffsetTop, setVerticalOffsetTop] = React.useState(verticalOffsetTopProp);
  const [verticalOffsetBottom, setVerticalOffsetBottom] = React.useState(verticalOffsetBottomProp);

  useIsomorphicLayoutEffect(
    () => setMaxSnackbarsCount(maxSnackbarsCountProp),
    [maxSnackbarsCountProp],
  );
  useIsomorphicLayoutEffect(() => setQueueStrategy(queueStrategyProp), [queueStrategyProp]);
  useIsomorphicLayoutEffect(
    () => setVerticalOffsetTop(verticalOffsetTopProp),
    [verticalOffsetTopProp],
  );
  useIsomorphicLayoutEffect(
    () => setVerticalOffsetBottom(verticalOffsetBottomProp),
    [verticalOffsetBottomProp],
  );

  return {
    maxSnackbarsCount,
    queueStrategy,
    verticalOffsetTop,
    verticalOffsetBottom,
    setMaxSnackbarsCount,
    setQueueStrategy,
    setVerticalOffsetTop,
    setVerticalOffsetBottom,
  };
};
