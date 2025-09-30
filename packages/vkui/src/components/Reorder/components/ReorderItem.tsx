'use client';

import * as React from 'react';
import { useExternRef } from '../../../hooks/useExternRef';
import { RootComponent, type RootComponentProps } from '../../RootComponent/RootComponent';
import { type ReorderProps } from '../Reorder.tsx';
import { ItemContext, ReorderContext } from '../context';

export type ReorderItemProps = RootComponentProps<HTMLDivElement> & Pick<ReorderProps, 'onReorder'>;

export function ReorderItem({ children, getRootRef, onReorder, ...restProps }: ReorderItemProps) {
  const context = React.useContext(ReorderContext);
  const itemRef = React.useRef<HTMLDivElement | null>(null);
  const rootRef = useExternRef(getRootRef, itemRef);

  return (
    <ReorderContext.Provider value={onReorder ? { ...context, onReorder } : context}>
      <ItemContext.Provider value={{ itemRef }}>
        <RootComponent getRootRef={rootRef} {...restProps}>
          {children}
        </RootComponent>
      </ItemContext.Provider>
    </ReorderContext.Provider>
  );
}
