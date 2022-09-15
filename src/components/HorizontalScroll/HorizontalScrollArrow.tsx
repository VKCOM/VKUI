import * as React from "react";
import {
  Icon24Chevron,
  Icon24ChevronCompactLeft,
  Icon16Chevron,
  Icon16ChevronLeft,
} from "@vkontakte/icons";
import { classNamesString } from "../../lib/classNames";
import { usePlatform } from "../../hooks/usePlatform";
import { Platform } from "../../lib/platform";
import { Tappable } from "../Tappable/Tappable";
import styles from "./HorizontalScrollArrow.module.css";

export interface HorizontalScrollArrowProps {
  direction: "left" | "right";
  size?: "m" | "l";
  onClick(): void;
  className?: string;
}

export const HorizontalScrollArrow = ({
  size = "l",
  direction,
  onClick,
  className,
  ...restProps
}: HorizontalScrollArrowProps) => {
  const platform = usePlatform();
  let ArrowIcon: React.ComponentType<unknown>;

  if (size === "m") {
    ArrowIcon = direction === "left" ? Icon16ChevronLeft : Icon16Chevron;
  } else {
    ArrowIcon = direction === "left" ? Icon24ChevronCompactLeft : Icon24Chevron;
  }

  return (
    <Tappable
      {...restProps}
      Component="button"
      hasHover={false}
      hasActive={false}
      className={classNamesString(
        styles["HorizontalScrollArrow"],
        styles[`HorizontalScrollArrow--size-${size}`],
        styles[`HorizontalScrollArrow--direction-${direction}`],
        platform === Platform.IOS && styles["HorizontalScrollArrow--ios"],
        className
      )}
      onClick={onClick}
    >
      <span className={styles["HorizontalScrollArrow__icon"]}>
        <ArrowIcon />
      </span>
    </Tappable>
  );
};
