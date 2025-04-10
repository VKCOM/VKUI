/* eslint-disable jsdoc/require-jsdoc */

import { classNames } from '@vkontakte/vkjs';
import type { HTMLAttributesWithRootRef } from '../../types';
import { RootComponent } from '../RootComponent/RootComponent';
import { VisuallyHidden } from '../VisuallyHidden/VisuallyHidden';
import styles from './PullToRefresh.module.css';

function calcStrokeDashOffset(value: number, radius: number) {
  const progress = value / 100;
  return 2 * Math.PI * radius * (1 - progress);
}

export interface PullToRefreshSpinnerProps extends HTMLAttributesWithRootRef<HTMLDivElement> {
  size?: number;
  strokeWidth?: number;
  on?: boolean;
  progress?: number;
}

export const PullToRefreshSpinner = ({
  on = true,
  size = 24,
  strokeWidth = 2.5,
  progress = 0,
  children = 'Пожалуйста, подождите...',
  ...restProps
}: PullToRefreshSpinnerProps): React.ReactNode => {
  const radius = 0.5 * size - 0.5 * strokeWidth;
  const dasharray = 2 * Math.PI * radius;
  const circleCenter = 0.5 * size;

  const dashoffset = calcStrokeDashOffset(on ? 80 : progress, radius);

  return (
    <RootComponent
      baseClassName={classNames(styles.spinner, on && styles.spinnerOn)}
      {...restProps}
    >
      {on && <VisuallyHidden>{children}</VisuallyHidden>}
      <svg
        role="presentation"
        className={styles.spinnerSelf}
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
            className={styles.spinnerPath}
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
    </RootComponent>
  );
};
