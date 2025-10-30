'use client';

import * as React from 'react';
import { type SwappedItemRange } from '../../hooks/useDraggableWithDomApi';
import { callMultiple } from '../../lib/callMultiple';
import { ReorderItem } from './components/ReorderItem';
import { ReorderRoot, type ReorderRootProps } from './components/ReorderRoot';
import { ReorderTrigger } from './components/ReorderTrigger';
import { ReorderTriggerIcon, type ReorderTriggerIconProps } from './components/ReorderTriggerIcon';

export type ReorderProps<ITEM = string> = Omit<ReorderRootProps, 'children'> & {
  /**
   * Массив элементов для рендера.
   */
  items: ITEM[];
  /**
   * Функция для изменения порядка элементов.
   */
  setItems?: (items: ITEM[]) => void;
  /**
   * Функция, которая по элементу массива возвращает `id`.
   */
  getItemId?: (item: ITEM) => string | number;
  /**
   * Функция для рендера элемента.
   */
  renderItem: (item: ITEM, index: number, dragger: React.ReactNode) => React.ReactNode;
  /**
   * Текст для кнопки перетаскивания элемента.
   */
  triggerLabel?: string;
  /**
   * Иконка для кнопки перетаскивания элемента.
   */
  TriggerIcon?: ReorderTriggerIconProps['Icon'];
};

const onReorder = <ITEM = string,>({ from, to }: SwappedItemRange, list: ITEM[]): ITEM[] => {
  const _list = [...list];
  _list.splice(from, 1);
  _list.splice(to, 0, list[from]);
  return _list;
};

const defaultGetId = <ITEM = string,>(item: ITEM): string | number => {
  if (typeof item === 'string' || typeof item === 'number') {
    return item;
  }
  return JSON.stringify(item);
};

/* eslint-disable jsdoc/require-jsdoc */
type ReorderComponent = {
  <ITEM = string>(props: ReorderProps<ITEM>): React.ReactElement | null;
  Trigger: typeof ReorderTrigger;
  Item: typeof ReorderItem;
  Root: typeof ReorderRoot;
  TriggerIcon: typeof ReorderTriggerIcon;
  onReorder: typeof onReorder;
};
/* eslint-enable jsdoc/require-jsdoc */

/**
 * @see https://vkui.io/components/reorder
 */
export const Reorder: ReorderComponent = function Reorder<ITEM = string>({
  items,
  setItems,
  getItemId = defaultGetId,
  renderItem,
  triggerLabel = 'Перенести элемент',
  TriggerIcon,
  onReorder: onReorderProp,
  ...restProps
}: ReorderProps<ITEM>) {
  const onReorder = React.useCallback(
    (swappedItems: SwappedItemRange) => {
      setItems?.(Reorder.onReorder(swappedItems, items));
    },
    [items, setItems],
  );

  return (
    <ReorderRoot onReorder={callMultiple(onReorder, onReorderProp)} {...restProps}>
      {items.map((item, index) => {
        const dragger = (
          <ReorderTrigger>
            <ReorderTriggerIcon Icon={TriggerIcon}>{triggerLabel}</ReorderTriggerIcon>
          </ReorderTrigger>
        );
        const key = getItemId(item);
        return <ReorderItem key={key}>{renderItem(item, index, dragger)}</ReorderItem>;
      })}
    </ReorderRoot>
  );
};

Reorder.Trigger = ReorderTrigger;
Reorder.Item = ReorderItem;
Reorder.Root = ReorderRoot;
Reorder.TriggerIcon = ReorderTriggerIcon;
Reorder.onReorder = onReorder;
