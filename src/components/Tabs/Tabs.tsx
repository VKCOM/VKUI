import * as React from "react";
import { getClassName } from "../../helpers/getClassName";
import { classNames } from "../../lib/classNames";
import { HasRootRef } from "../../types";
import { usePlatform } from "../../hooks/usePlatform";
import { IOS } from "../../lib/platform";
import { useAdaptivity } from "../../hooks/useAdaptivity";
import { getSizeXClassName } from "../../helpers/getSizeXClassName";
import "./Tabs.css";

export interface TabsProps
  extends React.HTMLAttributes<HTMLDivElement>,
    HasRootRef<HTMLDivElement> {
  mode?: "default" | "buttons" | "segmented";
}

export const TabsModeContext =
  React.createContext<TabsProps["mode"]>("default");

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

  if (platform !== IOS && mode === "segmented") {
    mode = "default";
  }

  return (
    <div
      {...restProps}
      ref={getRootRef}
      vkuiClass={classNames(
        getClassName("Tabs", platform),
        getSizeXClassName("Tabs", sizeX),
        `Tabs--${mode}`
      )}
    >
      <div vkuiClass="Tabs__in">
        <TabsModeContext.Provider value={mode}>
          {children}
        </TabsModeContext.Provider>
      </div>
    </div>
  );
};
