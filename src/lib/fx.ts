/**
 * ease function
 * @param x absolute progress of the animation in bounds 0 (beginning) and 1 (end)
 */
export function easeInOutSine(x: number) {
  return 0.5 * (1 - Math.cos(Math.PI * x));
}
