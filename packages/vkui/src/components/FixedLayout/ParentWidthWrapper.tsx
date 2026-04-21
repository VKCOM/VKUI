'use client';

import * as React from 'react';
import { useResizeObserver } from '../../hooks/useResizeObserver';
import { defineComponentDisplayNames } from "../../lib/react/defineComponentDisplayNames";
import { setRef } from '../../lib/utils';
import type { HasComponent } from '../../types';

type ParentWidthWrapperProps = React.HTMLAttributes<HTMLElement> & HasComponent;

export const ParentWidthWrapper: React.ForwardRefExoticComponent<
  React.PropsWithoutRef<ParentWidthWrapperProps> & React.RefAttributes<HTMLElement>
  // eslint-disable-next-line react/display-name -- используется defineComponentDisplayNames
> = React.forwardRef<HTMLElement, ParentWidthWrapperProps>(
  ({ Component = 'div', style, ...restProps }, forwardedRef) => {
    const rootRef = React.useRef<HTMLElement | null>(null);
    const parentRef = React.useRef<HTMLElement | null>(null);
    const [width, setWidth] = React.useState<string | undefined>(undefined);

    const handleRootRef = React.useCallback(
      (node: HTMLElement | null) => {
        setRef(node, forwardedRef);
        setRef(node, rootRef);
        setRef(node?.parentElement ?? null, parentRef);
      },
      [forwardedRef],
    );

    const doResize = React.useCallback(() => {
      if (!parentRef.current) {
        setWidth(undefined);
        return;
      }

      const parentWidth = parentRef.current.getBoundingClientRect().width;
      setWidth(parentWidth ? `${parentWidth}px` : undefined);
    }, []);

    React.useEffect(doResize, [doResize]);
    useResizeObserver(parentRef, doResize);

    return <Component {...restProps} ref={handleRootRef} style={{ width, ...style }} />;
  },
);

if (process.env.NODE_ENV !== 'production') {
  defineComponentDisplayNames(ParentWidthWrapper, 'ParentWidthWrapper');
}
