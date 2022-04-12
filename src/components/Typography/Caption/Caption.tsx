import * as React from "react";
import { HasComponent } from "../../../types";
import { classNames } from "../../../lib/classNames";
import { warnOnce } from "../../../lib/warnOnce";
import "./Caption.css";

export interface CaptionProps
  extends React.AllHTMLAttributes<HTMLElement>,
    HasComponent {
  /**
   * Задаёт начертание шрифта отличное от стандартного.
   *
   * > ⚠️ Начертания `"bold"`, `"semibold"`, `medium` и `"regular"` устарели и будут удалены в 5.0.0. Используйте значения `"1"`, `"2"` и `"3"`.
   */
  weight?: "regular" | "medium" | "semibold" | "bold" | "1" | "2" | "3";
  level?: "1" | "2" | "3" | "4";
  caps?: boolean;
}

const warn = warnOnce("Caption");

export const Caption: React.FC<CaptionProps> = ({
  children,
  weight,
  level = "1",
  caps,
  Component = "span",
  ...restProps
}: CaptionProps) => {
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
        "Caption",
        `Caption--l-${level}`,
        caps && "Caption--caps",
        weight && `Caption--w-${weight}`
      )}
    >
      {children}
    </Component>
  );
};
