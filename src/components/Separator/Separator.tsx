import React, { FunctionComponent, HTMLAttributes } from 'react';
import getClassName from '../../helpers/getClassName';
import classNames from '../../lib/classNames';
import usePlatform from '../../hooks/usePlatform';

export interface SeparatorProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * С этим свойством компонент не будет иметь отступы слева и справа
   */
  wide?: boolean;
}

const Separator: FunctionComponent<SeparatorProps> = ({ className, wide, ...restProps }: SeparatorProps) => {
  const platform = usePlatform();

  return (
    <div
      {...restProps}
      className={classNames(getClassName('Separator', platform), className, {
        'Separator--wide': wide,
      })}
    >
      <div className="Separator__in" />
    </div>
  );
};

export default React.memo(Separator);
