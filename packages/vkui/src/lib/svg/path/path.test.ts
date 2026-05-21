import * as path from './path';

const svgPath = [
  ['M', [10, 20]],
  ['L', [30, 40]],
  ['Z', []],
] as const;

it('path.copySVGPath', () => {
  const result = path.copySVGPath(svgPath);
  expect(result).toStrictEqual(svgPath);
  expect(result).not.toBe(svgPath);
});

it('path.svgPathToString', () => {
  const result = path.svgPathToString(svgPath);
  expect(result).toBe('M10.0000,20.0000L30.0000,40.0000Z');
});
