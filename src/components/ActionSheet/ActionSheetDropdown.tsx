import * as React from "react";
import { classNames } from "../../lib/classNames";
import { Platform } from "../../lib/platform";
import { usePlatform } from "../../hooks/usePlatform";
import { useAdaptivity } from "../../hooks/useAdaptivity";
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
  const { sizeY } = useAdaptivity();
  const platform = usePlatform();

  return (
    <FocusTrap
      {...restProps}
      onClick={stopPropagation}
      vkuiClass={classNames(
        "ActionSheet",
        platform === Platform.IOS && "ActionSheet--ios",
        closing && "ActionSheet--closing",
        `ActionSheet--sizeY-${sizeY}`
      )}
    >
      {children}
    </FocusTrap>
  );
};
