import * as React from 'react';
import { classNames } from '../../lib/classNames';
import { getClassName } from '../../helpers/getClassName';
import { usePlatform } from '../../hooks/usePlatform';
import { withAdaptivity, AdaptivityProps } from '../../hoc/withAdaptivity';
import './CardGrid.css';

export interface CardGridProps extends React.HTMLAttributes<HTMLDivElement>, AdaptivityProps {
  size: 's' | 'm' | 'l';
}

export const CardGrid: React.FunctionComponent<CardGridProps> = withAdaptivity(({
  children,
  size,
  sizeX,
  ...restProps
}: CardGridProps) => {
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
}, { sizeX: true });

CardGrid.defaultProps = {
  size: 's',
};
