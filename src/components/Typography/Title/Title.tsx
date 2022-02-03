import * as React from "react";
import { HasComponent } from "../../../types";
import { usePlatform } from "../../../hooks/usePlatform";
import { classNames } from "../../../lib/classNames";
import { getClassName } from "../../../helpers/getClassName";
import { warnOnce } from "../../../lib/warnOnce";
import "./Title.css";

export interface TitleProps
  extends React.AllHTMLAttributes<HTMLElement>,
    HasComponent {
  /**
   * Начертания "heavy", "bold", "semibold", "medium" и "regular" устарели и будут удалены в 5.0.0.
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

const Title: React.FC<TitleProps> = ({
  children,
  weight,
  level = "1",
  Component,
  ...restProps
}: TitleProps) => {
  const platform = usePlatform();

  if (!Component) {
    Component = ("h" + level) as React.ElementType;
  }

  if (process.env.NODE_ENV === "development") {
    if (["heavy", "bold", "semibold", "medium", "regular"].includes(level))
      warn(
        `Начертание "${level}" устарело и будет удалено в 5.0.0. Используйте значения "1", "2" и "3"`
      );
  }

  return (
    <Component
      {...restProps}
      vkuiClass={classNames(
        getClassName("Title", platform),
        `Title--l-${level}`,
        {
          [`Title--w-${weight}`]: !!weight,
        }
      )}
    >
      {children}
    </Component>
  );
};

// eslint-disable-next-line import/no-default-export
export default Title;
