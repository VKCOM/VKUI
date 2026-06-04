import * as transform from './transform';

const svgPath = [
  ['M', [10, 20]],
  ['L', [30, 40]],
  ['Z', []],
] as const;

describe('transform.scale', () => {
  it('2,2', () => {
    expect(transform.scale(svgPath, 2, 2)).toStrictEqual([
      ['M', [20, 40]],
      ['L', [60, 80]],
      ['Z', []],
    ]);
  });

  it('1,1', () => {
    const result = transform.scale(svgPath, 1, 1);
    expect(result).toStrictEqual(svgPath);
    expect(result).not.toBe(svgPath);
  });
});

describe('transform.translate', () => {
  it('10,20', () => {
    expect(transform.translate(svgPath, 10, 20)).toStrictEqual([
      ['M', [20, 40]],
      ['L', [40, 60]],
      ['Z', []],
    ]);
  });

  it('0,0', () => {
    const result = transform.translate(svgPath, 0, 0);
    expect(result).toStrictEqual(svgPath);
    expect(result).not.toBe(svgPath);
  });
});

describe('transform.rotate', () => {
  it('10,20', () => {
    expect(transform.rotate(svgPath, 30, 30, 180)).toStrictEqual([
      ['M', [50, 40]],
      ['L', [30, 20]],
      ['Z', []],
    ]);
  });

  it('0,0', () => {
    const result = transform.rotate(svgPath, 10, 20, 0);
    expect(result).toStrictEqual(svgPath);
    expect(result).not.toBe(svgPath);
  });
});
