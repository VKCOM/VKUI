'use client';

import * as React from 'react';
import { ReorderItem } from './components/ReorderItem';
import { ReorderRoot, type ReorderRootProps } from './components/ReorderRoot.tsx';
import { ReorderTrigger } from './components/ReorderTrigger';
import { ReorderTriggerIcon } from './components/ReorderTriggerIcon.tsx';

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
export const Reorder: ReorderComponent = Object.assign(
  function Reorder<ITEM>({ items, renderItem, ...restProps }: ReorderProps<ITEM>) {
    return <ReorderRoot {...restProps}>{items.map(renderItem)}</ReorderRoot>;
  },
  {
    Trigger: ReorderTrigger,
    Item: ReorderItem,
    Root: ReorderRoot,
    TriggerIcon: ReorderTriggerIcon,
  },
);
