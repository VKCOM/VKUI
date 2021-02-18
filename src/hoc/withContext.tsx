import React, { Context } from 'react';

export function withContext<T, X>(Component: T, Ctx: Context<X>, prop: string): T {
  function WithContext(props: {}) {
    const context = React.useContext<X>(Ctx);

    // @ts-ignore
    return <Component {...props} {...{ [prop]: context }} />;
  }
  return WithContext as unknown as T;
}
