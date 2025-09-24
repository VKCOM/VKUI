import { warnOnce } from './warnOnce';

describe(warnOnce, () => {
  afterAll(() => {
    // eslint-disable-next-line no-console
    console.clear();
    vi.clearAllMocks();
  });

  const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => void 0);
  const errorSpy = vi.spyOn(console, 'error').mockImplementation(() => void 0);
  const logSpy = vi.spyOn(console, 'log').mockImplementation(() => void 0);

  const warn = warnOnce('zone');
  const warnMsg = 'warn message';

  it('uses console.warn by default', () => {
    warn(warnMsg);

    expect(warnSpy).toHaveBeenCalledTimes(1);
  });

  it('uses console[type] when passed explicitly', () => {
    warn('error message', 'error');

    expect(errorSpy).toHaveBeenCalledTimes(1);
  });

  it('shows only one message', () => {
    warn(warnMsg);
    warn(warnMsg);
    warn(warnMsg);

    expect(warnSpy).toHaveBeenCalledTimes(1);
  });

  it('adds styles for console.log', () => {
    warn('log message', 'log');

    expect(logSpy).toHaveBeenCalledTimes(1);
    expect(logSpy).toHaveBeenCalledWith(
      '%c[VKUI/zone] log message',
      'color: steelblue; font-style: italic',
    );
  });
});
