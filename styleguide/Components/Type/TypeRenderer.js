import React from 'react';
import { Text } from '@vkui';
import './Type.css';

export const TypeRenderer = ({ children }) => {
  return (
    <Text className="Type" weight="regular">
      {children}
    </Text>
  )
}

export default TypeRenderer;
