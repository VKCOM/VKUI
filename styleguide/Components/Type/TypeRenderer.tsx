import React, { FC } from 'react';
import { Text } from '@vkui';
import './Type.css';

export const TypeRenderer: FC = ({ children }) => {
  return (
    <Text className="Type" weight="regular">
      {children}
    </Text>
  )
}

export default TypeRenderer;
