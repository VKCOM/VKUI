import * as React from 'react';
import { PlatformContext } from '../components/ConfigProvider/ConfigProviderSubContexts';
import type { PlatformType } from '../lib/platform';

export function usePlatform(): PlatformType {
  return React.useContext(PlatformContext);
}
