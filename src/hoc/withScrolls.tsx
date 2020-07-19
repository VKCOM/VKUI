import React from 'react';
import { useScrolls } from '../hooks/useScrolls';
import { ReactComponentLike } from 'prop-types';

export const withScrolls = (WrappedComponent: ReactComponentLike) =>
  (props: any) => {
    const [scrolls, setScroll] = useScrolls();

    return <WrappedComponent {...props} scrolls={scrolls} setScroll={setScroll} />;
  };
