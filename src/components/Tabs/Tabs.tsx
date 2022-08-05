import * as React from "react";
import { classNames } from "../../lib/classNames";
import { HasRootRef } from "../../types";
import { usePlatform } from "../../hooks/usePlatform";
import { IOS, VKCOM } from "../../lib/platform";
import { useAdaptivity } from "../../hooks/useAdaptivity";
import { getSizeXClassName } from "../../helpers/getSizeXClassName";
import "./Tabs.css";

export interface TabsProps
  extends React.HTMLAttributes<HTMLDivElement>,
    HasRootRef<HTMLDivElement> {
  mode?: "default" | "accent" | "secondary";
}

export interface TabsContextProps {
  mode: TabsProps["mode"];
  withGaps: boolean;
}

export const TabsModeContext = React.createContext<TabsContextProps>({
  mode: "default",
  withGaps: false,
});

/**
 * @see https://vkcom.github.io/VKUI/#/Tabs
 */
export const Tabs = ({
  children,
  mode = "default",
  getRootRef,
  ...restProps
}: TabsProps) => {
  const platform = usePlatform();
  const { sizeX } = useAdaptivity();

  const withGaps = mode === "accent" || mode === "secondary";

  return (
    <div
      {...restProps}
      ref={getRootRef}
      vkuiClass={classNames(
        "Tabs",
        (platform === IOS || platform === VKCOM) && `Tabs--${platform}`,
        getSizeXClassName("Tabs", sizeX),
        withGaps && "Tabs--withGaps",
        `Tabs--${mode}`
      )}
    >
      <div vkuiClass="Tabs__in">
        <TabsModeContext.Provider value={{ mode, withGaps }}>
          {children}
        </TabsModeContext.Provider>
      </div>
    </div>
  );
};
