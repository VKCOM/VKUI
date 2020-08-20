import React from 'react';
import type { FC, ComponentType } from 'react';
import type { OSType } from '../lib/platform';
import usePlatform from '../hooks/usePlatform';
import getDisplayName from '../helpers/getDisplayName';

export interface PlatformProps {
  platform: OSType
}

export default function withPlatform<P extends PlatformProps>(Component: ComponentType<P>): ComponentType<P> {
  const WithPlatform: FC<P> = (props: P) => {
    const platform = usePlatform();
    return <Component {...props} platform={platform} />;
  };

  WithPlatform.displayName = `withPlatform(${getDisplayName(Component)})`;

  return WithPlatform;
}
