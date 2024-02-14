const defaultIframeStyles = {
  src: 'javascript:void(0)',
  position: 'absolute',
  left: 0,
  top: 0,
  width: '100%',
  height: '100%',
  pointerEvents: 'none',
  opacity: 0,
};

export class IFrameResizeObserver {
  updateFunction: () => void;
  records: Array<{
    target: HTMLElement;
    iframe: HTMLElement;
  }> = [];

  constructor(updateFunction: () => void) {
    this.updateFunction = updateFunction;
  }

  observe(element: HTMLElement) {
    const iframe = element.ownerDocument.createElement('iframe');
    iframe.src = 'javascript:void(0)';
    Object.assign(iframe.style, defaultIframeStyles);

    this.records.push({ target: element, iframe });

    element.appendChild(iframe);

    if (iframe.contentWindow === null) {
      return;
    }

    iframe.contentWindow.addEventListener('resize', this.updateFunction);
  }

  disconnect() {
    this.records.map(({ target, iframe }) => {
      iframe.removeEventListener('resize', this.updateFunction);
      target.removeChild(iframe);
    });
    this.records = [];
  }
}
