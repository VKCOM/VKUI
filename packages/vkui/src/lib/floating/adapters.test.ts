import { noop } from '@vkontakte/vkjs';
import { autoUpdate } from '@vkontakte/vkui-floating-ui/react-dom';
import { autoUpdateFloatingElement } from './adapters';

const autoUpdateLibDisposerStub = jest.fn();
const autoUpdateLibStub = jest.fn().mockReturnValue(autoUpdateLibDisposerStub);
jest.mock('@vkontakte/vkui-floating-ui/react-dom', () => {
  return {
    autoUpdate: (...args: Parameters<typeof autoUpdate>) => autoUpdateLibStub(...args),
  };
});

const customResizeObserverInstanceStub = {
  observe: jest.fn(),
  disconnect: jest.fn(),
  appendToTheDOM: jest.fn(),
};
const customResizeObserverStub = jest.fn().mockImplementation(() => {
  return customResizeObserverInstanceStub;
});

jest.mock('./customResizeObserver', () => {
  return {
    CustomResizeObserver: jest.fn().mockImplementation(() => {
      return customResizeObserverStub();
    }),
  };
});

describe(autoUpdateFloatingElement, () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('does not use CustomResizeObserver if ResizeObserver is defined', () => {
    global.ResizeObserver = noop as never;
    const reference = document.createElement('div');
    const floating = document.createElement('div');

    autoUpdateFloatingElement(reference, floating, jest.fn(), { elementResize: true });

    expect(autoUpdateLibStub).toHaveBeenLastCalledWith(
      expect.anything(),
      expect.anything(),
      expect.anything(),
      expect.objectContaining({ elementResize: true }),
    );

    autoUpdateFloatingElement(reference, floating, jest.fn(), { elementResize: false });

    expect(autoUpdateLibStub).toHaveBeenLastCalledWith(
      expect.anything(),
      expect.anything(),
      expect.anything(),
      expect.objectContaining({ elementResize: false }),
    );
  });

  test('uses CustomResizeObserver if ResizeObserver is undefined', () => {
    global.ResizeObserver = undefined as never;
    const reference = document.createElement('div');
    const floating = document.createElement('div');

    autoUpdateFloatingElement(reference, floating, jest.fn(), { elementResize: true });

    expect(autoUpdateLibStub).toHaveBeenLastCalledWith(
      expect.anything(),
      expect.anything(),
      expect.anything(),
      expect.objectContaining({ elementResize: false }),
    );

    expect(customResizeObserverStub.mock.instances.length).toBe(1);
  });

  test('calls disposer in unmount callback', () => {
    global.ResizeObserver = undefined as never;
    const reference = document.createElement('div');
    const floating = document.createElement('div');

    const unmountCallback = autoUpdateFloatingElement(reference, floating, jest.fn(), {
      elementResize: true,
    });

    unmountCallback();

    expect(autoUpdateLibDisposerStub).toHaveBeenCalledTimes(1);
    expect(customResizeObserverInstanceStub.disconnect).toHaveBeenCalled();
  });
});
