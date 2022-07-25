import { HoverPopper, HoverPopperProps } from "../HoverPopper/HoverPopper";
import { classNames } from "../../lib/classNames";
import { prefixClass } from "../../lib/prefixClass";
import "./RichTooltip.css";

export interface RichTooltipProps
  extends Omit<HoverPopperProps, "arrowClassName"> {
  /**
   * Стиль отображения подсказки
   */
  appearance?: "accent" | "neutral" | "white" | "black" | "inversion";
}

/**
 * @see https://vkcom.github.io/VKUI/#/RichTooltip
 */
export const RichTooltip = ({
  children,
  arrow = true,
  appearance = "neutral",
  ...popperProps
}: RichTooltipProps) => {
  return (
    <HoverPopper
      vkuiClass={classNames("RichTooltip", `RichTooltip--${appearance}`)}
      arrow={arrow}
      arrowClassName={prefixClass("RichTooltip__arrow")}
      {...popperProps}
    >
      {children}
    </HoverPopper>
  );
};
