import React, { useContext } from 'react';
import type { FC, ComponentType, Context } from 'react';

type PartialContext<P, X, T extends keyof P> = Omit<P, {
  [K in keyof P]: P[K] extends X ? never : K
}[T]>;

export default function withContext<P, X, U extends keyof P>(Component: ComponentType<P>, Ctx: Context<X>, prop: U) {
  const WithContext: FC<P> = (props: P) => {
    const context = useContext<X>(Ctx);
    return <Component {...props} {...{ [prop]: context }} />;
  };

  return WithContext as ComponentType<PartialContext<P, X, U>>;
}
