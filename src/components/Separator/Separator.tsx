import React, { FunctionComponent, HTMLAttributes } from 'react';
import getClassName from '../../helpers/getClassName';
import classNames from '../../lib/classNames';
import usePlatform from '../../hooks/usePlatform';

export interface SeparatorProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * С этим свойством компонент не будет иметь отступы слева и справа
   */
  wide?: boolean;
  expanded?: boolean;
  fill?: string;
}

let Separator: FunctionComponent<SeparatorProps> = ({ className, wide, expanded, fill, ...restProps }: SeparatorProps) => {
  const platform = usePlatform();

  return (
    <div
      {...restProps}
      className={classNames(getClassName('Separator', platform), className, {
        'Separator--wide': wide,
      })}
    >
      <div style={{ background: fill }} className={classNames('Separator__in', {
        'Separator__in--expanded': expanded,
      })} />
    </div>
  );
};

export default React.memo(Separator);
