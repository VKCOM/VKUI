export const clamp = (value: number, min: number, max: number) => Math.max(min, Math.min(value, max));

export function precisionRound(number: number, precision = 1) {
  let factor = Math.pow(10, precision);
  return Math.round(number * factor) / factor;
}

export function rescale(value: number, from: [number, number], to: [number, number], options: { step?: number } = {}) {
  const res = clamp((value - from[0]) / (from[1] - from[0]) * (to[1] - to[0]) + to[0], ...to);

  const { step = 0 } = options;
  if (step > 0) {
    const stepFloatPart = `${step}`.split('.')[1] || '';
    return precisionRound(Math.round(res / step) * step, stepFloatPart.length);
  }

  return res;
}
