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
  // Round decimated offset using rounded and * step.
  const decimatedOffset = Math.round((val - min) / step) * step;
  // Calculate decimated value with clamped offset.
  const decimatedValue = min + clamp(decimatedOffset, 0, max - min);
  return precisionRound(decimatedValue, precision(step));
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
