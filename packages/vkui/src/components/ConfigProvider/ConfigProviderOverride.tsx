'use client';

import * as React from 'react';
import {
  ConfigProviderContext,
  type ConfigProviderContextInterface,
  useConfigProvider,
  useConfigProviderContextMemo,
} from './ConfigProviderContext';

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
      {children}
    </ConfigProviderContext.Provider>
  );
}
