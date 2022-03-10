import * as React from "react";
import { HasComponent } from "../../../types";
import { classNames } from "../../../lib/classNames";
import { warnOnce } from "../../../lib/warnOnce";
import { Footnote } from "../Footnote/Footnote";
import { resolveWeight } from "../../../helpers/typography";
import "./Caption.css";

export interface CaptionProps
  extends React.AllHTMLAttributes<HTMLElement>,
    HasComponent {
  /**
   * Начертания "bold", "semibold", "medium" и "regular" устарели и будут удалены в 5.0.0. Используйте значения "1", "2" и "3"
   */
  weight?: "regular" | "medium" | "semibold" | "bold" | "1" | "2" | "3";
  /**
   * Уровень "4", "semibold", "medium" и "regular" устарел и будет удален в 5.0.0. Используйте компонент Footnote
   */
  level?: "1" | "2" | "3" | "4";
  caps?: boolean;
}

const warn = warnOnce("Caption");

const Caption: React.FC<CaptionProps> = ({
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

    if (level === "4") {
      warn(
        `Начертание level="${level}" устарело и будет удалено в 5.0.0. Используйте компонент Footnote`
      );
    }
  }

  if (level === "4") {
    return (
      <Footnote
        Component={Component}
        caps={caps}
        weight={resolveWeight(weight)}
        {...restProps}
      >
        {children}
      </Footnote>
    );
  }

  return (
    <Component
      {...restProps}
      vkuiClass={classNames("Caption", `Caption--l-${level}`, {
        "Caption--caps": caps,
        [`Caption--w-${weight}`]: !!weight,
      })}
    >
      {children}
    </Component>
  );
};

// eslint-disable-next-line import/no-default-export
export default Caption;
