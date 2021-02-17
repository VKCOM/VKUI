import { FunctionComponent, HTMLAttributes, useMemo, useState } from 'react';
import { classNames } from '../../lib/classNames';
import { getClassName } from '../../helpers/getClassName';
import { usePlatform } from '../../hooks/usePlatform';
import { ListContext } from './ListContext';

const List: FunctionComponent<HTMLAttributes<HTMLDivElement>> = ({
  children,
  ...restProps
}: HTMLAttributes<HTMLDivElement>) => {
  const platform = usePlatform();
  const [isDragging, toggleDrag] = useState(false);
  const baseClassName = getClassName('List', platform);

  return (
    <div {...restProps} vkuiClass={classNames(baseClassName, {
      'List--dragging': isDragging,
    })}>
      <ListContext.Provider value={useMemo(() => ({ toggleDrag }), [])}>
        {children}
      </ListContext.Provider>
    </div>
  );
};

export default List;
