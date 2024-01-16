import * as React from 'react';
import {
  act,
  type EventType,
  fireEvent,
  render,
  RenderResult,
  screen,
} from '@testing-library/react';
// eslint-disable-next-line no-restricted-imports -- используем здесь setup
import userEventLib from '@testing-library/user-event';
import { configureAxe, toHaveNoViolations } from 'jest-axe';
import { AdaptivityProps } from '../components/AdaptivityProvider/AdaptivityContext';
import { AdaptivityProvider } from '../components/AdaptivityProvider/AdaptivityProvider';
import { ScrollContext } from '../components/AppRoot/ScrollContext';
import { isHTMLElement } from '../lib/dom';
import { ImgOnlyAttributes } from '../lib/utils';
import { HasChildren } from '../types';

export const axe = configureAxe({
  /**
   * @see https://github.com/dequelabs/axe-core/blob/develop/doc/rule-descriptions.md
   */
});
expect.extend(toHaveNoViolations);

/**
 * Переконфигурируем работу userEvent под jest
 *
 * https://github.com/testing-library/user-event/issues/833
 */
export const userEvent = userEventLib.setup({ advanceTimers: jest.advanceTimersByTime });

export function fakeTimers() {
  beforeEach(() => jest.useFakeTimers());
  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });
}

export const runAllTimers = () => act(() => jest.runAllTimers());

export const tryToGetByTestId = (id: string, elParent: HTMLElement) =>
  elParent.querySelector<HTMLElement>(`[data-testid="${id}"]`);

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
};

export type ComponentTestOptions = {
  defaultProps?: any;
  forward?: boolean;
  domAttr?: boolean;
  className?: boolean;
  style?: boolean;
  adaptivity?: AdaptivityProps;
  a11y?: boolean;
  getRootRef?: boolean;
};

export function mountTest(Component: React.ComponentType<any>) {
  it('renders', () => {
    let api: RenderResult;
    // mount
    expect(() => (api = render(<Component />))).not.toThrow();
    // update
    expect(() => api.rerender(<Component />)).not.toThrow();
    // unmount
    expect(() => api.unmount()).not.toThrow();
  });
}

export function a11yTest(Component: React.ComponentType<any>) {
  it('a11y: has no violations', async () => {
    const { container } = render(<Component />);
    await waitForFloatingPosition();

    jest.useRealTimers();
    const results = await axe(container, {});
    expect(results).toHaveNoViolations();
  });
}

export function getRootRefTest(Component: React.ComponentType<any>) {
  it('getRootRef', () => {
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
    getRootRef = true,
    adaptivity,
  }: ComponentTestOptions = {},
) {
  const Component: React.ComponentType<any> = adaptivity
    ? (p: Props) => (
        <AdaptivityProvider {...adaptivity}>
          <RawComponent {...p} />
        </AdaptivityProvider>
      )
    : RawComponent;
  mountTest(Component);
  a11y && a11yTest(Component);
  forward &&
    it('forwards attributes', async () => {
      const cls = 'Custom';
      const { rerender } = render(
        <Component data-testid="__cmp__" className={cls} style={{ background: 'red' }} />,
      );
      await waitForFloatingPosition();
      // forward DOM attributes
      domAttr && expect(screen.queryByTestId('__cmp__')).toBeTruthy();

      if (className || style) {
        const styledNode = document.getElementsByClassName(cls)[0] as HTMLElement;
        // forwards className
        className && expect(styledNode).toBeTruthy();
        const customClassList = Array.from(styledNode.classList).filter((item) => item !== cls);
        // forwards style
        style && expect(styledNode.style.background).toBe('red');
        const customStyleCount = styledNode.style.length;

        rerender(<Component />);

        // does not replace default className
        className && expect(Array.from(styledNode.classList)).toEqual(customClassList);
        // does not replace default styles
        style &&
          expect(styledNode.style.length).toEqual(
            styledNode.style.background ? customStyleCount : customStyleCount - 1,
          );
      }
    });

  getRootRef && getRootRefTest(Component);
}

type RectOptions = { x?: number; y?: number; w?: number; h?: number };
export function mockRect(el: HTMLElement | null, { x = 0, y = 0, w = 0, h = 0 }: RectOptions) {
  if (!el) {
    return;
  }
  el.getBoundingClientRect = () => ({
    x,
    y,
    width: w,
    height: h,
    left: x,
    top: y,
    right: x + w,
    bottom: y + h,
    toJSON() {
      JSON.stringify(this);
    },
  });
}

export const mockScrollContext = (
  getY: () => number,
): [React.ComponentType<HasChildren>, jest.Mock] => {
  const getScroll = () => ({ x: 0, y: getY() });
  const scrollTo = jest.fn();
  const isScrollLock = false;
  const enableScrollLock = jest.fn();
  const disableScrollLock = jest.fn();
  return [
    (props) => (
      <ScrollContext.Provider
        value={{
          getScroll,
          scrollTo,
          isScrollLock,
          enableScrollLock,
          disableScrollLock,
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
};

/**
 * Эта функция собирает бойлерплейт по работе с fireEvent.
 */
export const fireEventPatch = async (
  el: Document | Element | Window | Node | null,
  eventType: EventType,
  options?: Record<PropertyKey, unknown>,
) => {
  if (el === null) {
    return;
  }
  await act(async () => {
    switch (eventType) {
      case 'focus':
        if (isHTMLElement(el)) {
          // см. https://github.com/testing-library/user-event/issues/350
          el.focus();
          await waitRAF();
        }
        break;
      case 'blur':
        if (isHTMLElement(el)) {
          el.blur();
          await waitRAF();
        }
        break;
      case 'mouseOver':
      case 'mouseLeave':
        fireEvent[eventType](el);
        await waitRAF();
        break;
      default:
        fireEvent[eventType](el, options);
    }
  });
};

export const withRegExp = (v: string) => new RegExp(v);
