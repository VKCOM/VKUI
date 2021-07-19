import { FC, HTMLAttributes, memo } from 'react';
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

const Separator: FC<SeparatorProps> = ({ wide, expanded, ...restProps }) => {
  const platform = usePlatform();

  return (
    <div
      {...restProps}
      aria-hidden="true"
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

export default memo(Separator);
