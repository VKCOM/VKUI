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
  /**
   * Задает расположение элементов (вертикальное/горизонтальное)
   */
  mode?: "vertical" | "horizontal" | "auto";
}

const getItemsLayout = (
  itemsLayout: TabbarProps["mode"],
  children: TabbarProps["children"]
) => {
  switch (itemsLayout) {
    case "horizontal":
    case "vertical":
      return itemsLayout;
    default:
      return React.Children.count(children) > 2 ? "vertical" : "horizontal";
  }
};

/**
 * @see https://vkcom.github.io/VKUI/#/Tabbar
 */
export const Tabbar = ({
  children,
  shadow = true,
  mode,
  ...restProps
}: TabbarProps) => {
  const platform = usePlatform();

  return (
    <div
      vkuiClass={classNames(
        "Tabbar",
        platform === Platform.IOS && "Tabbar--ios",
        `Tabbar-layout-${getItemsLayout(mode, children)}`,
        shadow && "Tabbar--shadow"
      )}
      {...restProps}
    >
      <div vkuiClass="Tabbar__in">{children}</div>
    </div>
  );
};
