import React, { FC } from 'react';
import './Blockquote.css';

export const Blockquote: FC = ({ children }) => {
  return (
    <blockquote className="Blockquote">{children}</blockquote>
  )
}

export default Blockquote;
