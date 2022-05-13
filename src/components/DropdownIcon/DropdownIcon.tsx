import * as React from "react";
import { Icon24ChevronDown } from "@vkontakte/icons";
import { getClassName } from "../../helpers/getClassName";
import { useAdaptivity } from "../../hooks/useAdaptivity";
import { usePlatform } from "../../hooks/usePlatform";
import { classNames } from "../../lib/classNames";
import { getSizeYClassName } from "../../helpers/getSizeYClassName";
import "./DropdownIcon.css";

export const DropdownIcon: React.FC<React.HTMLAttributes<HTMLElement>> = (
  props
) => {
  const platform = usePlatform();
  const { sizeY } = useAdaptivity();

  return (
    <Icon24ChevronDown
      vkuiClass={classNames(
        getClassName("DropdownIcon", platform),
        getSizeYClassName("DropdownIcon", sizeY)
      )}
      {...props}
    />
  );
};
