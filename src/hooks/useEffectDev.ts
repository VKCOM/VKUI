import { useEffect } from 'react';
import { noop } from '../lib/utils';

export const useEffectDev = process.env.NODE_ENV === 'development' ? useEffect : noop;
