import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import type { HTMLAttributesWithRootRef } from '../../types';
import { Caption } from '../Typography/Caption/Caption';
import { Headline } from '../Typography/Headline/Headline';
import styles from './Counter.module.css';

const modeClassNames = {
  secondary: styles.modeSecondary,
  primary: styles.modePrimary,
  prominent: styles.modeProminent,
  contrast: styles.modeContrast,
  inherit: styles.modeInherit,
};

const sizeClassNames = {
  s: styles.sizeS,
  m: styles.sizeM,
};

export interface CounterProps extends HTMLAttributesWithRootRef<HTMLSpanElement> {
  /**
   * Тип счетчика.  В режиме `inherit` если компонент находится в кнопке, то
   * цвета зависят от кнопки. Если компонент находится вне кнопки, применяется
   * режим `secondary`
   */
  mode?: 'secondary' | 'primary' | 'prominent' | 'contrast' | 'inherit';
  size?: 's' | 'm';
}

/**
 * @see https://vkcom.github.io/VKUI/#/Counter
 */
export const Counter = ({
  mode = 'inherit',
  size = 'm',
  children,
  className,
  ...restProps
}: CounterProps): React.ReactNode => {
  if (React.Children.count(children) === 0) {
    return null;
  }

  const CounterTypography = size === 's' ? Caption : Headline;
  const counterLevel = size === 's' ? '1' : '2';

  return (
    <CounterTypography
      {...restProps}
      Component="span"
      className={classNames(
        'vkuiInternalCounter',
        styles.host,
        modeClassNames[mode],
        sizeClassNames[size],
        className,
      )}
      level={counterLevel}
    >
      {children}
    </CounterTypography>
  );
};
