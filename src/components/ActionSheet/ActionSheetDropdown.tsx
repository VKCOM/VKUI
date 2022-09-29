import * as React from "react";
import { getSizeYClassName } from "../../helpers/getSizeYClassName";
import { classNamesString } from "../../lib/classNames";
import { Platform } from "../../lib/platform";
import { usePlatform } from "../../hooks/usePlatform";
import { useAdaptivityWithMediaQueries } from "../../hooks/useAdaptivityWithMediaQueries";
import { SharedDropdownProps } from "./types";
import { FocusTrap } from "../FocusTrap/FocusTrap";
import styles from "./ActionSheet.module.css";

const stopPropagation: React.MouseEventHandler = (e) => e.stopPropagation();

export const ActionSheetDropdown = ({
  children,
  closing,
  // these 2 props are only omitted - ActionSheetDesktop compat
  toggleRef,
  popupDirection,
  className,
  ...restProps
}: SharedDropdownProps) => {
  const { sizeY } = useAdaptivityWithMediaQueries();
  const platform = usePlatform();

  return (
    <FocusTrap
      {...restProps}
      onClick={stopPropagation}
      className={classNamesString(
        styles["ActionSheet"],
        platform === Platform.IOS && styles["ActionSheet--ios"],
        closing && styles["ActionSheet--closing"],
        getSizeYClassName(styles["ActionSheet"], sizeY),
        className
      )}
    >
      {children}
    </FocusTrap>
  );
};
