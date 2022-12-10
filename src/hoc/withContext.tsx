import * as React from 'react';

export function withContext<T, X>(
  Component: React.ComponentType<T>,
  Ctx: React.Context<X>,
  prop: string,
): React.FC<T> {
  function WithContext(props: T) {
    const context = React.useContext<X>(Ctx);

    return <Component {...props} {...{ [prop]: context }} />;
  }
  return WithContext;
}
