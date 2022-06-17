import * as React from "react";
import { TappableProps, Tappable } from "../Tappable/Tappable";
import { classNames } from "../../lib/classNames";
import { usePlatform } from "../../hooks/usePlatform";
import { withAdaptivity } from "../../hoc/withAdaptivity";
import { IOS } from "../../lib/platform";
import { warnOnce } from "../../lib/warnOnce";
import "./IconButton.css";

export interface IconButtonProps extends TappableProps {
  children?: React.ReactNode;
  /**
   * @deprecated будет удалено в 5.0.0. Используйте `children`
   */
  icon?: React.ReactNode;
}

const warn = warnOnce("IconButton");

/**
 * @see https://vkcom.github.io/VKUI/#/IconButton
 */
const IconButtonComponent = ({
  icon,
  sizeY,
  children,
  Component = "button",
  ...restProps
}: IconButtonProps) => {
  const platform = usePlatform();

  if (icon && process.env.NODE_ENV === "development") {
    warn(
      "Свойство icon устарело и будет удалено в 5.0.0. Используйте children"
    );
  }

  return (
    <Tappable
      {...restProps}
      Component={restProps.href ? "a" : Component}
      activeEffectDelay={200}
      activeMode={platform === IOS ? "opacity" : "IconButton--active"}
      vkuiClass={classNames("IconButton", `IconButton--sizeY-${sizeY}`)}
    >
      {icon || children}
    </Tappable>
  );
};

export const IconButton = withAdaptivity(IconButtonComponent, {
  sizeY: true,
});

IconButton.displayName = "IconButton";
