import React, { FC } from 'react';
import Text from '../Text';
import './Para.css';

export const ParaRenderer: FC = ({ children }) => {
  return (
    <Text Component="p" className="Para" weight="regular">{children}</Text>
  )
}

export default ParaRenderer;
