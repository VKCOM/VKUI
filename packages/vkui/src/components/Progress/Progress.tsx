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

type Appearance = 'accent' | 'positive' | 'negative' | 'custom';

export interface ProgressProps<AppearanceType extends Appearance = 'accent'>
  extends HTMLAttributesWithRootRef<HTMLDivElement> {
  /**
   * Стиль отображения прогрессбара
   */
  appearance?: AppearanceType;
  /**
   * Кастомный цвет прогрессбара. Используется только с `appearance="custom"`
   */
  color?: AppearanceType extends 'custom' ? string : never;
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
export const Progress = <AppearanceType extends Appearance = 'accent'>({
  value = 0,
  height,
  trackDisable = false,
  appearance: appearanceProp,
  color: colorProp,
  ...restProps
}: ProgressProps<AppearanceType>): React.ReactNode => {
  const progress = clamp(value, PROGRESS_MIN_VALUE, PROGRESS_MAX_VALUE);
  const title = `${progress} / ${PROGRESS_MAX_VALUE}`;
  const styleHeight = progressCustomHeightStyle(height);
  const appearance: Appearance = appearanceProp || 'accent';
  const color: string | undefined = appearance === 'custom' ? colorProp : undefined;

  const backgroundColorStyle = color
    ? { '--vkui_internal_Progress_background_color': color }
    : undefined;

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
