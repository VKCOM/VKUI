import * as React from "react";
import { SchemeProviderContext } from "./SchemeProviderContext";
import { AppearanceScheme, normalizeScheme } from "../../helpers/scheme";
import { HasComponent } from "../../types";
import { ConfigProviderContext } from "../ConfigProvider/ConfigProviderContext";

export interface SchemeProviderProps extends HasComponent {
  /**
   * Цветовая схема приложения
   */
  scheme?: AppearanceScheme;
}

export const SchemeProvider: React.FC<SchemeProviderProps> = ({
  children,
  scheme,
  Component = "div",
}) => {
  const configProviderContext = React.useContext(ConfigProviderContext);
  const realScheme = React.useMemo(
    () => normalizeScheme(scheme, configProviderContext?.platform),
    [scheme, configProviderContext?.platform]
  );

  return (
    <Component scheme={realScheme}>
      <SchemeProviderContext.Provider value={realScheme}>
        {children}
      </SchemeProviderContext.Provider>
    </Component>
  );
};
