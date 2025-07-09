'use client';
/* eslint-disable jsdoc/require-jsdoc */

import * as React from 'react';
import { useIsomorphicLayoutEffect } from '../../lib/useIsomorphicLayoutEffect';
import type { HasChildren } from '../../types';
import { ScrollContext } from '../AppRoot/ScrollContext';

export interface ScrollSaverProps extends HasChildren {
  initialScroll?: number;
  saveScroll: (this: void, scroll: number) => any;
}

export const ScrollSaver = ({
  children,
  initialScroll,
  saveScroll,
}: ScrollSaverProps): React.ReactNode => {
  const { getScroll, scrollTo } = React.useContext(ScrollContext);
  useIsomorphicLayoutEffect(() => {
    if (typeof initialScroll === 'number') {
      scrollTo(0, initialScroll);
    }
    return () => saveScroll(getScroll().y);
  }, []);
  return <React.Fragment>{children}</React.Fragment>;
};
