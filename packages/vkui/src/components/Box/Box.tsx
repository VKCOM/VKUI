import { resolveLayoutProps } from '../../lib/layouts';
import type { LayoutProps } from '../../lib/layouts/types';
import { RootComponent, type RootComponentProps } from '../RootComponent/RootComponent';

export interface BoxProps
  extends Omit<RootComponentProps<HTMLElement>, 'baseClassName' | 'baseStyle'>,
    LayoutProps {}

/**
 * @see https://vkui.io/components/box
 *
 * @since 7.9.0
 */
export const Box = ({ className, style, ...restProps }: BoxProps) => {
  const resolvedProps = resolveLayoutProps(restProps);

  return (
    <RootComponent
      {...resolvedProps}
      baseClassName={resolvedProps.className}
      baseStyle={resolvedProps.style}
      className={className}
      style={style}
    />
  );
};
