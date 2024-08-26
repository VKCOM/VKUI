import { useConfigProvider } from '../components/ConfigProvider/ConfigProviderContext';
import type { PlatformType } from '../lib/platform';

export function usePlatform(): PlatformType {
  const { platform } = useConfigProvider();

  return platform;
}
