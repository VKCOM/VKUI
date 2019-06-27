/**
 * Получает кординату по оси абсцисс из touch- или mouse-события
 *
 * @param e Бразуерное событие
 * @returns Координата взаимодействия по оси абсцисс
 */
const coordX = (e: MouseEvent | TouchEvent): number => ('clientX' in e ? e.clientX : e.touches && e.touches[0].clientX);

/**
 * Получает кординату по оси ординат из touch- или mouse-события
 *
 * @param e Бразуерное событие
 * @returns Координата взаимодействия по оси ординат
 */
const coordY = (e: MouseEvent | TouchEvent): number => ('clientY' in e ? e.clientY : e.touches && e.touches[0].clientY);

const isClient = typeof window !== 'undefined';
const touchEnabled = isClient && 'ontouchstart' in window;

/**
 * Возвращает массив поддерживаемых событий
 * Если браузер поддерживает pointer events или подключена handjs, вернет события указателя.
 * Если нет, используем события мыши
 *
 * @returns Массив с названиями событий
 */
function getSupportedEvents (): string[] {
  if (touchEnabled) {
    return ['touchstart', 'touchmove', 'touchend', 'touchcancel'];
  }

  return ['mousedown', 'mousemove', 'mouseup', 'mouseleave'];
}

export { getSupportedEvents, coordX, coordY, touchEnabled };
