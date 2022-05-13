import * as React from "react";
import { Icon20Dropdown, Icon24ChevronDown } from "@vkontakte/icons";
import { getClassName } from "../../helpers/getClassName";
import { usePlatform } from "../../hooks/usePlatform";
import { classNames } from "../../lib/classNames";
import { SizeYConditionalRender } from "../SizeYConditionalRender/SizeYConditionalRender";
import "./DropdownIcon.css";

export const DropdownIcon: React.FC<React.HTMLAttributes<HTMLElement>> = (
  props
) => {
  const platform = usePlatform();

  return (
    <SizeYConditionalRender
      compact={
        <Icon20Dropdown
          vkuiClass={classNames(getClassName("DropdownIcon", platform))}
          {...props}
        />
      }
      regular={
        <Icon24ChevronDown
          vkuiClass={classNames(getClassName("DropdownIcon", platform))}
          {...props}
        />
      }
    />
  );
};
