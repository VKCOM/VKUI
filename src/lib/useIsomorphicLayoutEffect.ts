// eslint-disable-next-line no-restricted-imports
import { useEffect, useLayoutEffect } from 'react';
import { canUseDOM } from './dom';

export const useIsomorphicLayoutEffect = canUseDOM ? useLayoutEffect : useEffect;
