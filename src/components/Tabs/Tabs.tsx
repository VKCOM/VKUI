import * as React from "react";
import { classNamesString } from "../../lib/classNames";
import { HasRootRef } from "../../types";
import { usePlatform } from "../../hooks/usePlatform";
import { Platform } from "../../lib/platform";
import { useAdaptivity } from "../../hooks/useAdaptivity";
import { getSizeXClassName } from "../../helpers/getSizeXClassName";
import styles from "./Tabs.module.css";

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
  className,
  ...restProps
}: TabsProps) => {
  const platform = usePlatform();
  const { sizeX } = useAdaptivity();

  const withGaps = mode === "accent" || mode === "secondary";

  return (
    <div
      {...restProps}
      ref={getRootRef}
      className={classNamesString(
        styles["Tabs"],
        platform === Platform.VKCOM && styles[`Tabs--${platform}`],
        getSizeXClassName("Tabs", sizeX, styles),
        withGaps && styles["Tabs--withGaps"],
        styles[`Tabs--mode-${mode}`],
        className
      )}
    >
      <div className={styles["Tabs__in"]}>
        <TabsModeContext.Provider value={{ mode, withGaps }}>
          {children}
        </TabsModeContext.Provider>
      </div>
    </div>
  );
};
