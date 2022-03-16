import * as React from "react";
import { classNames } from "../../lib/classNames";
import type { HasRootRef } from "../../types";
import "./ButtonGroup.css";

export interface ButtonGroupProps
  extends React.HTMLAttributes<HTMLDivElement>,
    HasRootRef<HTMLDivElement> {
  /**
   * Задает расположение элементов внутри группы, вертикальное или горизонтальное.
   */
  mode?: "vertical" | "horizontal";
  /**
   * Выставляет в зависимости от `mode` отступ по вертикали или горизонтали.
   */
  gap?: "none" | "space" | "s" | "m";
  /**
   * Растягивает компонент на всю ширину контейнера.
   *
   * Note: Для потомков соответствующее поведение нужно определять самостоятельно, где это необходимо.
   */
  stretched?: boolean;
}

export const ButtonGroup: React.FC<ButtonGroupProps> = ({
  mode = "horizontal",
  gap = "m",
  stretched = false,
  getRootRef,
  children,
  ...restProps
}) => {
  return (
    <div
      vkuiClass={classNames(
        "ButtonGroup",
        `ButtonGroup--mode-${mode}`,
        gap !== "none" && `ButtonGroup--gap-${gap}`,
        stretched && "ButtonGroup--stretched"
      )}
      role="group"
      ref={getRootRef}
      {...restProps}
    >
      {children}
    </div>
  );
};
