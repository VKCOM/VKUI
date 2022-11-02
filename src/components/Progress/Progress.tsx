import * as React from "react";
import { classNamesString } from "../../lib/classNames";
import { HasRootRef } from "../../types";
import styles from "./Progress.module.css";

export type ProgressProps = React.ProgressHTMLAttributes<HTMLProgressElement> &
  HasRootRef<HTMLProgressElement>;

/**
 * @see https://vkcom.github.io/VKUI/#/Progress
 */
export const Progress = ({
  value,
  max = 100,
  getRootRef,
  className,
  ...restProps
}: ProgressProps) => (
  <progress
    value={value}
    max={max}
    {...restProps}
    ref={getRootRef}
    className={classNamesString(styles["Progress"], className)}
  />
);
