'use client';

import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { clamp } from '../../helpers/math';
import { usePlatform } from '../../hooks/usePlatform';
import { useStateWithPrev } from '../../hooks/useStateWithPrev';
import { type DOMProps, initializeBrowserGesturePreventionEffect, useDOM } from '../../lib/dom';
import { useIsomorphicLayoutEffect } from '../../lib/useIsomorphicLayoutEffect';
import type { AnyFunction, HasChildren } from '../../types';
import { type ScrollContextInterface, useScroll } from '../AppRoot/ScrollContext';
import { FixedLayout } from '../FixedLayout/FixedLayout';
import { type CustomTouchEvent, Touch, type TouchProps } from '../Touch/Touch';
import TouchRootContext from '../Touch/TouchContext';
import { PullToRefreshSpinner } from './PullToRefreshSpinner';
import styles from './PullToRefresh.module.css';

const WAIT_FETCHING_TIMEOUT_MS = 1000;

function cancelEvent(event: CustomTouchEvent) {
  /* istanbul ignore if: неясно в какой ситуации `event` из `Touch` может быть не определён */
  if (!event) {
    return false;
  }
  if ('preventDefault' in event.originalEvent && event.originalEvent.cancelable) {
    event.originalEvent.preventDefault();
  }
  if ('stopPropagation' in event.originalEvent) {
    event.originalEvent.stopPropagation();
  }
  return false;
}

export interface PullToRefreshProps extends DOMProps, TouchProps, HasChildren {
  /**
   * Будет вызвана для обновления контента (прим.: функция должна быть мемоизированным коллбэком)
   */
  onRefresh: AnyFunction;
  /**
   * Определяет, выполняется ли обновление. Для скрытия спиннера после получения контента необходимо передать `false`
   */
  isFetching?: boolean;
  /** @ignore */
  scroll?: ScrollContextInterface;
}

/**
 * @see https://vkcom.github.io/VKUI/#/PullToRefresh
 */
