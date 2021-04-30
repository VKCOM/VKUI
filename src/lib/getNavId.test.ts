import { getNavId } from './getNavId';

describe(getNavId, () => {
  it('Gets "nav" prop', () => expect(getNavId({ nav: 'ok' })).toBe('ok'));
  it('Gets "id" prop', () => expect(getNavId({ id: 'ok' })).toBe('ok'));
  it('"nav" overrides "id"', () => expect(getNavId({ nav: 'ok', id: 'dont' })).toBe('ok'));
  describe('strict mode', () => {
    let spy: jest.SpyInstance;
    beforeEach(() => spy = jest.spyOn(console, 'error').mockImplementation());
    afterEach(() => spy.mockRestore());
    it('does not error if nav id present', () => {
      getNavId({ nav: 'ok' });
      getNavId({ id: 'ok' });
      getNavId({ nav: 'ok', id: 'dont' });
      expect(console.error).not.toBeCalled();
    });
    it('errors if nav id missing', () => {
      getNavId({});
      expect(console.error).toBeCalled();
    });
    it('does not error when strict=false', () => {
      getNavId({}, false);
      expect(console.error).not.toBeCalled();
    });
  });
});
