import * as React from 'react';
import { DATA_DRAGGABLE_PLACEHOLDER_REACT_PROP } from '../../hooks/useDraggableWithDomApi';
import { HTMLAttributesWithRootRef } from '../../types';
import { RootComponent } from '../RootComponent/RootComponent';

export type ListProps = HTMLAttributesWithRootRef<HTMLDivElement>;

/**
 * @see https://vkcom.github.io/VKUI/#/List
 */
export const List = ({ children, ...restProps }: ListProps) => {
  return (
    <RootComponent role="list" {...restProps}>
      {children}
      <div aria-hidden {...DATA_DRAGGABLE_PLACEHOLDER_REACT_PROP}></div>
    </RootComponent>
  );
};
