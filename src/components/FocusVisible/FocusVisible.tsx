import * as React from "react";
import { classNames } from "../../lib/classNames";
import "./FocusVisible.css";

export type FocusVisibleMode = "inside" | "outside";

interface FocusVisibleProps {
  mode: FocusVisibleMode;
  focusVisible?: boolean;
}

export const FocusVisible: React.FC<FocusVisibleProps> = ({
  mode,
  focusVisible,
}: FocusVisibleProps) => (
  <span
    aria-hidden="true"
    vkuiClass={classNames("FocusVisible", `FocusVisible--${mode}`, {
      "FocusVisible--focus-visible": focusVisible,
    })}
  />
);
