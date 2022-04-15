import * as React from "react";
import { getClassName } from "../../helpers/getClassName";
import { HasRootRef } from "../../types";
import { usePlatform } from "../../hooks/usePlatform";
import "./Progress.css";

export interface ProgressProps
  extends React.HTMLAttributes<HTMLDivElement>,
    HasRootRef<HTMLDivElement> {
  value?: number;
}

const PROGRESS_MIN_VALUE = 0;
const PROGRESS_MAX_VALUE = 100;

const Progress: React.FC<ProgressProps> = ({
  value = 0,
  getRootRef,
  ...restProps
}: ProgressProps) => {
  const platform = usePlatform();

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
      vkuiClass={getClassName("Progress", platform)}
    >
      <div vkuiClass="Progress__bg" aria-hidden="true" />
      <div
        vkuiClass="Progress__in"
        style={{ width: `${progress}%` }}
        aria-hidden="true"
      />
    </div>
  );
};

// eslint-disable-next-line import/no-default-export
export default Progress;
