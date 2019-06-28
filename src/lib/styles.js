
/**
 * Задает стиль трансформации элементу с учетом префиксов
 *
 * @param {Element} element
 * @param {string} transform
 */
export function setTransformStyle (element, transform) {
  element.style.transform = transform;
  element.style.WebkitTransform = transform;
}
