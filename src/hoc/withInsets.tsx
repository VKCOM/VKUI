import React from 'react';
import type { FC, ComponentType } from 'react';
import type { Insets } from '@vkontakte/vk-bridge';
import type { InheritProps } from '../types'; 
import useInsets from '../hooks/useInsets';
import getDisplayName from '../helpers/getDisplayName';

export interface InsetsProps {
  insets: Insets;
}

export default function withInsets<P extends InheritProps>(Component: ComponentType<P & InsetsProps>): ComponentType<P> {
  const WithInsets: FC<P> = (props: P) => {
    const insets = useInsets();
    return <Component {...props} insets={insets} />;
  };

  WithInsets.displayName = `withInsets(${getDisplayName(Component)})`;

  return WithInsets;
}
