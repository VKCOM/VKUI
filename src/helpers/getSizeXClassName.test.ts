import { SizeType } from '../lib/adaptivity';
import { getSizeXClassName } from './getSizeXClassName';

describe('getSizeXClassName', () => {
  describe('without `styles` argument', () => {
    it("returns 'none' className if there is no sizeX", () =>
      expect(getSizeXClassName('base')).toBe('base--sizeX-none'));

    it('returns className with actual sizeX if there is sizeX', () =>
      expect(getSizeXClassName('base', SizeType.COMPACT)).toBe(`base--sizeX-${SizeType.COMPACT}`));
  });

  describe('with `styles` argument', () => {
    const styles = {
      'base': 'some-hash',
      'base--sizeX-none': 'some-hash-none',
      [`base--sizeX-${SizeType.REGULAR}` as const]: 'some-hash-regular',
      [`base--sizeX-${SizeType.COMPACT}` as const]: 'some-hash-compact',
    };

    it("returns 'none' className if there is no sizeX", () =>
      expect(getSizeXClassName('base', undefined, styles)).toBe(styles['base--sizeX-none']));

    it('returns className with actual sizeX if there is sizeX', () =>
      expect(getSizeXClassName('base', SizeType.COMPACT, styles)).toBe(
        styles[`base--sizeX-${SizeType.COMPACT}`],
      ));
  });
});
