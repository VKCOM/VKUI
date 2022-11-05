import React from "react";
import {
  ConfigProviderContext,
  ConfigProviderContextInterface,
  useConfigProvider,
} from "./ConfigProviderContext";
import { useObjectMemo } from "../../hooks/useObjectMemo";

export interface ConfigProviderPartialProps
  extends Partial<ConfigProviderContextInterface> {
  children: React.ReactNode;
}

export function ConfigProviderPartial({
  children,
  ...contextValue
}: ConfigProviderPartialProps) {
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
