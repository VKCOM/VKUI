/**
 * ease function
 * @param x absolute progress of the animation in bounds 0 (beginning) and 1 (end)
 */
export function easeInOutSine(x: number): number {
  return 0.5 * (1 - Math.cos(Math.PI * x));
}

/**
 * JS-реализация cubic bezier
 *
 * Алгебраический метод решения взят из PRа {@link https://github.com/gre/bezier-easing/pull/57}
 */
export function cubicBezier(mX1: number, mY1: number, mX2: number, mY2: number) {
  if (!(0 <= mX1 && mX1 <= 1 && 0 <= mX2 && mX2 <= 1)) {
    throw new Error('Bezier x values must be in [0, 1] range');
  }

  if (mX1 === mY1 && mX2 === mY2) {
    return LinearEasing;
  }

  const a = 6 * (3 * mX1 - 3 * mX2 + 1);
  const b = 6 * (mX2 - 2 * mX1);
  const c = 3 * mX1;
  const a2 = a * a;
  const b2 = b * b;
  const d = b / a;
  const e = (3 * b * c) / a2 - (b2 * b) / (a2 * a);
  const w1 = (2 * c) / a - b2 / a2;
  const w = w1 * w1 * w1;
  const o = 3 / a;
  const ay = 3 * mY1 - 3 * mY2 + 1;
  const by = mY2 - 2 * mY1;
  const cy = 3 * mY1;

  const funcX2T = a ? x2t : LinearEasing;

  return (x: number) => {
    if (x === 0 || x === 1) {
      return x;
    }
    return funcY(funcX2T(x, e, o, w, d), ay, by, cy);
  };
}

function LinearEasing(x: number) {
  return x;
}

function x2t(x: number, a: number, b: number, c: number, d: number) {
  const q = a + b * x;
  const s = q ** 2 + c;
  if (s > 0) {
    const root = Math.sqrt(s);
    return Math.cbrt(q + root) + Math.cbrt(q - root) - d;
  }
  const l = Math.cbrt(Math.sqrt(q * q - s));
  const angle = q ? Math.atan(Math.sqrt(-s) / q) : -Math.PI / 2;
  let φ;
  if (b < 0) {
    φ = (q > 0 ? 2 * Math.PI : Math.PI) - angle;
  } else if (d < 0) {
    φ = (q > 0 ? 2 * Math.PI : -3 * Math.PI) + angle;
  } else {
    φ = (q > 0 ? 0 : Math.PI) + angle;
  }
  return 2 * l * Math.cos(φ / 3) - d;
}

function funcY(t: number, ay: number, by: number, cy: number) {
  return ((ay * t + 3 * by) * t + cy) * t;
}
