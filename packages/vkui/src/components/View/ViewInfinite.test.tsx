import * as React from 'react';
import { type ComponentType, Fragment, type ReactNode } from 'react';
import { act, fireEvent, render, screen } from '@testing-library/react';
import { getRandomUsers } from '../../testing/mock';
import {
  baselineComponent,
  fakeTimers,
  mockScrollContext,
  mountTest,
  runAllTimers,
} from '../../testing/utils';
import { HasChildren } from '../../types';
import { Avatar } from '../Avatar/Avatar';
import { ConfigProvider } from '../ConfigProvider/ConfigProvider';
import { Gallery } from '../Gallery/Gallery';
import { HorizontalCell } from '../HorizontalCell/HorizontalCell';
import { HorizontalScroll } from '../HorizontalScroll/HorizontalScroll';
import { useNavDirection } from '../NavTransitionDirectionContext/NavTransitionDirectionContext';
import { Panel } from '../Panel/Panel';
import { scrollsCache, ViewInfinite, type ViewInfiniteProps } from './ViewInfinite';
import { SWIPE_BACK_SHIFT_THRESHOLD } from './utils';

// Basically the same as View.test.tsx

describe('ViewInfinite', () => {
  fakeTimers();
  baselineComponent(ViewInfinite);

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
      runAllTimers();
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
      runAllTimers();
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
      runAllTimers();
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
      fireEvent.mouseDown(view, { clientX: 0, clientY: 100 });
      fireEvent.mouseMove(view, { clientX: SWIPE_BACK_SHIFT_THRESHOLD, clientY: 100 });
      expect(events.onSwipeBackStart).toBeCalledTimes(1);
      fireEvent.mouseUp(view, { clientX: 0, clientY: 100 });
      act(() => jest.runAllTimers());
      expect(events.onSwipeBack).not.toBeCalled();
      expect(events.onSwipeBackCancel).toBeCalledTimes(1);
    });
    it('does swipeBack immediately on overscroll', () => {
      const { view, ...events } = setupSwipeBack();
      fireEvent.mouseDown(view, { clientX: 0, clientY: 100 });
      fireEvent.mouseMove(view, { clientX: SWIPE_BACK_SHIFT_THRESHOLD, clientY: 100 });
      fireEvent.mouseMove(view, { clientX: window.innerWidth + 1, clientY: 100 });
      fireEvent.mouseUp(view);
      act(() => jest.runAllTimers());
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
      });

      // only panel 2 visible by default with undefined direction
      expect(screen.queryByText('Direction: undefined')).toBeTruthy();
      expect(screen.queryByText('Direction: backwards')).toBeFalsy();
      fireEvent.mouseDown(view, { clientX: 0, clientY: 100 });
      fireEvent.mouseMove(view, { clientX: SWIPE_BACK_SHIFT_THRESHOLD, clientY: 100 });

      // both panels are visible and the content on panel 1 knows about backwards direction
      expect(screen.queryByText('Direction: undefined')).toBeTruthy();
      expect(screen.queryByText('Direction: backwards')).toBeTruthy();
    });
    describe('does not swipe back on', () => {
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
        const elPreventSwipeBack = screen.getByTestId('ex');
        fireEvent.mouseDown(elPreventSwipeBack, { clientX: 0, clientY: 100 });
        fireEvent.mouseMove(elPreventSwipeBack, {
          clientX: SWIPE_BACK_SHIFT_THRESHOLD,
          clientY: 100,
        });
        fireEvent.mouseMove(elPreventSwipeBack, { clientX: window.innerWidth + 1, clientY: 100 });
        fireEvent.mouseUp(elPreventSwipeBack);
        act(() => jest.runAllTimers());
        expect(events.onSwipeBack).not.toBeCalled();
      });

      it('should prevent swipe back if swiped to opposite', () => {
        const { view, ...events } = setupSwipeBack();
        fireEvent.mouseDown(view, { clientX: 50, clientY: 100 });
        fireEvent.mouseMove(view, {
          clientX: 40,
          clientY: 100,
        });
        fireEvent.mouseUp(view);
        act(() => jest.runAllTimers());
        expect(events.onSwipeBack).not.toBeCalled();
      });
    });
    it('does swipeBack after animation', () => {
      const { view, ...events } = setupSwipeBack();
      fireEvent.mouseDown(view, { clientX: 0, clientY: 100 });
      fireEvent.mouseMove(view, { clientX: SWIPE_BACK_SHIFT_THRESHOLD, clientY: 100 });
      fireEvent.mouseMove(view, { clientX: window.innerWidth / 2 + 1, clientY: 100 });
      // speed to 0
      nowMock.mockImplementation(() => Infinity);
      fireEvent.mouseUp(view);
      expect(events.onSwipeBack).not.toBeCalled();
      expect(events.onSwipeBackCancel).not.toBeCalled();
      act(() => jest.runAllTimers());
      expect(events.onSwipeBack).toBeCalledTimes(1);
    });
    it('should swipe back by start touch anywhere', () => {
      const { view, ...events } = setupSwipeBack();

      const fromQuarterScreenX = window.innerWidth / 4;
      fireEvent.mouseDown(view, { clientX: fromQuarterScreenX, clientY: 100 });
      fireEvent.mouseMove(view, {
        clientX: fromQuarterScreenX + SWIPE_BACK_SHIFT_THRESHOLD,
        clientY: 100,
      });

      const shiftXWithOffset = fromQuarterScreenX * 2; // event.shiftX начинается с 0, для правильного высчитывания swipeBackShift, смещаем это значение
      fireEvent.mouseMove(view, { clientX: fromQuarterScreenX + shiftXWithOffset, clientY: 100 });
      expect(events.onSwipeBackStart).toBeCalledTimes(1);
      fireEvent.mouseUp(view);
      act(() => jest.runAllTimers());
      expect(events.onSwipeBack).toBeCalledTimes(1);
      expect(events.onSwipeBackCancel).not.toBeCalled();
    });
    it('fails weak swipeBack', () => {
      const { view, ...events } = setupSwipeBack();
      fireEvent.mouseDown(view, { clientX: 0, clientY: 100 });
      fireEvent.mouseMove(view, {
        clientX: window.innerWidth / 2 - 1,
        clientY: 100,
      });
      // speed to 0
      nowMock.mockImplementation(() => Infinity);
      fireEvent.mouseUp(view);
      act(() => jest.runAllTimers());
      expect(events.onSwipeBack).not.toBeCalled();
      expect(events.onSwipeBackCancel).toBeCalledTimes(1);
    });
    it('recovers after swipeBack', () => {
      const { view, rerender, SwipeBack, ...events } = setupSwipeBack();
      fireEvent.mouseDown(view, { clientX: 0, clientY: 100 });
      fireEvent.mouseMove(view, { clientX: SWIPE_BACK_SHIFT_THRESHOLD, clientY: 100 });
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
      fireEvent.mouseDown(view, { clientX: 0, clientY: 100 });
      fireEvent.mouseMove(view, { clientX: SWIPE_BACK_SHIFT_THRESHOLD, clientY: 100 });
      fireEvent.mouseMove(view, {
        clientX: window.innerWidth + 1,
        clientY: 100,
      });
      fireEvent.mouseUp(view);
      rerender(<SwipeBack activePanel="p1" history={['p1']} />);
      expect(scrollTo).toBeCalledWith(0, 22);
    });

    describe('horizontal scrollable elements', () => {
      const HorizontalScrollExample = () => (
        <HorizontalScroll data-testid="horizontal-scroll">
          <div style={{ width: '800px', height: '50px', display: 'flex' }}>
            {getRandomUsers(20).map((user, index) => (
              <HorizontalCell
                key={user.id}
                size="s"
                header={user.first_name}
                data-testid={`horizontal-cell-${index}`}
              >
                <Avatar size={56} src={user.photo_100} />
              </HorizontalCell>
            ))}
          </div>
        </HorizontalScroll>
      );

      it('should swipe back anyway if viewport start edge touched', () => {
        const { rerender, SwipeBack, getByTestId, ...events } = setupSwipeBack({
          childrenForPanel2: <HorizontalScrollExample />,
        });

        const elWithScroll = getByTestId('horizontal-scroll').lastElementChild as HTMLElement;
        elWithScroll.style.overflowX = 'auto';
        elWithScroll.scrollLeft = 100;

        const elMiddleHorizontalCell = getByTestId('horizontal-cell-10');

        fireEvent.mouseDown(elMiddleHorizontalCell, { clientX: 0, clientY: 100 });
        fireEvent.mouseMove(elMiddleHorizontalCell, {
          clientX: SWIPE_BACK_SHIFT_THRESHOLD,
          clientY: 100,
        });
        fireEvent.mouseMove(elMiddleHorizontalCell, {
          clientX: window.innerWidth / 2,
          clientY: 100,
        });
        fireEvent.mouseUp(elMiddleHorizontalCell);
        expect(events.onSwipeBackStart).toBeCalledTimes(1);
        act(() => jest.runAllTimers());
        expect(events.onSwipeBack).toBeCalledTimes(1);
        expect(events.onSwipeBackCancel).not.toBeCalled();

        elWithScroll.scrollLeft = 0;

        fireEvent.mouseDown(elMiddleHorizontalCell, { clientX: 0, clientY: 100 });
        fireEvent.mouseMove(elMiddleHorizontalCell, {
          clientX: SWIPE_BACK_SHIFT_THRESHOLD,
          clientY: 100,
        });
        fireEvent.mouseMove(elMiddleHorizontalCell, {
          clientX: window.innerWidth / 2,
          clientY: 100,
        });
        fireEvent.mouseUp(elMiddleHorizontalCell);
        expect(events.onSwipeBackStart).toBeCalledTimes(1);
        act(() => jest.runAllTimers());
        expect(events.onSwipeBack).toBeCalledTimes(1);
        expect(events.onSwipeBackCancel).not.toBeCalled();
      });

      it('should prevent swipe back only if scroll left is not on start', () => {
        const { rerender, SwipeBack, getByTestId, ...events } = setupSwipeBack({
          childrenForPanel2: <HorizontalScrollExample />,
        });

        const elWithScroll = getByTestId('horizontal-scroll').lastElementChild as HTMLElement;
        elWithScroll.style.overflowX = 'auto';
        elWithScroll.scrollLeft = 100;

        const elMiddleHorizontalCell = getByTestId('horizontal-cell-10');

        fireEvent.mouseDown(elMiddleHorizontalCell, { clientX: 100, clientY: 100 });
        fireEvent.mouseMove(elMiddleHorizontalCell, {
          clientX: 100 * 2 + SWIPE_BACK_SHIFT_THRESHOLD,
          clientY: 100,
        });
        fireEvent.mouseMove(elMiddleHorizontalCell, {
          clientX: 100 * 2 + window.innerWidth / 2,
          clientY: 100,
        });
        fireEvent.mouseUp(elMiddleHorizontalCell);
        expect(events.onSwipeBackStart).not.toBeCalled();
        act(() => jest.runAllTimers());
        expect(events.onSwipeBack).not.toBeCalled();
        expect(events.onSwipeBackCancel).not.toBeCalled();

        elWithScroll.scrollLeft = 0;

        fireEvent.mouseDown(elMiddleHorizontalCell, { clientX: 100, clientY: 100 });
        fireEvent.mouseMove(elMiddleHorizontalCell, {
          clientX: 100 * 2 + SWIPE_BACK_SHIFT_THRESHOLD,
          clientY: 100,
        });
        fireEvent.mouseMove(elMiddleHorizontalCell, {
          clientX: 100 * 2 + window.innerWidth / 2,
          clientY: 100,
        });
        fireEvent.mouseUp(elMiddleHorizontalCell);
        expect(events.onSwipeBackStart).toBeCalledTimes(1);
        act(() => jest.runAllTimers());
        expect(events.onSwipeBack).toBeCalledTimes(1);
        expect(events.onSwipeBackCancel).not.toBeCalled();
      });
    });

    it('should prevent swipe back if Gallery is dragging', () => {
      const { rerender, SwipeBack, getByTestId, ...events } = setupSwipeBack({
        childrenForPanel2: (
          <Gallery slideWidth="90%" align="center">
            <div
              data-testid="slide-1"
              style={{ backgroundColor: 'var(--vkui--color_background_negative)' }}
            />
            <div style={{ backgroundColor: 'var(--vkui--color_background_positive)' }} />
            <div style={{ backgroundColor: 'var(--vkui--color_background_accent)' }} />
          </Gallery>
        ),
      });

      const elSlide1 = getByTestId('slide-1');

      fireEvent.mouseDown(elSlide1, { clientX: 0, clientY: 100 });
      fireEvent.mouseMove(elSlide1, { clientX: SWIPE_BACK_SHIFT_THRESHOLD, clientY: 100 });
      fireEvent.mouseMove(elSlide1, { clientX: window.innerWidth / 2, clientY: 100 });
      fireEvent.mouseUp(elSlide1);
      expect(events.onSwipeBackStart).not.toBeCalled();
      act(() => jest.runAllTimers());
      expect(events.onSwipeBack).not.toBeCalled();
      expect(events.onSwipeBackCancel).not.toBeCalled();
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
      runAllTimers();
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
      runAllTimers();
      scrollTo.mockReset();
      h.rerender(
        <MockScroll>
          <ViewInfinite activePanel="p2">{panels}</ViewInfinite>
        </MockScroll>,
      );
      runAllTimers();
      expect(scrollTo).toBeCalledWith(0, 0);
    });
  });
});

function setupSwipeBack({
  Wrapper = Fragment,
  childrenForPanel1 = null,
  childrenForPanel2 = null,
  initialProps = {},
}: {
  Wrapper?: ComponentType<HasChildren>;
  childrenForPanel1?: any;
  childrenForPanel2?: any;
  initialProps?: Partial<ViewInfiniteProps>;
} = {}) {
  const events = {
    onSwipeBack: jest.fn(),
    onTransition: jest.fn(),
    onSwipeBackStart: jest.fn(),
    onSwipeBackCancel: jest.fn(),
  };
  const SwipeBack = (p: Partial<ViewInfiniteProps>) => (
    <Wrapper>
      <ConfigProvider platform="ios" isWebView>
        <ViewInfinite
          data-testid="view"
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
  runAllTimers();
  return { view: component.getByTestId('view'), ...events, ...component, SwipeBack };
}
