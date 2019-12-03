import React from 'react';
import useInsets from '../hooks/useInsets';

export default function withInsets<T>(Component: T): T {
  function WithInsets(props: {}) {
    const insets = useInsets();
    // @ts-ignore
    return <Component {...props} insets={insets} />;
  }
  return WithInsets as unknown as T;
}
