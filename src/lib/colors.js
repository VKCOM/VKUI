/**
 * Конвертирует цвет из палитры в валидный браузерный формат (hex или rgba)
 * @param {string} color
 * @return {string} цвет в браузерном представлении
 */
function decodeColor (color) {
  if (color.indexOf('#') === 0 && color.length === 9) { // ahex
    return ahex2rgba(color.replace('#', ''));
  }
  return color;
}

/**
 * Конвертирует ahex в rgba
 * @param {string} ahex цвет в формате ahex: #00ffffff
 * @return {string} цвет в формате rgba
 */
function ahex2rgba (ahex) {
  const opacity = parseInt(ahex.slice(0, 2), 16) / 255;
  const colorHex = ahex.slice(2);
  return opacify(colorHex, opacity);
}

/**
 * Добавляет hex цвету opacity и возвращает цвет в формате rgba
 * @param hex цвет в формате hex: #ffffff
 * @param opacity прозрачность в диапазоне [0, 1]
 * @return {string} цвет в формате rgba
 */
function opacify (hex, opacity) {
  return `rgba(${parseInt(hex.slice(0, 2), 16)}, ${parseInt(hex.slice(2, 4), 16)}, ${parseInt(hex.slice(4), 16)}, ${opacity.toFixed(2)})`;
}

module.exports = {
  decodeColor
};
