import { getPlatformClassName } from './getPlatformClassName';

describe(getPlatformClassName, () => {
  describe('without `styles` argument', () => {
    it('return platform name', () => expect(getPlatformClassName('base', 'ios')).toBe('base--ios'));
  });

  describe('with `styles` argument', () => {
    const styles = {
      'base': 'some-hash',
      'base--ios': 'some-hash-ios',
      'base--android': 'some-hash-android',
      'base--vkcom': 'some-hash-vkcom',
    };
    it('return platform name', () =>
      expect(getPlatformClassName('base', 'ios', styles)).toBe(styles['base--ios']));
  });
});
