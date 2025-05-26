import { type DeepReadonly } from '../../../types';
import * as array from '../../array';
import { distancePoint } from '../../math';
import { approximateRing, type MaxSegmentLengthOptions } from './approximate';
import { copySVGPath, type DrawtoCommandSupport, type SVGPathSupport } from './path';
import { type Point, type Points } from './point';

function pointAlong([x1, y1]: Readonly<Point>, [x2, y2]: Readonly<Point>, progress: number): Point {
  return [x1 + (x2 - x1) * progress, y1 + (y2 - y1) * progress];
}

function polygonLength(points: Points): number {
  return points.reduce(
    (acc, point, index) => acc + distancePoint(point, points[(index + 1) % points.length]),
    0,
  );
}

function addPoints(path: Points, numPoints: number): Points {
  if (numPoints === 0) {
    return path;
  }

  const desiredLength = path.length + numPoints;

  const step = polygonLength(path) / numPoints;

  let index = 0;
  let cursor = 0;
  let insertAt = step / 2;

  while (path.length < desiredLength) {
    const element = path[index];
    const nextElement = path[(index + 1) % path.length];

    const segment = distancePoint(element, nextElement);

    if (insertAt <= cursor + segment) {
      path.splice(
        index + 1,
        0,
        segment ? pointAlong(element, nextElement, insertAt - cursor) : array.copy(element), // TODO: test coverage
      );
      insertAt += step;
      continue;
    }

    cursor += segment;
    index++;
  }

  return path;
}

function bisect(path: Points, { maxSegmentLength }: Required<MaxSegmentLengthOptions>): Points {
  for (let index = 0; index < path.length; index++) {
    const element = path[index];
    let nextElement = path[(index + 1) % path.length];

    while (distancePoint(element, nextElement) > maxSegmentLength) {
      nextElement = pointAlong(element, nextElement, 0.5);

      path.splice(index + 1, 0, nextElement);
    }
  }

  return path;
}

function normalizeRing(
  path: DeepReadonly<SVGPathSupport>,
  { maxSegmentLength }: Required<MaxSegmentLengthOptions>,
): Points {
  return bisect(approximateRing(path, { maxSegmentLength }), { maxSegmentLength });
}

function rotate(from: Points, to: Points) {
  let min = Infinity;
  let bestOffset = 0;

  for (let offset = 0; offset < from.length; offset++) {
    let sumOfSquares = 0;

    to.forEach((element, index) => {
      const d = distancePoint(from[(offset + index) % from.length], element);
      sumOfSquares += d * d;
    });

    if (sumOfSquares < min) {
      min = sumOfSquares;
      bestOffset = offset;
    }
  }

  if (bestOffset) {
    const spliced = from.splice(0, bestOffset);
    from.splice(from.length, 0, ...spliced);
  }
}

function interpolatePoint(from: Readonly<Point>, to: Readonly<Point>): (progress: number) => Point {
  return (progress: number) => {
    return [from[0] + progress * (to[0] - from[0]), from[1] + progress * (to[1] - from[1])];
  };
}

function interpolatePoints(from: Points, to: Points): (progress: number) => SVGPathSupport {
  const interpolators = from.map((point, index) => interpolatePoint(point, to[index]));

  return (progress: number) => {
    const result = interpolators.map<DrawtoCommandSupport>((interpolator, index) => [
      index === 0 ? 'M' : 'L',
      interpolator(progress),
    ]);
    result.push(['Z', []]);

    return result;
  };
}

function interpolateRing(from: Points, to: Points): (progress: number) => SVGPathSupport {
  const diff = from.length - to.length;

  const fromRing = addPoints(from, -Math.min(diff, 0));
  const toRing = addPoints(to, Math.max(diff, 0));

  rotate(fromRing, toRing);

  return interpolatePoints(fromRing, toRing);
}

export function interpolate(
  from: DeepReadonly<SVGPathSupport>,
  to: DeepReadonly<SVGPathSupport>,
  { maxSegmentLength = 1 }: MaxSegmentLengthOptions = {},
): (progress: number) => SVGPathSupport {
  const fromRing = normalizeRing(from, { maxSegmentLength });
  const toRing = normalizeRing(to, { maxSegmentLength });

  const fn = interpolateRing(fromRing, toRing);

  return (progress: number) => {
    if (progress < 1e-4) {
      return copySVGPath(from);
    } else if (progress > 1 - 1e-4) {
      return copySVGPath(to);
    }

    return fn(progress);
  };
}
