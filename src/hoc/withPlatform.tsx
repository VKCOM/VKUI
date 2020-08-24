import React, { FC, ComponentType } from 'react';
import { OSType } from '../lib/platform';
import usePlatform from '../hooks/usePlatform';
import { getDisplayName } from '../helpers/componentUtils';

export interface PlatformProps {
  platform: OSType;
}

export default function withPlatform<P extends PlatformProps>(Component: ComponentType<P>) {
  const WithPlatform: FC<P> = (props: P) => {
    const platform = usePlatform();
    return <Component {...props} platform={platform} />;
  };

  WithPlatform.displayName = `withPlatform(${getDisplayName(Component)})`;

  return WithPlatform as ComponentType<Omit<P, keyof PlatformProps>>;
}
