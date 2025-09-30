import * as React from 'react';
import { act } from 'react';
import {
  type EventType,
  fireEvent,
  render,
  type RenderResult,
  screen,
} from '@testing-library/react';
// eslint-disable-next-line no-restricted-imports -- используем здесь setup
import userEventLib from '@testing-library/user-event';
import { noop } from '@vkontakte/vkjs';
import { type Awaitable } from 'vitest';
import { configureAxe } from 'vitest-axe';
import * as matchers from 'vitest-axe/matchers';
import type { AdaptivityProps } from '../components/AdaptivityProvider/AdaptivityContext';
import { AdaptivityProvider } from '../components/AdaptivityProvider/AdaptivityProvider';
import { ScrollContext } from '../components/AppRoot/ScrollContext';
import { isHTMLElement } from '../lib/dom';
import type { ImgOnlyAttributes } from '../lib/utils';
import type { HasChildren } from '../types';

type AxeConfigureOptions = Parameters<typeof configureAxe>[0];

export const defaultAxe = configureAxe({
  /**
   * @see https://github.com/dequelabs/axe-core/blob/develop/doc/rule-descriptions.md
   */
});
expect.extend(matchers);

/**
 * Переконфигурируем работу userEvent под vitest
 *
 * https://github.com/testing-library/user-event/issues/833
 */
export const userEvent = userEventLib.setup({
  advanceTimers: vi.advanceTimersByTime.bind(vi),
});

export function fakeTimers(runPendingTimers = true) {
  beforeEach(() => vi.useFakeTimers());
  afterEach(() => {
    runPendingTimers && vi.runOnlyPendingTimers();
    vi.useRealTimers();
  });
}

export function withFakeTimers<T extends any[]>(
  testFn: (...args: T) => Awaitable<void>,
  options: Parameters<typeof vi.useFakeTimers>[0] = {},
) {
  return async (...args: T) => {
    vi.useFakeTimers(options);
    try {
      return await testFn(...args);
    } finally {
      vi.useRealTimers();
    }
  };
}

export const imgOnlyAttributes: ImgOnlyAttributes = {
  alt: 'test',
  crossOrigin: 'anonymous',
  decoding: 'async',
  height: 100,
  width: 100,
  loading: 'eager',
  referrerPolicy: 'no-referrer',
  sizes: 'test',
  src: 'test',
  srcSet: 'test',
  useMap: 'test',
  fetchPriority: 'auto',
};

export type ComponentTestOptions = {
  defaultProps?: any;
  forward?: boolean;
  domAttr?: boolean;
  className?: boolean;
  style?: boolean;
  adaptivity?: AdaptivityProps;
  a11y?: boolean;
  a11yConfig?: AxeConfigureOptions;
  getRootRef?: boolean;
};

export function mountTest(Component: React.ComponentType<any>) {
  it('renders', async () => {
    expect.assertions(3);

    let result: RenderResult;

    // mount
    try {
      result = render(<Component />);
      await waitForFloatingPosition();
      act(vi.runAllTimers);
      expect(result).toBeTruthy();
    } catch {}

    try {
      result!.rerender(<Component />);
      await waitForFloatingPosition();
      act(vi.runAllTimers);
      expect(result!).toBeTruthy();
    } catch {}

    try {
      // unmount
      result!.unmount();
      act(vi.runAllTimers);
      expect(result!).toBeTruthy();
    } catch {}
  });
}

export function a11yTest(Component: React.ComponentType<any>, axeConfig?: AxeConfigureOptions) {
  it('a11y: has no violations', async () => {
    const { container } = render(<Component />);
    await waitForFloatingPosition();
    vi.useRealTimers();

    const vitestAxe = axeConfig ? configureAxe(axeConfig) : defaultAxe;
    const results = await vitestAxe(container, {});

    vi.useFakeTimers();
    expect(results).toHaveNoViolations();
  });
}

export function getRootRefTest(Component: React.ComponentType<any>) {
  it('getRootRef', async () => {
    const stableRef = { current: undefined };

    const ref = {
      get current() {
        return stableRef.current;
      },
      set current(el) {
        stableRef.current = el;
      },
    };

    render(<Component getRootRef={ref} />);
    await waitForFloatingPosition();
    act(vi.runAllTimers);

    expect(ref.current).toBeTruthy();
  });
}

