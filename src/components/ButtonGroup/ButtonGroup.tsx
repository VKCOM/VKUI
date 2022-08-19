import * as React from "react";
import { classNames } from "../../lib/classNames";
import type { HasRootRef, AlignType } from "../../types";
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
  /**
   * Горизонтальное выравнивание элементов внутри группы. Работает только с mode="vertical".
   */
  align?: AlignType;
}

/**
 * @see https://vkcom.github.io/VKUI/#/ButtonGroup
 */
export const ButtonGroup = ({
  mode = "horizontal",
  gap = "m",
  stretched = false,
  align = "left" /* NOTE: Чтобы блоки по-умолчанию не растягивались на всю ширину контейнера */,
  getRootRef,
  children,
  ...restProps
}: ButtonGroupProps) => {
  return (
    <div
      vkuiClass={classNames(
        "ButtonGroup",
        `ButtonGroup--mode-${mode}`,
        gap !== "none" && `ButtonGroup--gap-${gap}`,
        stretched && "ButtonGroup--stretched",
        `ButtonGroup--align-${align}`
      )}
      role="group"
      ref={getRootRef}
      {...restProps}
    >
      {children}
    </div>
  );
};
