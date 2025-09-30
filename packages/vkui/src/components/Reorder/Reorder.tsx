'use client';

import * as React from 'react';
import { ReorderItem } from './components/ReorderItem';
import { ReorderRoot, type ReorderRootProps } from './components/ReorderRoot.tsx';
import { ReorderTrigger } from './components/ReorderTrigger';
import { ReorderTriggerIcon } from './components/ReorderTriggerIcon.tsx';

export type ReorderProps<ITEM = string> = Omit<ReorderRootProps, 'children'> & {
  /**
   *
   */
  items: ITEM[];
  /**
   *
   */
  renderItem: (item: ITEM) => React.ReactNode;
};

/**
 * @see https://vkui.io/components/reorder
 */
export function Reorder<ITEM = string>({
  items,
  renderItem,
  ...restProps
}: ReorderProps<ITEM> & {
  Trigger: typeof ReorderTrigger;
  Item: typeof ReorderItem;
  Container: typeof ReorderRoot;
  TriggerIcon: typeof ReorderTriggerIcon;
}) {
  return <ReorderRoot {...restProps}>{items.map(renderItem)}</ReorderRoot>;
}

Reorder.Trigger = ReorderTrigger;
Reorder.TriggerIcon = ReorderTriggerIcon;
Reorder.Item = ReorderItem;
Reorder.Root = ReorderRoot;
