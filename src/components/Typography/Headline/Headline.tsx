import * as React from "react";
import { HasComponent } from "../../../types";
import { usePlatform } from "../../../hooks/usePlatform";
import { classNames } from "../../../lib/classNames";
import { getClassName } from "../../../helpers/getClassName";
import "./Headline.css";

export interface HeadlineProps
  extends React.AllHTMLAttributes<HTMLElement>,
    HasComponent {
  /**
   * Задаёт начертание шрифта отличное от стандартного.
   *
   * > ⚠️ Начертания `"semibold"`, `medium` и `"regular"` устарели и будут удалены в 5.0.0. Используйте значения `"1"`, `"2"` и `"3"`.
   */
  weight?: "regular" | "medium" | "semibold" | "1" | "2" | "3";
  level?: "1" | "2";
}

/**
 * @see https://vkcom.github.io/VKUI/#/Headline
 */
export const Headline: React.FC<HeadlineProps> = ({
  children,
  weight = "3",
  level = "1",
  Component = "h3", // TODO: v5 h4
  ...restProps
}: HeadlineProps) => {
  const platform = usePlatform();

  return (
    <Component
      {...restProps}
      vkuiClass={classNames(
        getClassName("Headline", platform), // TODO: v5 remove
        `Headline--l-${level}`,
        `Headline--w-${weight}`
      )}
    >
      {children}
    </Component>
  );
};
