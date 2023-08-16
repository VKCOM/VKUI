import { VKUIGlobalTokensClassNameUsage } from './vkuiGlobalTokensClassNameUsage';

describe('VKUIGlobalTokensClassNameUsage', () => {
  beforeAll(() => (window.__VKUI__ = undefined));
  afterEach(() => (window.__VKUI__ = undefined));

  test('does not throw if window is undefined', () => {
    expect(() => {
      const className = 'vkui--vkBase--light';
      new VKUIGlobalTokensClassNameUsage(undefined, className);
    }).not.toThrowError();
  });

  test("creates window.__VKUI__ if it doesn't exist", () => {
    window.__VKUI__ = undefined;

    const className = 'vkui--vkBase--light';

    expect(window.__VKUI__).toBeUndefined();
    expect(window.__VKUI__).not.toEqual(
      expect.objectContaining({
        globalTokensClassNameUsage: { [className]: 0 },
      }),
    );

    new VKUIGlobalTokensClassNameUsage(window, className);

    expect(window.__VKUI__).toEqual(
      expect.objectContaining({
        globalTokensClassNameUsage: { [className]: 0 },
      }),
    );
  });
  test("creates window.__VKUI__.globalTokensClassNameUsage if it doesn't exist", () => {
    window.__VKUI__ = {} as any;

    const className = 'vkui--vkBase--light';

    expect(window.__VKUI__).toBeDefined();
    expect(window.__VKUI__).not.toEqual(
      expect.objectContaining({
        globalTokensClassNameUsage: { [className]: 0 },
      }),
    );

    new VKUIGlobalTokensClassNameUsage(window, className);

    expect(window.__VKUI__).toEqual(
      expect.objectContaining({
        globalTokensClassNameUsage: { [className]: 0 },
      }),
    );
  });

  test("doesn't override existing window.__VKUI__", () => {
    window.__VKUI__ = { isTesting: true } as any;

    const className = 'vkui--vkBase--light';

    expect(window.__VKUI__).toBeDefined();
    expect(window.__VKUI__).not.toEqual(
      expect.objectContaining({
        isTesting: true,
        globalTokensClassNameUsage: { [className]: 0 },
      }),
    );

    new VKUIGlobalTokensClassNameUsage(window, className);

    expect(window.__VKUI__).toEqual(
      expect.objectContaining({
        isTesting: true,
        globalTokensClassNameUsage: { [className]: 0 },
      }),
    );
  });

  test("doesn't override existing window.__VKUI__.globalTokensClassNameUsage", () => {
    const className = 'vkui--vkBase--light';

    window.__VKUI__ = {
      isTesting: true,
      globalTokensClassNameUsage: { 'vkui--vkCom--light': 0, [className]: 2 },
    } as any;

    expect(window.__VKUI__).toBeDefined();
    expect(window.__VKUI__).toEqual(
      expect.objectContaining({
        isTesting: true,
        globalTokensClassNameUsage: { 'vkui--vkCom--light': 0, [className]: 2 },
      }),
    );

    new VKUIGlobalTokensClassNameUsage(window, className);

    // global object is not changed
    expect(window.__VKUI__).toEqual(
      expect.objectContaining({
        isTesting: true,
        globalTokensClassNameUsage: { 'vkui--vkCom--light': 0, [className]: 2 },
      }),
    );
  });

  test("doesn't override existing window.__VKUI__.globalTokensClassNameUsage", () => {
    const className = 'vkui--vkBase--light';

    window.__VKUI__ = {
      isTesting: true,
      globalTokensClassNameUsage: { 'vkui--vkCom--light': 0, [className]: 2 },
    } as any;

    expect(window.__VKUI__).toBeDefined();
    expect(window.__VKUI__).toEqual(
      expect.objectContaining({
        isTesting: true,
        globalTokensClassNameUsage: { 'vkui--vkCom--light': 0, [className]: 2 },
      }),
    );

    new VKUIGlobalTokensClassNameUsage(window, className);

    // global object is not changed
    expect(window.__VKUI__).toEqual(
      expect.objectContaining({
        isTesting: true,
        globalTokensClassNameUsage: { 'vkui--vkCom--light': 0, [className]: 2 },
      }),
    );
  });

  test('properly updates window.__VKUI__.globalTokensClassNameUsage', () => {
    const className = 'vkui--vkBase--light';

    window.__VKUI__ = {
      isTesting: true,
      // checking that only className defined in the constructor is going to be updated and existing
      // token className usage number will stay untouched
      globalTokensClassNameUsage: { 'vkui--vkCom--light': 0 },
    } as any;

    expect(window.__VKUI__).toBeDefined();
    expect(window.__VKUI__).toEqual(
      expect.objectContaining({
        isTesting: true,
        globalTokensClassNameUsage: { 'vkui--vkCom--light': 0 },
      }),
    );

    const globalTokensClassNameUsage = new VKUIGlobalTokensClassNameUsage(window, className);

    expect(window.__VKUI__).toEqual(
      expect.objectContaining({
        isTesting: true,
        globalTokensClassNameUsage: { 'vkui--vkCom--light': 0, [className]: 0 },
      }),
    );

    expect(globalTokensClassNameUsage.isInUse()).toBeFalsy();

    // increments
    globalTokensClassNameUsage.incrementUsageNumber();

    expect(window.__VKUI__).toEqual(
      expect.objectContaining({
        isTesting: true,
        globalTokensClassNameUsage: { 'vkui--vkCom--light': 0, [className]: 1 },
      }),
    );

    expect(globalTokensClassNameUsage.isInUse()).toBeTruthy();

    // increments
    globalTokensClassNameUsage.incrementUsageNumber();

    expect(window.__VKUI__).toEqual(
      expect.objectContaining({
        isTesting: true,
        globalTokensClassNameUsage: { 'vkui--vkCom--light': 0, [className]: 2 },
      }),
    );

    expect(globalTokensClassNameUsage.isInUse()).toBeTruthy();

    // decrements
    globalTokensClassNameUsage.decrementUsageNumber();

    expect(window.__VKUI__).toEqual(
      expect.objectContaining({
        isTesting: true,
        globalTokensClassNameUsage: { 'vkui--vkCom--light': 0, [className]: 1 },
      }),
    );

    expect(globalTokensClassNameUsage.isInUse()).toBeTruthy();

    // decrements
    globalTokensClassNameUsage.decrementUsageNumber();

    expect(window.__VKUI__).toEqual(
      expect.objectContaining({
        isTesting: true,
        globalTokensClassNameUsage: { 'vkui--vkCom--light': 0, [className]: 0 },
      }),
    );

    expect(globalTokensClassNameUsage.isInUse()).toBeFalsy();

    // decrements
    globalTokensClassNameUsage.decrementUsageNumber();

    expect(window.__VKUI__).toEqual(
      expect.objectContaining({
        isTesting: true,
        // usage number should't go below 0
        globalTokensClassNameUsage: { 'vkui--vkCom--light': 0, [className]: 0 },
      }),
    );

    // should be treated as not in use
    expect(globalTokensClassNameUsage.isInUse()).toBeFalsy();
  });
});
