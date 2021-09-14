import * as React from 'react';
import { classNames } from '../../lib/classNames';
import { getClassName } from '../../helpers/getClassName';
import { usePlatform } from '../../hooks/usePlatform';
import { withAdaptivity, AdaptivityProps } from '../../hoc/withAdaptivity';
import './CardGrid.css';

export interface CardGridProps extends React.HTMLAttributes<HTMLDivElement>, AdaptivityProps {
  size: 's' | 'm' | 'l';
}

const CardGrid: React.FunctionComponent<CardGridProps> = ({ children, size, sizeX, ...restProps }: CardGridProps) => {
  const platform = usePlatform();

  return (
    <div
      {...restProps}
      vkuiClass={classNames(
        getClassName('CardGrid', platform),
        `CardGrid--${size}`,
        `CardGrid--sizeX-${sizeX}`,
      )}
    >
      {children}
    </div>
  );
};

CardGrid.defaultProps = {
  size: 's',
};

export default withAdaptivity(CardGrid, { sizeX: true });
