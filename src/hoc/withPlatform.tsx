import React from 'react';
import type { FC, ComponentType } from 'react';
import type { OSType } from '../lib/platform';
import type { InheritProps } from '../types';
import usePlatform from '../hooks/usePlatform';
import { getDisplayName } from '../helpers/componentUtils';

export interface PlatformProps {
  platform: OSType
}

export default function withPlatform<P extends InheritProps>(Component: ComponentType<P & PlatformProps>): ComponentType<P> {
  const WithPlatform: FC<P> = (props: P) => {
    const platform = usePlatform();
    return <Component {...props} platform={platform} />;
  };

  WithPlatform.displayName = `withPlatform(${getDisplayName(Component)})`;

  return WithPlatform;
}
