import * as React from "react";
import { classNames } from "../../lib/classNames";
import "./Separator.css";

export interface SeparatorProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * С этим свойством компонент не будет иметь отступы слева и справа
   */
  wide?: boolean;
}

/**
 * @see https://vkcom.github.io/VKUI/#/Separator
 */
export const Separator = ({ wide, ...restProps }: SeparatorProps) => (
  <div
    {...restProps}
    aria-hidden="true"
    vkuiClass={classNames("Separator", !wide && "Separator--padded")}
    role="separator"
  >
    <div vkuiClass="Separator__in" />
  </div>
);
