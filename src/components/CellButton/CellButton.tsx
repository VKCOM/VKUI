import React from 'react';
import { getClassName } from '../../helpers/getClassName';
import { classNames } from '../../lib/classNames';
import { usePlatform } from '../../hooks/usePlatform';
import SimpleCell, { SimpleCellProps } from '../SimpleCell/SimpleCell';

export interface CellButtonProps extends SimpleCellProps {
  mode?: 'primary' | 'danger';
  stopPropagation?: boolean;
  centered?: boolean;
}

const CellButton: React.FunctionComponent<CellButtonProps> = ({
  centered,
  mode,
  ...restProps
}: CellButtonProps) => {
  const platform = usePlatform();

  return (
    <SimpleCell
      {...restProps}
      vkuiClass={classNames(
        getClassName('CellButton', platform),
        `CellButton--${mode}`,
        {
          ['CellButton--centered']: centered,
        },
      )}
    />
  );
};

CellButton.defaultProps = {
  mode: 'primary',
  Component: 'button',
  centered: false,
  stopPropagation: true,
};

export default CellButton;
