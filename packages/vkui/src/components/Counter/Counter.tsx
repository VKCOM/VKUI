import * as React from 'react';
import { classNames, hasReactNode } from '@vkontakte/vkjs';
import { Caption } from '../Typography/Caption/Caption';
import { Headline } from '../Typography/Headline/Headline';
import styles from './Counter.module.css';

const modeClassNames = {
  secondary: styles['Counter--mode-secondary'],
  primary: styles['Counter--mode-primary'],
  prominent: styles['Counter--mode-prominent'],
  contrast: styles['Counter--mode-contrast'],
  inherit: styles['Counter--mode-inherit'],
};

const sizeClassNames = {
  s: styles['Counter--size-s'],
  m: styles['Counter--size-m'],
};

export interface CounterProps extends React.HTMLAttributes<HTMLSpanElement> {
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
}: CounterProps) => {
  if (React.Children.count(children) === 0) {
    return null;
  }

  const CounterTypography = size === 's' ? Caption : Headline;

  return (
    <span
      {...restProps}
      className={classNames(
        styles['Counter'],
        modeClassNames[mode],
        sizeClassNames[size],
        className,
      )}
    >
      {hasReactNode(children) && (
        <CounterTypography Component="span" className={styles['Counter__in']} level="2">
          {children}
        </CounterTypography>
      )}
    </span>
  );
};
