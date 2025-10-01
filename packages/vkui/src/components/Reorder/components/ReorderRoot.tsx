'use client';

import * as React from 'react';
import { noop } from '@vkontakte/vkjs';
import {
  DATA_DRAGGABLE_PLACEHOLDER_REACT_PROP,
  type SwappedItemRange,
} from '../../../hooks/useDraggableWithDomApi';
import { useStableCallback } from '../../../hooks/useStableCallback';
import { RootComponent, type RootComponentProps } from '../../RootComponent/RootComponent';
import { ReorderContext } from '../context';
import styles from './ReorderRoot.module.css';

export interface ReorderRootProps extends RootComponentProps<HTMLDivElement> {
  /**
   * Обработчик, срабатывающий при завершении перетаскивания.
   * **Важно:** режим перетаскивания не меняет порядок ячеек в DOM. В обработчике есть объект с полями `from` и `to`.
   * Эти числа нужны для того, чтобы разработчик понимал, с какого индекса на какой произошел переход. В песочнице
   * есть рабочий пример с обработкой этих чисел и перерисовкой списка.
   */
  onReorder?: (value: SwappedItemRange) => void;
}

export function ReorderRoot({ children, onReorder, disabled, ...restProps }: ReorderRootProps) {
  const onReorderCb = useStableCallback(onReorder || noop);

  const context = React.useMemo(
    () => ({
      onReorder: onReorderCb,
      disabled,
    }),
    [onReorderCb, disabled],
  );

  return (
    <ReorderContext.Provider value={context}>
      <RootComponent baseClassName={styles.host} {...restProps}>
        {children}
        <div
          aria-hidden
          {...DATA_DRAGGABLE_PLACEHOLDER_REACT_PROP}
          className={styles.placeholder}
        ></div>
      </RootComponent>
    </ReorderContext.Provider>
  );
}
