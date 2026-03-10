import * as approximate from './approximate';

const svgPath = [
  ['M', [1, 2]],
  ['L', [3, 4]],
  ['C', [1, 1, 1, 1, 4, 4]],
  ['Z', []],
] as const;

describe('approximate.copySVGPath', () => {
  it('defaultOption', () => {
    const result = approximate.approximateRing(svgPath);
    expect(result).toStrictEqual([
      [1, 2],
      [3, 4],
      [3, 4],
      [4, 4],
    ]);
  });

  it('with maxSegmentLength', () => {
    const result = approximate.approximateRing(svgPath, { maxSegmentLength: 1 });
    expect(result).toStrictEqual([
      [1, 2],
      [3, 4],
      [3, 4],
      [4, 4],
    ]);
  });
});
