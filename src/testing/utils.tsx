import * as React from 'react';
import { render, RenderResult, screen } from '@testing-library/react';
import AdaptivityProvider, { AdaptivityProviderProps } from '../components/AdaptivityProvider/AdaptivityProvider';
import { ImgOnlyAttributes } from '../lib/utils';
import { ScrollContext } from '../components/AppRoot/ScrollContext';

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
  adaptivity?: AdaptivityProviderProps;
};

type BasicProps = { style?: any; className?: string };

export function mountTest(Component: React.ComponentType<any>) {
  it('renders', () => {
    let api: RenderResult;
    // mount
    expect(() => api = render(<Component />)).not.toThrow();
    // update
    expect(() => api.rerender(<Component />)).not.toThrow();
    // unmount
    expect(() => api.unmount()).not.toThrow();
  });
}

export function baselineComponent<Props extends BasicProps>(
  RawComponent: React.ComponentType<Props>,
  {
    forward = true,
    style = true,
    className = true,
    domAttr = true,
    adaptivity,
  }: ComponentTestOptions = {},
) {
  const Component: React.ComponentType<BasicProps> = adaptivity
    ? (p: Props) => <AdaptivityProvider {...adaptivity}><RawComponent {...p} /></AdaptivityProvider>
    : RawComponent;
  mountTest(Component);
  forward && it('forwards attributes', () => {
    const cls = 'Custom';
    const { rerender } = render((
      <Component data-testid="__cmp__" className={cls} style={{ background: 'red' }} />
    ));
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
      style && expect(styledNode.style.length)
        .toEqual(styledNode.style.background ? customStyleCount : customStyleCount - 1);
    }
  });
}

type RectOptions = { x?: number; y?: number; w?: number; h?: number };
export function mockRect(el: HTMLElement | ({} & any), { x = 0, y = 0, w = 0, h = 0 }: RectOptions) {
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

export const mockScrollContext = (getY: () => number): [React.FC, jest.Mock] => {
  const getScroll = () => ({ x: 0, y: getY() });
  const scrollTo = jest.fn();
  return [
    (props) => (
      <ScrollContext.Provider value={{ getScroll, scrollTo }}>
        {props.children}
      </ScrollContext.Provider>
    ),
    scrollTo,
  ];
};
