import * as React from "react";
import { Icon20Dropdown, Icon24ChevronDown } from "@vkontakte/icons";
import { classNames } from "../../lib/classNames";
import { SizeType } from "../AdaptivityProvider/AdaptivityContext";
import { useAdaptivity } from "../../hooks/useAdaptivity";
import "./DropdownIcon.css";

export interface DropdownIconProps
  extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Отразить иконку по горизонтали
   */
  flipped?: boolean;
}

export const DropdownIcon = ({
  flipped = false,
  ...restProps
}: DropdownIconProps) => {
  const { sizeY } = useAdaptivity();

  const Icon = sizeY === SizeType.COMPACT ? Icon20Dropdown : Icon24ChevronDown;

  return (
    <Icon
      vkuiClass={classNames("DropdownIcon", flipped && "DropdownIcon--flipped")}
      {...restProps}
    />
  );
};
