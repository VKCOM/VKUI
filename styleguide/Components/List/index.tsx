import React, { FC, Children } from 'react';
import { Text } from '@vkui';
import './List.css';

export const List: FC<{ ordered?: boolean }> = ({ children, ordered }) => {

  return (
    <Text Component={ordered ? 'ol' : 'ul'} className="List">
      {children}
    </Text>
  );
}

export default List;
