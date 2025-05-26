import { type HasRootRef } from '../../types';
import { RootComponent } from '../RootComponent/RootComponent';

/**
 * Возвращает класс для иконки.
 */
export function iconClassName(size: number) {
  return `vkuiIcon vkuiIcon--${size} vkuiIcon--w-${size} vkuiIcon--h-${size}`;
}

interface SvgIconProps extends React.ComponentProps<'svg'>, HasRootRef<SVGElement> {
  /**
   * Размер иконки.
   */
  size: number;
}

export function SvgIcon({ size, children, ...restProps }: SvgIconProps) {
  return (
    <RootComponent
      Component="svg"
      baseClassName={iconClassName(size)}
      aria-hidden="true"
      width={size}
      height={size}
      {...restProps}
    >
      {children}
    </RootComponent>
  );
}
