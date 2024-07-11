import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { useAdaptivity } from '../../hooks/useAdaptivity';
import { useEventListener } from '../../hooks/useEventListener';
import { useExternRef } from '../../hooks/useExternRef';
import { useDOM } from '../../lib/dom';
import { stopPropagation } from '../../lib/utils';
import type { HasRootRef } from '../../types';
import { useCustomScrollViewResize } from './useCustomScrollViewResize';
import { useDetectScrollDirection } from './useDetectScrollDirection';
import { useHorizontalScrollController } from './useHorizontalScrollController';
import { TrackerOptionsProps } from './useTrackerVisibility';
import { useVerticalScrollController } from './useVerticalScrollController';
import styles from './CustomScrollView.module.css';

function hasPointerClassName(hasPointer: boolean | undefined) {
  switch (hasPointer) {
    case true:
      return styles['CustomScrollView--hasPointer-true'];
    case false:
      return styles['CustomScrollView--hasPointer-false'];
    case undefined:
    default:
      return styles['CustomScrollView--hasPointer-none'];
  }
}

const overscrollBehaviorClassNames = {
  auto: undefined,
  contain: styles['CustomScrollView__box--overscrollBehavior-contain'],
  none: styles['CustomScrollView__box--overscrollBehavior-none'],
};

export interface CustomScrollViewProps
  extends React.AllHTMLAttributes<HTMLDivElement>,
    HasRootRef<HTMLDivElement>,
    TrackerOptionsProps {
  windowResize?: boolean;
  boxRef?: React.Ref<HTMLDivElement>;
  className?: HTMLDivElement['className'];
  onScroll?: (event: React.UIEvent<HTMLDivElement>) => void;
  children: React.ReactNode;
  /**
   * Поведение overscroll, подробнее можно почитать в [документации](https://developer.mozilla.org/en-US/docs/Web/CSS/overscroll-behavior)
   */
  overscrollBehavior?: 'auto' | 'contain' | 'none';
  /**
   * Включение замены горизонтального скролла
   */
  enableHorizontalScroll?: boolean;
}

export const CustomScrollView = ({
  className,
  children,
  boxRef: externalBoxRef,
  windowResize,
  autoHideScrollbar = false,
  autoHideScrollbarDelay,
  enableHorizontalScroll = false,
  onScroll: onScrollProp,
  getRootRef,
  overscrollBehavior = 'auto',
  ...restProps
}: CustomScrollViewProps): React.ReactNode => {
  const { document } = useDOM();
  const { hasPointer } = useAdaptivity();
  const [pressedBar, setPressedBar] = React.useState<'vertical' | 'horizontal' | null>(null);

  const boxRef = useExternRef(externalBoxRef);
  const boxContentRef = React.useRef<HTMLDivElement>(null);

  const {
    trackerVisible: verticalTrackerVisible,
    barRef: barY,
    trackerRef: trackerY,
    onResize: verticalScrollResize,
    onScroll: verticalScroll,
    onDragStart: onVerticalDragStart,
    onMove: onVerticalMove,
    onUp: onVerticalUp,
    onTrackerMouseEnter: onVerticalTrackerMouseEnter,
    onTrackerMouseLeave: onVerticalTrackerMouseLeave,
  } = useVerticalScrollController(boxRef, autoHideScrollbar, autoHideScrollbarDelay);

  const {
    trackerVisible: horizontalTrackerVisible,
    barRef: barX,
    trackerRef: trackerX,
    onResize: horizontalScrollResize,
    onScroll: horizontalScroll,
    onDragStart: onHorizontalDragStart,
    onMove: onHorizontalMove,
    onUp: onHorizontalUp,
    onTrackerMouseEnter: onHorizontalTrackerMouseEnter,
    onTrackerMouseLeave: onHorizontalTrackerMouseLeave,
  } = useHorizontalScrollController(boxRef, autoHideScrollbar, autoHideScrollbarDelay);

  const scrollDirection = useDetectScrollDirection(boxRef);

  useCustomScrollViewResize({
    windowResize,
    boxContentRef,
    onResize: () => {
      verticalScrollResize();
      horizontalScrollResize();
    },
  });

  const onUp = (e: MouseEvent) => {
    if (!pressedBar) {
      return;
    }
    e.preventDefault();
    if (pressedBar === 'vertical') {
      onVerticalUp();
    } else {
      onHorizontalUp();
    }
    setPressedBar(null);
    unsubscribe();
  };

  const onMove = (e: MouseEvent) => {
    if (!pressedBar) {
      return;
    }
    e.preventDefault();
    if (pressedBar === 'vertical') {
      onVerticalMove(e);
    } else {
      onHorizontalMove(e);
    }
  };

  const onScroll = (event: React.UIEvent<HTMLDivElement>) => {
    if (!scrollDirection) {
      return;
    }
    if (scrollDirection === 'horizontal') {
      horizontalScroll();
    } else {
      verticalScroll();
    }
    onScrollProp?.(event);
  };

  const listeners = [useEventListener('mousemove', onMove), useEventListener('mouseup', onUp)];

  function subscribe(el: Document | undefined) {
    if (el) {
      listeners.forEach((l) => l.add(el));
    }
  }

  function unsubscribe() {
    listeners.forEach((l) => l.remove());
  }

  const onDragStart = (e: React.MouseEvent, isVertical: boolean) => {
    e.preventDefault();
    setPressedBar(isVertical ? 'vertical' : 'horizontal');
    if (isVertical) {
      onVerticalDragStart(e);
    } else {
      onHorizontalDragStart(e);
    }

    subscribe(document);
  };

  return (
    <div
      className={classNames(className, styles['CustomScrollView'], hasPointerClassName(hasPointer))}
      ref={getRootRef}
      {...restProps}
    >
      <div
        className={classNames(
          styles['CustomScrollView__box'],
          enableHorizontalScroll && styles['CustomScrollView__box--horizontalEnabled'],
          overscrollBehaviorClassNames[overscrollBehavior],
        )}
        tabIndex={-1}
        ref={boxRef}
        onScroll={onScroll}
      >
        <div ref={boxContentRef} className={styles['CustomScrollView__box-content']}>
          {children}
        </div>
      </div>

      <div className={styles['CustomScrollView__barY']} ref={barY} onClick={stopPropagation}>
        <div
          className={classNames(
            styles['CustomScrollView__trackerY'],
            !verticalTrackerVisible && styles['CustomScrollView__trackerY--hidden'],
          )}
          onMouseEnter={autoHideScrollbar ? onVerticalTrackerMouseEnter : undefined}
          onMouseLeave={autoHideScrollbar ? onVerticalTrackerMouseLeave : undefined}
          ref={trackerY}
          onMouseDown={(e) => onDragStart(e, true)}
        />
      </div>
      {enableHorizontalScroll && (
        <div className={styles['CustomScrollView__barX']} ref={barX} onClick={stopPropagation}>
          <div
            className={classNames(
              styles['CustomScrollView__trackerX'],
              !horizontalTrackerVisible && styles['CustomScrollView__trackerX--hidden'],
            )}
            onMouseEnter={autoHideScrollbar ? onHorizontalTrackerMouseEnter : undefined}
            onMouseLeave={autoHideScrollbar ? onHorizontalTrackerMouseLeave : undefined}
            ref={trackerX}
            onMouseDown={(e) => onDragStart(e, false)}
          />
        </div>
      )}
    </div>
  );
};
