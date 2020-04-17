export interface VKUITouchEvent extends MouseEvent, TouchEvent {}
export type VKUITouchEventHander = (e: VKUITouchEvent) => void;

/*
 * Получает кординату по оси абсцисс из touch- или mouse-события
 */
const coordX = (e: VKUITouchEvent): number => e.clientX || e.changedTouches && e.changedTouches[0].clientX;

/*
 * Получает кординату по оси ординат из touch- или mouse-события
 */
const coordY = (e: VKUITouchEvent): number => e.clientY || e.changedTouches && e.changedTouches[0].clientY;

const isClient: boolean = typeof window !== 'undefined';
const touchEnabled: boolean = isClient && 'ontouchstart' in window;

/*
 * Возвращает массив поддерживаемых событий
 * Если браузер поддерживает pointer events или подключена handjs, вернет события указателя.
 * Если нет, используем события мыши
 */
function getSupportedEvents(): string[] {
  if (touchEnabled) {
    return ['touchstart', 'touchmove', 'touchend', 'touchcancel'];
  }

  return ['mousedown', 'mousemove', 'mouseup', 'mouseleave'];
}

/*
 * Рассчитывает "сопротивление" для iOS тач-событий
 */
function rubber(offset: number, dimension: number, resistanceRate: number, isAndroid: boolean): number {
  if (isAndroid || offset < 0) {
    return offset;
  }

  const offsettedResistance = offset * resistanceRate;
  return offsettedResistance * dimension / (offsettedResistance + dimension);
}

export { getSupportedEvents, coordX, coordY, touchEnabled, rubber };
