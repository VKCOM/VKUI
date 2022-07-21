import * as React from "react";
import {
  Icon24Chevron,
  Icon24ChevronLeft,
  Icon16Chevron,
  Icon16ChevronLeft,
} from "@vkontakte/icons";
import { classNames } from "../../lib/classNames";
import { usePlatform } from "../../hooks/usePlatform";
import { IOS } from "../../lib/platform";
import { Tappable } from "../Tappable/Tappable";
import "./HorizontalScrollArrow.css";

export interface HorizontalScrollArrowController {
  setAvailable(value: boolean): void;
  setVisible(value: boolean): void;
}

export interface HorizontalScrollArrowProps {
  direction: "left" | "right";
  size?: "m" | "l";
  visilble?: boolean;
  controller?: React.Ref<HorizontalScrollArrowController>;
  onClick(): void;
}

/**
 * Внутренний компонент.
 *
 * По умолчанию невидим и недоступен. Для изменения этого, надо использовать `controller`.
 *
 * Чтобы компонент был всегда виден при доступности, передайте `visible={true}`.
 */
export const HorizontalScrollArrow = ({
  size = "l",
  direction,
  visilble: visilbleProp = false,
  controller,
  onClick,
  ...restProps
}: HorizontalScrollArrowProps) => {
  const platform = usePlatform();

  const [available, setAvailable] = React.useState(false);
  const [visible, setVisible] = React.useState(false);

  React.useImperativeHandle(
    controller,
    () => {
      return {
        setAvailable,
        setVisible,
      };
    },
    []
  );

  let ArrowIcon: React.ComponentType<unknown>;

  if (size === "m") {
    ArrowIcon = direction === "left" ? Icon16ChevronLeft : Icon16Chevron;
  } else {
    ArrowIcon = direction === "left" ? Icon24ChevronLeft : Icon24Chevron;
  }

  return (
    <Tappable
      {...restProps}
      Component="button"
      hasHover={available}
      hasActive={false}
      hoverMode="HorizontalScrollArrow--hover"
      vkuiClass={classNames(
        "HorizontalScrollArrow",
        `HorizontalScrollArrow--${size}`,
        `HorizontalScrollArrow--${direction}`,
        available &&
          (visilbleProp || visible) &&
          "HorizontalScrollArrow--visible",
        platform === IOS && "HorizontalScrollArrow--ios"
      )}
      onClick={onClick}
    >
      <span vkuiClass="HorizontalScrollArrow__icon">
        <ArrowIcon />
      </span>
    </Tappable>
  );
};
