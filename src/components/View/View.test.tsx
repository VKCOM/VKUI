import { fireEvent, render } from '@testing-library/react';
import ConfigProvider from '../ConfigProvider/ConfigProvider';
import { IOS } from '../../lib/platform';
import { baselineComponent, mountTest } from '../../testing/utils';
import { Panel } from '../Panel/Panel';
import View, { ViewProps } from './View';
import ViewInfinite from './ViewInfinite';

beforeEach(() => jest.useFakeTimers());
afterEach(() => jest.useRealTimers());

// Basically the same as Root.test.tsx

describe.each([
  ['View', View],
  ['ViewInfinite', ViewInfinite],
])('%s', (_name, View) => {
  baselineComponent(View);
  describe('With Panel', () =>
    mountTest(() => <View activePanel="panel"><Panel id="panel" /></View>));

  describe('shows active panel', () => {
    const panels = [<Panel id="p1" key="1" />, <Panel id="p2" key="2" />];
    it('on mount', () => {
      render(<View activePanel="p1">{panels}</View>);
      expect(document.getElementById('p1')).not.toBeNull();
      expect(document.getElementById('p2')).toBeNull();
    });
    it('after prop update', () => {
      render(<View activePanel="p1">{panels}</View>)
        .rerender(<View activePanel="p2">{panels}</View>);
      jest.runAllTimers();
      expect(document.getElementById('p1')).toBeNull();
      expect(document.getElementById('p2')).not.toBeNull();
    });
    it('calls onTransition', () => {
      const onTransition = jest.fn();
      render(<View activePanel="p1" onTransition={onTransition}>{panels}</View>)
        .rerender(<View activePanel="p2" onTransition={onTransition}>{panels}</View>);
      jest.runAllTimers();
      expect(onTransition).toBeCalledTimes(1);
      expect(onTransition).toBeCalledWith({ from: 'p1', to: 'p2', isBack: false });
    });
    it('detects back transition', () => {
      const onTransition = jest.fn();
      render(<View activePanel="p2" onTransition={onTransition}>{panels}</View>)
        .rerender(<View activePanel="p1" onTransition={onTransition}>{panels}</View>);
      jest.runAllTimers();
      expect(onTransition).toBeCalledWith({ from: 'p2', to: 'p1', isBack: true });
    });
  });

  describe('blurs active element', () => {
    const renderFocused = () => render(<input autoFocus data-testid="__autofocus__" />);
    it('on activePanel change', () => {
      renderFocused();
      const panels = [<Panel id="focus" key="1" />, <Panel id="other" key="2" />];
      render(<View activePanel="focus">{panels}</View>)
        .rerender(<View activePanel="other">{panels}</View>);
      expect(document.activeElement === document.body).toBe(true);
    });
    it.each(['popout', 'modal'])('on %s', (key) => {
      const props = { [key]: <div /> };
      renderFocused();
      render(<View activePanel="focus"><Panel id="focus" /></View>)
        .rerender(<View activePanel="focus" {...props}><Panel id="focus" /></View>);
      expect(document.activeElement === document.body).toBe(true);
    });
  });

  describe('can swipeBack', () => {
    let nowMock: jest.SpyInstance;
    const setupSwipeBack = () => {
      const events = {
        onSwipeBack: jest.fn(),
        onTransition: jest.fn(),
        onSwipeBackStart: jest.fn(),
        onSwipeBackCancel: jest.fn(),
      };
      const SwipeBack = (p: Partial<ViewProps>) => (
        <ConfigProvider platform={IOS} isWebView>
          <View activePanel="p2" history={['p1', 'p2']} {...events} {...p}>
            <Panel id="p1" />
            <Panel id="p2" />
          </View>
        </ConfigProvider>
      );
      const h = render(<SwipeBack />);
      jest.runAllTimers();
      const view = h.container.firstElementChild;
      // force detect x-swipe
      fireEvent.mouseDown(view, { clientX: 50, clientY: 100 });
      fireEvent.mouseMove(view, { clientX: 40, clientY: 100 });
      nowMock = jest.spyOn(Date, 'now');
      return { view, ...events, rerender: h.rerender, SwipeBack };
    };
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
      fireEvent.mouseMove(view, { clientX: window.innerWidth + 1, clientY: 100 });
      fireEvent.mouseUp(view);
      expect(events.onSwipeBack).toBeCalledTimes(1);
      expect(events.onSwipeBackCancel).not.toBeCalled();
    });
    it('does swipeBack after animation', () => {
      const { view, ...events } = setupSwipeBack();
      fireEvent.mouseMove(view, { clientX: window.innerWidth / 2 + 1, clientY: 100 });
      // speed to 0
      nowMock.mockImplementation(() => Infinity);
      fireEvent.mouseUp(view);
      expect(events.onSwipeBack).not.toBeCalled();
      expect(events.onSwipeBackCancel).not.toBeCalled();
      jest.runAllTimers();
      expect(events.onSwipeBack).toBeCalledTimes(1);
    });
    it('fails weak swipeBack', () => {
      const { view, ...events } = setupSwipeBack();
      fireEvent.mouseMove(view, { clientX: window.innerWidth / 2 - 1, clientY: 100 });
      // speed to 0
      nowMock.mockImplementation(() => Infinity);
      fireEvent.mouseUp(view);
      jest.runAllTimers();
      expect(events.onSwipeBack).not.toBeCalled();
      expect(events.onSwipeBackCancel).toBeCalledTimes(1);
    });
    it('recovers after swipeBack', () => {
      const { view, rerender, SwipeBack, ...events } = setupSwipeBack();
      expect(document.getElementById('p1')).toBeTruthy();
      expect(document.getElementById('p2')).toBeTruthy();
      rerender(<SwipeBack activePanel="p1" history={['p1']} />);
      expect(events.onTransition).toBeCalledTimes(1);
      expect(document.getElementById('p1')).toBeTruthy();
      expect(document.getElementById('p2')).toBeNull();
    });
  });
});
