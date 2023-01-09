import { getPointerClassName } from './getPointerClassName';

describe(getPointerClassName, () => {
  describe('without `styles` argument', () => {
    it("returns 'none' className if there is no mouse", () =>
      expect(getPointerClassName('base')).toBe('base--pointer-none'));

    it("returns className with 'has' if mouse is true", () =>
      expect(getPointerClassName('base', true)).toBe(`base--pointer-has`));

    it("returns className with 'has-not' if mouse is false", () =>
      expect(getPointerClassName('base', false)).toBe(`base--pointer-has-not`));
  });

  describe('with `styles` argument', () => {
    const styles = {
      'base': 'some-hash',
      'base--pointer-none': 'some-hash-none',
      'base--pointer-has': 'some-hash-has',
      'base--pointer-has-not': 'some-hash-has-not',
    };

    it("returns 'none' className if there is no mouse", () =>
      expect(getPointerClassName('base', undefined, styles)).toBe(styles['base--pointer-none']));

    it("returns className with 'has' if mouse is true", () =>
      expect(getPointerClassName('base', true, styles)).toBe(styles['base--pointer-has']));

    it("returns className with 'has-not' if mouse is false", () =>
      expect(getPointerClassName('base', false, styles)).toBe(styles['base--pointer-has-not']));
  });
});
