import * as React from "react";
import { getClassName } from "../../helpers/getClassName";
import { classNames } from "../../lib/classNames";
import { usePlatform } from "../../hooks/usePlatform";
import { SharedDropdownProps } from "./types";
import { FocusTrap } from "../FocusTrap/FocusTrap";
import "./ActionSheet.css";

const stopPropagation: React.MouseEventHandler = (e) => e.stopPropagation();

export const ActionSheetDropdown = ({
  children,
  closing,
  // these 2 props are only omitted - ActionSheetDesktop compat
  toggleRef,
  popupDirection,
  ...restProps
}: SharedDropdownProps) => {
  const platform = usePlatform();
  const baseClaseName = getClassName("ActionSheet", platform);

  return (
    <FocusTrap
      {...restProps}
      onClick={stopPropagation}
      // eslint-disable-next-line vkui/no-object-expression-in-arguments
      vkuiClass={classNames(baseClaseName, {
        "ActionSheet--closing": closing,
      })}
    >
      {children}
    </FocusTrap>
  );
};
