import { classNames } from '@vkontakte/vkjs';
import { useIsomorphicLayoutEffect } from '../../lib/useIsomorphicLayoutEffect';
import { stopPropagation } from '../../lib/utils';
import { ScrollProps } from './types';
import { useDragAndDrop } from './useDragAndDrop';
import { useVerticalScrollController } from './useVerticalScrollController';
import styles from './CustomScrollView.module.css';

export const ScrollY = ({
  barHandlers,
  boxRef,
  autoHideScrollbar,
  autoHideScrollbarDelay,
}: ScrollProps) => {
  const {
    barRef: barY,
    trackerVisible: verticalTrackerVisible,
    trackerRef: trackerY,
    resize: verticalScrollResize,
    scroll: verticalScroll,
    dragStart: onVerticalDragStart,
    dragging: onVerticalDragging,
    dragEnd: onVerticalDragEnd,
    trackerMouseEnter: onVerticalTrackerMouseEnter,
    trackerMouseLeave: onVerticalTrackerMouseLeave,
  } = useVerticalScrollController(boxRef, autoHideScrollbar, autoHideScrollbarDelay);

  const { onDragStart: onMouseDown } = useDragAndDrop(
    onVerticalDragStart,
    onVerticalDragging,
    onVerticalDragEnd,
  );

  useIsomorphicLayoutEffect(() => {
    barHandlers.current = {
      resize: verticalScrollResize,
      scroll: verticalScroll,
    };
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
