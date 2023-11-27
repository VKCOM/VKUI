import * as React from 'react';
import { HasChildren } from '../types';

export const createWrapper = <P,>(Wrapper: React.ComponentType<HasChildren & P>, props: P) => {
  return function CreatedWrapper({ children }: HasChildren) {
    return <Wrapper {...props}>{children}</Wrapper>;
  };
};