export function baselineComponent<Props extends object>(
  RawComponent: React.ComponentType<Props>,
  {
    forward = true,
    style = true,
    className = true,
    domAttr = true,
    a11y = true,
    a11yConfig,
    getRootRef = true,
    adaptivity,
  }: ComponentTestOptions = {},
  testName = 'baseline',
) {
  const Component: React.ComponentType<any> = adaptivity
    ? (p: Props) => (
        <AdaptivityProvider {...adaptivity}>
          <RawComponent {...p} />
        </AdaptivityProvider>
      )
    : RawComponent;

  describe(testName, () => {
    beforeEach(() => {
      vi.clearAllTimers();
      vi.useFakeTimers();
    });

    afterEach(() => {
      vi.runOnlyPendingTimers();
      vi.useRealTimers();
    });

    mountTest(Component);

    if (a11y) {
      a11yTest(Component, a11yConfig);
    }

    if (forward) {
      it('forwards attributes', async () => {
        const cls = 'Custom';
        const { rerender } = render(
          <Component data-testid="__cmp__" className={cls} style={{ backgroundColor: 'red' }} />,
        );
        await waitForFloatingPosition();
        act(vi.runAllTimers);
        // forward DOM attributes
        if (domAttr) {
          expect(screen.queryByTestId('__cmp__')).toBeTruthy();
        }

        if (className || style) {
          const styledNode = document.getElementsByClassName(cls)[0] as HTMLElement;
          // forwards className
          if (className) {
            expect(styledNode).toBeTruthy();
          }
          const customClassList = Array.from(styledNode.classList).filter((item) => item !== cls);
          // forwards style
          if (style) {
            expect(styledNode.style.backgroundColor).toBe('red');
          }
          const customStyleCount = styledNode.style.length;

          rerender(<Component />);
          await waitForFloatingPosition();
          act(vi.runAllTimers);

          // does not replace default className
          if (className) {
            expect(Array.from(styledNode.classList)).toEqual(customClassList);
          }
          // does not replace default styles
          if (style) {
            expect(styledNode.style.length).toEqual(
              styledNode.style.backgroundColor ? customStyleCount : customStyleCount - 1,
            );
          }
        }
      });
    }

    if (getRootRef) {
      getRootRefTest(Component);
    }
  });
}

export function mockRect(el: HTMLElement | null, data: DOMRectInit) {
  if (!el) {
    return;
  }
  Object.defineProperty(el, 'getBoundingClientRect', {
    value() {
      return DOMRect.fromRect(data);
    },
    writable: true,
  });
  Object.defineProperty(el, 'offsetTop', {
    value: data.y,
    writable: true,
  });
  Object.defineProperty(el, 'offsetLeft', {
    value: data.x,
    writable: true,
  });
  Object.defineProperty(el, 'offsetWidth', {
    value: data.width,
    writable: true,
  });
  Object.defineProperty(el, 'offsetHeight', {
    value: data.height,
    writable: true,
  });
}

export const mockScrollContext = (
  getY: () => number,
): [React.ComponentType<HasChildren>, ReturnType<typeof vi.fn>] => {
  const getScroll = () => ({ x: 0, y: getY() });
  const scrollTo = vi.fn();
  const incrementScrollLockCounter = vi.fn();
  const decrementScrollLockCounter = vi.fn();
  return [
    (props) => (
      <ScrollContext.Provider
        value={{
          getScroll,
          scrollTo,
          incrementScrollLockCounter,
          decrementScrollLockCounter,
        }}
      >
        {props.children}
      </ScrollContext.Provider>
    ),
    scrollTo,
  ];
};

const isNullOrUndefined = (val: unknown): val is null | undefined =>
  val === null || val === undefined;

// Согласно спеке, offsetParent в ряде случаев будет null
Object.defineProperty(HTMLElement.prototype, 'offsetParent', {
  get() {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    let element: HTMLElement = this;
    while (
      !isNullOrUndefined(element) &&
      (isNullOrUndefined(element.style) ||
        isNullOrUndefined(element.style.display) ||
        element.style.display.toLowerCase() !== 'none')
    ) {
      // @ts-expect-error: TS2322 `parentNode: ParentNode | null`, а ожидается HTMLElement
      element = element.parentNode;
    }

    if (!isNullOrUndefined(element)) {
      return null;
    }

    if (
      !isNullOrUndefined(this.style) &&
      !isNullOrUndefined(this.style.position) &&
      this.style.position.toLowerCase() === 'fixed'
    ) {
      return null;
    }

    if (this.tagName.toLowerCase() === 'html' || this.tagName.toLowerCase() === 'body') {
      return null;
    }

    return this.parentNode;
  },
});

// https://floating-ui.com/docs/react#testing
export async function waitForFloatingPosition() {
  await act(async () => void 0);
}

export const waitRAF = async () => await new Promise((resolve) => requestAnimationFrame(resolve));

// Решение отсюда https://stackoverflow.com/a/62282721/2903061
export const requestAnimationFrameMock = {
  _originRequestAnimationFrame: window.requestAnimationFrame,
  _originCancelAnimationFrame: window.cancelAnimationFrame,

  handleCounter: 0,
  queue: new Map(),
  requestAnimationFrame(callback: FrameRequestCallback) {
    const handle = this.handleCounter++;
    this.queue.set(handle, callback);
    return handle;
  },
  cancelAnimationFrame(handle: number) {
    this.queue.delete(handle);
  },
  triggerNextAnimationFrame(time = performance.now()) {
    const nextEntry = this.queue.entries().next().value;
    if (nextEntry === undefined) {
      return;
    }

    const [nextHandle, nextCallback] = nextEntry;

    nextCallback(time);
    this.queue.delete(nextHandle);
  },
  triggerAllAnimationFrames(time = performance.now()) {
    while (this.queue.size > 0) {
      this.triggerNextAnimationFrame(time);
    }
  },
  init() {
    this.queue.clear();
    this.handleCounter = 0;
    window.requestAnimationFrame = this.requestAnimationFrame.bind(this);
    window.cancelAnimationFrame = this.cancelAnimationFrame.bind(this);
  },
  destroy() {
    this.queue.clear();
    this.handleCounter = 0;
    window.requestAnimationFrame = this._originRequestAnimationFrame;
    window.cancelAnimationFrame = this._originCancelAnimationFrame;
  },
};

