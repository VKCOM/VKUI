import React from 'react';
import { type ComponentType, Fragment, type ReactNode } from 'react';
import { act, fireEvent, render, screen } from '@testing-library/react';
import { Platform } from '../../lib/platform';
import { baselineComponent, mockScrollContext, mountTest } from '../../testing/utils';
import { HasChildren } from '../../types';
import { ConfigProvider } from '../ConfigProvider/ConfigProvider';
import { useNavDirection } from '../NavTransitionDirectionContext/NavTransitionDirectionContext';
import { Panel } from '../Panel/Panel';
import { scrollsCache, ViewInfinite, type ViewInfiniteProps } from './ViewInfinite';

// Basically the same as View.test.tsx

describe('ViewInfinite', () => {
  beforeAll(() => jest.useFakeTimers());
  afterAll(() => jest.useRealTimers());
  baselineComponent((props: ViewInfiniteProps) => <ViewInfinite {...props} />, {
    // TODO [a11y]: "Exceeded timeout of 5000 ms for a test.
    //              Add a timeout value to this test to increase the timeout, if this is a long-running test. See https://jestjs.io/docs/api#testname-fn-timeout."
    a11y: false,
  });

  describe('With Panel', () =>
    mountTest(() => (
      <ViewInfinite activePanel="panel">
        <Panel id="panel" />
      </ViewInfinite>
    )));

  describe('shows active panel', () => {
    const panels = [<Panel id="p1" key="1" />, <Panel id="p2" key="2" />];
    it('on mount', () => {
      render(<ViewInfinite activePanel="p1">{panels}</ViewInfinite>);
      expect(document.getElementById('p1')).not.toBeNull();
      expect(document.getElementById('p2')).toBeNull();
    });
    it('after prop update', () => {
      render(<ViewInfinite activePanel="p1">{panels}</ViewInfinite>).rerender(
        <ViewInfinite activePanel="p2">{panels}</ViewInfinite>,
      );
      act(() => {
        jest.runAllTimers();
      });
      expect(document.getElementById('p1')).toBeNull();
      expect(document.getElementById('p2')).not.toBeNull();
    });
    it('calls onTransition', () => {
      const onTransition = jest.fn();
      render(
        <ViewInfinite activePanel="p1" onTransition={onTransition}>
          {panels}
        </ViewInfinite>,
      ).rerender(
        <ViewInfinite activePanel="p2" onTransition={onTransition}>
          {panels}
        </ViewInfinite>,
      );
      act(() => {
        jest.runAllTimers();
      });
      expect(onTransition).toBeCalledTimes(1);
      expect(onTransition).toBeCalledWith({
        from: 'p1',
        to: 'p2',
        isBack: false,
      });
    });
    it('detects back transition', () => {
      const onTransition = jest.fn();
      render(
        <ViewInfinite activePanel="p2" onTransition={onTransition}>
          {panels}
        </ViewInfinite>,
      ).rerender(
        <ViewInfinite activePanel="p1" onTransition={onTransition}>
          {panels}
        </ViewInfinite>,
      );
      act(() => {
        jest.runAllTimers();
      });
      expect(onTransition).toBeCalledWith({
        from: 'p2',
        to: 'p1',
        isBack: true,
      });
    });
  });

  describe('blurs active element', () => {
    const renderFocused = () => render(<input autoFocus data-testid="__autofocus__" />);
    it('on activePanel change', () => {
      renderFocused();
      const panels = [<Panel id="focus" key="1" />, <Panel id="other" key="2" />];
      render(<ViewInfinite activePanel="focus">{panels}</ViewInfinite>).rerender(
        <ViewInfinite activePanel="other">{panels}</ViewInfinite>,
      );
      expect(document.activeElement === document.body).toBe(true);
    });
  });

  describe('can swipeBack', () => {
    let nowMock: jest.SpyInstance;
    beforeEach(() => (nowMock = jest.spyOn(Date, 'now')));
    afterEach(() => nowMock && nowMock.mockClear());
    it('cancels swipeBack on swipe left', () => {
      const { view, ...events } = setupSwipeBack();
      expect(events.onSwipeBackStart).toBeCalledTimes(1);
      fireEvent.mouseUp(view, { clientX: 0, clientY: 100 });
      expect(events.onSwipeBack).not.toBeCalled();
      expect(events.onSwipeBackCancel).toBeCalledTimes(1);
    });
    it('does swipeBack immediately on overscroll', () => {
      const { view, ...events } = setupSwipeBack();
      fireEvent.mouseMove(view, {
        clientX: window.innerWidth + 1,
        clientY: 100,
      });
      fireEvent.mouseUp(view);
      expect(events.onSwipeBack).toBeCalledTimes(1);
      expect(events.onSwipeBackCancel).not.toBeCalled();
    });
    it('detects transition direction on swipeBack with useNavDirection() hook', async () => {
      const PanelContent = () => {
        const direction = useNavDirection();

        return <span>Direction: {direction || 'undefined'}</span>;
      };
      const { view } = setupSwipeBack({
        childrenForPanel1: <PanelContent />,
        childrenForPanel2: <PanelContent />,
        shouldForceDetectXSwipe: false,
      });

      // only panel 2 visible by default with undefined direction
      expect(screen.queryByText('Direction: undefined')).toBeTruthy();
      expect(screen.queryByText('Direction: backwards')).toBeFalsy();
      fireEvent.mouseDown(view, { clientX: 50, clientY: 100 });
      fireEvent.mouseMove(view, { clientX: 40, clientY: 100 });

      // both panels are visible and the content on panel 1 knows about backwards direction
      expect(screen.queryByText('Direction: undefined')).toBeTruthy();
      expect(screen.queryByText('Direction: backwards')).toBeTruthy();
    });
    describe('does not swipeback on', () => {
      it.each<[string, ReactNode, Partial<ViewInfiniteProps>]>([
        ['input', <input data-testid="ex" key="" />, {}],
        ['textarea', <textarea data-testid="ex" key="" />, {}],
        [
          '[data-vkui-swipe-back=false]',
          <div data-vkui-swipe-back={false} data-testid="ex" key="" />,
          {},
        ],
        [
          'onSwipeBackStart() === "prevent"',
          <div data-testid="ex" key="" />,
          { onSwipeBackStart: () => 'prevent' },
        ],
      ])('%s', (_name, component, props) => {
        const { view, ...events } = setupSwipeBack({
          Wrapper: Fragment,
          childrenForPanel2: component,
          initialProps: props,
        });
        fireEvent.mouseMove(screen.getByTestId('ex'), {
          clientX: window.innerWidth + 1,
          clientY: 100,
        });
        fireEvent.mouseUp(screen.getByTestId('ex'));
        expect(events.onSwipeBack).not.toBeCalled();
      });
    });
    it('does swipeBack after animation', () => {
      const { view, ...events } = setupSwipeBack();
      fireEvent.mouseMove(view, {
        clientX: window.innerWidth / 2 + 1,
        clientY: 100,
      });
      // speed to 0
      nowMock.mockImplementation(() => Infinity);
      fireEvent.mouseUp(view);
      expect(events.onSwipeBack).not.toBeCalled();
      expect(events.onSwipeBackCancel).not.toBeCalled();
      act(() => {
        jest.runAllTimers();
      });
      expect(events.onSwipeBack).toBeCalledTimes(1);
    });
    it('fails weak swipeBack', () => {
      const { view, ...events } = setupSwipeBack();
      fireEvent.mouseMove(view, {
        clientX: window.innerWidth / 2 - 1,
        clientY: 100,
      });
      // speed to 0
      nowMock.mockImplementation(() => Infinity);
      fireEvent.mouseUp(view);
      act(() => {
        jest.runAllTimers();
      });
      expect(events.onSwipeBack).not.toBeCalled();
      expect(events.onSwipeBackCancel).toBeCalledTimes(1);
    });
    it('recovers after swipeBack', () => {
      const { view, rerender, SwipeBack, ...events } = setupSwipeBack();
      fireEvent.mouseMove(view, {
        clientX: window.innerWidth + 1,
        clientY: 100,
      });
      fireEvent.mouseUp(view);
      expect(document.getElementById('p1')).toBeTruthy();
      expect(document.getElementById('p2')).toBeTruthy();
      rerender(<SwipeBack activePanel="p1" history={['p1']} />);
      expect(events.onTransition).toBeCalledTimes(1);
      expect(document.getElementById('p1')).toBeTruthy();
      expect(document.getElementById('p2')).toBeNull();
    });
    it('restores scroll after swipeBack', () => {
      let y = 101;
      scrollsCache['scroll']['p1'] = [22];
      const [MockScroll, scrollTo] = mockScrollContext(() => y);
      const { view, rerender, SwipeBack } = setupSwipeBack({ Wrapper: MockScroll });
      fireEvent.mouseMove(view, {
        clientX: window.innerWidth + 1,
        clientY: 100,
      });
      fireEvent.mouseUp(view);
      rerender(<SwipeBack activePanel="p1" history={['p1']} />);
      expect(scrollTo).toBeCalledWith(0, 22);
    });
  });

  describe('scroll control', () => {
    const panels = [<Panel id="p1" key="1" />, <Panel id="p2" key="2" />];
    it('restores on back navigation', () => {
      let y = 101;
      const [MockScroll, scrollTo] = mockScrollContext(() => y);
      const h = render(
        <MockScroll>
          <ViewInfinite activePanel="p1">{panels}</ViewInfinite>
        </MockScroll>,
      );
      // trigger scroll save
      h.rerender(
        <MockScroll>
          <ViewInfinite activePanel="p2">{panels}</ViewInfinite>
        </MockScroll>,
      );
      h.rerender(
        <MockScroll>
          <ViewInfinite activePanel="p1">{panels}</ViewInfinite>
        </MockScroll>,
      );
      act(() => {
        jest.runAllTimers();
      });
      expect(scrollTo).toBeCalledWith(0, y);
    });
    it('resets scroll on forward navigation', () => {
      let y = 101;
      const [MockScroll, scrollTo] = mockScrollContext(() => y);
      const h = render(
        <MockScroll>
          <ViewInfinite activePanel="p2">{panels}</ViewInfinite>
        </MockScroll>,
      );
      // trigger scroll save
      h.rerender(
        <MockScroll>
          <ViewInfinite activePanel="p1">{panels}</ViewInfinite>
        </MockScroll>,
      );
      act(() => {
        jest.runAllTimers();
      });
      scrollTo.mockReset();
      h.rerender(
        <MockScroll>
          <ViewInfinite activePanel="p2">{panels}</ViewInfinite>
        </MockScroll>,
      );
      act(() => {
        jest.runAllTimers();
      });
      expect(scrollTo).toBeCalledWith(0, 0);
    });
  });
});

