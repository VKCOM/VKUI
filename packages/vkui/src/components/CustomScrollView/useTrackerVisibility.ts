import { useCallback, useRef, useState } from 'react';
import { useTimeout } from '../../hooks/useTimeout';

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
  const [trackerVisible, setTrackerVisible] = useState(!autoHideScrollbar);
  const isMouseOver = useRef(false);
  const isTrackerDragging = useRef(false);

  const { set: setVisibilityTimeout, clear: clearVisibilityTimeout } = useTimeout(
    () => setTrackerVisible(false),
    autoHideScrollbarDelay,
  );

  const onTrackerDragStart = useCallback(() => {
    clearVisibilityTimeout();
    setTrackerVisible(true);
    isTrackerDragging.current = true;
  }, [clearVisibilityTimeout]);

  const onTrackerDragStop = useCallback(() => {
    isTrackerDragging.current = false;
    if (!isMouseOver.current) {
      setVisibilityTimeout();
    }
  }, [setVisibilityTimeout, isMouseOver]);

  /**
   * Позволяет "запланировать" скрытие ползунка через delay миллисекунд. Если тайм-аут не успевает сработать, то каждый
   * последующий вызов функции откладывает скрытие ползунка на delay миллисекунд
   */
  const queueTrackerVisibility = useCallback(() => {
    if (isTrackerDragging.current) {
      return;
    }
    setTrackerVisible(true);
    setVisibilityTimeout();
  }, [setVisibilityTimeout]);

  const onTrackerMouseEnter = useCallback(() => {
    clearVisibilityTimeout();
    isMouseOver.current = true;
    setTrackerVisible(true);
  }, [clearVisibilityTimeout]);

  const onTrackerMouseLeave = useCallback(() => {
    queueTrackerVisibility();
    isMouseOver.current = false;
  }, [queueTrackerVisibility]);

  const onTargetScroll = useCallback(() => {
    queueTrackerVisibility();
  }, [queueTrackerVisibility]);

  return {
    trackerVisible,
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
  onTargetScroll(this: void): void;
  /**
   * Функция для обработки начала drag event ползунка
   */
  onTrackerDragStart(this: void): void;
  /**
   * Функция для обработки окончания drag event ползунка
   */
  onTrackerDragStop(this: void): void;
  /**
   * Функция для обработки mouseLeave event ползунка
   */
  onTrackerMouseEnter(this: void): void;
  /**
   * Функция для обработки mouseEnter event ползунка
   */
  onTrackerMouseLeave(this: void): void;
}
