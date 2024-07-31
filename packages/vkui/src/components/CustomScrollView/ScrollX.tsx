import { classNames } from '@vkontakte/vkjs';
import { useIsomorphicLayoutEffect } from '../../lib/useIsomorphicLayoutEffect';
import { stopPropagation } from '../../lib/utils';
import { ScrollProps } from './types';
import { useDragAndDrop } from './useDragAndDrop';
import { useHorizontalScrollController } from './useHorizontalScrollController';
import styles from './CustomScrollView.module.css';

export const ScrollX = ({
  bar: barX,
  barHandlers,
  boxRef,
  autoHideScrollbar,
  autoHideScrollbarDelay,
}: ScrollProps) => {
  const {
    trackerVisible: horizontalTrackerVisible,
    trackerRef: trackerX,
    onResize: horizontalScrollResize,
    onScroll: horizontalScroll,
    onDragStart: onHorizontalDragStart,
    onMove: onHorizontalMove,
    onUp: onHorizontalUp,
    onTrackerMouseEnter: onHorizontalTrackerMouseEnter,
    onTrackerMouseLeave: onHorizontalTrackerMouseLeave,
  } = useHorizontalScrollController(boxRef, autoHideScrollbar, autoHideScrollbarDelay);

  const { onDragStart: onMouseDown } = useDragAndDrop(
    onHorizontalDragStart,
    onHorizontalMove,
    onHorizontalUp,
  );

  useIsomorphicLayoutEffect(() => {
    barHandlers.current.onResize = horizontalScrollResize;
    barHandlers.current.onScroll = horizontalScroll;
  }, [horizontalScrollResize, horizontalScroll, barHandlers]);

  return (
    <div className={styles['CustomScrollView__barX']} ref={barX} onClick={stopPropagation}>
      <div
        className={classNames(
          styles['CustomScrollView__trackerX'],
          !horizontalTrackerVisible && styles['CustomScrollView__trackerX--hidden'],
        )}
        onMouseEnter={autoHideScrollbar ? onHorizontalTrackerMouseEnter : undefined}
        onMouseLeave={autoHideScrollbar ? onHorizontalTrackerMouseLeave : undefined}
        ref={trackerX}
        onMouseDown={onMouseDown}
      />
    </div>
  );
};
