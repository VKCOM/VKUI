import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { ListContext } from './ListContext';
import styles from './List.module.css';

export type ListProps = React.HTMLAttributes<HTMLDivElement>;

/**
 * @see https://vkcom.github.io/VKUI/#/List
 */
export const List = ({ children, className, ...restProps }: ListProps) => {
  const [isDragging, toggleDrag] = React.useState(false);

  return (
    <div
      role="list"
      {...restProps}
      className={classNames(styles['List'], isDragging && styles['List--dragging'], className)}
    >
      <ListContext.Provider value={React.useMemo(() => ({ toggleDrag }), [])}>
        {children}
      </ListContext.Provider>
    </div>
  );
};
