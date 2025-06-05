import { canUseDOM } from '../dom';

export interface VKUITouchEvent extends MouseEvent, TouchEvent {}
export type VKUITouchEventHandler = (e: VKUITouchEvent) => void;

/*
 * Получает координату по оси абсцисс из touch- или mouse-события
 */
export const coordX = (event: MouseEvent | TouchEvent): number => {
  if ('clientX' in event) {
    return event.clientX;
  }
  return event.changedTouches && event.changedTouches[0].clientX;
};

/*
 * Получает координату по оси ординат из touch- или mouse-события
 */
export const coordY = (event: MouseEvent | TouchEvent): number => {
  if ('clientY' in event) {
    return event.clientY;
  }
  return event.changedTouches && event.changedTouches[0].clientY;
};

// eslint-disable-next-line no-restricted-globals
export const touchEnabled = (): boolean => canUseDOM && 'ontouchstart' in window;
