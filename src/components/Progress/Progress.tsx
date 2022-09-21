import * as React from "react";
import { classNamesString } from "../../lib/classNames";
import { HasRootRef } from "../../types";
import styles from "./Progress.module.css";

export interface ProgressProps
  extends React.HTMLAttributes<HTMLDivElement>,
    HasRootRef<HTMLDivElement> {
  value?: number;
}

const PROGRESS_MIN_VALUE = 0;
const PROGRESS_MAX_VALUE = 100;

/**
 * @see https://vkcom.github.io/VKUI/#/Progress
 */
export const Progress = ({
  value = 0,
  getRootRef,
  className,
  ...restProps
}: ProgressProps) => {
  const progress = Math.max(
    PROGRESS_MIN_VALUE,
    Math.min(value, PROGRESS_MAX_VALUE)
  );

  return (
    <div
      aria-valuenow={value}
      {...restProps}
      role="progressbar"
      aria-valuemin={PROGRESS_MIN_VALUE}
      aria-valuemax={PROGRESS_MAX_VALUE}
      ref={getRootRef}
      className={classNamesString(styles["Progress"], className)}
    >
      <div
        className={styles["Progress__in"]}
        style={{ width: `${progress}%` }}
        aria-hidden
      />
    </div>
  );
};
