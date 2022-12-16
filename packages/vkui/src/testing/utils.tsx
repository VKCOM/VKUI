import * as React from 'react';
import { render, RenderResult, screen } from '@testing-library/react';
import { configureAxe, toHaveNoViolations } from 'jest-axe';
import { AdaptivityProvider } from '../components/AdaptivityProvider/AdaptivityProvider';
import { AdaptivityProps } from '../components/AdaptivityProvider/AdaptivityContext';
import { ImgOnlyAttributes } from '../lib/utils';
import { ScrollContext } from '../components/AppRoot/ScrollContext';
import { act } from 'react-dom/test-utils';
import { HasChildren } from '../types';

const axe = configureAxe({
  /**
   * @see https://github.com/dequelabs/axe-core/blob/develop/doc/rule-descriptions.md
   */
  rules: {
    'aria-required-parent': {
      /*
       * a11y: Certain ARIA roles must be contained by particular parents (aria-required-parent)
       *       мы тестируем компоненты атомарно, поэтому это конкретное правило в нашем случае
       *       не подходит
       */
      enabled: false,
    },
  },
});
expect.extend(toHaveNoViolations);

export function fakeTimers() {
  beforeEach(() => jest.useFakeTimers('modern'));
  afterEach(() => jest.useRealTimers());
}

export const runAllTimers = () =>
  act(() => {
    jest.runAllTimers();
  });

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
  a11y?: boolean;
  style?: boolean;
  adaptivity?: AdaptivityProps;
};

type BasicProps = { style?: any; className?: string };

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

export function a11yTest(
  testName = 'a11y: has no violations',
  Component: React.ComponentType<any>,
) {
  it(testName, async () => {
    const { container } = render(<Component />);

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
}

export function baselineComponent<Props extends BasicProps>(
  RawComponent: React.ComponentType<Props>,
  {
    forward = true,
    style = true,
    className = true,
    domAttr = true,
    a11y = true,
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

  a11y && a11yTest(undefined, Component);

  forward &&
    it('forwards attributes', async () => {
      const cls = 'Custom';
      const { rerender } = render(
        <Component data-testid="__cmp__" className={cls} style={{ background: 'red' }} />,
      );
      await waitForPopper();
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

// Popper update() - https://github.com/popperjs/react-popper/issues/350
export async function waitForPopper() {
  await act(async () => {
    // eslint-disable-next-line @typescript-eslint/await-thenable
    await null;
  });
}

// Не реализован в JSDOM.
// Объявление скопировано с документации https://jestjs.io/ru/docs/26.x/manual-mocks
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // устарело
    removeListener: jest.fn(), // устарело
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});
