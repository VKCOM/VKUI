import { useContext } from 'react';
import { PlatformType } from '../lib/platform';
import { SSRContext } from '../lib/SSR';
import { ConfigProviderContext } from '../components/ConfigProvider/ConfigProviderContext';

export function usePlatform(): PlatformType {
  const ssrContext = useContext(SSRContext);
  const { platform } = useContext(ConfigProviderContext);
  return ssrContext.platform || platform;
}
