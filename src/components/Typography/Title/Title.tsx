import * as React from "react";
import { HasComponent } from "../../../types";
import { classNames } from "../../../lib/classNames";
import { warnOnce } from "../../../lib/warnOnce";
import "./Title.css";

export interface TitleProps
  extends React.AllHTMLAttributes<HTMLElement>,
    HasComponent {
  /**
   * Задаёт начертание шрифта отличное от стандартного.
   *
   * > ⚠️ Начертания `"heavy"`, `"bold"`, `"semibold"`, `medium` и `"regular"` устарели и будут удалены в 5.0.0. Используйте значения `"1"`, `"2"` и `"3"`.
   */
  weight?:
    | "heavy"
    | "bold"
    | "semibold"
    | "medium"
    | "regular"
    | "1"
    | "2"
    | "3";
  level: "1" | "2" | "3";
}

const warn = warnOnce("Title");
export const Title: React.FC<TitleProps> = ({
  children,
  weight,
  level = "1",
  Component,
  ...restProps
}) => {
  if (!Component) {
    Component = ("h" + level) as React.ElementType;
  }

  if (process.env.NODE_ENV === "development") {
    if (
      weight &&
      ["heavy", "bold", "semibold", "medium", "regular"].includes(weight)
    )
      warn(
        `Начертание weight="${weight}" устарело и будет удалено в 5.0.0. Используйте значения "1", "2" и "3"`
      );
  }

  return (
    <Component
      {...restProps}
      vkuiClass={classNames(
        "Title",
        `Title--l-${level}`,
        weight && `Title--w-${weight}`
      )}
    >
      {children}
    </Component>
  );
};
