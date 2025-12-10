import { setNodeEnv } from '../testing/utils';
import { getNavId } from './getNavId';

describe(getNavId, () => {
  it('Gets "nav" prop', () => expect(getNavId({ nav: 'ok' })).toBe('ok'));
  it('Gets "id" prop', () => expect(getNavId({ id: 'ok' })).toBe('ok'));
  it('"nav" overrides "id"', () => expect(getNavId({ nav: 'ok', id: 'dont' })).toBe('ok'));
  describe('strict mode', () => {
    beforeEach(() => setNodeEnv('development'));
    afterEach(() => setNodeEnv('test'));

    it('does not error if nav id present', () => {
      const warn = vi.fn();
      getNavId({ nav: 'ok' }, warn);
      getNavId({ id: 'ok' }, warn);
      getNavId({ nav: 'ok', id: 'dont' }, warn);
      expect(warn).not.toHaveBeenCalled();
    });
    it('errors if nav id missing', () => {
      const warn = vi.fn();
      getNavId({}, warn);
      expect(warn).toHaveBeenCalled();
    });
  });
});
