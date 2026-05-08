'use client';

import type * as React from 'react';
import {
  ConfigProviderContext,
  type ConfigProviderContextInterface,
  useConfigProvider,
  useConfigProviderContextMemo,
} from './ConfigProviderContext';
import { ConfigProviderSubContexts } from './ConfigProviderSubContexts';

export interface ConfigProviderOverrideProps extends Partial<ConfigProviderContextInterface> {
  /**
   * Содержимое.
   */
  children: React.ReactNode;
}

/**
 * Компонент предназначен для перебивания одного из значений контекста.
 */
export function ConfigProviderOverride({
  children,
  ...contextValue
}: ConfigProviderOverrideProps): React.ReactNode {
  const parentConfig = useConfigProvider();

  const configContext = useConfigProviderContextMemo({ ...parentConfig, ...contextValue });

  return (
    <ConfigProviderContext.Provider value={configContext}>
      <ConfigProviderSubContexts value={configContext}>{children}</ConfigProviderSubContexts>
    </ConfigProviderContext.Provider>
  );
}
