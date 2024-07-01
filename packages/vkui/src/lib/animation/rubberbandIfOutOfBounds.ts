/**
 * @author @aholachek
 *
 * @link https://twitter.com/chpwn/status/285540192096497664
 * @link https://medium.com/@nathangitter/building-fluid-interfaces-ios-swift-9732bb934bf5
 */
import { clamp } from '../../helpers/math';

function rubberband(distance: number, dimension: number, constant: number) {
  if (dimension === 0 || Math.abs(dimension) === Infinity) {
    return Math.pow(distance, constant * 5);
  }
  return (distance * dimension * constant) / (dimension + constant * distance);
}

export function rubberbandIfOutOfBounds(
  position: number,
  min: number,
  max: number,
  constant = 0.15,
): number {
  if (constant === 0) {
    return clamp(position, min, max);
  }
  if (position < min) {
    return -rubberband(min - position, max - min, constant) + min;
  }
  if (position > max) {
    return +rubberband(position - max, max - min, constant) + max;
  }
  return position;
}
