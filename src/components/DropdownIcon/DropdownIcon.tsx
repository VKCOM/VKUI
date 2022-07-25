import * as React from "react";
import { Icon20Dropdown, Icon24ChevronDown } from "@vkontakte/icons";
import { classNames } from "../../lib/classNames";
import { SizeType } from "../AdaptivityProvider/AdaptivityContext";
import { useAdaptivity } from "../../hooks/useAdaptivity";
import "./DropdownIcon.css";

export interface DropdownIconProps
  extends React.HTMLAttributes<HTMLDivElement> {
  opened?: boolean;
}

export const DropdownIcon = ({
  opened = false,
  ...restProps
}: DropdownIconProps) => {
  const { sizeY } = useAdaptivity();

  const Icon = sizeY === SizeType.COMPACT ? Icon20Dropdown : Icon24ChevronDown;

  console.log("DropdownIcon[opened]", opened);

  return <Icon vkuiClass={classNames("DropdownIcon")} {...restProps} />;
};