export const PullToRefresh = ({
  children,
  isFetching,
  onRefresh,
  className,
  ...restProps
}: PullToRefreshProps): React.ReactNode => {
  const platform = usePlatform();
  const scroll = useScroll();
  const { window } = useDOM();

  const prevIsFetchingRef = React.useRef<boolean | undefined>(undefined);
  React.useEffect(() => {
    prevIsFetchingRef.current = isFetching;
  });

  const initParams = React.useMemo(
    () => ({
      start: platform === 'ios' ? -10 : -45,
      max: platform === 'ios' ? 50 : 80,
      maxY: platform === 'ios' ? 400 : 80,
      refreshing: platform === 'ios' ? 36 : 50,
      positionMultiplier: platform === 'ios' ? 0.21 : 1,
    }),
    [platform],
  );

  const [spinnerY, setSpinnerY] = React.useState(initParams.start);
  const [watching, setWatching] = React.useState(false);
  const [refreshing, setRefreshing] = React.useState(false);
  const [canRefresh, setCanRefresh] = React.useState(false);
  const [[touchDown, prevTouchDown], setTouchDown] = useStateWithPrev(false);

  const touchY = React.useRef(0);
  const [contentShift, setContentShift] = React.useState(0);
  const [spinnerProgress, setSpinnerProgress] = React.useState(0);

  const resetRefreshingState = React.useCallback(() => {
    setWatching(false);
    setCanRefresh(false);
    setRefreshing(false);
    setSpinnerY(initParams.start);
    setSpinnerProgress(0);
    setContentShift(0);
  }, [initParams]);

  const onRefreshingFinish = React.useCallback(() => {
    if (!touchDown) {
      resetRefreshingState();
    }
  }, [touchDown, resetRefreshingState]);

  const waitFetchingTimeoutId = React.useRef<ReturnType<typeof setTimeout>>(undefined);

  useIsomorphicLayoutEffect(() => {
    const prevIsFetching = prevIsFetchingRef.current;
    if (prevIsFetching !== undefined && prevIsFetching && !isFetching) {
      onRefreshingFinish();
    }
  }, [isFetching, onRefreshingFinish]);

  useIsomorphicLayoutEffect(() => {
    const prevIsFetching = prevIsFetchingRef.current;
    if (prevIsFetching !== undefined && !prevIsFetching && isFetching) {
      clearTimeout(waitFetchingTimeoutId.current);
    }
  }, [isFetching]);

  const runRefreshing = React.useCallback(() => {
    if (!refreshing && onRefresh) {
      // cleanup if the consumer does not start fetching in 1s
      clearTimeout(waitFetchingTimeoutId.current);
      waitFetchingTimeoutId.current = setTimeout(onRefreshingFinish, WAIT_FETCHING_TIMEOUT_MS);

      setRefreshing(true);
      setSpinnerY((prevSpinnerY) => (platform === 'ios' ? prevSpinnerY : initParams.refreshing));

      onRefresh();
    }
  }, [refreshing, onRefresh, onRefreshingFinish, platform, initParams.refreshing]);

  useIsomorphicLayoutEffect(() => {
    if (prevTouchDown !== undefined && prevTouchDown && !touchDown) {
      if (!refreshing && canRefresh) {
        runRefreshing();
      } else if (refreshing && !isFetching) {
        // only iOS can start refresh before gesture end
        resetRefreshingState();
        /* istanbul ignore if: TODO написать тест */
      } else {
        // refreshing && isFetching: refresh in progress
        // OR !refreshing && !canRefresh: pull was not strong enough
        setSpinnerY(refreshing ? initParams.refreshing : initParams.start);
        setSpinnerProgress(0);
        setContentShift(0);
      }
    }
  }, [
    initParams,
    isFetching,
    onRefreshingFinish,
    prevTouchDown,
    touchDown,
    refreshing,
    canRefresh,
    runRefreshing,
  ]);

  useIsomorphicLayoutEffect(
    function toggleDocumentOverscrollBehavior() {
      return window && (watching || refreshing)
        ? initializeBrowserGesturePreventionEffect(window)
        : undefined;
    },
    [window, watching, refreshing],
  );

  const startYRef = React.useRef(0);

  const onTouchStart = (event: CustomTouchEvent) => {
    if (refreshing) {
      cancelEvent(event);
      return;
    }
    setTouchDown(true);
    startYRef.current = event.startY;
  };

  const iosRefreshStartedRef = React.useRef(false);
  const onTouchMove = (event: CustomTouchEvent) => {
    const { isY, shiftY } = event;
    const { start, max } = initParams;
    const pageYOffset = scroll?.getScroll().y;

    if (watching && touchDown) {
      cancelEvent(event);

      const { positionMultiplier, maxY } = initParams;

      const shift = Math.max(0, shiftY - touchY.current);

      const currentY = clamp(start + shift * positionMultiplier, start, maxY);
      const progress = currentY > -10 ? Math.abs((currentY + 10) / max) * 80 : 0;

      setSpinnerY(currentY);
      setSpinnerProgress(clamp(progress, 0, 80));
      setCanRefresh(progress > 80);
      setContentShift((currentY + 10) * 2.3);

      const iosCanStartRefreshDuringGesture =
        platform === 'ios' && progress > 85 && !refreshing && !iosRefreshStartedRef.current;
      if (iosCanStartRefreshDuringGesture) {
        iosRefreshStartedRef.current = true;
        runRefreshing();
      }
    } else if (isY && pageYOffset === 0 && shiftY > 0 && !refreshing && touchDown) {
      cancelEvent(event);

      touchY.current = shiftY;
      setWatching(true);
      setSpinnerY(start);
      setSpinnerProgress(0);
    }
  };

  const onTouchEnd = () => {
    setWatching(false);
    setTouchDown(false);
    iosRefreshStartedRef.current = false;
  };

  const spinnerTransform = `translate3d(0, ${spinnerY}px, 0)`;
  let contentTransform = '';

  if (platform === 'ios' && refreshing && !touchDown) {
    contentTransform = 'translate3d(0, 100px, 0)';
  } else if (platform === 'ios' && (contentShift || refreshing)) {
    contentTransform = `translate3d(0, ${contentShift}px, 0)`;
  }

  return (
    <TouchRootContext.Provider value={true}>
      <Touch
        aria-live="polite"
        aria-busy={!!isFetching}
        {...restProps}
        onStart={onTouchStart}
        onMove={onTouchMove}
        onEnd={onTouchEnd}
        className={classNames(
          styles.host,
          platform === 'ios' && styles.ios,
          watching && styles.watching,
          refreshing && styles.refreshing,
          className,
        )}
      >
        <FixedLayout className={styles.controls} useParentWidth>
          <PullToRefreshSpinner
            style={{
              transform: spinnerTransform,
              opacity: watching || refreshing || canRefresh ? 1 : 0,
            }}
            on={refreshing}
            progress={refreshing ? undefined : spinnerProgress}
          />
        </FixedLayout>

        <div
          className={styles.content}
          style={{
            transform: contentTransform,
          }}
        >
          {children}
        </div>
      </Touch>
    </TouchRootContext.Provider>
  );
};
