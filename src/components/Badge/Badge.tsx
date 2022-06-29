import * as React from "react";
import { classNames } from "../../lib/classNames";
import "./Badge.css";

export interface BadgeProps extends React.HTMLAttributes<HTMLElement> {
  mode: "new" | "prominent";
}

/**
 * @see https://vkcom.github.io/VKUI/#/Badge
 */
export const Badge = ({ mode = "new", ...restProps }: BadgeProps) => (
  <span vkuiClass={classNames("Badge", `Badge--${mode}`)} {...restProps} />
);
