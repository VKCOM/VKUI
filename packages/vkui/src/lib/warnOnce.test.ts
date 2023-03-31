import { warnOnce } from './warnOnce';

describe('warnOnce', () => {
  afterAll(() => {
    console.clear();
    jest.clearAllMocks();
  });

  const warnSpy = jest.spyOn(console, 'warn');
  const errorSpy = jest.spyOn(console, 'error');
  const logSpy = jest.spyOn(console, 'log');

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
    expect(logSpy).toBeCalledWith(
      '%c[VKUI/zone] log message',
      'color: steelblue; font-style: italic',
    );
  });
});
