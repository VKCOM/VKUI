'use client';

import * as React from 'react';
import { PlatformContext } from '../components/ConfigProvider/ConfigProviderSubContexts';
import type { HasPlatform } from '../types';

export function withPlatform<T extends HasPlatform>(
  Component: React.ComponentType<T>,
): React.FC<Omit<T, keyof HasPlatform>> {
  function WithPlatform(props: Omit<T, keyof HasPlatform>) {
    const platform = React.useContext(PlatformContext);

    return <Component {...(props as T)} platform={platform} />;
  }
  return WithPlatform;
}
