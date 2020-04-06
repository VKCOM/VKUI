import React, { FunctionComponent, HTMLAttributes } from 'react';
import getClassName from '../../helpers/getClassName';
import classNames from '../../lib/classNames';
import usePlatform from '../../hooks/usePlatform';
import withAdaptivity, { AdaptivityProps } from '../../hoc/withAdaptivity';

export interface SeparatorProps extends HTMLAttributes<HTMLDivElement>, AdaptivityProps {
  /**
   * С этим свойством компонент не будет иметь отступы слева и справа
   */
  wide?: boolean;
}

let Separator: FunctionComponent<SeparatorProps> = ({ className, sizeX, wide, ...restProps }: SeparatorProps) => {
  const platform = usePlatform();

  return (
    <div
      {...restProps}
      className={classNames(getClassName('Separator', platform), className, {
        'Separator--wide': wide,
      })}
    >
      <div className={classNames('Separator__in', `Separator__in--${sizeX}`)} />
    </div>
  );
};

Separator = withAdaptivity(Separator);
export default React.memo(Separator);
