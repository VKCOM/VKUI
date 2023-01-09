export const clamp = (value: number, min: number, max: number) =>
  Math.max(min, Math.min(value, max));

export function precisionRound(number: number, precision = 1) {
  let factor = Math.pow(10, precision);
  return Math.round(number * factor) / factor;
}

function precision(number: number) {
  return (`${number}`.split('.')[1] || '').length;
}

function decimatedClamp(val: number, min: number, max: number, step?: number) {
  if (step == null || step <= 0) {
    return clamp(val, min, max);
  }
  const prec = precision(step);
  // Round value to nearest min + k1 * step
  const decimatedOffset = precisionRound(Math.round((val - min) / step) * step, prec);
  // Round range length _down_ to nearest min + k2 * step
  const decimatedRange = precisionRound(Math.floor((max - min) / step) * step, prec);
  return min + clamp(decimatedOffset, 0, decimatedRange);
}

export function rescale(
  value: number,
  from: [number, number],
  to: [number, number],
  options: { step?: number } = {},
) {
  const scaled = ((value - from[0]) / (from[1] - from[0])) * (to[1] - to[0]) + to[0];
  return decimatedClamp(scaled, to[0], to[1], options.step);
}
