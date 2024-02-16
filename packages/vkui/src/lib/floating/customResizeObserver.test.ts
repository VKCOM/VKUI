import { CustomResizeObserver } from './customResizeObserver';

const getComputedStyleStub = jest.fn().mockReturnValue({});
global.getComputedStyle = getComputedStyleStub;

interface IframeStub extends Partial<Omit<HTMLIFrameElement, 'contentWindow' | 'style'>> {
  contentWindow: {
    addEventListener: () => void;
    removeEventListener: () => void;
  };
  style: Partial<HTMLElement['style']>;
}

function setup() {
  const updateFunctionStub = jest.fn();

  const iframeStub: IframeStub = {
    contentWindow: {
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
    },
    style: { margin: '20' },
  };
  const elementStub = {
    ownerDocument: {
      createElement: jest.fn().mockReturnValue(iframeStub),
    },
    appendChild: jest.fn(),
    removeChild: jest.fn(),
  };

  const mutationObserverInstanceStub = {
    observe: jest.fn(),
    disconnect: jest.fn(),
    takeRecords: jest.fn(),
  };

  const mutationObserverStub = jest.spyOn(global, 'MutationObserver').mockImplementation(() => {
    return mutationObserverInstanceStub;
  });

  return {
    updateFunctionStub,
    iframeStub,
    elementStub,
    mutationObserverStub,
    mutationObserverInstanceStub,
  };
}

describe(CustomResizeObserver, () => {
  it('checks that iframe resize event is added and removed', () => {
    const { updateFunctionStub, iframeStub, elementStub, mutationObserverStub } = setup();

    const observer = new CustomResizeObserver(updateFunctionStub);

    const observeUsingIframeStub = jest.spyOn(observer, 'observeUsingIframe');
    const observeUsingMutationObserverStub = jest.spyOn(observer, 'observeUsingMutationObserver');

    getComputedStyleStub.mockReturnValue({ position: 'absolute' });
    observer.observe(elementStub as unknown as HTMLElement);

    expect(observeUsingIframeStub).toHaveBeenCalledTimes(1);
    expect(observeUsingMutationObserverStub).toHaveBeenCalledTimes(0);

    // создает iframe
    expect(elementStub.ownerDocument.createElement).toHaveBeenCalledWith('iframe');

    // с нужным набором стилей
    expect(iframeStub.style).toStrictEqual({
      margin: '20',
      position: 'absolute',
      left: '0',
      top: '0',
      zIndex: '-1',
      width: '100%',
      height: '100%',
      pointerEvents: 'none',
      opacity: '0',
    });

    // скрытым от скринридеров
    expect(iframeStub.ariaHidden).toBe('true');
    expect(iframeStub.tabIndex).toBe(-1);

    expect(observer.records).toStrictEqual([{ target: elementStub, iframe: iframeStub }]);

    expect(observer.mutationObserverFallback).toBe(null);

    observer.appendToTheDOM();
    expect(elementStub.appendChild).toHaveBeenCalledWith(iframeStub);

    // функция update подписана на событие resize у iframe.contentWindow
    expect(iframeStub.contentWindow?.addEventListener).toHaveBeenCalledWith(
      'resize',
      updateFunctionStub,
    );

    observer.disconnect();

    expect(observer.records).toStrictEqual([]);
    // функций update отписана от события resize у iframe.contentWindow
    expect(iframeStub.contentWindow.removeEventListener).toHaveBeenCalledWith(
      'resize',
      updateFunctionStub,
    );

    // iframe удалён из DOM
    expect(elementStub.removeChild).toHaveBeenCalledWith(iframeStub);

    // MutationObserver не был использован
    expect(mutationObserverStub.mock.instances.length).toBe(0);
  });

  it('checks that we fallback to MutationObserver', () => {
    const { updateFunctionStub, elementStub, mutationObserverStub, mutationObserverInstanceStub } =
      setup();

    const observer = new CustomResizeObserver(updateFunctionStub);

    const observeUsingIframeStub = jest.spyOn(observer, 'observeUsingIframe');
    const observeUsingMutationObserverStub = jest.spyOn(observer, 'observeUsingMutationObserver');

    // ожидаем, что будет использован MutationObserver
    getComputedStyleStub.mockReturnValue({ position: 'static' });
    observer.observe(elementStub as unknown as HTMLElement);

    // iframe не использован
    expect(observeUsingIframeStub).toHaveBeenCalledTimes(0);
    // MutationObserver использован
    expect(observeUsingMutationObserverStub).toHaveBeenCalledTimes(1);

    expect(mutationObserverStub.mock.instances.length).toBe(1);
    expect(mutationObserverInstanceStub.observe).toHaveBeenCalledWith(elementStub, {
      childList: true,
      subtree: true,
    });

    // при повторном вызове observe мы не создаём нового instance MutationObserver
    observer.observe(elementStub as unknown as HTMLElement);
    expect(mutationObserverStub.mock.instances.length).toBe(1);

    observer.disconnect();

    expect(mutationObserverInstanceStub.disconnect).toHaveBeenCalledTimes(1);
  });
});
