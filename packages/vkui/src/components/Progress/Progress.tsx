import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { clamp } from '../../helpers/math';
import type { HTMLAttributesWithRootRef } from '../../types';
import { RootComponent } from '../RootComponent/RootComponent';
import styles from './Progress.module.css';

const stylesAppearance = {
  accent: styles.appearanceAccent,
  positive: styles.appearancePositive,
  negative: styles.appearanceNegative,
};

function progressCustomHeightStyle(height: number | undefined): React.CSSProperties | undefined {
  return height
    ? {
        height,
        borderRadius: height / 2,
      }
    : undefined;
}

export interface ProgressProps extends HTMLAttributesWithRootRef<HTMLDivElement> {
  /**
   * Стиль отображения прогрессбара
   */
  appearance?: 'accent' | 'positive' | 'negative';
  value?: number;
  /**
   * Высота элемента.
   */
  height?: number;
}

const PROGRESS_MIN_VALUE = 0;
const PROGRESS_MAX_VALUE = 100;

/**
 * @see https://vkcom.github.io/VKUI/#/Progress
 */
export const Progress = ({
  value = 0,
  appearance = 'accent',
  height,
  ...restProps
}: ProgressProps): React.ReactNode => {
  const progress = clamp(value, PROGRESS_MIN_VALUE, PROGRESS_MAX_VALUE);
  const title = `${progress} / ${PROGRESS_MAX_VALUE}`;
  const styleHeight = progressCustomHeightStyle(height);

  return (
    <RootComponent
      aria-valuenow={value}
      title={title}
      {...restProps}
      role="progressbar"
      aria-valuemin={PROGRESS_MIN_VALUE}
      aria-valuemax={PROGRESS_MAX_VALUE}
      baseClassName={classNames(styles.host, stylesAppearance[appearance])}
      baseStyle={styleHeight}
    >
      <div className={styles.in} style={{ width: `${progress}%` }} />
    </RootComponent>
  );
};
