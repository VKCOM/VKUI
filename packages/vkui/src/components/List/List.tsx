import { DATA_DRAGGABLE_PLACEHOLDER_REACT_PROP } from '../../hooks/useDraggableWithDomApi';
import { HTMLAttributesWithRootRef } from '../../types';
import { RootComponent } from '../RootComponent/RootComponent';
import styles from './List.module.css';

export type ListProps = HTMLAttributesWithRootRef<HTMLDivElement> & {
  /**
   * Задает отступ между элементами
   */
  gap?: number;
};

/**
 * @see https://vkcom.github.io/VKUI/#/List
 */
export const List = ({ children, gap = 0, ...restProps }: ListProps) => {
  return (
    <RootComponent
      role="list"
      className={styles.List}
      style={{
        gap,
      }}
      {...restProps}
    >
      {children}
      <div
        aria-hidden
        {...DATA_DRAGGABLE_PLACEHOLDER_REACT_PROP}
        className={styles['List__placeholder']}
      ></div>
    </RootComponent>
  );
};
