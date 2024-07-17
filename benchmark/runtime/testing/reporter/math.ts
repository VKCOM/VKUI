/**
 * @file Реализация функций
 *  - getMedian()
 *  - getMean()
 *  - getStdDev()
 *  - format()
 *  взята из https://github.com/mui/material-ui/blob/v5.15.20/benchmark/browser/scripts/benchmark.js.
 *
 *  Изменения:
 *  - Добавлены небольшие изменения, вызванные TypeScript.
 *  - У `getMedian()` исправил мутацию массива из аргумента.
 */

export function getMedian(valuesProp: number[]): number {
  const values = [...valuesProp].sort();
  const length = values.length;
  if (length % 2 === 0) {
    return (values[length / 2] + values[length / 2 - 1]) / 2;
  }
  return values[parseInt(`${length / 2}`, 10)];
}

export function getMean(values: number[]): number {
  const sum = values.reduce((acc, value) => acc + value, 0);
  return sum / values.length;
}

export function getStdDev(values: number[]): number {
  const mean = getMean(values);

  const squareDiffs = values.map((value) => {
    const diff = value - mean;
    return diff * diff;
  });

  return Math.sqrt(getMean(squareDiffs));
}

export function format(time: number): string | number {
  const x = Number(`${time}e2`);
  const i = Number(Number(`${Math.round(x)}e-2`).toFixed(2));
  return 10 / i > 1 ? `0${i}` : i;
}
