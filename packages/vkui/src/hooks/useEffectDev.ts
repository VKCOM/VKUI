import { useEffect } from 'react';
import { noop } from '@vkontakte/vkjs';

export const useEffectDev: typeof useEffect =
  process.env.NODE_ENV === 'development' ? useEffect : noop;
