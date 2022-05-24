import * as React from "react";
import { classNames } from "../../lib/classNames";
import "./FocusVisible.css";

export type FocusVisibleMode = "inside" | "outside";

interface FocusVisibleProps {
  mode: FocusVisibleMode;
}

/**
 * @see https://vkcom.github.io/VKUI/#/FocusVisible
 */
export const FocusVisible: React.FC<FocusVisibleProps> = ({
  mode,
}: FocusVisibleProps) => (
  <span
    aria-hidden="true"
    vkuiClass={classNames("FocusVisible", `FocusVisible--${mode}`)}
  />
);
