'use client';

import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { mergeStyle } from '../../helpers/mergeStyle';
import { type CSSCustomProperties, type HTMLAttributesWithRootRef } from '../../types';
import { Caption } from '../Typography/Caption/Caption';
import { Headline } from '../Typography/Headline/Headline';
import styles from './Counter.module.css';

const modeClassNames = {
  primary: styles.modePrimary,
  contrast: styles.modeContrast,
  tertiary: styles.modeTertiary,
  inherit: styles.modeInherit,
};

const appearanceClassNames: Record<string, string> = {
  'custom': styles.appearanceCustom,
  'accent': styles.appearanceAccent,
  'neutral': styles.appearanceNeutral,
  'accent-green': styles.appearanceAccentGreen,
  'accent-red': styles.appearanceAccentRed,
};

const sizeClassNames = {
  s: styles.sizeS,
  m: styles.sizeM,
};

export interface CounterProps extends HTMLAttributesWithRootRef<HTMLSpanElement> {
  /**
   * Режим отображения счетчика.
   */
  mode?: 'primary' | 'contrast' | 'tertiary' | 'inherit';

  /**
   * Внешний вид счетчика.
   */
  appearance?: 'accent' | 'neutral' | 'accent-green' | 'accent-red' | 'custom';

  /**
   * Пользовательский цвет (работает только при appearance="custom")
   * - При mode="primary" - изменяет фон
   * - При mode="contrast" - изменяет цвет текста
   * - При mode="tertiary" - изменяет цвет текста
   * - При mode="inherit" - не работает.
   */
  color?: string;
  /**
   * Размер счетчика.
   */
  size?: 's' | 'm';
}

/**
 * @see https://vkui.io/components/counter
 */
export const Counter = ({
  mode = 'inherit',
  appearance: appearanceProp,
  color,
  size = 'm',
  children,
  className,
  style: styleProp,
  ...restProps
}: CounterProps): React.ReactNode => {
  const appearance = React.useMemo<CounterProps['appearance']>(() => {
    if (mode === 'inherit') {
      return undefined;
    }
    if (appearanceProp) {
      return appearanceProp;
    }
    return 'accent';
  }, [appearanceProp, mode]);

  const style: (React.CSSProperties & CSSCustomProperties<string | undefined>) | undefined =
    React.useMemo(() => {
      if (mode === 'inherit' || appearance !== 'custom' || !color) {
        return undefined;
      }
      switch (mode) {
        case 'primary':
          return {
            '--vkui_internal--counter_background': color,
          };
        case 'contrast':
        case 'tertiary':
          return {
            '--vkui_internal--counter_foreground': color,
          };
      }
    }, [appearance, color, mode]);

  if (React.Children.count(children) === 0) {
    return null;
  }

  const CounterTypography = size === 's' ? Caption : Headline;
  const counterLevel = size === 's' ? '1' : '2';

  return (
    <CounterTypography
      {...restProps}
      style={mergeStyle(style, styleProp)}
      Component="span"
      className={classNames(
        'vkuiInternalCounter',
        styles.host,
        modeClassNames[mode],
        !!appearance && appearanceClassNames[appearance],
        sizeClassNames[size],
        className,
      )}
      level={counterLevel}
    >
      {children}
    </CounterTypography>
  );
};
