import * as React from "react";
import { Icon24Chevron, Icon16Chevron } from "@vkontakte/icons";
import { classNames } from "../../lib/classNames";
import { usePlatform } from "../../hooks/usePlatform";
import { IOS } from "../../lib/platform";
import { Tappable } from "../Tappable/Tappable";
import "./ScrollArrow.css";

export interface ScrollArrowProps {
  onClick: () => void;
  direction: "left" | "right" | "up" | "down";
  size?: "m" | "l";
}

const ScrollArrow: React.FC<ScrollArrowProps> = ({
  onClick,
  size = "l",
  direction,
  ...restProps
}: ScrollArrowProps) => {
  const platform = usePlatform();
  const ArrowIcon = size === "m" ? Icon16Chevron : Icon24Chevron;

  return (
    <Tappable
      Component="button"
      hasHover={false}
      hasActive={false}
      vkuiClass={classNames(
        "HorizontalScrollArrow", // legacy
        `HorizontalScrollArrow--${direction}`, // legacy
        `HorizontalScrollArrow--${size}`, // legacy
        platform === IOS && "HorizontalScrollArrow--ios", // legacy
        "ScrollArrow",
        `ScrollArrow--${direction}`,
        `ScrollArrow--${size}`,
        platform === IOS && "ScrollArrow--ios"
      )}
      {...restProps}
      onClick={onClick}
    >
      <span vkuiClass="HorizontalScrollArrow__icon ScrollArrow__icon">
        <ArrowIcon />
      </span>
    </Tappable>
  );
};

// eslint-disable-next-line import/no-default-export
export default ScrollArrow;
