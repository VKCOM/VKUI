const defaultIframeStyles = {
  position: 'absolute',
  left: 0,
  top: 0,
  width: '100%',
  height: '100%',
  pointerEvents: 'none',
  opacity: 0,
};

/*
 * Специальный CustomResizeObserver как fallback для ResizeObserver
 * Используется для вызова update() функции (перерисовка плавающего окна) floating-ui
 * при изменении размера reference или floating элементов.
 *
 * По умолчанию пытаемся нарисовать скрытый, абсолютно позиционированный относительно
 * наблюдаемого элемента iframe.
 * В случае же, если наблюдаемый элемент имеет position: static, то правильно спозиционировать
 * iframe у нас не получится, поэтому в такой ситуации мы используем MutationObserver.
 *
 * Использовать только MutationObserver мы не можем, потому что с помощью него нельзя отследить
 * изменение размера вызванное переполнением текста.
 *
 * Применяется только если нету поддержики или полифила ResizeObserver.
 * */
export class CustomResizeObserver {
  updateFunction: () => void;
  records: Array<{
    target: HTMLElement;
    iframe: HTMLIFrameElement;
  }> = [];
  mutationObserverFallback: MutationObserver | null = null;

  constructor(updateFunction: () => void) {
    this.updateFunction = updateFunction;
  }

  observe(element: HTMLElement) {
    if (isPositioned(element)) {
      return this.observeUsingIframe(element);
    }
    return this.observeUsingMutationObserver(element);
  }

  observeUsingIframe(element: HTMLElement) {
    const iframe = element.ownerDocument.createElement('iframe');
    iframe.src = 'javascript:void(0)';
    iframe.ariaHidden = 'true';
    iframe.tabIndex = -1;
    Object.assign(iframe.style, defaultIframeStyles);

    this.records.push({ target: element, iframe });

    element.appendChild(iframe);

    if (iframe.contentWindow === null) {
      return;
    }

    iframe.contentWindow.addEventListener('resize', this.updateFunction);
  }

  observeUsingMutationObserver(element: HTMLElement) {
    if (!this.mutationObserverFallback) {
      this.mutationObserverFallback = new MutationObserver(this.updateFunction);
    }

    this.mutationObserverFallback.observe(element, {
      childList: true,
      subtree: true,
    });
  }

  disconnect() {
    this.records.map(({ target, iframe }) => {
      if (iframe.contentWindow) {
        iframe.contentWindow.removeEventListener('resize', this.updateFunction);
      }

      target.removeChild(iframe);
    });
    this.records = [];

    if (this.mutationObserverFallback) {
      this.mutationObserverFallback.disconnect();
    }
    this.mutationObserverFallback = null;
  }
}

function isPositioned(element: HTMLElement): boolean {
  return getComputedStyle(element).position !== 'static';
}
