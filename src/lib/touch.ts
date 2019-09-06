export interface VKUITouchEvent extends MouseEvent, TouchEvent {}

/**
 * Получает кординату по оси абсцисс из touch- или mouse-события
 *
 * @param e Браузерное событие
 * @returns Координата взаимодействия по оси абсцисс
 */
const coordX = (e: VKUITouchEvent): number => e.clientX || (e.touches && e.touches[0].clientX);

/**
 * Получает кординату по оси ординат из touch- или mouse-события
 *
 * @param e Браузерное событие
 * @returns Координата взаимодействия по оси ординат
 */
const coordY = (e: VKUITouchEvent): number => e.clientY || (e.touches && e.touches[0].clientY);

const isClient: boolean = typeof window !== 'undefined';
const touchEnabled: boolean = isClient && 'ontouchstart' in window;

/**
 * Возвращает массив поддерживаемых событий
 * Если браузер поддерживает pointer events или подключена handjs, вернет события указателя.
 * Если нет, используем события мыши
 */
function getSupportedEvents(): Array<string> {
  if (touchEnabled) {
    return ['touchstart', 'touchmove', 'touchend', 'touchcancel'];
  }

  return ['mousedown', 'mousemove', 'mouseup', 'mouseleave'];
}

/**
 * Рассчитывает "сопротивление" для iOS тач-событий
 */
function rubber(offset: number, dimension: number, resistanceRate: number, isAndroid: boolean): number {
  if (isAndroid || offset < 0) return offset;

  const result = (resistanceRate * Math.abs(offset) * dimension) / (dimension + resistanceRate * Math.abs(offset));
  return offset < 0 ? -result : result;
}

export { getSupportedEvents, coordX, coordY, touchEnabled, rubber };
