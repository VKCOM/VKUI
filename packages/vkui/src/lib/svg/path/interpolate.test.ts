import * as shapes from '../../material/shapes/shapes';
import * as interpolate from './interpolate';

describe('interpolate.interpolate', () => {
  it('default option', () => {
    const from = shapes.shape(shapes.ovalParams, 10);
    const to = shapes.shape(shapes.pillParams, 10);

    const fn = interpolate.interpolate(from, to);

    const result0 = fn(0);
    const resultHalf = fn(0.5);
    const result1 = fn(1);

    expect(result0).toStrictEqual(from);
    expect(result0).not.toBe(from);

    expect(result1).toStrictEqual(to);
    expect(result1).not.toBe(to);

    expect(resultHalf.length).toBeGreaterThan(0);
  });

  it('maxSegmentLength: 1', () => {
    const from = shapes.shape(shapes.ovalParams, 10);
    const to = shapes.shape(shapes.pillParams, 10);

    const fn = interpolate.interpolate(from, to, { maxSegmentLength: 1 });

    const result0 = fn(0);
    const resultHalf = fn(0.5);
    const result1 = fn(1);

    expect(result0).toStrictEqual(from);
    expect(result0).not.toBe(from);

    expect(result1).toStrictEqual(to);
    expect(result1).not.toBe(to);

    expect(resultHalf.length).toBeGreaterThan(0);
  });

  it('copy point', () => {
    const from = [
      ['M', [0, 0]],
      ['L', [0, 0]],
      ['L', [0, 0]],
    ] as const;
    const to = [
      ['M', [0, 0]],
      ['L', [0, 0]],
    ] as const;

    const fn = interpolate.interpolate(from, to, { maxSegmentLength: 1 });

    const result0 = fn(0);
    const resultHalf = fn(0.5);
    const result1 = fn(1);

    expect(result0).toStrictEqual(from);
    expect(result0).not.toBe(from);

    expect(result1).toStrictEqual(to);
    expect(result1).not.toBe(to);

    expect(resultHalf.length).toBeGreaterThan(0);
  });
});
