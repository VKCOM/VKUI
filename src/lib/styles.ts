/*
 * Задает стиль трансформации элементу с учетом префиксов
 */
export function setTransformStyle(
  element: HTMLElement | undefined | null,
  transform: string,
): void {
  if (element) {
    element.style.transform = transform;
    element.style.webkitTransform = transform;
  }
}
