import * as React from "react";
import { classNamesString } from "../../lib/classNames";
import styles from "./PullToRefresh.module.css";

function calcStrokeDashOffset(value: number, radius: number) {
  const progress = value / 100;
  return 2 * Math.PI * radius * (1 - progress);
}

export interface PullToRefreshSpinnerProps
  extends React.HTMLAttributes<HTMLDivElement> {
  size?: number;
  strokeWidth?: number;
  on?: boolean;
  progress?: number;
  "aria-label"?: string;
}

export const PullToRefreshSpinner = ({
  on = true,
  size = 24,
  strokeWidth = 2.5,
  style,
  progress = 0,
  "aria-label": ariaLabel = "Пожалуйста, подождите...",
}: PullToRefreshSpinnerProps) => {
  const radius = 0.5 * size - 0.5 * strokeWidth;
  const dasharray = 2 * Math.PI * radius;
  const circleCenter = 0.5 * size;

  const dashoffset = calcStrokeDashOffset(on ? 80 : progress, radius);

  return (
    <div
      className={classNamesString(
        styles["PullToRefresh__spinner"],
        on && styles["PullToRefresh__spinner--on"]
      )}
      style={style}
      aria-label={on ? ariaLabel : undefined}
    >
      <svg
        role="presentation"
        className={styles["PullToRefresh__spinner-self"]}
        style={{
          width: size,
          height: size,
        }}
        viewBox={`0 0 ${size} ${size}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          style={{
            width: size,
            height: size,
            transformOrigin: `${circleCenter}px ${circleCenter}px`,
          }}
        >
          <circle
            className={styles["PullToRefresh__spinner-path"]}
            fill="none"
            strokeDasharray={dasharray}
            strokeDashoffset={dashoffset}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            cx={circleCenter}
            cy={circleCenter}
            r={radius}
          />
        </g>
      </svg>
    </div>
  );
};
