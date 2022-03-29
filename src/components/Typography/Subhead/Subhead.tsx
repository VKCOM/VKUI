import * as React from "react";
import { HasComponent } from "../../../types";
import { classNames } from "../../../lib/classNames";
import { warnOnce } from "../../../lib/warnOnce";
import { useAdaptivity } from "../../../hooks/useAdaptivity";
import "./Subhead.css";

export interface SubheadProps
  extends React.AllHTMLAttributes<HTMLElement>,
    HasComponent {
  /**
   * Задаёт начертание шрифта отличное от стандартного.
   *
   * > ⚠️ Начертания `"semibold"`, `medium` и `"regular"` устарели и будут удалены в 5.0.0. Используйте значения `"1"`, `"2"` и `"3"`.
   */
  weight?: "regular" | "medium" | "semibold" | "bold" | "1" | "2" | "3";
}

const warn = warnOnce("Subhead");

const Subhead: React.FC<SubheadProps> = ({
  children,
  weight,
  Component = "h5",
  ...restProps
}: SubheadProps) => {
  const { sizeY } = useAdaptivity();

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
        "Subhead",
        `Subhead--sizeY-${sizeY}`,
        `Subhead--w-${weight}`
      )}
    >
      {children}
    </Component>
  );
};

// eslint-disable-next-line import/no-default-export
export default Subhead;
