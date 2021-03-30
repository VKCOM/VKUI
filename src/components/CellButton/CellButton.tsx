import React from 'react';
import { classNames } from '../../lib/classNames';
import SimpleCell, { SimpleCellProps } from '../SimpleCell/SimpleCell';

export interface CellButtonProps extends SimpleCellProps {
  mode?: 'primary' | 'danger';
  stopPropagation?: boolean;
}

const CellButton: React.FunctionComponent<CellButtonProps> = ({ mode, ...restProps }) => (
  <SimpleCell
    {...restProps}
    vkuiClass={classNames('CellButton', `CellButton--${mode}`)}
  />
);

CellButton.defaultProps = {
  mode: 'primary',
  Component: 'button',
  centered: false,
  stopPropagation: true,
};

export default CellButton;
