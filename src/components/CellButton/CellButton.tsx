import React, { ButtonHTMLAttributes } from 'react';
import getClassName from '../../helpers/getClassName';
import classNames from '../../lib/classNames';
import usePlatform from '../../hooks/usePlatform';
import SimpleCell, { SimpleCellProps } from '../SimpleCell/SimpleCell';

export interface CellButtonProps extends ButtonHTMLAttributes<HTMLElement>, SimpleCellProps {
  mode?: 'primary' | 'danger';
  stopPropagation?: boolean;
  centered?: boolean;
}

const CellButton: React.FunctionComponent<CellButtonProps> = ({
  className,
  centered,
  mode,
  ...restProps
}: CellButtonProps) => {
  const platform = usePlatform();

  return (
    <SimpleCell
      {...restProps}
      className={classNames(
        getClassName('CellButton', platform),
        `CellButton--${mode}`,
        {
          ['CellButton--centered']: centered,
        },
        className,
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
