import React from "react";
import {
  ConfigProviderContext,
  ConfigProviderContextInterface,
  useConfigProvider,
} from "./ConfigProviderContext";
import { useObjectMemo } from "../../hooks/useObjectMemo";

export interface ConfigProviderOverrideProps
  extends Partial<ConfigProviderContextInterface> {
  children: React.ReactNode;
}

export function ConfigProviderOverride({
  children,
  ...contextValue
}: ConfigProviderOverrideProps) {
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
