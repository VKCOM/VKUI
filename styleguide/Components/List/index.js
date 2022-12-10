import React from 'react';
import Text from '../Text';
import './List.css';

export const List = ({ children, ordered }) => {
  return (
    <Text Component={ordered ? 'ol' : 'ul'} className="List">
      {children}
    </Text>
  );
};

export default List;
