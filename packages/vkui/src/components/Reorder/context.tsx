/* eslint-disable jsdoc/require-jsdoc */
import { createRef, type RefObject } from 'react';
import * as React from 'react';
import { noop } from '@vkontakte/vkjs';
import { type SwappedItemRange } from '../../hooks/useDraggableWithDomApi';

export interface ReorderContextData {
  disabled?: boolean;
  onReorder?: (value: SwappedItemRange) => void;
}

export const ReorderContext = React.createContext<ReorderContextData>({
  onReorder: noop,
});

export const ItemContext = React.createContext<{ itemRef: RefObject<HTMLElement | null> }>({
  itemRef: createRef<HTMLElement | null>(),
});
