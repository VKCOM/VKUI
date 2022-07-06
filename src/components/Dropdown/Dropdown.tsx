import { HoverPopper, HoverPopperProps } from "../HoverPopper/HoverPopper";
import { ClickPopper, ClickPopperProps } from "../ClickPopper/ClickPopper";
import "./Dropdown.css";

export interface DropdownProps
  extends Omit<ClickPopperProps, "arrow" | "arrowClassName">,
    Omit<HoverPopperProps, "arrow" | "arrowClassName"> {
  action?: "click" | "hover";
}

/**
 * @see https://vkcom.github.io/VKUI/#/Dropdown
 */
export const Dropdown = ({
  action = "click",
  hideDelay,
  showDelay,
  ...popperProps
}: DropdownProps) => {
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
    <Component vkuiClass="Dropdown" {...actionSpecificProps} {...popperProps} />
  );
};
