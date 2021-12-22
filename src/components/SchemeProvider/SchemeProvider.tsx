import * as React from "react";
import { SchemeProviderContext } from "./SchemeProviderContext";
import { AppearanceScheme, normalizeScheme } from "../../helpers/scheme";
import { classNames } from "../../lib/classNames";
import { ConfigProviderContext } from "../ConfigProvider/ConfigProviderContext";

export interface SchemeProviderProps {
  /**
   * Цветовая схема приложения
   */
  scheme?: AppearanceScheme;
}

export const SchemeProvider: React.FC<SchemeProviderProps> = ({
  children,
  scheme,
}) => {
  const configProviderContext = React.useContext(ConfigProviderContext);
  const realScheme = React.useMemo(
    () => normalizeScheme(scheme, configProviderContext?.platform),
    [scheme, configProviderContext?.platform]
  );
  const childrenWithScheme = React.useMemo(() => {
    return React.Children.map(children, (child) => {
      if (React.isValidElement(child)) {
        return React.cloneElement(child, {
          className: classNames(child.props.className, `vkui${scheme}`),
        });
      }
      return child;
    });
  }, [children, scheme]);

  return (
    <SchemeProviderContext.Provider value={realScheme}>
      {childrenWithScheme}
    </SchemeProviderContext.Provider>
  );
};
