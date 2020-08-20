import React, { Context } from 'react';

export default function withContext<T, X>(Component: T, Ctx: Context<X>, prop: string): T {
  function WithContext(props: {}) {
    const context = React.useContext<X>(Ctx);

    // @ts-ignore
    return <Component {...props} {...{ [prop]: context }} />;
  }

  const displayName = Component.displayName || Component.name || 'Component';
  WithContext.displayName = `withContext{displayName})`;

  return WithContext as unknown as T;
}
