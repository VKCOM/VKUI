import * as React from 'react';
import { classNames, hasReactNode } from '@vkontakte/vkjs';
import { useExternRef } from '../../hooks/useExternRef';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';
import { useIsomorphicLayoutEffect } from '../../lib/useIsomorphicLayoutEffect';
import { executeWithReflow } from '../../lib/utils';
import { Caption } from '../Typography/Caption/Caption';
import { Headline } from '../Typography/Headline/Headline';
import styles from './Counter.module.css';

const TRANSITION_DURATION = 260;

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

export interface CounterProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * Тип счетчика.
   *
   * В режиме `inherit`:
   * - если компонент находится в кнопке, то цвета зависят от кнопки
   * - если вне кнопки, то применяется режим `secondary`
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
  const rootRef = useExternRef<HTMLElement | null>(null);
  const ref = useExternRef<HTMLElement | null>(null);

  const prevRootRectRef = React.useRef<DOMRect>();
  const prevRectRef = React.useRef<DOMRect>();

  prevRootRectRef.current = rootRef.current?.getBoundingClientRect();
  prevRectRef.current = ref.current?.getBoundingClientRect();

  const prefersReducedMotion = usePrefersReducedMotion();

  useIsomorphicLayoutEffect(() => {
    if (prefersReducedMotion) {
      return;
    }
    // Плавная трансформация изменения размера каунтера

    if (rootRef.current && ref.current && prevRootRectRef.current) {
      const rootEl = rootRef.current;
      const el = ref.current;

      const counterRect = rootEl.getBoundingClientRect();
      const prevRootRect = prevRootRectRef.current;

      const dl = Math.abs(prevRootRect.left - counterRect.left);
      const dr = Math.abs(prevRootRect.right - counterRect.right);
      const originX = (dl / (dl + dr)) * 100;
      const scaleX = prevRootRect.width / counterRect.width;

      executeWithReflow(rootEl, [
        () => {
          rootEl.style.transition = '';
          rootEl.style.transform = `scaleX(${scaleX})`;
          rootEl.style.transformOrigin = `${originX}% 0`;

          // Компенсация трансформации родителя,
          // чтобы внутреннее содержимое не скейлилось
          el.style.transition = '';
          el.style.transform = `scaleX(${1 / scaleX})`;
          el.style.transformOrigin = `${originX}% 0`;
        },
        () => {
          rootEl.style.transition = `transform ${TRANSITION_DURATION}ms ease`;
          rootEl.style.transform = '';

          el.style.transition = `transform ${TRANSITION_DURATION}ms ease`;
          el.style.transform = '';
        },
      ]);
    }
  }, [children]);

  if (React.Children.count(children) === 0) {
    return null;
  }

  const CounterTypography = size === 's' ? Caption : Headline;
  const counterLevel = size === 's' ? '1' : '2';

  return (
    <span
      {...restProps}
      ref={rootRef}
      className={classNames(
        styles['Counter'],
        modeClassNames[mode],
        sizeClassNames[size],
        className,
      )}
    >
      {hasReactNode(children) && (
        <span ref={ref} className={styles['Counter__in']}>
          <CounterTypography Component="span" level={counterLevel}>
            {children}
          </CounterTypography>
        </span>
      )}
    </span>
  );
};
