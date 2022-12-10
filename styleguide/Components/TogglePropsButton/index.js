import React from 'react';
import { CellButton } from '@vkui';
import './TogglePropsButton.css';

export const TogglePropsButton = ({ children, ...restProps }) => (
  <CellButton {...restProps} className="TogglePropsButton">
    {children}
  </CellButton>
);

export default TogglePropsButton;
