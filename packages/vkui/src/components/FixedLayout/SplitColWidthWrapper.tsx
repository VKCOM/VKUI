'use client';

import * as React from 'react';
import { usePlatform } from '../../hooks/usePlatform';
import { useResizeObserver } from '../../hooks/useResizeObserver';
import type { HasComponent } from '../../types';
import { SplitColContext } from '../SplitCol/SplitColContext';

type SplitColWidthWrapperProps = React.HTMLAttributes<HTMLElement> & HasComponent;

export const SplitColWidthWrapper: React.ForwardRefExoticComponent<
  React.PropsWithoutRef<SplitColWidthWrapperProps> & React.RefAttributes<HTMLElement>
> = React.forwardRef<HTMLElement, SplitColWidthWrapperProps>(
  ({ Component = 'div', style, ...restProps }, forwardedRef) => {
    const platform = usePlatform();
    const { colRef } = React.useContext(SplitColContext);
    const [width, setWidth] = React.useState<string | undefined>(undefined);

    const doResize = React.useCallback(() => {
      if (!colRef?.current) {
        setWidth(undefined);
        return;
      }

      const computedStyle = getComputedStyle(colRef.current);

      setWidth(
        `${
          colRef.current.clientWidth -
          parseFloat(computedStyle.paddingLeft || '0') -
          parseFloat(computedStyle.paddingRight || '0')
        }px`,
      );
    }, [colRef]);

    React.useEffect(doResize, [doResize, platform]);
    useResizeObserver(colRef, doResize);

    return <Component {...restProps} ref={forwardedRef} style={{ width, ...style }} />;
  },
);
