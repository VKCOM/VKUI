import { classNames } from '@vkontakte/vkjs';
import { useIsomorphicLayoutEffect } from '../../lib/useIsomorphicLayoutEffect';
import { stopPropagation } from '../../lib/utils';
import { ScrollProps } from './types';
import { useDragAndDrop } from './useDragAndDrop';
import { useVerticalScrollController } from './useVerticalScrollController';
import styles from './CustomScrollView.module.css';

export const ScrollY = ({
  bar: barY,
  barHandlers,
  boxRef,
  autoHideScrollbar,
  autoHideScrollbarDelay,
}: ScrollProps) => {
  const {
    trackerVisible: verticalTrackerVisible,
    trackerRef: trackerY,
    onResize: verticalScrollResize,
    onScroll: verticalScroll,
    onDragStart: onVerticalDragStart,
    onMove: onVerticalMove,
    onUp: onVerticalUp,
    onTrackerMouseEnter: onVerticalTrackerMouseEnter,
    onTrackerMouseLeave: onVerticalTrackerMouseLeave,
  } = useVerticalScrollController(boxRef, autoHideScrollbar, autoHideScrollbarDelay);

  const { onDragStart: onMouseDown } = useDragAndDrop(
    onVerticalDragStart,
    onVerticalMove,
    onVerticalUp,
  );

  useIsomorphicLayoutEffect(() => {
    barHandlers.current.onResize = verticalScrollResize;
    barHandlers.current.onScroll = verticalScroll;
  }, [verticalScrollResize, verticalScroll, barHandlers]);

  return (
    <div className={styles['CustomScrollView__barY']} ref={barY} onClick={stopPropagation}>
      <div
        className={classNames(
          styles['CustomScrollView__trackerY'],
          !verticalTrackerVisible && styles['CustomScrollView__trackerY--hidden'],
        )}
        onMouseEnter={autoHideScrollbar ? onVerticalTrackerMouseEnter : undefined}
        onMouseLeave={autoHideScrollbar ? onVerticalTrackerMouseLeave : undefined}
        ref={trackerY}
        onMouseDown={onMouseDown}
      />
    </div>
  );
};
