import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { clamp } from '../../helpers/math';
import { type CSSCustomProperties, type HTMLAttributesWithRootRef } from '../../types';
import { RootComponent } from '../RootComponent/RootComponent';
import styles from './Progress.module.css';

const stylesAppearance: Record<string, string> = {
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
  appearance?: 'accent' | 'positive' | 'negative' | `--${string}` | `#${string}`;
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

const resolveAppearance = (
  appearance: Exclude<ProgressProps['appearance'], undefined>,
): [CSSCustomProperties | undefined, string | undefined] => {
  switch (appearance) {
    case 'accent':
    case 'positive':
    case 'negative':
      return [undefined, stylesAppearance[appearance]];
    default: {
      return [{ '--vkui_internal_Progress_background_color': appearance }, undefined];
    }
  }
};

/**
 * @see https://vkcom.github.io/VKUI/#/Progress
 */
export const Progress = ({
  value = 0,
  height,
  trackDisable = false,
  appearance = 'accent',
  ...restProps
}: ProgressProps): React.ReactNode => {
  const progress = clamp(value, PROGRESS_MIN_VALUE, PROGRESS_MAX_VALUE);
  const title = `${progress} / ${PROGRESS_MAX_VALUE}`;
  const styleHeight = progressCustomHeightStyle(height);

  const [appearanceStyles, appearanceClassName] = resolveAppearance(appearance);

  const style = {
    ...styleHeight,
    ...appearanceStyles,
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
        appearanceClassName,
      )}
      baseStyle={style}
    />
  );
};
