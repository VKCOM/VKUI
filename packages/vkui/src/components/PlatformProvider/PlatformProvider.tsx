import * as React from 'react';
import type { PlatformType } from '../../lib/platform';
import { TokensClassProvider } from '../../lib/tokens/TokensClassProvider';
import { ConfigProviderOverride } from '../ConfigProvider/ConfigProviderOverride';

export interface PlatformProviderProps {
  /**
   * Платформа.
   */
  value: PlatformType;
  /**
   * Содержимое.
   */
  children: React.ReactNode;
}

/**
 * Компонент, позволяющий переопределить платформу для части приложения.
 *
 * @since 5.1.0
 * @see https://vkui.io/components/platform-provider
 */
export function PlatformProvider({ value, children }: PlatformProviderProps): React.ReactNode {
  return (
    <ConfigProviderOverride platform={value}>
      <TokensClassProvider>{children}</TokensClassProvider>
    </ConfigProviderOverride>
  );
}
