import { DATA_DRAGGABLE_PLACEHOLDER_REACT_PROP } from '../../../hooks/useDraggableWithDomApi';
import { RootComponent, type RootComponentProps } from '../../RootComponent/RootComponent.tsx';
import { ReorderContext, type ReorderContextData } from '../context.tsx';
import styles from './ReorderRoot.module.css';

export type ReorderRootProps = RootComponentProps<HTMLDivElement> &
  Pick<ReorderContextData, 'onReorder'>;

export function ReorderRoot({ children, onReorder, disabled, ...restProps }: ReorderRootProps) {
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
