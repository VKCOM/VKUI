import * as React from 'react';
import { canUseDOM } from './dom';

export const useIsomorphicLayoutEffect = canUseDOM
  ? // eslint-disable-next-line no-restricted-properties
    React.useLayoutEffect
  : React.useEffect;
