import * as React from 'react';

export function withContext<T, X>(Component: T, Ctx: React.Context<X>, prop: string): T {
  function WithContext(props: {}) {
    const context = React.useContext<X>(Ctx);

    // @ts-ignore
    return <Component {...props} {...{ [prop]: context }} />;
  }
  return WithContext as unknown as T;
}
