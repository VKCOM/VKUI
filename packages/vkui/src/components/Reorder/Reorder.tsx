'use client';

import { DATA_DRAGGABLE_PLACEHOLDER_REACT_PROP } from '../../hooks/useDraggableWithDomApi';
import { RootComponent, type RootComponentProps } from '../RootComponent/RootComponent';
import { ReorderItem } from './components/ReorderItem';
import { ReorderTrigger } from './components/ReorderTrigger';
import { ReorderContext, type ReorderContextData } from './context';
import styles from './Reorder.module.css';

export type ReorderProps = RootComponentProps<HTMLDivElement> &
  Pick<ReorderContextData, 'onReorder'>;

function ReorderContainer({ children, onReorder, disabled, ...restProps }: ReorderProps) {
  return (
    <ReorderContext.Provider
      value={{
        onReorder,
        disabled,
      }}
    >
      <RootComponent {...restProps}>
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

/**
 * @see https://vkui.io/components/custom-select
 */
export function Reorder(
  props: ReorderProps & {
    Trigger: typeof ReorderTrigger;
    Item: typeof ReorderItem;
    Container: typeof ReorderContainer;
  },
) {
  return <ReorderContainer {...props} />;
}

Reorder.Trigger = ReorderTrigger;
Reorder.Item = ReorderItem;
Reorder.Container = ReorderContainer;
