'use client';

import * as React from 'react';
import { classNames, throttle } from '@vkontakte/vkjs';
import { RootComponent } from 'src/components/RootComponent/RootComponent';
import { useResizeObserver } from '../../../hooks/useResizeObserver';
import { type CSSCustomProperties, type HasRootRef } from '../../../types';
import styles from './CustomScrollViewTint.module.css';

export interface CustomScrollViewTintProps
  extends Omit<React.ComponentProps<'div'>, 'children'>,
    HasRootRef<HTMLDivElement> {
  /**
   * Цвет тени.
   */
  tintColor?: string;
  /**
   * Компонент-обертка для реализации прокрутки с тенями.
   */
  children: (
    props: Pick<React.ComponentProps<'div'>, 'onScroll'> & HasRootRef<HTMLDivElement>,
  ) => React.ReactNode;
}

/**
 * @see https://vkui.io/components/custom-scroll-view
 * @since 8.1.0
 */
export function CustomScrollViewTint({
  children,
  tintColor,
  ...restProps
}: CustomScrollViewTintProps): React.ReactElement {
  const scrollRef = React.useRef<HTMLDivElement>(null);

  const [hasTintTop, setHasTintTop] = React.useState(false);
  const [hasTintBottom, setHasTintBottom] = React.useState(false);
  const [hasTintLeft, setHasTintLeft] = React.useState(false);
  const [hasTintRight, setHasTintRight] = React.useState(false);

  const updateTint = React.useMemo(
    () =>
      throttle((scrollElement: HTMLElement) => {
        setHasTintTop(scrollElement.scrollTop > 0);
        setHasTintBottom(
          scrollElement.scrollHeight - scrollElement.clientHeight - scrollElement.scrollTop > 0,
        );
        setHasTintLeft(scrollElement.scrollLeft > 0);
        setHasTintRight(
          scrollElement.scrollWidth - scrollElement.clientWidth - scrollElement.scrollLeft > 0,
        );
      }, 50),
    [],
  );

  React.useEffect(() => {
    if (!scrollRef.current) {
      return;
    }

    updateTint(scrollRef.current);
  }, [updateTint]);

  const onScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    updateTint(target);
  };

  const baseStyle: CSSCustomProperties | undefined = tintColor
    ? { '--vkui_internal--CustomScrollView_tint_color': tintColor }
    : undefined;

  useResizeObserver(scrollRef, updateTint);

  return (
    <RootComponent baseClassName={styles.host} baseStyle={baseStyle} {...restProps}>
      {children({ getRootRef: scrollRef, onScroll })}
      {hasTintTop && <div className={classNames(styles.tint, styles.tintTop)} />}
      {hasTintBottom && <div className={classNames(styles.tint, styles.tintBottom)} />}
      {hasTintLeft && <div className={classNames(styles.tint, styles.tintLeft)} />}
      {hasTintRight && <div className={classNames(styles.tint, styles.tintRight)} />}
    </RootComponent>
  );
}
