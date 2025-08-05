import * as React from 'react';
import { type ConfigProviderContextInterface } from '../ConfigProvider/ConfigProviderContext';
import { ConfigProviderOverride } from '../ConfigProvider/ConfigProviderOverride';

export interface DirectionProviderProps {
  /**
   * Направление контента.
   */
  value: ConfigProviderContextInterface['direction'];
  /**
   * Содержимое.
   */
  children: React.ReactNode;
}

/**
 * Компонент, прокидывающий направление контента.
 * @see https://vkui.io/components/direction-provider
 * @since 7.2.0
 */
export function DirectionProvider({ value, children }: DirectionProviderProps): React.ReactNode {
  return <ConfigProviderOverride direction={value}>{children}</ConfigProviderOverride>;
}
