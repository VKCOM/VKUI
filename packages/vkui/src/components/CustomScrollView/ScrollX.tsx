import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { stopPropagation } from '../../lib/utils';
import type { ScrollProps } from './types';
import { useDragAndDrop } from './useDragAndDrop';
import { useHorizontalScrollController } from './useHorizontalScrollController';
import styles from './CustomScrollView.module.css';

export const ScrollX = ({
  barHandlers,
  boxRef,
  autoHideScrollbar,
  autoHideScrollbarDelay,
}: ScrollProps) => {
  const {
    barRef: barX,
    trackerVisible: horizontalTrackerVisible,
    trackerRef: trackerX,
    resize: horizontalScrollResize,
    scroll: horizontalScroll,
    dragStart: onHorizontalDragStart,
    dragging: onHorizontalDragging,
    dragEnd: onHorizontalDragEnd,
    trackerMouseEnter: onHorizontalTrackerMouseEnter,
    trackerMouseLeave: onHorizontalTrackerMouseLeave,
  } = useHorizontalScrollController(boxRef, autoHideScrollbar, autoHideScrollbarDelay);

  const { onDragStart: onMouseDown } = useDragAndDrop(
    onHorizontalDragStart,
    onHorizontalDragging,
    onHorizontalDragEnd,
  );

  React.useImperativeHandle(
    barHandlers,
    () => ({
      resize: horizontalScrollResize,
      scroll: horizontalScroll,
    }),
    [horizontalScrollResize, horizontalScroll],
  );

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
