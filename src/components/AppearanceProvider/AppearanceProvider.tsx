import * as React from "react";
import { AppearanceType } from "@vkontakte/vk-bridge";
import { AppearanceProviderContext } from "./AppearanceProviderContext";
import { getScheme } from "../../helpers/getScheme";
import { classNamesString } from "../../lib/classNames";
import { usePlatform } from "../../hooks/usePlatform";

export interface AppearanceProviderProps {
  appearance?: AppearanceType;
}

export const AppearanceProvider: React.FC<AppearanceProviderProps> = ({
  children,
  appearance = "light",
}) => {
  const platform = usePlatform();

  const appearanceContext = React.useMemo(
    () => ({
      scheme: getScheme({
        platform,
        appearance,
      }),
      appearance,
    }),
    [appearance, platform]
  );

  return (
    <AppearanceProviderContext.Provider value={appearanceContext}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            className: classNamesString(
              child.props.className,
              `vkui${appearanceContext.scheme}`
            ),
          });
        }
        return child;
      })}
    </AppearanceProviderContext.Provider>
  );
};
