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
  custom: undefined,
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
  appearance?: 'accent' | 'positive' | 'negative' | 'custom';
  /**
   * Кастомный цвет прогрессбара. Используется только с `appearance="custom"`
   */
  color?: string;
  value?: number;
  /**
   * Высота элемента.
   */
  height?: number;
  /**
   * Сделать прогрессбар прозрачным
   */
  trackDisable?: boolean;
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
  color,
  trackDisable = false,
  ...restProps
}: ProgressProps): React.ReactNode => {
  const progress = clamp(value, PROGRESS_MIN_VALUE, PROGRESS_MAX_VALUE);
  const title = `${progress} / ${PROGRESS_MAX_VALUE}`;
  const styleHeight = progressCustomHeightStyle(height);

  const backgroundColorStyle =
    appearance === 'custom' ? { '--vkui_internal_Progress_background_color': color } : undefined;

  const style = {
    ...styleHeight,
    ...backgroundColorStyle,
    '--vkui_internal_Progress_progress': progress,
  };

  return (
    <RootComponent
      aria-valuenow={value}
      title={title}
      {...restProps}
      role="progressbar"
      aria-valuemin={PROGRESS_MIN_VALUE}
      aria-valuemax={PROGRESS_MAX_VALUE}
      baseClassName={classNames(
        styles.host,
        trackDisable && styles.trackDisable,
        stylesAppearance[appearance],
      )}
      baseStyle={style}
    />
  );
};
