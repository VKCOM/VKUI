import * as React from 'react';
import { getClassName } from '../../helpers/getClassName';
import { classNames } from '../../lib/classNames';
import { usePlatform } from '../../hooks/usePlatform';
import SimpleCell, { SimpleCellProps } from '../SimpleCell/SimpleCell';
import './CellButton.css';

export interface CellButtonProps extends SimpleCellProps {
  mode?: 'primary' | 'danger';
  centered?: boolean;
}

const CellButton: React.FC<CellButtonProps> = ({
  centered = false,
  mode = 'primary',
  ...restProps
}: CellButtonProps) => {
  const platform = usePlatform();

  return (
    <SimpleCell
      stopPropagation={true}
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

export { CellButton };
