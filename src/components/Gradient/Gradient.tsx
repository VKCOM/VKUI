import * as React from "react";
import { classNames } from "../../lib/classNames";
import "./Gradient.css";

export interface GradientProps extends React.HTMLAttributes<HTMLDivElement> {
  mode?: "tint" | "white" | "black";
  to?: "top" | "bottom";
}

export const Gradient: React.FC<GradientProps> = ({
  mode = "tint",
  children,
  to = "top",
  ...restProps
}) => {
  return (
    <div
      role="presentation"
      {...restProps}
      vkuiClass={classNames(
        "Gradient",
        `Gradient--md-${mode}`,
        `Gradient--to-${to}`
      )}
    >
      {children}
    </div>
  );
};
