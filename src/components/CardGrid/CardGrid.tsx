import { FunctionComponent, HTMLAttributes } from 'react';
import { classNames } from '../../lib/classNames';
import { getClassName } from '../../helpers/getClassName';
import { usePlatform } from '../../hooks/usePlatform';
import { withAdaptivity, AdaptivityProps } from '../../hoc/withAdaptivity';

export interface CardGridProps extends HTMLAttributes<HTMLDivElement>, AdaptivityProps {
  size: 's' | 'm' | 'l';
}

const CardGrid: FunctionComponent<CardGridProps> = ({ children, className, size, sizeX, ...restProps }: CardGridProps) => {
  const platform = usePlatform();

  return (
    <div
      {...restProps}
      className={classNames(
        getClassName('CardGrid', platform),
        `CardGrid--${size}`,
        `CardGrid--sizeX-${sizeX}`,
        className,
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
