import * as React from 'react';
import { canUseDOM } from './dom';

// eslint-disable-next-line no-restricted-properties
export const useIsomorphicLayoutEffect = canUseDOM ? React.useLayoutEffect : React.useEffect;
