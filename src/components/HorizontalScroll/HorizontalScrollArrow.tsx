import * as React from "react";
import { Icon24Chevron } from "@vkontakte/icons";
import { classNames } from "../../lib/classNames";
import Tappable from "../Tappable/Tappable";
import "./HorizontalScrollArrow.css";

export interface HorizontalScrollArrowProps {
  onClick: () => void;
  direction: "left" | "right";
}

const HorizontalScrollArrow: React.FC<HorizontalScrollArrowProps> = ({
  onClick,
  direction,
}: HorizontalScrollArrowProps) => {
  return (
    <Tappable
      Component="button"
      hasHover={false}
      hasActive={false}
      vkuiClass={classNames(
        "HorizontalScrollArrow",
        `HorizontalScrollArrow--${direction}`
      )}
      onClick={onClick}
    >
      <span vkuiClass="HorizontalScrollArrow__icon">
        <Icon24Chevron />
      </span>
    </Tappable>
  );
};

// eslint-disable-next-line import/no-default-export
export default HorizontalScrollArrow;
