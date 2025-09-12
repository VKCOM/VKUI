'use client';

import { resolveLayoutProps } from '../../lib/layouts';
import type { LayoutProps } from '../../lib/layouts/types';
import type { HTMLAttributesWithRootRef } from '../../types';
import { RootComponent } from '../RootComponent/RootComponent';

export interface BoxProps extends HTMLAttributesWithRootRef<HTMLDivElement>, LayoutProps {}

/**
 * @see https://vkui.io/components/box
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
