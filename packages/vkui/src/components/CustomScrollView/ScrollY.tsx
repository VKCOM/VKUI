import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { stopPropagation } from '../../lib/utils';
import type { ScrollProps } from './types';
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

  React.useImperativeHandle(
    barHandlers,
    () => ({
      resize: verticalScrollResize,
      scroll: verticalScroll,
    }),
    [verticalScrollResize, verticalScroll],
  );

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
