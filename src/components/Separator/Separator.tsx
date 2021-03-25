import React, { FunctionComponent, HTMLAttributes } from 'react';
import { getClassName } from '../../helpers/getClassName';
import { classNames } from '../../lib/classNames';
import { usePlatform } from '../../hooks/usePlatform';

export interface SeparatorProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * С этим свойством компонент не будет иметь отступы слева и справа
   */
  wide?: boolean;
  expanded?: boolean;
}

let Separator: FunctionComponent<SeparatorProps> = ({ wide, expanded, ...restProps }: SeparatorProps) => {
  const platform = usePlatform();

  return (
    <div
      {...restProps}
      vkuiClass={classNames(getClassName('Separator', platform), {
        'Separator--wide': wide,
      })}
    >
      <div vkuiClass={classNames('Separator__in', {
        'Separator__in--expanded': expanded,
      })} />
    </div>
  );
};

export default React.memo(Separator);
