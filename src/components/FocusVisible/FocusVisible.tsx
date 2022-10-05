import * as React from "react";
import { classNamesString } from "../../lib/classNames";
import styles from "./FocusVisible.module.css";

export type FocusVisibleMode = "inside" | "outside";

export interface FocusVisibleProps {
  mode: FocusVisibleMode;
}

/**
 * @see https://vkcom.github.io/VKUI/#/FocusVisible
 */
export const FocusVisible = ({ mode }: FocusVisibleProps) => (
  <span
    aria-hidden="true"
    className={classNamesString(
      styles["FocusVisible"],
      styles[`FocusVisible--mode-${mode}`]
    )}
  />
);
