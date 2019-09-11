import React from 'react';
import Tappable from '../Tappable/Tappable';
import getClassName from '../../helpers/getClassName';
import classNames from '../../lib/classNames';
import usePlatform from '../../hooks/usePlatform';
import { HasChildren } from '../../types/props';

export interface CellButtonProps extends React.HTMLAttributes<HTMLElement>, HasChildren {
  level?: 'primary' | 'danger',
  align?: 'left' | 'center' | 'right',
  before?: React.ReactNode,
  component?: string | React.ComponentType,
  stopPropagation?: boolean
}

const CellButton: React.FunctionComponent<CellButtonProps> = ({
  className,
  align,
  level,
  before,
  children,
  stopPropagation,
  ...restProps
}: CellButtonProps) => {
  const platform = usePlatform();

  return (
    <Tappable
      {...restProps}
      className={classNames(
        getClassName('CellButton', platform),
        className,
        `CellButton--lvl-${level}`,
        `CellButton--aln-${align}`
      )}
    >
      <div className="CellButton__in">
        {before && <div className="CellButton__before">{before}</div>}
        {children && <div className="CellButton__content">{children}</div>}
      </div>
    </Tappable>
  );
};

CellButton.defaultProps = {
  level: 'primary',
  component: 'button',
  align: 'left',
  stopPropagation: true
};

export default CellButton;
