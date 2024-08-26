import * as React from 'react';
import { useObjectMemo } from '../../hooks/useObjectMemo';
import {
  ConfigProviderContext,
  type ConfigProviderContextInterface,
  useConfigProvider,
} from './ConfigProviderContext';

export interface ConfigProviderOverrideProps extends Partial<ConfigProviderContextInterface> {
  children: React.ReactNode;
}

/**
 * Компонент предназначен для перебивания одного из значений контекста
 */
export function ConfigProviderOverride({
  children,
  ...contextValue
}: ConfigProviderOverrideProps): React.ReactNode {
  const parentConfig = useConfigProvider();

  const configContext = useObjectMemo({
    ...parentConfig,
    ...contextValue,
  });

  return (
    <ConfigProviderContext.Provider value={configContext}>
      {children}
    </ConfigProviderContext.Provider>
  );
}
