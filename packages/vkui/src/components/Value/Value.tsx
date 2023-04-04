import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';
import { usePrevious } from '../../hooks/usePrevious';
import { useIsomorphicLayoutEffect } from '../../lib/useIsomorphicLayoutEffect';
import { getTitleFromChildren } from '../../lib/utils';
import styles from './Value.module.css';

const TRANSITION_DURATION = 260;

/**
 * Если длины строк одинаковы, возвращает количество совпадающих символов (считая от начала).
 * Если длины строк разные, возвращает ноль.
 * @returns
 */
export function getCommonSubstringLength(value: string, anotherValue: string): number {
  if (value.length !== anotherValue.length) {
    return 0;
  }

  for (let i = 0; i < value.length; i++) {
    if (value[i] !== anotherValue[i]) {
      return i;
    }
  }

  return value.length;
}

interface ValueTransitionState {
  head: string;
  prevTail: string;
  nextTail: string;
  direction: 'up' | 'down';
}

export interface ValueProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * Функция, форматирующая отображение числового значения.
   *
   * Например, полезно, когда:
   * - нужно отделить разряды числа пробелом: 5000 -> "5 000"
   * - нужно ограничить число верхней планкой: 101 -> "99+"
   */
  formatter?: (value: React.ReactNode) => string;
  /**
   * Включает анимацию при изменении числового значения
   */
  animated?: boolean;
}

/**
 * @see https://vkcom.github.io/VKUI/#/Value
 */
export function Value({
  className,
  animated = false,
  formatter = String,
  children: childrenProp,
  ...restProps
}: ValueProps) {
  const value = getTitleFromChildren(childrenProp);
  const prevValue = usePrevious<React.ReactNode>(value);

  const [calculatedChildren, setCalculatedChildren] = React.useState<string>(formatter(value));

  const [transition, setTransition] = React.useState<ValueTransitionState | null>(null);

  const prefersReducedMotion = usePrefersReducedMotion();

  useIsomorphicLayoutEffect(() => {
    if (!prevValue || prevValue === value) {
      return;
    }

    const prevCalculatedChildren = formatter(prevValue);
    const calculatedChildren = formatter(value);

    setCalculatedChildren(calculatedChildren);

    if (calculatedChildren === prevCalculatedChildren || !animated || prefersReducedMotion) {
      return;
    }

    const commonValueLength = getCommonSubstringLength(calculatedChildren, prevCalculatedChildren);

    setTransition({
      head: calculatedChildren.slice(0, commonValueLength),
      prevTail: prevCalculatedChildren.slice(commonValueLength),
      nextTail: calculatedChildren.slice(commonValueLength),
      direction: value > prevValue ? 'up' : 'down',
    });

    const timeoutId = setTimeout(() => {
      setTransition(null);
    }, TRANSITION_DURATION);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [childrenProp, formatter]);

  return (
    <span {...restProps} className={classNames(styles['Value__root'], className)}>
      {transition ? (
        <>
          <span className={styles['Value__head']}>{transition.head}</span>
          <span
            key={transition.nextTail}
            className={classNames(
              styles['Value'],
              styles[`Value--transition-${transition.direction}`],
            )}
          >
            <span className={styles['Value__prev']}>{transition.prevTail}</span>
            <span className={styles['Value__next']}>{transition.nextTail}</span>
          </span>
        </>
      ) : (
        calculatedChildren
      )}
    </span>
  );
}
