import React from 'react';
import { classNames, Text } from '@vkui';
import './Name.css';

export const NameRenderer = ({ children, deprecated, required }) => {
  return (
    <Text
      className={classNames(
        'Name',
        deprecated && 'Name--deprecated',
        !required && 'Name--optional',
      )}
    >
      {children}
    </Text>
  );
};

export default NameRenderer;
