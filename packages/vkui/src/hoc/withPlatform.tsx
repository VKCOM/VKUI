import * as React from 'react';
import { useConfigProvider } from '../components/ConfigProvider/ConfigProviderContext';
import type { HasPlatform } from '../types';

export function withPlatform<T extends HasPlatform>(
  Component: React.ComponentType<T>,
): React.FC<Omit<T, keyof HasPlatform>> {
  function WithPlatform(props: Omit<T, keyof HasPlatform>) {
    const { platform } = useConfigProvider();

    return <Component {...(props as T)} platform={platform} />;
  }
  return WithPlatform;
}
