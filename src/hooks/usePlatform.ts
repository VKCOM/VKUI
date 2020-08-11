import { useContext } from 'react';
import { OSType } from '../lib/platform';
import { SSRContext } from '../lib/SSR';
import { ConfigProviderContext } from '../components/ConfigProvider/ConfigProviderContext';

export default function usePlatform(): OSType {
  const ssrContext = useContext(SSRContext);
  const { platform } = useContext(ConfigProviderContext);
  return ssrContext.platform || platform;
}
