import React from 'react';
import { classNames, Text } from '@vkui';
import './Name.css';

export const NameRenderer = ({ children, deprecated, required }) => {
  return (
    <Text
      className={classNames('Name', {
        'Name--deprecated': deprecated,
        'Name--optional': !required,
      })}
    >
      {children}
    </Text>
  );
};

export default NameRenderer;
