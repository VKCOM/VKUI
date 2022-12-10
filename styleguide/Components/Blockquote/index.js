import * as React from 'react';
import './Blockquote.css';

export const Blockquote = ({ children }) => {
  return <blockquote className="Blockquote">{children}</blockquote>;
};

export default Blockquote;
