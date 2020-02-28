import React from 'react';
import { SSRContext } from '../lib/SSR';
import { platform } from '../lib/platform';

export default function withPlatform<T>(Component: T): T {
  function WithPlatform(props: {}) {
    const ssrContext = React.useContext(SSRContext);
    // @ts-ignore
    return <Component {...props} platform={ssrContext.platform || platform()} />;
  }
  return WithPlatform as unknown as T;
}
