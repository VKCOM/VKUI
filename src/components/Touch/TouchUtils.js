
/**
 * Получает кординату по оси абсцисс из touch- или mouse-события
 *
 * @param {Object} e Бразуерное событие
 * @returns {Number} Координата взаимодействия по оси абсцисс
 */
const coordX = e => e.clientX || (e.touches && e.touches[0].clientX);

/**
 * Получает кординату по оси ординат из touch- или mouse-события
 *
 * @param {Object} e Бразуерное событие
 * @returns {Number} Координата взаимодействия по оси ординат
 */
const coordY = e => e.clientY || (e.touches && e.touches[0].clientY);

/**
 * Возвращает массив поддерживаемых событий
 * Если браузер поддерживает pointer events или подключена handjs, вернет события указателя.
 * Если нет, используем события мыши
 *
 * @returns {Array} Массив с названиями событий
 */
function getSupportedEvents () {
  const isClient = typeof window !== 'undefined';
  const touchEnabled = isClient && 'ontouchstart' in window;

  if (touchEnabled) {
    return ['onTouchStart', 'touchmove', 'touchend', 'touchcancel'];
  }

  return ['onMouseDown', 'mousemove', 'mouseup', 'mouseleave'];
}

export { getSupportedEvents, coordX, coordY };
