/**
 * @param {object} palette палитра цветов
 * @param {string} colorId идентификатор цвета из палитры
 * @return {string} color цвет в браузерном представлении
 */
function resolveColor (palette, colorId) {
  const color = palette[colorId];

  if (color.indexOf('#') === 0 && color.length === 9) { // ahex
    return ahex2rgba(color.replace('#', ''));
  }
  return color;
}

/**
 * @param {string} ahex цвет в формате ahex: #00ffffff
 * @return {string} цвет в формате rgba
 */
function ahex2rgba (ahex) {
  const opacity = parseInt(ahex.slice(0, 2), 16) / 255;
  const colorHex = ahex.slice(2);
  return opacify(colorHex, opacity);
}

/**
 * @param hex цвет в формате hex: #ffffff
 * @param opacity прозрачность в диапазоне [0, 1]
 * @return {string} цвет в формате rgba
 */
function opacify (hex, opacity) {
  return `rgba(${parseInt(hex.slice(0, 2), 16)}, ${parseInt(hex.slice(2, 4), 16)}, ${parseInt(hex.slice(4), 16)}, ${opacity.toFixed(2)})`;
}

module.exports = {
  resolveColor
};
