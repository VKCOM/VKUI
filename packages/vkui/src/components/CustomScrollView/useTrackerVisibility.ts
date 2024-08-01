import * as React from 'react';
import type { TimeoutId } from '../../types';

/**
 * 'temporary-visible' – "планирует" скрытие ползунка через N миллисекунд. Если тайм-аут не успеет
 * сработать, то каждый последующий вызов функции будет откладывать скрытие ползунка.
 */
type VisibilityState = 'visible' | 'hidden' | 'temporary-visible';

/**
 * Хук, который позволяет управлять видимостью ползунка скроллбара.
 * @param autoHideScrollbar - скрывать ли ползунок скроллбара
 * @param autoHideScrollbarDelay - через какое кол-во миллисекунд ползунок скроллбара скрывается
 * @returns Объект, содержащий параметры, которые позволяют управлять видимостью ползунка
 */
export const useTrackerVisibility = (
  autoHideScrollbar = false,
  autoHideScrollbarDelay = 500,
): TrackerVisibilityProps => {
  const [visibility, setVisibility] = React.useState<VisibilityState>(
    autoHideScrollbar ? 'hidden' : 'visible',
  );
  const isMouseOver = React.useRef(false);
  const isTrackerDragging = React.useRef(false);

  React.useEffect(() => {
    setVisibility(autoHideScrollbar ? 'hidden' : 'visible');
  }, [autoHideScrollbar]);

  const onTrackerDragStart = React.useCallback(() => {
    isTrackerDragging.current = true;
    setVisibility('visible');
  }, []);

  const onTrackerDragStop = React.useCallback(() => {
    isTrackerDragging.current = false;
    if (!isMouseOver.current) {
      setVisibility('temporary-visible');
    }
  }, []);

  const onTrackerMouseEnter = React.useCallback(() => {
    isMouseOver.current = true;
    setVisibility('visible');
  }, []);

  const onTrackerMouseLeave = React.useCallback(() => {
    isMouseOver.current = false;
    if (!isTrackerDragging.current) {
      setVisibility('temporary-visible');
    }
  }, []);

  const onTargetScroll = React.useCallback(() => {
    if (isMouseOver.current || isTrackerDragging.current) {
      return;
    }
    setVisibility('temporary-visible');
  }, []);

  React.useEffect(
    function hideAfterDelay() {
      let timeoutId: TimeoutId = null;

      if (visibility === 'temporary-visible') {
        timeoutId = setTimeout(() => {
          setVisibility('hidden');
        }, autoHideScrollbarDelay);
      }

      return function clearHideAfterDelay() {
        if (timeoutId) {
          clearTimeout(timeoutId);
        }
      };
    },
    [visibility, autoHideScrollbarDelay],
  );

  return {
    trackerVisible: visibility !== 'hidden',
    onTrackerDragStart,
    onTrackerDragStop,
    onTrackerMouseEnter,
    onTrackerMouseLeave,
    onTargetScroll,
  };
};

export interface TrackerOptionsProps {
  /**
   * Скрывать ли ползунок скроллбара
   */
  autoHideScrollbar?: boolean;
  /**
   * Через какое кол-во миллисекунд ползунок скроллбара скрывается
   */
  autoHideScrollbarDelay?: number;
}

export interface TrackerVisibilityProps {
  /**
   * Отвечает за видимость ползунка
   */
  trackerVisible: boolean;
  /**
   * Функция для обработки события у блока со скроллом
   */
  onTargetScroll: (this: void) => void;
  /**
   * Функция для обработки начала drag event ползунка
   */
  onTrackerDragStart: (this: void) => void;
  /**
   * Функция для обработки окончания drag event ползунка
   */
  onTrackerDragStop: (this: void) => void;
  /**
   * Функция для обработки mouseLeave event ползунка
   */
  onTrackerMouseEnter: (this: void) => void;
  /**
   * Функция для обработки mouseEnter event ползунка
   */
  onTrackerMouseLeave: (this: void) => void;
}
