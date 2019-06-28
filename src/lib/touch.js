
/**
 * Получает кординату по оси абсцисс из touch- или mouse-события
 *
 * @param {Object} e Браузерное событие
 * @returns {Number} Координата взаимодействия по оси абсцисс
 */
const coordX = e => e.clientX || (e.touches && e.touches[0].clientX);

/**
 * Получает кординату по оси ординат из touch- или mouse-события
 *
 * @param {Object} e Браузерное событие
 * @returns {Number} Координата взаимодействия по оси ординат
 */
const coordY = e => e.clientY || (e.touches && e.touches[0].clientY);

const isClient = typeof window !== 'undefined';
const touchEnabled = isClient && 'ontouchstart' in window;

/**
 * Возвращает массив поддерживаемых событий
 * Если браузер поддерживает pointer events или подключена handjs, вернет события указателя.
 * Если нет, используем события мыши
 *
 * @returns {Array} Массив с названиями событий
 */
function getSupportedEvents () {
  if (touchEnabled) {
    return ['touchstart', 'touchmove', 'touchend', 'touchcancel'];
  }

  return ['mousedown', 'mousemove', 'mouseup', 'mouseleave'];
}

export { getSupportedEvents, coordX, coordY, touchEnabled };

/**
 * Рассчитывает "сопротивление" для iOS тач-событий
 *
 * @param {number} offset
 * @param {number} dimension
 * @param {number} resistanceRate
 * @param {boolean} isAndroid
 */
export function rubber (offset, dimension, resistanceRate, isAndroid) {
  if (isAndroid || offset < 0) return offset;

  const result = (resistanceRate * Math.abs(offset) * dimension) / (dimension + resistanceRate * Math.abs(offset));
  return offset < 0 ? -result : result;
}
