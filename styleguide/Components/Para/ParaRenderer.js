import React from 'react';
import Text from '../Text/index';
import './Para.css';

export const ParaRenderer = ({ children }) => {
  return (
    <Text Component="p" className="Para" weight="regular">{children}</Text>
  )
}

export default ParaRenderer;