function setupSwipeBack({
  Wrapper = Fragment,
  childrenForPanel1 = null,
  childrenForPanel2 = null,
  initialProps = {},
  shouldForceDetectXSwipe = true,
}: {
  Wrapper?: ComponentType<HasChildren>;
  childrenForPanel1?: any;
  childrenForPanel2?: any;
  initialProps?: Partial<ViewInfiniteProps>;
  shouldForceDetectXSwipe?: boolean;
} = {}) {
  const events = {
    onSwipeBack: jest.fn(),
    onTransition: jest.fn(),
    onSwipeBackStart: jest.fn(),
    onSwipeBackCancel: jest.fn(),
  };
  const SwipeBack = (p: Partial<ViewInfiniteProps>) => (
    <Wrapper>
      <ConfigProvider platform={Platform.IOS} isWebView>
        <ViewInfinite
          id="scroll"
          activePanel="p2"
          history={['p1', 'p2']}
          {...events}
          {...p}
          {...initialProps}
        >
          <Panel id="p1">{childrenForPanel1}</Panel>
          <Panel id="p2">{childrenForPanel2}</Panel>
        </ViewInfinite>
      </ConfigProvider>
    </Wrapper>
  );
  const component = render(<SwipeBack />);
  act(() => {
    jest.runAllTimers();
  });
  const view = component.container.firstElementChild as Element;
  // force detect x-swipe
  if (shouldForceDetectXSwipe) {
    fireEvent.mouseDown(view, { clientX: 50, clientY: 100 });
    fireEvent.mouseMove(view, { clientX: 40, clientY: 100 });
  }
  return { view, ...events, rerender: component.rerender, SwipeBack };
}
