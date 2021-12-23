import * as React from "react";
import { AppearanceType } from "@vkontakte/vk-bridge";
import { AppearanceProviderContext } from "./AppearanceProviderContext";
import { getScheme } from "../../helpers/scheme";
import { classNames } from "../../lib/classNames";
import { ConfigProviderContext } from "../ConfigProvider/ConfigProviderContext";

export interface AppearanceProviderProps {
  appearance?: AppearanceType;
}

export const AppearanceProvider: React.FC<AppearanceProviderProps> = ({
  children,
  appearance = "light",
}) => {
  const configProviderContext = React.useContext(ConfigProviderContext);
  const appearanceContext = React.useMemo(
    () => ({
      scheme: getScheme({
        platform: configProviderContext?.platform,
        appearance,
      }),
      appearance,
    }),
    [appearance, configProviderContext?.platform]
  );
  const childrenWithScheme = React.useMemo(() => {
    return React.Children.map(children, (child) => {
      if (React.isValidElement(child)) {
        return React.cloneElement(child, {
          className: classNames(
            child.props.className,
            `vkui${appearanceContext.scheme}`
          ),
        });
      }
      return child;
    });
  }, [children, appearanceContext.scheme]);

  return (
    <AppearanceProviderContext.Provider value={appearanceContext}>
      {childrenWithScheme}
    </AppearanceProviderContext.Provider>
  );
};
