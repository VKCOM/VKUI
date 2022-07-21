import * as React from "react";
import {
  Icon20Dropdown,
  Icon24ChevronDown,
  Icon24ChevronUp,
  Icon20ChevronUpOutline,
} from "@vkontakte/icons";
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

  let Icon = sizeY === SizeType.COMPACT ? Icon20Dropdown : Icon24ChevronDown;

  if (opened) {
    // TODO: заменить Icon20ChevronUpOutline на новую иконку, как только ее подвезут
    Icon =
      sizeY === SizeType.COMPACT ? Icon20ChevronUpOutline : Icon24ChevronUp;
  }

  return <Icon vkuiClass={classNames("DropdownIcon")} {...restProps} />;
};
