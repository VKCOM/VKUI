export const clamp = (value: number, min: number, max: number) =>
  Math.max(min, Math.min(value, max));

export function precisionRound(number: number, precision = 1) {
  let factor = Math.pow(10, precision);
  return Math.round(number * factor) / factor;
}

/**
 * Решение скопировано без изменений у MUI:
 * https://github.com/mui/material-ui/blob/v5.13.7/packages/mui-base/src/useSlider/useSlider.ts#L89-L105
 */
function getDecimalPrecision(num: number) {
  // This handles the case when num is very small (0.00000001), js will turn this into 1e-8.
  // When num is bigger than 1 or less than -1 it won't get converted to this notation so it's fine.
  if (Math.abs(num) < 1) {
    const parts = num.toExponential().split('e-');
    const matissaDecimalPart = parts[0].split('.')[1];
    return (matissaDecimalPart ? matissaDecimalPart.length : 0) + parseInt(parts[1], 10);
  }

  const decimalPart = num.toString().split('.')[1];
  return decimalPart ? decimalPart.length : 0;
}

function roundValueToStep(value: number, step: number, min: number) {
  const nearest = Math.round((value - min) / step) * step + min;
  return Number(nearest.toFixed(getDecimalPrecision(step)));
}

function decimatedClamp(val: number, min: number, max: number, step?: number) {
  if (step == null || step <= 0) {
    return clamp(val, min, max);
  }
  const roundedValue = roundValueToStep(val, step, min);
  return clamp(roundedValue, min, max);
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
