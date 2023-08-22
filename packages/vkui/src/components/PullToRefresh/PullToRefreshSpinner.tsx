import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { HTMLAttributesWithRootRef } from '../../types';
import { RootComponent } from '../RootComponent/RootComponent';
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
  'aria-label': ariaLabel = 'Пожалуйста, подождите...',
  ...restProps
}: PullToRefreshSpinnerProps) => {
  const radius = 0.5 * size - 0.5 * strokeWidth;
  const dasharray = 2 * Math.PI * radius;
  const circleCenter = 0.5 * size;

  const dashoffset = calcStrokeDashOffset(on ? 80 : progress, radius);

  return (
    <RootComponent
      baseClassName={classNames(
        styles['PullToRefresh__spinner'],
        on && styles['PullToRefresh__spinner--on'],
      )}
      aria-label={on ? ariaLabel : undefined}
      {...restProps}
    >
      <svg
        role="presentation"
        className={styles['PullToRefresh__spinner-self']}
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
            className={styles['PullToRefresh__spinner-path']}
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
