import { HoverPopper, HoverPopperProps } from "../HoverPopper/HoverPopper";
import { classNamesString } from "../../lib/classNames";
import styles from "./RichTooltip.module.css";

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
  className,
  ...popperProps
}: RichTooltipProps) => {
  return (
    <HoverPopper
      className={classNamesString(
        styles["RichTooltip"],
        styles[`RichTooltip--appearance-${appearance}`],
        className
      )}
      arrow={arrow}
      arrowClassName={styles["RichTooltip__arrow"]}
      {...popperProps}
    >
      {children}
    </HoverPopper>
  );
};
