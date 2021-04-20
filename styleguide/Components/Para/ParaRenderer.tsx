import React, { FC } from 'react';
import { Text } from '@vkui';
import './Para.css';

export const ParaRenderer: FC = ({ children }) => {
  return (
    <Text className="Para" weight="regular">{children}</Text>
  )
}

export default ParaRenderer;
