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

describe(autoUpdateFloatingElement, () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  test('use ResizeObserver', () => {
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
});
