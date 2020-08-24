import React, { FC, ComponentType } from 'react';
import { Insets } from '@vkontakte/vk-bridge';
import useInsets from '../hooks/useInsets';
import { getDisplayName } from '../helpers/componentUtils';

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
