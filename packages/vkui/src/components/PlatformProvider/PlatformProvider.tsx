import * as React from 'react';
import { PlatformType } from '../../lib/platform';
import { TokensClassProvider } from '../../lib/tokens';
import { ConfigProviderOverride } from '../ConfigProvider/ConfigProviderOverride';

export interface PlatformProviderProps {
  /**
   * Платформа
   */
  value: PlatformType;
  children: React.ReactNode;
}

/**
 * Компонент, позволяющий переопределить платформу для части приложения
 *
 * @since 5.1.0
 * @see https://vkcom.github.io/VKUI/#/PlatformProvider
 */
export function PlatformProvider({ value, children }: PlatformProviderProps) {
  return (
    <ConfigProviderOverride platform={value}>
      <TokensClassProvider>{children}</TokensClassProvider>
    </ConfigProviderOverride>
  );
}
