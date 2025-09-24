import { noop } from '@vkontakte/vkjs';
import type { autoUpdate } from '@vkontakte/vkui-floating-ui/react-dom';
import { autoUpdateFloatingElement } from './adapters';

const autoUpdateLibDisposerStub = vi.fn();
const autoUpdateLibStub = vi.fn().mockReturnValue(autoUpdateLibDisposerStub);
vi.mock('@vkontakte/vkui-floating-ui/react-dom', () => {
  return {
    autoUpdate: (...args: Parameters<typeof autoUpdate>) => autoUpdateLibStub(...args),
  };
});

const customResizeObserverInstanceStub = {
  observe: vi.fn(),
  disconnect: vi.fn(),
  appendToTheDOM: vi.fn(),
};
const customResizeObserverStub = vi.fn().mockImplementation(() => {
  return customResizeObserverInstanceStub;
});

vi.mock('./customResizeObserver', () => {
  return {
    CustomResizeObserver: vi.fn().mockImplementation(() => {
      return customResizeObserverStub();
    }),
  };
});

describe(autoUpdateFloatingElement, () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  test('does not use CustomResizeObserver if ResizeObserver is defined', () => {
    global.ResizeObserver = noop as never;
    const reference = document.createElement('div');
    const floating = document.createElement('div');

    autoUpdateFloatingElement(reference, floating, vi.fn(), { elementResize: true });

    expect(autoUpdateLibStub).toHaveBeenLastCalledWith(
      expect.anything(),
      expect.anything(),
      expect.anything(),
      expect.objectContaining({ elementResize: true }),
    );

    autoUpdateFloatingElement(reference, floating, vi.fn(), { elementResize: false });

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

    autoUpdateFloatingElement(reference, floating, vi.fn(), { elementResize: true });

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

    const unmountCallback = autoUpdateFloatingElement(reference, floating, vi.fn(), {
      elementResize: true,
    });

    unmountCallback();

    expect(autoUpdateLibDisposerStub).toHaveBeenCalledTimes(1);
    expect(customResizeObserverInstanceStub.disconnect).toHaveBeenCalled();
  });
});
