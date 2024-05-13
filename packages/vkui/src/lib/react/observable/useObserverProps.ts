import * as React from 'react';
import { useIsomorphicLayoutEffect } from '../../useIsomorphicLayoutEffect';
import { PROPS_OBSERVER } from './constants';
import type { HandlerFn, ObservableProps, TargetProps } from './types';

export const useObserverProps = <T extends TargetProps, ObservableT extends ObservableProps<T>>(
  observableProps: ObservableT | null,
) => {
  const [props, setProps] = React.useState<T | null>(observableProps);
  const handler: HandlerFn<T> = React.useCallback((prop, value) => {
    setProps((prev) => (prev === null ? prev : { ...prev, [prop]: value }));
  }, []);
  useIsomorphicLayoutEffect(() => {
    if (observableProps !== null && observableProps[PROPS_OBSERVER]) {
      const dispose = observableProps[PROPS_OBSERVER](handler);
      return dispose;
    }
    return;
  }, [observableProps, handler]);
  return props;
};
