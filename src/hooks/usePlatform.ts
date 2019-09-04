import { useContext } from 'react';
import { OS, platform } from '../lib/platform';
import { SSRContext } from '../lib/SSR';

export function usePlatform(): OS {
  const ssrContext = useContext(SSRContext);
  return ssrContext.platform || platform();
}
