import { useContext } from 'React';
import { OS } from '../lib/platform';
import { SSRContext } from '../lib/SSR';

export function usePlatform(): OS {
  const ssrContext = useContext(SSRContext);
  return ssrContext.platform;
}
