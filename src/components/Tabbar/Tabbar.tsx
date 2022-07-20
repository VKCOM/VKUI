import * as React from "react";
import { classNames } from "../../lib/classNames";
import { usePlatform } from "../../hooks/usePlatform";
import { Platform } from "../../lib/platform";
import "./Tabbar.css";

export interface TabbarProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Флаг для показа/скрытия верхней тени (Android) или границы (iOS)
   */
  shadow?: boolean;
  itemsLayout?: "vertical" | "horizontal" | "auto";
}

/**
 * @see https://vkcom.github.io/VKUI/#/Tabbar
 */
export const Tabbar = ({
  children,
  shadow = true,
  itemsLayout,
  ...restProps
}: TabbarProps) => {
  const platform = usePlatform();

  const getItemsLayout = () => {
    switch (itemsLayout) {
      case "horizontal":
      case "vertical":
        return itemsLayout;
      default:
        return React.Children.count(children) > 2 ? "vertical" : "horizontal";
    }
  };

  return (
    <div
      vkuiClass={classNames(
        "Tabbar",
        platform === Platform.IOS && "Tabbar--ios",
        `Tabbar--l-${getItemsLayout()}`,
        shadow && "Tabbar--shadow"
      )}
      {...restProps}
    >
      <div vkuiClass="Tabbar__in">{children}</div>
    </div>
  );
};
