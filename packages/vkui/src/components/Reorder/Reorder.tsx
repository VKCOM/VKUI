'use client';

import * as React from 'react';
import { type SwappedItemRange } from '../../hooks/useDraggableWithDomApi';
import { callMultiple } from '../../lib/callMultiple';
import { ReorderItem } from './components/ReorderItem';
import { ReorderRoot, type ReorderRootProps } from './components/ReorderRoot';
import { ReorderTrigger } from './components/ReorderTrigger';
import { ReorderTriggerIcon, type ReorderTriggerIconProps } from './components/ReorderTriggerIcon';

/* eslint-disable jsdoc/require-jsdoc */
interface ReorderItemType {
  id: string;
}
/* eslint-enable jsdoc/require-jsdoc */

export type ReorderProps<ITEM extends string | number | ReorderItemType = string> = Omit<
  ReorderRootProps,
  'children'
> & {
  /**
   * Массив элементов для рендера.
   */
  items: ITEM[];
  /**
   * Функция для изменения порядка элементов.
   */
  setItems?: (items: ITEM[]) => ITEM[];
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

const onReorder = <ITEM extends string | number | ReorderItemType = string>(
  { from, to }: SwappedItemRange,
  list: ITEM[],
): ITEM[] => {
  const _list = [...list];
  _list.splice(from, 1);
  _list.splice(to, 0, list[from]);
  return _list;
};

/* eslint-disable jsdoc/require-jsdoc */
type ReorderComponent = {
  <ITEM extends string | number | ReorderItemType>(
    props: ReorderProps<ITEM>,
  ): React.ReactElement | null;
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
export const Reorder: ReorderComponent = function Reorder<
  ITEM extends string | number | ReorderItemType,
>({
  items,
  setItems,
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
          <Reorder.Trigger>
            <Reorder.TriggerIcon Icon={TriggerIcon}>{triggerLabel}</Reorder.TriggerIcon>
          </Reorder.Trigger>
        );
        const key = typeof item === 'string' || typeof item === 'number' ? item : item.id;
        return <Reorder.Item key={key}>{renderItem(item, index, dragger)}</Reorder.Item>;
      })}
    </ReorderRoot>
  );
};

Reorder.Trigger = ReorderTrigger;
Reorder.Item = ReorderItem;
Reorder.Root = ReorderRoot;
Reorder.TriggerIcon = ReorderTriggerIcon;
Reorder.onReorder = onReorder;
