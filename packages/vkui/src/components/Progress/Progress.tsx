import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { clamp } from '../../helpers/math';
import { HasRootRef } from '../../types';
import styles from './Progress.module.css';

export interface ProgressProps
  extends React.HTMLAttributes<HTMLDivElement>,
    HasRootRef<HTMLDivElement> {
  /**
   * Стиль отображения прогрессбара
   */
  appearance?: 'accent' | 'positive' | 'negative';
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
  appearance = 'accent',
  ...restProps
}: ProgressProps) => {
  const progress = clamp(value, PROGRESS_MIN_VALUE, PROGRESS_MAX_VALUE);
  const title = `${progress} / ${PROGRESS_MAX_VALUE}`;

  return (
    <div
      aria-valuenow={value}
      title={title}
      {...restProps}
      role="progressbar"
      aria-valuemin={PROGRESS_MIN_VALUE}
      aria-valuemax={PROGRESS_MAX_VALUE}
      ref={getRootRef}
      className={classNames(
        styles['Progress'],
        {
          accent: styles['Progress--appearance-accent'],
          positive: styles['Progress--appearance-positive'],
          negative: styles['Progress--appearance-negative'],
        }[appearance],
        className,
      )}
    >
      <div className={styles['Progress__in']} style={{ width: `${progress}%` }} />
    </div>
  );
};
