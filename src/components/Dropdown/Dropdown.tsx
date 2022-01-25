import * as React from "react";
import { HoverPopper, HoverPopperProps } from "../HoverPopper/HoverPopper";
import { ClickPopper, ClickPopperProps } from "../ClickPopper/ClickPopper";
import { getClassName } from "../../helpers/getClassName";
import { usePlatform } from "../../hooks/usePlatform";
import "./Dropdown.css";

export interface DropdownProps
  extends Omit<ClickPopperProps, "arrow" | "arrowClassName">,
    Omit<HoverPopperProps, "arrow" | "arrowClassName"> {
  action?: "click" | "hover";
}

export const Dropdown: React.FC<DropdownProps> = ({
  action = "click",
  hideDelay,
  showDelay,
  ...popperProps
}: DropdownProps) => {
  const platform = usePlatform();

  let Component;
  let actionSpecificProps: Partial<DropdownProps> = {};

  switch (action) {
    case "click":
      Component = ClickPopper;
      break;
    case "hover":
      actionSpecificProps = { hideDelay, showDelay };
      Component = HoverPopper;
      break;
  }

  return (
    <Component
      vkuiClass={getClassName("Dropdown", platform)}
      {...actionSpecificProps}
      {...popperProps}
    />
  );
};
