import React, { useContext, FC, ComponentType, Context } from 'react';
import { getDisplayName } from '../helpers/componentUtils';

export default function withContext<P, X, U extends keyof P>(Component: ComponentType<P>, Ctx: Context<X>, prop: U) {
  const WithContext: FC<P> = (props: P) => {
    const context = useContext<X>(Ctx);
    return <Component {...props} {...{ [prop]: context }} />;
  };

  WithContext.displayName = `withContext(${getDisplayName(Component)})`;

  return WithContext as ComponentType<Omit<P, U>>;
}
