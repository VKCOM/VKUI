import { act, type ComponentType, Fragment, type ReactNode } from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { getRandomUsers } from '../../testing/mock';
import {
  baselineComponent,
  fakeTimersForScope,
  mockScrollContext,
  mountTest,
  waitCSSKeyframesAnimation,
  waitCSSTransitionEnd,
} from '../../testing/utils';
import type { HasChildren } from '../../types';
import { Avatar } from '../Avatar/Avatar';
import { ConfigProvider } from '../ConfigProvider/ConfigProvider';
import { Gallery } from '../Gallery/Gallery';
import { HorizontalCell } from '../HorizontalCell/HorizontalCell';
import { HorizontalScroll } from '../HorizontalScroll/HorizontalScroll';
import { useNavDirection } from '../NavTransitionDirectionContext/NavTransitionDirectionContext';
import { Panel } from '../Panel/Panel';
import { scrollsCache, View, type ViewProps } from './View';
import { SWIPE_BACK_SHIFT_THRESHOLD } from './utils';
import styles from './View.module.css';

// Basically the same as Root.test.tsx

describe(View, () => {
  baselineComponent(View);

  describe('With Panel', () => {
    fakeTimersForScope(false);
    mountTest(() => (
      <View activePanel="panel">
        <Panel id="panel" />
      </View>
    ));
  });

  describe('shows active panel', () => {
    fakeTimersForScope(false);
    const panels = [
      <Panel id="p1" data-testid="p1" key="1" />,
      <Panel id="p2" data-testid="p2" key="2" />,
    ];
    it('on mount', () => {
      render(<View activePanel="p1">{panels}</View>);
      expect(document.getElementById('p1')).not.toBeNull();
      expect(document.getElementById('p2')).toBeNull();
    });
    it('after prop update', async () => {
      const result = render(<View activePanel="p1">{panels}</View>);
      result.rerender(<View activePanel="p2">{panels}</View>);
      await waitCSSKeyframesAnimation(getViewPanelById('p2'));
      expect(result.queryByTestId('p1')).toBeNull();
      expect(result.queryByTestId('p2')).not.toBeNull();
    });
    it('calls onTransition', async () => {
      const onTransition = vi.fn();
      const result = render(
        <View activePanel="p1" onTransition={onTransition}>
          {panels}
        </View>,
      );
      result.rerender(
        <View activePanel="p2" onTransition={onTransition}>
          {panels}
        </View>,
      );
      await waitCSSKeyframesAnimation(getViewPanelById('p2'), { runOnlyPendingTimers: true });
      expect(onTransition).toHaveBeenCalledExactlyOnceWith({
        from: 'p1',
        to: 'p2',
        isBack: false,
      });
    });
    it('detects back transition', async () => {
      const onTransition = vi.fn();
      const result = render(
        <View activePanel="p2" onTransition={onTransition}>
          {panels}
        </View>,
      );
      result.rerender(
        <View activePanel="p1" onTransition={onTransition}>
          {panels}
        </View>,
      );
      await waitCSSKeyframesAnimation(getViewPanelById('p2'));
      await waitCSSKeyframesAnimation(getViewPanelById('p1'), { runOnlyPendingTimers: true });
      expect(onTransition).toHaveBeenCalledExactlyOnceWith({
        from: 'p2',
        to: 'p1',
        isBack: true,
      });
    });
  });

  describe('blurs active element', () => {
    fakeTimersForScope(false);
    const panels = [
      <Panel id="focus" key="1">
        <input autoFocus data-testid="__autofocus__" />
      </Panel>,
      <Panel id="other" key="2" />,
    ];

    it('on activePanel change', () => {
      render(<View activePanel="focus">{panels}</View>).rerender(
        <View activePanel="other">{panels}</View>,
      );
      act(vi.runAllTimers);
      expect(document.activeElement === document.body).toBe(true);
    });
  });

  describe('can swipeBack', () => {
    fakeTimersForScope(false);
    let nowMock: ReturnType<typeof vi.spyOn>;
    beforeEach(() => {
      nowMock = vi.spyOn(Date, 'now');
    });
    afterEach(() => {
      nowMock && nowMock.mockClear();
    });
    it('cancels swipeBack on swipe left', () => {
      const { view, ...events } = setupSwipeBack();
      fireEvent.mouseDown(view, { clientX: 0, clientY: 100 });
      fireEvent.mouseMove(view, { clientX: SWIPE_BACK_SHIFT_THRESHOLD, clientY: 100 });
      expect(events.onSwipeBackStart).toHaveBeenCalledTimes(1);
      fireEvent.mouseUp(view, { clientX: 0, clientY: 100 });
      act(vi.runAllTimers);
      expect(events.onSwipeBack).not.toHaveBeenCalled();
      expect(events.onSwipeBackCancel).toHaveBeenCalledTimes(1);
    });
    it('does swipeBack immediately on overscroll', () => {
      const { view, ...events } = setupSwipeBack();
      fireEvent.mouseDown(view, { clientX: 0, clientY: 100 });
      fireEvent.mouseMove(view, { clientX: SWIPE_BACK_SHIFT_THRESHOLD, clientY: 100 });
      fireEvent.mouseMove(view, { clientX: window.innerWidth + 1, clientY: 100 });
      fireEvent.mouseUp(view);
      act(vi.runAllTimers);
      expect(events.onSwipeBack).toHaveBeenCalledTimes(1);
      expect(events.onSwipeBackCancel).not.toHaveBeenCalled();
    });
    it('detects transition direction on swipeBack with useNavDirection() hook', () => {
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
      it.each<[string, ReactNode, Partial<ViewProps>]>([
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
        act(vi.runAllTimers);
        expect(events.onSwipeBack).not.toHaveBeenCalled();
      });

      it('should prevent swipe back if swiped to opposite', () => {
        const { view, ...events } = setupSwipeBack();
        fireEvent.mouseDown(view, { clientX: 50, clientY: 100 });
        fireEvent.mouseMove(view, {
          clientX: 40,
          clientY: 100,
        });
        fireEvent.mouseUp(view);
        act(vi.runAllTimers);
        expect(events.onSwipeBack).not.toHaveBeenCalled();
      });
    });
    it('does swipeBack after animation', async () => {
      const { view, ...events } = setupSwipeBack();
      fireEvent.mouseDown(view, { clientX: 0, clientY: 100 });
      fireEvent.mouseMove(view, { clientX: SWIPE_BACK_SHIFT_THRESHOLD, clientY: 100 });
      fireEvent.mouseMove(view, { clientX: window.innerWidth / 2 + 1, clientY: 100 });
      // speed to 0
      nowMock.mockImplementation(() => Infinity);
      fireEvent.mouseUp(view);
      expect(events.onSwipeBack).not.toHaveBeenCalled();
      expect(events.onSwipeBackCancel).not.toHaveBeenCalled();
      await waitCSSTransitionEnd(getViewPanelById('p2'), { propertyName: 'transform' });
      expect(events.onSwipeBack).toHaveBeenCalledTimes(1);
    });
    it('should swipe back by start touch anywhere', async () => {
      const { view, ...events } = setupSwipeBack();
      const fromQuarterScreenX = window.innerWidth / 4;
      const coords = { clientX: fromQuarterScreenX, clientY: 100 };

      fireEvent.mouseDown(view, coords);
      coords.clientX = fromQuarterScreenX + SWIPE_BACK_SHIFT_THRESHOLD;
      fireEvent.mouseMove(view, coords);

      coords.clientX = fromQuarterScreenX + fromQuarterScreenX * 2; // event.shiftX начинается с 0, для правильного высчитывания swipeBackShift, смещаем это значение
      fireEvent.mouseMove(view, coords);
      expect(events.onSwipeBackStart).toHaveBeenCalledTimes(1);

      fireEvent.mouseUp(view);
      await waitCSSTransitionEnd(getViewPanelById('p2'), {
        propertyName: 'transform',
      });

      expect(events.onSwipeBack).toHaveBeenCalledTimes(1);
      expect(events.onSwipeBackCancel).not.toHaveBeenCalled();
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
      act(vi.runAllTimers);
      expect(events.onSwipeBack).not.toHaveBeenCalled();
      expect(events.onSwipeBackCancel).toHaveBeenCalledTimes(1);
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
      expect(events.onTransition).toHaveBeenCalledTimes(1);
      expect(document.getElementById('p1')).toBeTruthy();
      expect(document.getElementById('p2')).toBeNull();
    });

    it('restores scroll after cancelled swipeBack (mouse up during the move)', () => {
      let y = 101;
      scrollsCache['scroll']['p1'] = 22;
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
      expect(scrollTo).toHaveBeenCalledExactlyOnceWith(0, 22);
    });

    it('restores scroll when swipeBack cancelled because user moves panel back to starting point', () => {
      const currentScrollPosition = 22;
      const startPosition = { clientX: 0, clientY: 100 };
      const [MockScroll, scrollTo] = mockScrollContext(() => currentScrollPosition);
      const { view, rerender, SwipeBack } = setupSwipeBack({ Wrapper: MockScroll });
      fireEvent.mouseDown(view, startPosition);
      fireEvent.mouseMove(view, { clientX: SWIPE_BACK_SHIFT_THRESHOLD, clientY: 100 });
      fireEvent.mouseMove(view, startPosition);
      fireEvent.mouseUp(view);

      rerender(<SwipeBack activePanel="p2" history={['p2']} />);
      expect(scrollTo).toHaveBeenCalledExactlyOnceWith(0, currentScrollPosition);
    });

    describe('horizontal scrollable elements', () => {
      const HorizontalScrollExample = () => (
        <HorizontalScroll data-testid="horizontal-scroll">
          <div style={{ width: '800px', height: '50px', display: 'flex' }}>
            {getRandomUsers(20).map((user, index) => (
              <HorizontalCell
                key={user.id}
                size="s"
                title={user.first_name}
                data-testid={`horizontal-cell-${index}`}
              >
                <Avatar size={56} src={user.photo_100} />
              </HorizontalCell>
            ))}
          </div>
        </HorizontalScroll>
      );

      it('should swipe back anyway if viewport start edge touched', async () => {
        const { rerender, SwipeBack, getByTestId, ...events } = setupSwipeBack({
          childrenForPanel2: <HorizontalScrollExample />,
        });

        const elWithScroll = getByTestId('horizontal-scroll').lastElementChild as HTMLElement;
        elWithScroll.style.overflowX = 'auto';
        const elMiddleHorizontalCell = getByTestId('horizontal-cell-10');

        const scrollToLeftAndSwipe = (scrollLeft: number) => {
          elWithScroll.scrollLeft = scrollLeft;

          const coords = { clientX: 0, clientY: 100 };
          fireEvent.mouseDown(elMiddleHorizontalCell, coords);

          coords.clientX = SWIPE_BACK_SHIFT_THRESHOLD;
          fireEvent.mouseMove(elMiddleHorizontalCell, coords);

          coords.clientX = window.innerWidth / 2;
          fireEvent.mouseMove(elMiddleHorizontalCell, coords);

          fireEvent.mouseUp(elMiddleHorizontalCell);
        };

        scrollToLeftAndSwipe(100);
        expect(events.onSwipeBackStart).toHaveBeenCalledTimes(1);
        await waitCSSTransitionEnd(getViewPanelById('p2'), { propertyName: 'transform' });
        expect(events.onSwipeBack).toHaveBeenCalledTimes(1);
        expect(events.onSwipeBackCancel).not.toHaveBeenCalled();

        scrollToLeftAndSwipe(0);
        expect(events.onSwipeBackStart).toHaveBeenCalledTimes(1);
        act(vi.runOnlyPendingTimers);
        expect(events.onSwipeBack).toHaveBeenCalledTimes(1);
        expect(events.onSwipeBackCancel).not.toHaveBeenCalled();
      });

      it('should prevent swipe back only if scroll left is not on start', async () => {
        const { rerender, SwipeBack, getByTestId, ...events } = setupSwipeBack({
          childrenForPanel2: <HorizontalScrollExample />,
        });

        const elWithScroll = getByTestId('horizontal-scroll').lastElementChild as HTMLElement;
        elWithScroll.style.overflowX = 'auto';
        const elMiddleHorizontalCell = getByTestId('horizontal-cell-10');

        const scrollToLeftAndSwipe = (scrollLeft: number) => {
          elWithScroll.scrollLeft = scrollLeft;

          const coords = { clientX: 100, clientY: 100 };
          fireEvent.mouseDown(elMiddleHorizontalCell, coords);

          coords.clientX = 100 * 2 + SWIPE_BACK_SHIFT_THRESHOLD;
          fireEvent.mouseMove(elMiddleHorizontalCell, coords);

          coords.clientX = 100 * 2 + window.innerWidth / 2;
          fireEvent.mouseMove(elMiddleHorizontalCell, coords);

          fireEvent.mouseUp(elMiddleHorizontalCell);
        };

        scrollToLeftAndSwipe(100);
        expect(events.onSwipeBackStart).not.toHaveBeenCalled();
        act(vi.runOnlyPendingTimers);
        expect(events.onSwipeBack).not.toHaveBeenCalled();
        expect(events.onSwipeBackCancel).not.toHaveBeenCalled();

        scrollToLeftAndSwipe(0);
        expect(events.onSwipeBackStart).toHaveBeenCalledTimes(1);
        await waitCSSTransitionEnd(getViewPanelById('p2'), { propertyName: 'transform' });
        expect(events.onSwipeBack).toHaveBeenCalledTimes(1);
        expect(events.onSwipeBackCancel).not.toHaveBeenCalled();
      });
    });

    it('should prevent swipe back if Gallery is drag', () => {
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
      expect(events.onSwipeBackStart).not.toHaveBeenCalled();
      act(vi.runAllTimers);
      expect(events.onSwipeBack).not.toHaveBeenCalled();
      expect(events.onSwipeBackCancel).not.toHaveBeenCalled();
    });
  });

  describe('scroll control', () => {
    fakeTimersForScope(false);
    const panels = [
      <Panel id="p1" data-testid="p1" key="1" />,
      <Panel id="p2" data-testid="p2" key="2" />,
    ];

    it('restores on back navigation', async () => {
      let y = 101;
      const [MockScroll, scrollTo] = mockScrollContext(() => y);
      const h = render(
        <MockScroll>
          <View activePanel="p1">{panels}</View>
        </MockScroll>,
      );
      // trigger scroll save
      h.rerender(
        <MockScroll>
          <View activePanel="p2">{panels}</View>
        </MockScroll>,
      );
      h.rerender(
        <MockScroll>
          <View activePanel="p1">{panels}</View>
        </MockScroll>,
      );
      await waitCSSKeyframesAnimation(getViewPanelById('p2'));
      await waitCSSKeyframesAnimation(getViewPanelById('p1'), { runOnlyPendingTimers: true });
      expect(scrollTo).toHaveBeenCalledExactlyOnceWith(0, y);
    });

    it('resets scroll on forward navigation', async () => {
      let y = 101;
      const [MockScroll, scrollTo] = mockScrollContext(() => y);
      const h = render(
        <MockScroll>
          <View activePanel="p2">{panels}</View>
        </MockScroll>,
      );
      // trigger scroll save
      h.rerender(
        <MockScroll>
          <View activePanel="p1">{panels}</View>
        </MockScroll>,
      );
      await waitCSSKeyframesAnimation(getViewPanelById('p2'));
      await waitCSSKeyframesAnimation(getViewPanelById('p1'), { runOnlyPendingTimers: true });
      scrollTo.mockReset();
      h.rerender(
        <MockScroll>
          <View activePanel="p2">{panels}</View>
        </MockScroll>,
      );
      await waitCSSKeyframesAnimation(getViewPanelById('p1'));
      await waitCSSKeyframesAnimation(getViewPanelById('p2'), { runOnlyPendingTimers: true });
      expect(scrollTo).toHaveBeenCalledExactlyOnceWith(0, 0);
    });
  });
});

