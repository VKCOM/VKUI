import * as React from "react";
import { classNamesString } from "../../lib/classNames";
import { usePlatform } from "../../hooks/usePlatform";
import { Platform } from "../../lib/platform";
import styles from "./Tabbar.module.css";

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
  className,
  ...restProps
}: TabbarProps) => {
  const platform = usePlatform();

  return (
    <div
      className={classNamesString(
        styles["Tabbar"],
        platform === Platform.IOS && styles["Tabbar--ios"],
        styles[`Tabbar-layout-${getItemsLayout(mode, children)}`],
        shadow && styles["Tabbar--shadow"],
        className
      )}
      {...restProps}
    >
      <div className={styles["Tabbar__in"]}>{children}</div>
    </div>
  );
};
