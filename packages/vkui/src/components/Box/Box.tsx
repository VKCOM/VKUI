'use client';

import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { resolveLayoutProps } from '../../lib/layouts';
import type { LayoutProps } from '../../lib/layouts/types';
import { RootComponent, type RootComponentProps } from '../RootComponent/RootComponent';
import styles from './Box.module.css';

const displayClassNames = {
  'none': styles.displayNone,
  'inline': styles.displayInline,
  'inline-block': styles.displayInlineBlock,
  'block': styles.displayBlock,
  'contents': styles.displayContents,
};

type BoxComponent = RootComponentProps<HTMLElement>['Component'] | React.ElementType[];

function composeComponents(
  component: BoxComponent | undefined,
): RootComponentProps<HTMLElement>['Component'] {
  if (!Array.isArray(component)) {
    return component;
  }

  if (component.length === 0) {
    return undefined;
  }

  return component.reduceRight<React.ElementType>(
    (InnerComponent, WrapperComponent) =>
      // eslint-disable-next-line react/display-name -- динамическая композиция обёрток
      React.forwardRef<HTMLElement, RootComponentProps<HTMLElement>>((props, ref) => (
        <WrapperComponent {...props} ref={ref} Component={InnerComponent} />
      )),
    'div',
  );
}

export interface BoxProps extends Omit<RootComponentProps<HTMLElement>, 'Component'>, LayoutProps {
  /**
   *
   */
  Component?: BoxComponent | undefined;
  /**
   * Возможность задать css-свойство `display`.
   */
  display?: 'none' | 'inline' | 'inline-block' | 'block' | 'contents' | undefined;
}

/**
 * @see https://vkui.io/components/box
 *
 * @since 7.9.0
 */
export const Box = ({
  className,
  style,
  display,
  Component: ComponentProp,
  ...restProps
}: BoxProps) => {
  const resolvedProps = resolveLayoutProps(restProps);

  const Component = React.useMemo(() => composeComponents(ComponentProp), [ComponentProp]);

  return (
    <RootComponent
      {...resolvedProps}
      Component={Component}
      baseClassName={resolvedProps.className}
      baseStyle={resolvedProps.style}
      className={classNames(className, display && displayClassNames[display])}
      style={style}
    />
  );
};
