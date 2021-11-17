import * as React from 'react';
import { classNames } from '../../lib/classNames';
import { getClassName } from '../../helpers/getClassName';
import { usePlatform } from '../../hooks/usePlatform';
import { ListContext } from './ListContext';
import './List.css';

const List: React.FunctionComponent<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  ...restProps
}: React.HTMLAttributes<HTMLDivElement>) => {
  const platform = usePlatform();
  const [isDragging, toggleDrag] = React.useState(false);

  return (
    <div
      role="list"
      {...restProps}
      vkuiClass={classNames(getClassName('List', platform), {
        'List--dragging': isDragging,
      })}
    >
      <ListContext.Provider value={React.useMemo(() => ({ toggleDrag }), [])}>
        {children}
      </ListContext.Provider>
    </div>
  );
};

export default List;