/**
 * Эта функция собирает бойлерплейт по работе с fireEvent.
 */
export const fireEventPatch = async <E extends EventType>(
  el: Document | Element | Window | Node | null,
  eventType: E,
  options?: E extends 'mouseOver' | 'mouseLeave' ? boolean : object,
) => {
  if (el === null) {
    return;
  }
  switch (eventType) {
    case 'focus':
      if (isHTMLElement(el)) {
        await act(async () => {
          // см. https://github.com/testing-library/user-event/issues/350
          el.focus();
          await waitRAF();
        });
      }
      break;
    case 'blur':
      if (isHTMLElement(el)) {
        await act(async () => {
          if (options) {
            fireEvent[eventType](el, options);
          } else {
            el.blur();
          }
          await waitRAF();
        });
      }
      break;
    case 'mouseOver':
    case 'mouseLeave':
      fireEvent[eventType](el);
      if (options === undefined || options === true) {
        await act(async () => await waitRAF());
      }
      break;
    default:
      fireEvent[eventType](el, options);
  }
};

export async function waitCSSKeyframesAnimation(
  el: HTMLElement | null,
  options = { runOnlyPendingTimers: false },
) {
  const { runOnlyPendingTimers } = options;
  await fireEventPatch(el, 'animationStart');
  await fireEventPatch(el, 'animationEnd');
  act(runOnlyPendingTimers ? vi.runOnlyPendingTimers : noop);
  await fireEventPatch(el, 'animationStart');
  await fireEventPatch(el, 'animationEnd');
}

export async function waitCSSTransitionEnd(el: HTMLElement | null, eventData?: object) {
  await fireEventPatch(el, 'transitionEnd', new TransitionEvent('transitionend', eventData));
}

export const withRegExp = (v: string) => new RegExp(v);

export const matchMediaMock = (queries?: string | string[]) => {
  Object.defineProperty(global, 'matchMedia', {
    writable: true,
    value: vi.fn().mockImplementation((query: string) => ({
      matches: queries ? queries.includes(query) : false,
      media: query,
      onchange: null,
      addListener: vi.fn(), // устарело
      removeListener: vi.fn(), // устарело
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    })),
  });
};

export function touchEventMock({ target = new EventTarget(), ...dataRaw }: Partial<Touch>) {
  const touch: Touch = {
    identifier: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    screenY: 0,
    screenX: 0,
    radiusX: 0,
    radiusY: 0,
    force: 0,
    rotationAngle: 0,
    target,
    ...dataRaw,
  };
  return {
    ...touch,
    changedTouches: [touch],
    touches: [touch],
    bubbles: true,
    cancelable: true,

    // для fireEvent
    target,
  };
}

export function mouseEventMock({
  target = new EventTarget(),
  ...dataRaw
}: Partial<MouseEventInit & { target: any }>): MouseEventInit & {
  target: any;
} {
  return {
    screenX: 0,
    screenY: 0,
    movementX: 0,
    movementY: 0,
    clientX: 0,
    clientY: 0,
    relatedTarget: null,
    ...dataRaw,

    // для fireEvent
    target,
  };
}

export function setNodeEnv(value: 'development' | 'production' | 'test') {
  vi.stubEnv('NODE_ENV', value);
}

const TOUCH_TO_MOUSE_HANDLER = new WeakMap<
  typeof fireEvent.touchStart,
  typeof fireEvent.mouseDown
>();
TOUCH_TO_MOUSE_HANDLER.set(fireEvent.touchStart, fireEvent.mouseDown);
TOUCH_TO_MOUSE_HANDLER.set(fireEvent.touchMove, fireEvent.mouseMove);
TOUCH_TO_MOUSE_HANDLER.set(fireEvent.touchEnd, fireEvent.mouseUp);

const adoptedTouchEvent = (fn: typeof fireEvent.touchStart): typeof fireEvent.mouseDown => {
  return (element, options) => {
    const typedOptions = options as { clientX: number; clientY: number } | undefined;
    const handler = TOUCH_TO_MOUSE_HANDLER.get(fn);
    return handler!(
      element,
      touchEventMock({ clientX: typedOptions?.clientX, clientY: typedOptions?.clientY }),
    );
  };
};

export const MOUSE_EVENTS_HANDLERS: Array<typeof fireEvent.mouseDown> = [
  fireEvent.mouseDown,
  fireEvent.mouseMove,
  fireEvent.mouseUp,
];

export const ADOPTED_TOUCH_EVENTS_HANDLERS: Array<typeof fireEvent.mouseDown> = [
  adoptedTouchEvent(fireEvent.touchStart),
  adoptedTouchEvent(fireEvent.touchMove),
  adoptedTouchEvent(fireEvent.touchEnd),
];
