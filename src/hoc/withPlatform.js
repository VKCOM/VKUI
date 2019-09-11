import React from 'react';
import { SSRContext } from '../lib/SSR';
import { platform } from '../lib/platform';

export default function withPlatform(Component) {
  function WithPlatform(props) {
    const ssrContext = React.useContext(SSRContext);
    return <Component {...props} platform={ssrContext.platform || platform()} />;
  }
  return WithPlatform;
}
