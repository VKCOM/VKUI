/*
 * Задает стиль трансформации элементу с учетом префиксов
 */
export function setTransformStyle(element: HTMLElement, transform: string): void {
  element.style.transform = transform;
  element.style.webkitTransform = transform;
}
