import { canUseDOM } from "./dom";

export interface VKUITouchEvent extends MouseEvent, TouchEvent {}
export type VKUITouchEventHandler = (e: VKUITouchEvent) => void;

/*
 * Получает координату по оси абсцисс из touch- или mouse-события
 */
const coordX = (e: VKUITouchEvent): number => {
  if (e.clientX != null) {
    return e.clientX;
  }
  return e.changedTouches && e.changedTouches[0].clientX;
};

/*
 * Получает координату по оси ординат из touch- или mouse-события
 */
const coordY = (e: VKUITouchEvent): number => {
  if (e.clientY != null) {
    return e.clientY;
  }
  return e.changedTouches && e.changedTouches[0].clientY;
};

// eslint-disable-next-line no-restricted-globals
const touchEnabled = () => canUseDOM && "ontouchstart" in window;

/*
 * Возвращает массив поддерживаемых событий
 * Если браузер поддерживает pointer events или подключена handjs, вернет события указателя.
 * Если нет, используем события мыши
 */
function getSupportedEvents(): string[] {
  if (touchEnabled()) {
    return ["touchstart", "touchmove", "touchend", "touchcancel"];
  }

  return ["mousedown", "mousemove", "mouseup", "mouseleave"];
}

/*
 * Рассчитывает "сопротивление" для iOS тач-событий
 */
function rubber(
  offset: number,
  dimension: number,
  resistanceRate: number,
  isAndroid: boolean
): number {
  if (isAndroid || offset < 0) {
    return offset;
  }

  const offsettedResistance = offset * resistanceRate;
  return (offsettedResistance * dimension) / (offsettedResistance + dimension);
}

export { getSupportedEvents, coordX, coordY, touchEnabled, rubber };
