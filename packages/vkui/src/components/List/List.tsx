import { useMemo, useState } from 'react';
import { classNames } from '@vkontakte/vkjs';
import { HTMLAttributesWithRootRef } from '../../types';
import { RootComponent } from '../RootComponent/RootComponent';
import { ListContext } from './ListContext';
import styles from './List.module.css';

export type ListProps = HTMLAttributesWithRootRef<HTMLDivElement>;

/**
 * @see https://vkcom.github.io/VKUI/#/List
 */
export const List = ({ children, ...restProps }: ListProps) => {
  const [isDragging, toggleDrag] = useState(false);

  return (
    <RootComponent
      role="list"
      {...restProps}
      baseClassName={classNames(styles['List'], isDragging && 'vkuiInternalList--dragging')}
    >
      <ListContext.Provider value={useMemo(() => ({ toggleDrag }), [])}>
        {children}
      </ListContext.Provider>
    </RootComponent>
  );
};
