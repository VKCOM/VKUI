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
  weight: "heavy" | "bold" | "semibold" | "medium" | "regular";
  level: "1" | "2" | "3";
}

const warn = warnOnce("Title");

const Title: React.FC<TitleProps> = ({
  children,
  weight = "semibold",
  level = "1",
  Component,
  ...restProps
}: TitleProps) => {
  const platform = usePlatform();

  if (!Component) {
    Component = ("h" + level) as React.ElementType;
  }

  if (process.env.NODE_ENV === "development") {
    if (["heavy", "bold"].includes(level))
      warn(`Начертание "${level}" устарело и будет удалено в 5.0.0`);
  }

  return (
    <Component
      {...restProps}
      vkuiClass={classNames(
        getClassName("Title", platform),
        `Title--w-${weight}`,
        `Title--l-${level}`
      )}
    >
      {children}
    </Component>
  );
};

// eslint-disable-next-line import/no-default-export
export default Title;
