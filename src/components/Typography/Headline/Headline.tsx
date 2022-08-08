import * as React from "react";
import { HasComponent, HasRootRef } from "../../../types";
import { usePlatform } from "../../../hooks/usePlatform";
import { useAdaptivity } from "../../../hooks/useAdaptivity";
import { classNames } from "../../../lib/classNames";
import { warnOnce } from "../../../lib/warnOnce";
import { getClassName } from "../../../helpers/getClassName";
import "./Headline.css";

export interface HeadlineProps
  extends React.AllHTMLAttributes<HTMLElement>,
    HasRootRef<HTMLElement>,
    HasComponent {
  /**
   * Задаёт начертание шрифта отличное от стандартного.
   *
   * > ⚠️ Начертания `"semibold"`, `medium` и `"regular"` устарели и будут удалены в 5.0.0. Используйте значения `"1"`, `"2"` и `"3"`.
   */
  weight?: "regular" | "medium" | "semibold" | "1" | "2" | "3";
  level?: "1" | "2";
}

const warn = warnOnce("Headline");

/**
 * @see https://vkcom.github.io/VKUI/#/Headline
 */
export const Headline = ({
  children,
  weight = "3",
  level = "1",
  Component = "h3", // TODO: v5 h4
  getRootRef,
  ...restProps
}: HeadlineProps) => {
  const platform = usePlatform();
  const { sizeY } = useAdaptivity();

  if (
    process.env.NODE_ENV === "development" &&
    typeof Component !== "string" &&
    getRootRef
  ) {
    warn("getRootRef может использоваться только с элементами DOM", "error");
  }

  return (
    <Component
      {...restProps}
      ref={getRootRef}
      vkuiClass={classNames(
        getClassName("Headline", platform), // TODO: v5 remove
        `Headline--sizeY-${sizeY}`, // TODO: новая адаптивность
        `Headline--l-${level}`,
        `Headline--w-${weight}`
      )}
    >
      {children}
    </Component>
  );
};
