'use client';

import * as React from 'react';
import { useExternRef } from '../../../hooks/useExternRef';
import type { HasComponent, HasRootRef } from '../../../types.ts';
import { RootComponent } from '../../RootComponent/RootComponent';
import { type ReorderProps } from '../Reorder';
import { ItemContext, ReorderContext } from '../context';

export type ReorderItemProps = React.AllHTMLAttributes<HTMLElement> &
  HasRootRef<HTMLElement> &
  HasComponent &
  Pick<ReorderProps, 'onReorder'>;

export function ReorderItem({ children, getRootRef, onReorder, ...restProps }: ReorderItemProps) {
  const context = React.useContext(ReorderContext);
  const itemRef = React.useRef<HTMLDivElement | null>(null);
  const rootRef = useExternRef(getRootRef, itemRef);

  const updatedContext = React.useMemo(
    () => (onReorder ? { ...context, onReorder: onReorder } : context),
    [context, onReorder],
  );

  const itemContext = React.useMemo(
    () => ({
      itemRef,
    }),
    [],
  );

  return (
    <ReorderContext.Provider value={updatedContext}>
      <ItemContext.Provider value={itemContext}>
        <RootComponent getRootRef={rootRef} {...restProps}>
          {children}
        </RootComponent>
      </ItemContext.Provider>
    </ReorderContext.Provider>
  );
}
