/**
 *  Кубическая кривая Безье для одномерного пространства
 */
export function cubicBezierOneDimensional(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  t: number,
) {
  const cx = 3 * (p1 - p0);
  const bx = 3 * (p2 - p1) - cx;
  const ax = p3 - p0 - cx - bx;
  const x = ax * Math.pow(t, 3) + bx * Math.pow(t, 2) + cx * t + p0;
  return x;
}

/**
 * Кубическая кривая Безье для двумерного пространства
 */
export function cubicBezierTwoDimensional(
  x0: number,
  y0: number,
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  x3: number,
  y3: number,
  t: number,
): [number, number] {
  const x = cubicBezierOneDimensional(x0, x1, x2, x3, t);
  const y = cubicBezierOneDimensional(y0, y1, y2, y3, t);

  return [x, y];
}
