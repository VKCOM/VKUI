import { requestAnimationFrameMock } from '../../testing/utils';
import {
  createAutoScrollController,
  EDGE_SIZE,
  getAutoScrollingData,
  OUTBOX_OFFSET,
} from './autoScroll';

const VIEWPORT_WIDTH = 1280;
const VIEWPORT_HEIGHT = 768;
const SCROLL_HEIGHT = 2000;
const MAX_SCROLL_Y = SCROLL_HEIGHT - VIEWPORT_HEIGHT;

const setScrollTop = (scrollEl: HTMLElement, scrollTop: number) => {
  window.scrollY = scrollEl.scrollTop = scrollTop;
  scrollEl.getBoundingClientRect = jest.fn(
    () => new DOMRect(0, scrollTop > 0 ? -1 * scrollTop : 0, VIEWPORT_WIDTH, VIEWPORT_HEIGHT),
  );
};

const initScrollElData = (scrollEl: HTMLElement, scrollTop: number) => {
  setScrollTop(scrollEl, scrollTop);

  jest.spyOn(scrollEl, 'scrollHeight', 'get').mockImplementation(() => SCROLL_HEIGHT);

  Object.defineProperty(scrollEl, 'scrollBy', {
    value: (_: number, y: number) => {
      setScrollTop(scrollEl, scrollTop + y);
    },
    writable: false,
  });
};

describe('getAutoScrollingData', () => {
  let scrollEl = document.createElement('div');

  describe('top edge', () => {
    beforeEach(() => {
      scrollEl = document.createElement('div');
    });

    it('should be falsy for scrollTop is top', () => {
      initScrollElData(scrollEl, 0);
      const { shouldScrolling } = getAutoScrollingData(0, scrollEl);
      expect(shouldScrolling).toBeFalsy();
    });

    test.each([
      [0, 1],
      [EDGE_SIZE - 1, 1],
      [OUTBOX_OFFSET, 1],
      [OUTBOX_OFFSET + 10, 1],
    ])('should be truthy for scrollTop is not on top', (clientY, scrollTop) => {
      initScrollElData(scrollEl, scrollTop);
      const { shouldScrolling } = getAutoScrollingData(clientY, scrollEl);
      expect(shouldScrolling).toBeTruthy();
    });

    test.each([
      [EDGE_SIZE + 1, 1],
      [OUTBOX_OFFSET - 1, 1],
    ])(
      `should be falsy for clientY (%i) is not equal edge size (${EDGE_SIZE}) or outbox size (${OUTBOX_OFFSET})`,
      (clientY, scrollTop) => {
        initScrollElData(scrollEl, scrollTop);
        const { shouldScrolling } = getAutoScrollingData(clientY, scrollEl);
        expect(shouldScrolling).toBeFalsy();
      },
    );
  });

  describe('bottom edge', () => {
    beforeEach(() => {
      scrollEl = document.createElement('div');
    });

    it('should be falsy for scrollTop is bigger than max scroll y', () => {
      initScrollElData(scrollEl, SCROLL_HEIGHT - VIEWPORT_HEIGHT);
      const { shouldScrolling } = getAutoScrollingData(900, scrollEl);
      expect(shouldScrolling).toBeFalsy();
    });

    test.each([
      [VIEWPORT_HEIGHT - EDGE_SIZE - 1, 0],
      [VIEWPORT_HEIGHT + -1 * OUTBOX_OFFSET + 1, 0],
    ])(
      `should be falsy for clientY (%i) is not equal edge size (${EDGE_SIZE}) or outbox size (${OUTBOX_OFFSET})`,
      (clientY, scrollTop) => {
        initScrollElData(scrollEl, scrollTop);
        const { shouldScrolling } = getAutoScrollingData(clientY, scrollEl);
        expect(shouldScrolling).toBeFalsy();
      },
    );
  });
});

const getInitialAutoScrollData = (initialScrollTop: number) => {
  const scrollEl = document.createElement('div');
  initScrollElData(scrollEl, initialScrollTop);
  return { scrollEl, controller: createAutoScrollController(scrollEl) };
};

describe('createAutoScrollController', () => {
  beforeEach(() => {
    requestAnimationFrameMock.init();
  });
  const SCROLL_TOP_OFFSET = 2;
  it('should scroll to top', async () => {
    const { scrollEl, controller } = getInitialAutoScrollData(SCROLL_TOP_OFFSET);

    controller.tryAutoScroll(() => getAutoScrollingData(0, scrollEl));
    requestAnimationFrameMock.triggerNextAnimationFrame();
    expect(controller.isRunning).toBeTruthy();
    requestAnimationFrameMock.triggerNextAnimationFrame();
    expect(controller.isRunning).toBeFalsy();
    expect(scrollEl.scrollTop).toBeLessThanOrEqual(0);
  });

  const SCROLL_BOTTOM_OFFSET = MAX_SCROLL_Y - 2;
  it('should scroll to bottom', async () => {
    const { scrollEl, controller } = getInitialAutoScrollData(SCROLL_BOTTOM_OFFSET);

    controller.tryAutoScroll(() => getAutoScrollingData(VIEWPORT_HEIGHT, scrollEl));

    requestAnimationFrameMock.triggerNextAnimationFrame();
    expect(controller.isRunning).toBeTruthy();

    requestAnimationFrameMock.triggerNextAnimationFrame();
    expect(controller.isRunning).toBeFalsy();

    expect(scrollEl.scrollTop).toBeGreaterThanOrEqual(MAX_SCROLL_Y);
  });

  it('should stop scroll', async () => {
    const { scrollEl, controller } = getInitialAutoScrollData(100);

    controller.tryAutoScroll(() => getAutoScrollingData(0, scrollEl));

    requestAnimationFrameMock.triggerNextAnimationFrame();
    expect(controller.isRunning).toBeTruthy();

    controller.stop();
    requestAnimationFrameMock.triggerAllAnimationFrames();
    expect(controller.isRunning).toBeFalsy();

    expect(scrollEl.scrollTop).toBeLessThanOrEqual(90);
  });
});
