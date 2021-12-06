import * as React from "react";
import { Icon20Dropdown, Icon24ChevronDown } from "@vkontakte/icons";
import { SizeType } from "../AdaptivityProvider/AdaptivityContext";
import { getClassName } from "../../helpers/getClassName";
import { useAdaptivity } from "../../hooks/useAdaptivity";
import { usePlatform } from "../../hooks/usePlatform";
import "./DropdownIcon.css";

export const DropdownIcon: React.FC<React.HTMLAttributes<HTMLElement>> = (
  props
) => {
  const platform = usePlatform();
  const { sizeY } = useAdaptivity();

  const Icon = sizeY === SizeType.COMPACT ? Icon20Dropdown : Icon24ChevronDown;

  return <Icon vkuiClass={getClassName("DropdownIcon", platform)} {...props} />;
};