function getViewPanelById(panelTestId: string) {
  return screen.getByTestId(panelTestId).closest<HTMLElement>(`.${styles.panel}`)!;
}

function setupSwipeBack({
  Wrapper = Fragment,
  childrenForPanel1 = null,
  childrenForPanel2 = null,
  initialProps = {},
}: {
  Wrapper?: ComponentType<HasChildren>;
  childrenForPanel1?: any;
  childrenForPanel2?: any;
  initialProps?: Partial<ViewProps>;
} = {}) {
  const events = {
    onSwipeBack: vi.fn(),
    onTransition: vi.fn(),
    onSwipeBackStart: vi.fn(),
    onSwipeBackCancel: vi.fn(),
  };
  const SwipeBack = (p: Partial<ViewProps>) => (
    <Wrapper>
      <ConfigProvider platform="ios" isWebView>
        <View
          data-testid="view"
          id="scroll"
          activePanel="p2"
          history={['p1', 'p2']}
          {...events}
          {...p}
          {...initialProps}
        >
          <Panel id="p1" data-testid="p1">
            {childrenForPanel1}
          </Panel>
          <Panel id="p2" data-testid="p2">
            {childrenForPanel2}
          </Panel>
        </View>
      </ConfigProvider>
    </Wrapper>
  );
  const component = render(<SwipeBack />);
  const view = component.getByTestId('view');

  return { view, ...events, ...component, SwipeBack };
}
