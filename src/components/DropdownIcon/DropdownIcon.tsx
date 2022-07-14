import * as React from "react";
import { Icon20Dropdown, Icon24ChevronDown } from "@vkontakte/icons";
import { classNames } from "../../lib/classNames";
import { SizeType } from "../AdaptivityProvider/AdaptivityContext";
import { getClassName } from "../../helpers/getClassName";
import { useAdaptivity } from "../../hooks/useAdaptivity";
import { usePlatform } from "../../hooks/usePlatform";
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
  const platform = usePlatform();
  const { sizeY } = useAdaptivity();

  const Icon = sizeY === SizeType.COMPACT ? Icon20Dropdown : Icon24ChevronDown;

  return (
    <Icon
      vkuiClass={classNames(
        getClassName("DropdownIcon", platform),
        flipped && "DropdownIcon--flipped"
      )}
      {...restProps}
    />
  );
};
