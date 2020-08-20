import React from 'react';
import { SSRContext } from '../lib/SSR';
import { ConfigProviderContext } from '../components/ConfigProvider/ConfigProviderContext';

export default function withPlatform<T>(Component: T): T {
  function WithPlatform(props: {}) {
    const ssrContext = React.useContext(SSRContext);
    const { platform } = React.useContext(ConfigProviderContext);
    // @ts-ignore
    return <Component {...props} platform={ssrContext.platform || platform} />;
  }

  const displayName = Component.displayName || Component.name || 'Component';
  WithPlatform.displayName = `withPlatform{displayName})`;

  return WithPlatform as unknown as T;
}
