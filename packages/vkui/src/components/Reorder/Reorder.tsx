'use client';

import * as React from 'react';
import { ReorderItem } from './components/ReorderItem';
import { ReorderRoot, type ReorderRootProps } from './components/ReorderRoot';
import { ReorderTrigger } from './components/ReorderTrigger';
import { ReorderTriggerIcon } from './components/ReorderTriggerIcon';

export type ReorderProps<ITEM = string> = Omit<ReorderRootProps, 'children'> & {
  /**
   * Массив элементов для рендера.
   */
  items: ITEM[];
  /**
   * Функция для рендера элемента.
   */
  renderItem: (item: ITEM, index: number) => React.ReactNode;
};

/* eslint-disable jsdoc/require-jsdoc */
type ReorderComponent = {
  <ITEM>(props: ReorderProps<ITEM>): React.ReactElement | null;
  Trigger: typeof ReorderTrigger;
  Item: typeof ReorderItem;
  Root: typeof ReorderRoot;
  TriggerIcon: typeof ReorderTriggerIcon;
};
/* eslint-enable jsdoc/require-jsdoc */

/**
 * @see https://vkui.io/components/reorder
 */
export const Reorder: ReorderComponent = function Reorder<ITEM>({
  items,
  renderItem,
  ...restProps
}: ReorderProps<ITEM>) {
  return <ReorderRoot {...restProps}>{items.map(renderItem)}</ReorderRoot>;
};

Reorder.Trigger = ReorderTrigger;
Reorder.Item = ReorderItem;
Reorder.Root = ReorderRoot;
Reorder.TriggerIcon = ReorderTriggerIcon;
