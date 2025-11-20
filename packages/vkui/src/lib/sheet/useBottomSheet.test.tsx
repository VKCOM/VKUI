import { act } from 'react';
import { fireEvent, render, renderHook } from '@testing-library/react';
import { clamp } from '../../helpers/math';
import { requestAnimationFrameMock, touchEventMock } from '../../testing/utils';
import { rubberbandIfOutOfBounds } from '../animation';
import {
  BLOCK_SHEET_BEHAVIOR_DATA_ATTRIBUTE,
  BLOCK_SHEET_BEHAVIOR_DATA_ATTRIBUTE_KEY,
  DRAG_THRESHOLDS,
  SNAP_POINT_DETENTS,
} from './constants';
import { useBottomSheet, type UseBottomSheetOptions } from './useBottomSheet';

const DRAG_Y = DRAG_THRESHOLDS.DISTANCE_FOR_MOVING_START;

const DRAG_OFFSET = 8;

const SHEET_HEIGHT = 800;

const SCROLL_HEIGHT = SHEET_HEIGHT + 200;

const sheetPropertyValue = (
  initialSnapPoint: 'auto' | number,
  currentSnapPoint: number,
  dragOffset: number,
  sheetHeight: number,
) => {
  return initialSnapPoint === 'auto'
    ? sheetHeight - dragOffset
    : rubberbandIfOutOfBounds(
        currentSnapPoint - (dragOffset / sheetHeight) * currentSnapPoint,
        SNAP_POINT_DETENTS.MIN,
        SNAP_POINT_DETENTS.LARGE,
      );
};

const backdropOpacityPropertyValue = (
  initialSnapPoint: 'auto' | number,
  currentSnapPoint: number,
  dragOffset = DRAG_OFFSET,
  sheetHeight = SHEET_HEIGHT,
) => {
  const value =
    initialSnapPoint === 'auto'
      ? sheetPropertyValue(initialSnapPoint, currentSnapPoint, dragOffset, sheetHeight) /
        sheetHeight
      : (sheetPropertyValue(initialSnapPoint, currentSnapPoint, dragOffset, sheetHeight) * 2) /
        SNAP_POINT_DETENTS.LARGE;
  return clamp(value, 0, 1);
};

const DETENTS_A: [number, number, number] = [0, 50, 100];

const DETENTS_B: [number, number] = [0, 100];

const DEFAULT_PROPS: UseBottomSheetOptions = {
  sheetCSSProperty: '--sheet',
  backdropCSSProperty: '--backdrop',
  snapPoint: { initial: 50, detents: DETENTS_A },
};

describe(useBottomSheet, () => {
  beforeEach(() => {
    vi.useFakeTimers({ now: new Date('2024-01-01T00:00:00') });
    requestAnimationFrameMock.init();
  });
  afterEach(() => {
    vi.useRealTimers();
    requestAnimationFrameMock.destroy();
  });

  it.each([true, false])('should be disabled (enabled: %s)', (enabled) => {
    const h = renderHook(() => useBottomSheet(enabled, DEFAULT_PROPS));
    expect(h.result.current[1]).toBeUndefined();
  });

  it('should not defines initialStyle', () => {
    const h = renderHook(() =>
      useBottomSheet(true, { ...DEFAULT_PROPS, snapPoint: 'auto' as const }),
    );
    expect(h.result.current[0].initialStyle).toBeUndefined();
  });

  it('should defines initialStyle', () => {
    const h = renderHook(() => useBottomSheet(true, DEFAULT_PROPS));
    expect(h.result.current[0].initialStyle).toEqual({ '--sheet': '50%' });
  });

  it('should be initialized', () => {
    const sheetEl = document.createElement('div');
    const h = renderHook(() => useBottomSheet(true, DEFAULT_PROPS));
    act(() => h.result.current[0].setSheetEl(sheetEl));
    expect(h.result.current[1]).not.toBeUndefined();
  });

  describe.each([
    { snapPoint: 'auto' as const, expectedSheetPropertyValue: '' },
    { snapPoint: { initial: 50, detents: DETENTS_A }, expectedSheetPropertyValue: '50%' },
    { snapPoint: { initial: 100, detents: DETENTS_B }, expectedSheetPropertyValue: '100%' },
  ])('prevent swipes (snapPoint: $snapPoint):', ({ snapPoint, expectedSheetPropertyValue }) => {
    const props = { ...DEFAULT_PROPS, snapPoint };

    test.each([
      {
        type: 'axis === "x"',
        touchMove: [
          [DRAG_Y, 0],
          [50, 0],
        ] as const,
      },
      {
        type: `distance < ${DRAG_Y}`,
        touchMove: [
          [0, DRAG_Y - 1],
          [0, DRAG_Y + 1],
        ] as const,
      },
    ])(
      '- until pan gesture becomes expected ($type)',
      ({ touchMove: [touchMoveFrom, touchMoveTo] }) => {
        const r = render(<div data-testid="sheetEl" />);
        const sheetEl = r.getByTestId('sheetEl');
        Object.defineProperty(sheetEl, 'offsetHeight', { value: SHEET_HEIGHT });

        const h = renderHook(() => useBottomSheet(true, props));
        act(() => h.result.current[0].setSheetEl(sheetEl));

        r.rerender(
          <div
            data-testid="sheetEl"
            style={h.result.current[0].initialStyle}
            {...h.result.current[1]}
          />,
        );
        expect(sheetEl.style.getPropertyValue('--sheet')).toBe(expectedSheetPropertyValue);

        fireEvent.touchStart(sheetEl, touchEventMock({ clientX: 0, clientY: 0, target: sheetEl }));

        vi.setSystemTime(new Date('2024-01-01T00:00:00'));
        fireEvent.touchMove(
          sheetEl,
          touchEventMock({
            clientX: touchMoveFrom[0],
            clientY: touchMoveFrom[1],
            target: sheetEl,
          }),
        );
        fireEvent.touchMove(
          sheetEl,
          touchEventMock({ clientX: touchMoveTo[0], clientY: touchMoveTo[1], target: sheetEl }),
        );
        requestAnimationFrameMock.triggerNextAnimationFrame();

        expect(sheetEl.style.getPropertyValue('--sheet')).toBe(expectedSheetPropertyValue);

        vi.setSystemTime(new Date('2024-01-01T00:00:02'));
        fireEvent.touchEnd(sheetEl);
        requestAnimationFrameMock.triggerNextAnimationFrame();
        fireEvent.transitionEnd(sheetEl);
      },
    );

    test.each([BLOCK_SHEET_BEHAVIOR_DATA_ATTRIBUTE_KEY, 'external'])(
      '- immediately if pannedEl is not valid (pannedEl is %s)',
      (testId) => {
        const r = render(
          <>
            <div data-testid="sheetEl">
              <div
                data-testid={BLOCK_SHEET_BEHAVIOR_DATA_ATTRIBUTE_KEY}
                {...BLOCK_SHEET_BEHAVIOR_DATA_ATTRIBUTE}
              />
            </div>
            <div data-testid="external" />
          </>,
        );
        const sheetEl = r.getByTestId('sheetEl');
        Object.defineProperty(sheetEl, 'offsetHeight', { value: SHEET_HEIGHT });

        const h = renderHook(() => useBottomSheet(true, props));
        act(() => h.result.current[0].setSheetEl(sheetEl));

        r.rerender(
          <>
            <div
              data-testid="sheetEl"
              style={h.result.current[0].initialStyle}
              {...h.result.current[1]}
            >
              <div
                data-testid={BLOCK_SHEET_BEHAVIOR_DATA_ATTRIBUTE_KEY}
                {...BLOCK_SHEET_BEHAVIOR_DATA_ATTRIBUTE}
              />
            </div>
            <div data-testid="external" />
          </>,
        );
        expect(sheetEl.style.getPropertyValue('--sheet')).toBe(expectedSheetPropertyValue);

        const target = r.getByTestId(testId);
        fireEvent.touchStart(target, touchEventMock({ clientY: 0, target }));

        vi.setSystemTime(new Date('2024-01-01T00:00:00'));
        fireEvent.touchMove(target, touchEventMock({ clientY: DRAG_Y, target }));
        fireEvent.touchMove(target, touchEventMock({ clientY: DRAG_Y + DRAG_OFFSET, target }));
        requestAnimationFrameMock.triggerNextAnimationFrame();

        expect(sheetEl.style.getPropertyValue('--sheet')).toBe(expectedSheetPropertyValue);

        vi.setSystemTime(new Date('2024-01-01T00:00:02'));
        fireEvent.touchEnd(target);
        requestAnimationFrameMock.triggerNextAnimationFrame();
        fireEvent.transitionEnd(sheetEl);
      },
    );

    test.each([
      {
        description: 'scrollTop !== 0',
        scroll: { scrollTop: 10, scrollHeight: SCROLL_HEIGHT },
        touchMove: [DRAG_Y, DRAG_Y + DRAG_OFFSET] as const,
      },
      ...(expectedSheetPropertyValue !== '50%'
        ? [
            {
              description: 'direction === -1',
              scroll: { scrollTop: 0, scrollHeight: SCROLL_HEIGHT },
              touchMove: [-1 * DRAG_Y, -1 * (DRAG_Y + DRAG_OFFSET)] as const,
            },
          ]
        : []),
    ])(
      '- until vertical scrolling on sheetScrollEl becomes expected ($description)',
      ({ scroll, touchMove: [touchMoveFrom, touchMoveTo] }) => {
        const r = render(
          <div data-testid="sheetEl">
            <div data-testid="sheetScrollEl">scroll</div>
          </div>,
        );

        const sheetEl = r.getByTestId('sheetEl');
        Object.defineProperty(sheetEl, 'offsetHeight', { value: SHEET_HEIGHT });

        const sheetScrollEl = r.getByTestId('sheetScrollEl');
        Object.defineProperty(sheetScrollEl, 'scrollTop', { value: scroll.scrollTop });
        Object.defineProperty(sheetScrollEl, 'clientHeight', { value: SHEET_HEIGHT });
        Object.defineProperty(sheetScrollEl, 'scrollHeight', { value: scroll.scrollHeight });

        const h = renderHook(() => useBottomSheet(true, props));
        act(() => {
          h.result.current[0].setSheetEl(sheetEl);
          h.result.current[0].setSheetScrollEl(sheetScrollEl);
        });

        r.rerender(
          <div
            data-testid="sheetEl"
            style={h.result.current[0].initialStyle}
            {...h.result.current[1]}
          >
            <div data-testid="sheetScrollEl">scroll</div>
          </div>,
        );
        expect(sheetEl.style.getPropertyValue('--sheet')).toBe(expectedSheetPropertyValue);

        const target = sheetScrollEl;
        fireEvent.touchStart(sheetScrollEl, touchEventMock({ clientY: 0, target }));

        vi.setSystemTime(new Date('2024-01-01T00:00:00'));
        fireEvent.touchMove(sheetScrollEl, touchEventMock({ clientY: touchMoveFrom, target }));
        fireEvent.touchMove(sheetScrollEl, touchEventMock({ clientY: touchMoveTo, target }));
        requestAnimationFrameMock.triggerNextAnimationFrame();

        expect(sheetEl.style.getPropertyValue('--sheet')).toBe(expectedSheetPropertyValue);

        vi.setSystemTime(new Date('2024-01-01T00:00:02'));
        fireEvent.touchEnd(sheetEl);
        requestAnimationFrameMock.triggerNextAnimationFrame();
        fireEvent.transitionEnd(sheetEl);
      },
    );

    test.each([
      {
        description: 'scrollTop !== 0',
        scroll: { scrollTop: 10, scrollHeight: SCROLL_HEIGHT },
        touchMove: [DRAG_Y, DRAG_Y + DRAG_OFFSET] as const,
      },
      ...(expectedSheetPropertyValue !== '50%'
        ? [
            {
              description: 'direction === -1',
              scroll: { scrollTop: 0, scrollHeight: SCROLL_HEIGHT },
              touchMove: [-1 * DRAG_Y, -1 * (DRAG_Y + DRAG_OFFSET)] as const,
            },
          ]
        : []),
    ])(
      '- immediately if vertical scrolling on pannedEl is scrolled ($description)',
      ({ scroll, touchMove: [touchMoveFrom, touchMoveTo] }) => {
        const r = render(
          <div data-testid="sheetEl">
            <div data-testid="innerScrollEl">
              <div data-testid="targetEl" />
            </div>
          </div>,
        );

        const sheetEl = r.getByTestId('sheetEl');
        Object.defineProperty(sheetEl, 'offsetHeight', { value: SHEET_HEIGHT });

        const innerScrollEl = r.getByTestId('innerScrollEl');
        innerScrollEl.style.setProperty('overflow-y', 'scroll');
        Object.defineProperty(innerScrollEl, 'scrollTop', { value: scroll.scrollTop });
        Object.defineProperty(innerScrollEl, 'clientHeight', { value: SHEET_HEIGHT });
        Object.defineProperty(innerScrollEl, 'scrollHeight', { value: scroll.scrollHeight });

        const h = renderHook(() => useBottomSheet(true, props));
        act(() => h.result.current[0].setSheetEl(sheetEl));

        r.rerender(
          <div
            data-testid="sheetEl"
            style={h.result.current[0].initialStyle}
            {...h.result.current[1]}
          >
            <div data-testid="innerScrollEl">
              <div data-testid="targetEl" />
            </div>
          </div>,
        );
        expect(sheetEl.style.getPropertyValue('--sheet')).toBe(expectedSheetPropertyValue);

        const target = r.getByTestId('targetEl');
        fireEvent.touchStart(target, touchEventMock({ clientY: 0, target }));

        vi.setSystemTime(new Date('2024-01-01T00:00:00'));
        fireEvent.touchMove(target, touchEventMock({ clientY: touchMoveFrom, target }));
        fireEvent.touchMove(target, touchEventMock({ clientY: touchMoveTo, target }));
        requestAnimationFrameMock.triggerNextAnimationFrame();

        expect(sheetEl.style.getPropertyValue('--sheet')).toBe(expectedSheetPropertyValue);

        vi.setSystemTime(new Date('2024-01-01T00:00:02'));
        fireEvent.touchEnd(sheetEl);
        requestAnimationFrameMock.triggerNextAnimationFrame();
        fireEvent.transitionEnd(sheetEl);
      },
    );
  });

  describe.each([
    {
      snapPoint: 'auto' as const,
      initialPropertyValue: '',
      mutatedPropertyValue: `${sheetPropertyValue('auto', SHEET_HEIGHT, DRAG_OFFSET, SHEET_HEIGHT)}px`,
    },
    {
      snapPoint: { initial: 50, detents: DETENTS_A },
      initialPropertyValue: '50%',
      mutatedPropertyValue: `${sheetPropertyValue(50, 50, DRAG_OFFSET, SHEET_HEIGHT)}%`,
    },
    {
      snapPoint: { initial: 100, detents: DETENTS_B },
      initialPropertyValue: '100%',
      mutatedPropertyValue: `${sheetPropertyValue(100, 100, DRAG_OFFSET, SHEET_HEIGHT)}%`,
    },
  ])(
    'swipe down (snapPoint: $snapPoint):',
    ({ snapPoint, initialPropertyValue, mutatedPropertyValue }) => {
      test('– with empty content', () => {
        const r = render(<div data-testid="sheetEl" />);
        const sheetEl = r.getByTestId('sheetEl');
        Object.defineProperty(sheetEl, 'offsetHeight', { value: SHEET_HEIGHT });

        const h = renderHook(() => useBottomSheet(true, { ...DEFAULT_PROPS, snapPoint }));
        act(() => h.result.current[0].setSheetEl(sheetEl));

        r.rerender(
          <div
            data-testid="sheetEl"
            style={h.result.current[0].initialStyle}
            {...h.result.current[1]}
          />,
        );
        expect(sheetEl.style.getPropertyValue('--sheet')).toBe(initialPropertyValue);

        fireEvent.touchStart(sheetEl, touchEventMock({ clientX: 0, clientY: 0, target: sheetEl }));

        vi.setSystemTime(new Date('2024-01-01T00:00:00'));
        fireEvent.touchMove(sheetEl, touchEventMock({ clientY: DRAG_Y, target: sheetEl }));
        fireEvent.touchMove(
          sheetEl,
          touchEventMock({ clientY: DRAG_Y + DRAG_OFFSET, target: sheetEl }),
        );
        requestAnimationFrameMock.triggerNextAnimationFrame();

        expect(sheetEl.style.getPropertyValue('--sheet')).toBe(mutatedPropertyValue);

        vi.setSystemTime(new Date('2024-01-01T00:00:02'));
        fireEvent.touchEnd(sheetEl);
        requestAnimationFrameMock.triggerNextAnimationFrame();
        fireEvent.transitionEnd(sheetEl);

        expect(sheetEl.style.getPropertyValue('--sheet')).toBe(initialPropertyValue);
      });

      test('– with sheet scroll (scroll should be blocked)', () => {
        const r = render(
          <div data-testid="sheetEl">
            <div data-testid="sheetScrollEl">
              <div data-testid="targetEl" />
            </div>
          </div>,
        );
        const sheetEl = r.getByTestId('sheetEl');
        Object.defineProperty(sheetEl, 'offsetHeight', { value: SHEET_HEIGHT });

        const sheetScrollEl = r.getByTestId('sheetScrollEl');
        Object.defineProperty(sheetScrollEl, 'scrollTop', { value: 0 });
        Object.defineProperty(sheetScrollEl, 'clientHeight', { value: SHEET_HEIGHT });
        Object.defineProperty(sheetScrollEl, 'scrollHeight', { value: SCROLL_HEIGHT });

        const h = renderHook(() => useBottomSheet(true, { ...DEFAULT_PROPS, snapPoint }));
        act(() => {
          h.result.current[0].setSheetEl(sheetEl);
          h.result.current[0].setSheetScrollEl(sheetScrollEl);
        });

        r.rerender(
          <div
            data-testid="sheetEl"
            style={h.result.current[0].initialStyle}
            {...h.result.current[1]}
          >
            <div data-testid="sheetScrollEl">
              <div data-testid="targetEl" />
            </div>
          </div>,
        );
        expect(sheetEl.style.getPropertyValue('--sheet')).toBe(initialPropertyValue);

        const target = r.getByTestId('targetEl');
        fireEvent.touchStart(target, touchEventMock({ clientX: 0, clientY: 0, target }));

        vi.setSystemTime(new Date('2024-01-01T00:00:00'));
        fireEvent.touchMove(target, touchEventMock({ clientY: DRAG_Y, target }));
        fireEvent.touchMove(target, touchEventMock({ clientY: DRAG_Y + DRAG_OFFSET, target }));
        requestAnimationFrameMock.triggerNextAnimationFrame();

        expect(sheetEl.style.getPropertyValue('--sheet')).toBe(mutatedPropertyValue);
        expect(sheetScrollEl.style.getPropertyValue('overflow-y')).toBe('hidden');

        vi.setSystemTime(new Date('2024-01-01T00:00:02'));
        fireEvent.touchEnd(sheetEl);
        requestAnimationFrameMock.triggerNextAnimationFrame();
        fireEvent.transitionEnd(sheetEl);

        expect(sheetEl.style.getPropertyValue('--sheet')).toBe(initialPropertyValue);
        expect(sheetScrollEl.style.getPropertyValue('overflow-y')).toBe('');
      });

      test.each([{ scrollTop: 0 }, { scrollTop: 10 }])(
        '- with header, scroll should not be blocked (scrollTop: $scrollTop)',
        ({ scrollTop }) => {
          const r = render(
            <div data-testid="sheetEl">
              <div data-testid="header">header</div>
              <div data-testid="sheetScrollEl">
                <div data-testid="targetEl" />
              </div>
            </div>,
          );
          const sheetEl = r.getByTestId('sheetEl');
          Object.defineProperty(sheetEl, 'offsetHeight', { value: SHEET_HEIGHT });

          const sheetScrollEl = r.getByTestId('sheetScrollEl');
          Object.defineProperty(sheetScrollEl, 'scrollTop', { value: scrollTop });
          Object.defineProperty(sheetScrollEl, 'clientHeight', { value: SHEET_HEIGHT });
          Object.defineProperty(sheetScrollEl, 'scrollHeight', { value: SCROLL_HEIGHT });

          const h = renderHook(() => useBottomSheet(true, { ...DEFAULT_PROPS, snapPoint }));
          act(() => {
            h.result.current[0].setSheetEl(sheetEl);
            h.result.current[0].setSheetScrollEl(sheetScrollEl);
          });

          r.rerender(
            <div
              data-testid="sheetEl"
              style={h.result.current[0].initialStyle}
              {...h.result.current[1]}
            >
              <div data-testid="header">header</div>
              <div data-testid="sheetScrollEl">
                <div data-testid="targetEl" />
              </div>
            </div>,
          );
          expect(sheetEl.style.getPropertyValue('--sheet')).toBe(initialPropertyValue);

          const target = r.getByTestId('header');
          fireEvent.touchStart(target, touchEventMock({ clientX: 0, clientY: 0, target }));

          vi.setSystemTime(new Date('2024-01-01T00:00:00'));
          fireEvent.touchMove(target, touchEventMock({ clientY: DRAG_Y, target }));
          fireEvent.touchMove(target, touchEventMock({ clientY: DRAG_Y + DRAG_OFFSET, target }));
          requestAnimationFrameMock.triggerNextAnimationFrame();

          expect(sheetEl.style.getPropertyValue('--sheet')).toBe(mutatedPropertyValue);
          expect(sheetScrollEl.style.getPropertyValue('overflow-y')).toBe('');

          vi.setSystemTime(new Date('2024-01-01T00:00:02'));
          fireEvent.touchEnd(sheetEl);
          requestAnimationFrameMock.triggerNextAnimationFrame();
          fireEvent.transitionEnd(sheetEl);

          expect(sheetEl.style.getPropertyValue('--sheet')).toBe(initialPropertyValue);
          expect(sheetScrollEl.style.getPropertyValue('overflow-y')).toBe('');
        },
      );
    },
  );

  describe('collapse/expand:', () => {
    test.each(['sheetEl', 'targetInnerSheetScrollEl'])(
      '– by drag to half of viewport (data-testid="$testId")',
      (testId) => {
        const DRAG_TO_HALF_OF_SHEET_HEIGHT = DRAG_OFFSET + SHEET_HEIGHT / 2;

        const r = render(
          <div data-testid="sheetEl">
            <div data-testid="sheetScrollEl">
              <div data-testid="targetInnerSheetScrollEl" />
            </div>
          </div>,
        );
        const sheetEl = r.getByTestId('sheetEl');
        Object.defineProperty(sheetEl, 'offsetHeight', { value: SHEET_HEIGHT });

        const sheetScrollEl = r.getByTestId('sheetScrollEl');
        Object.defineProperty(sheetScrollEl, 'scrollTop', { value: 0 });
        Object.defineProperty(sheetScrollEl, 'clientHeight', { value: SHEET_HEIGHT });
        Object.defineProperty(sheetScrollEl, 'scrollHeight', { value: SCROLL_HEIGHT });

        const h = renderHook(() => useBottomSheet(true, DEFAULT_PROPS));
        act(() => {
          h.result.current[0].setSheetEl(sheetEl);
          h.result.current[0].setSheetScrollEl(sheetScrollEl);
        });

        r.rerender(
          <div
            data-testid="sheetEl"
            style={h.result.current[0].initialStyle}
            {...h.result.current[1]}
          >
            <div data-testid="header">header</div>
            <div data-testid="sheetScrollEl">
              <div data-testid="targetInnerSheetScrollEl" />
            </div>
          </div>,
        );
        expect(sheetEl.style.getPropertyValue('--sheet')).toBe('50%');

        const target = r.getByTestId(testId);
        fireEvent.touchStart(target, touchEventMock({ clientX: 0, clientY: 0, target }));

        vi.setSystemTime(new Date('2024-01-01T00:00:00'));
        fireEvent.touchMove(target, touchEventMock({ clientY: DRAG_Y, target }));
        fireEvent.touchMove(
          target,
          touchEventMock({ clientY: DRAG_Y - DRAG_TO_HALF_OF_SHEET_HEIGHT, target }),
        );
        requestAnimationFrameMock.triggerNextAnimationFrame();

        vi.setSystemTime(new Date('2024-01-01T00:00:02'));
        fireEvent.touchEnd(target);
        requestAnimationFrameMock.triggerNextAnimationFrame();
        fireEvent.transitionEnd(sheetEl);

        expect(sheetEl.style.getPropertyValue('--sheet')).toBe('100%');

        // обратно в 50%
        vi.setSystemTime(new Date('2024-01-01T00:00:04'));
        fireEvent.touchStart(target, touchEventMock({ clientX: 0, clientY: 0, target }));
        fireEvent.touchMove(target, touchEventMock({ clientY: DRAG_Y, target }));
        fireEvent.touchMove(
          target,
          touchEventMock({ clientY: DRAG_Y + DRAG_TO_HALF_OF_SHEET_HEIGHT, target }),
        );
        requestAnimationFrameMock.triggerNextAnimationFrame();

        vi.setSystemTime(new Date('2024-01-01T00:00:06'));
        fireEvent.touchEnd(target);
        requestAnimationFrameMock.triggerNextAnimationFrame();
        fireEvent.transitionEnd(sheetEl);

        expect(sheetEl.style.getPropertyValue('--sheet')).toBe('50%');
      },
    );

    test('– by drag velocity', () => {
      const r = render(<div data-testid="sheetEl" />);
      const sheetEl = r.getByTestId('sheetEl');
      Object.defineProperty(sheetEl, 'offsetHeight', { value: SHEET_HEIGHT });

      const h = renderHook(() => useBottomSheet(true, DEFAULT_PROPS));
      act(() => h.result.current[0].setSheetEl(sheetEl));

      r.rerender(
        <div
          data-testid="sheetEl"
          style={h.result.current[0].initialStyle}
          {...h.result.current[1]}
        />,
      );
      expect(sheetEl.style.getPropertyValue('--sheet')).toBe('50%');

      fireEvent.touchStart(sheetEl, touchEventMock({ clientX: 0, clientY: 0, target: sheetEl }));

      let time = new Date('2024-01-01T00:00:00');
      vi.setSystemTime(time);
      fireEvent.touchMove(sheetEl, touchEventMock({ clientY: DRAG_Y, target: sheetEl }));
      fireEvent.touchMove(
        sheetEl,
        touchEventMock({
          clientY: DRAG_Y - DRAG_OFFSET,
          target: sheetEl,
        }),
      );
      requestAnimationFrameMock.triggerNextAnimationFrame();

      time.setMilliseconds(10);
      vi.setSystemTime(time);
      fireEvent.touchEnd(sheetEl);
      requestAnimationFrameMock.triggerNextAnimationFrame();
      fireEvent.transitionEnd(sheetEl);

      expect(sheetEl.style.getPropertyValue('--sheet')).toBe('100%');

      // обратно в 50%
      fireEvent.touchStart(sheetEl, touchEventMock({ clientX: 0, clientY: 0, target: sheetEl }));

      time = new Date('2024-01-01T00:00:02');
      vi.setSystemTime(time);
      fireEvent.touchMove(sheetEl, touchEventMock({ clientY: DRAG_Y, target: sheetEl }));
      fireEvent.touchMove(
        sheetEl,
        touchEventMock({ clientY: DRAG_Y + DRAG_OFFSET, target: sheetEl }),
      );
      requestAnimationFrameMock.triggerNextAnimationFrame();

      time.setMilliseconds(10);
      vi.setSystemTime(time);
      fireEvent.touchEnd(sheetEl);
      requestAnimationFrameMock.triggerNextAnimationFrame();
      fireEvent.transitionEnd(sheetEl);

      expect(sheetEl.style.getPropertyValue('--sheet')).toBe('50%');
    });
  });

  describe.each([
    { snapPoint: 'auto' as const, initialPropertyValue: '' },
    { snapPoint: { initial: 50, detents: DETENTS_A }, initialPropertyValue: '50%' },
    { snapPoint: { initial: 100, detents: DETENTS_B }, initialPropertyValue: '100%' },
  ])('dismiss (snapPoint: $snapPoint):', ({ snapPoint, initialPropertyValue }) => {
    const props = { ...DEFAULT_PROPS, snapPoint };

    test('– by drag to half of viewport', () => {
      const DRAG_TO_HALF_OF_SHEET_HEIGHT = DRAG_OFFSET + SHEET_HEIGHT / 2;

      const r = render(<div data-testid="sheetEl" />);
      const sheetEl = r.getByTestId('sheetEl');
      Object.defineProperty(sheetEl, 'offsetHeight', { value: SHEET_HEIGHT });

      const onDismiss = vi.fn();
      const h = renderHook(() => useBottomSheet(true, { ...props, onDismiss }));
      act(() => h.result.current[0].setSheetEl(sheetEl));

      r.rerender(
        <div
          data-testid="sheetEl"
          style={h.result.current[0].initialStyle}
          {...h.result.current[1]}
        />,
      );
      expect(sheetEl.style.getPropertyValue('--sheet')).toBe(initialPropertyValue);

      fireEvent.touchStart(sheetEl, touchEventMock({ clientX: 0, clientY: 0, target: sheetEl }));

      vi.setSystemTime(new Date('2024-01-01T00:00:00'));
      fireEvent.touchMove(sheetEl, touchEventMock({ clientY: DRAG_Y, target: sheetEl }));
      fireEvent.touchMove(
        sheetEl,
        touchEventMock({ clientY: DRAG_Y + DRAG_TO_HALF_OF_SHEET_HEIGHT, target: sheetEl }),
      );
      requestAnimationFrameMock.triggerNextAnimationFrame();

      vi.setSystemTime(new Date('2024-01-01T00:00:02'));
      fireEvent.touchEnd(sheetEl);
      requestAnimationFrameMock.triggerNextAnimationFrame();
      fireEvent.transitionEnd(sheetEl);

      expect(onDismiss).toHaveBeenCalledTimes(1);
      h.unmount();
      expect(sheetEl.style.getPropertyValue('--sheet')).toBe('');
    });

    test('– by drag velocity', async () => {
      const r = render(<div data-testid="sheetEl" />);
      const sheetEl = r.getByTestId('sheetEl');
      Object.defineProperty(sheetEl, 'offsetHeight', { value: SHEET_HEIGHT });

      const onDismiss = vi.fn();
      const h = renderHook(() => useBottomSheet(true, { ...props, onDismiss }));
      act(() => h.result.current[0].setSheetEl(sheetEl));

      r.rerender(
        <div
          data-testid="sheetEl"
          style={h.result.current[0].initialStyle}
          {...h.result.current[1]}
        />,
      );
      expect(sheetEl.style.getPropertyValue('--sheet')).toBe(initialPropertyValue);

      fireEvent.touchStart(sheetEl, touchEventMock({ clientX: 0, clientY: 0, target: sheetEl }));

      let time = new Date('2024-01-01T00:00:00');
      vi.setSystemTime(time);
      fireEvent.touchMove(sheetEl, touchEventMock({ clientY: DRAG_Y, target: sheetEl }));
      fireEvent.touchMove(
        sheetEl,
        touchEventMock({
          clientY: DRAG_Y + DRAG_OFFSET,
          target: sheetEl,
        }),
      );
      requestAnimationFrameMock.triggerNextAnimationFrame();

      time.setMilliseconds(10);
      vi.setSystemTime(time);
      fireEvent.touchEnd(sheetEl);
      requestAnimationFrameMock.triggerNextAnimationFrame();
      fireEvent.transitionEnd(sheetEl);

      expect(onDismiss).toHaveBeenCalledTimes(1);
      h.unmount();
      expect(sheetEl.style.getPropertyValue('--sheet')).toBe('');
    });
  });

  describe('backdrop:', () => {
    test.each([
      {
        snapPoint: 'auto' as const,
        backdropOpacity: backdropOpacityPropertyValue(
          'auto',
          SHEET_HEIGHT,
          DRAG_OFFSET,
          SHEET_HEIGHT,
        ),
      },
      {
        snapPoint: { initial: 50, detents: DETENTS_A },
        backdropOpacity: backdropOpacityPropertyValue(50, 50, DRAG_OFFSET, SHEET_HEIGHT),
      },
      {
        snapPoint: { initial: 100, detents: DETENTS_B },
        backdropOpacity: backdropOpacityPropertyValue(100, 100, DRAG_OFFSET, SHEET_HEIGHT),
      },
    ])('- basic usage (snapPoint: $snapPoint)', ({ snapPoint, backdropOpacity }) => {
      const props = { ...DEFAULT_PROPS, snapPoint };
      const r = render(
        <>
          <div data-testid="backdropEl" />
          <div data-testid="sheetEl" />
        </>,
      );
      const backdropEl = r.getByTestId('backdropEl');
      const sheetEl = r.getByTestId('sheetEl');
      Object.defineProperty(sheetEl, 'offsetHeight', { value: SHEET_HEIGHT });

      const h = renderHook(() => useBottomSheet(true, props));
      act(() => {
        h.result.current[0].setSheetEl(sheetEl);
        h.result.current[0].setBackdropEl(backdropEl);
      });

      r.rerender(
        <>
          <div data-testid="backdropEl" />
          <div
            data-testid="sheetEl"
            style={h.result.current[0].initialStyle}
            {...h.result.current[1]}
          />
        </>,
      );

      fireEvent.touchStart(sheetEl, touchEventMock({ clientX: 0, clientY: 0, target: sheetEl }));

      vi.setSystemTime(new Date('2024-01-01T00:00:00'));
      fireEvent.touchMove(sheetEl, touchEventMock({ clientY: DRAG_Y, target: sheetEl }));
      fireEvent.touchMove(
        sheetEl,
        touchEventMock({ clientY: DRAG_Y + DRAG_OFFSET, target: sheetEl }),
      );
      requestAnimationFrameMock.triggerNextAnimationFrame();

      expect(backdropEl.style.getPropertyValue('--backdrop')).toBe(`${backdropOpacity}`);

      vi.setSystemTime(new Date('2024-01-01T00:00:02'));
      fireEvent.touchEnd(sheetEl);
      requestAnimationFrameMock.triggerNextAnimationFrame();
      fireEvent.transitionEnd(sheetEl);
      fireEvent.transitionEnd(backdropEl);

      expect(backdropEl.style.getPropertyValue('--backdrop')).toBe('');
    });

    it('- changes opacity relative initialSnapPoint', async () => {
      const DRAG_TO_HALF_OF_SHEET_HEIGHT = DRAG_OFFSET + SHEET_HEIGHT / 2;

      const r = render(
        <>
          <div data-testid="backdropEl" />
          <div data-testid="sheetEl" />
        </>,
      );
      const backdropEl = r.getByTestId('backdropEl');
      const sheetEl = r.getByTestId('sheetEl');
      Object.defineProperty(sheetEl, 'offsetHeight', { value: SHEET_HEIGHT });

      const h = renderHook(() => useBottomSheet(true, DEFAULT_PROPS));
      act(() => {
        h.result.current[0].setSheetEl(sheetEl);
        h.result.current[0].setBackdropEl(backdropEl);
      });

      r.rerender(
        <>
          <div data-testid="backdropEl" />
          <div
            data-testid="sheetEl"
            style={h.result.current[0].initialStyle}
            {...h.result.current[1]}
          />
        </>,
      );

      fireEvent.touchStart(sheetEl, touchEventMock({ clientX: 0, clientY: 0, target: sheetEl }));

      vi.setSystemTime(new Date('2024-01-01T00:00:00'));
      fireEvent.touchMove(sheetEl, touchEventMock({ clientY: DRAG_Y, target: sheetEl }));
      fireEvent.touchMove(
        sheetEl,
        touchEventMock({ clientY: DRAG_Y - DRAG_TO_HALF_OF_SHEET_HEIGHT, target: sheetEl }),
      );
      requestAnimationFrameMock.triggerNextAnimationFrame();

      expect(backdropEl.style.getPropertyValue('--backdrop')).toBe('1');

      vi.setSystemTime(new Date('2024-01-01T00:00:02'));
      fireEvent.touchEnd(sheetEl);
      requestAnimationFrameMock.triggerNextAnimationFrame();
      fireEvent.transitionEnd(sheetEl);

      // обратно в 50%
      vi.setSystemTime(new Date('2024-01-01T00:00:04'));
      fireEvent.touchStart(sheetEl, touchEventMock({ clientX: 0, clientY: 0, target: sheetEl }));
      fireEvent.touchMove(sheetEl, touchEventMock({ clientY: DRAG_Y, target: sheetEl }));
      fireEvent.touchMove(
        sheetEl,
        touchEventMock({ clientY: DRAG_Y + DRAG_OFFSET, target: sheetEl }),
      );
      requestAnimationFrameMock.triggerNextAnimationFrame();

      // Если пользователь раскрыл панель до 100, то backdrop не должен меняться до тех пор пока
      // мы не окажемся в точке `initialSnapPoint`. Другими словами, меняем backdrop только
      // относительно `initialSnapPoint`.
      expect(backdropEl.style.getPropertyValue('--backdrop')).toBe('1');

      fireEvent.touchMove(
        sheetEl,
        touchEventMock({ clientY: DRAG_Y + DRAG_TO_HALF_OF_SHEET_HEIGHT, target: sheetEl }),
      );
      requestAnimationFrameMock.triggerNextAnimationFrame();

      expect(backdropEl.style.getPropertyValue('--backdrop')).toBe(
        `${backdropOpacityPropertyValue(50, 100, DRAG_TO_HALF_OF_SHEET_HEIGHT, SHEET_HEIGHT)}`,
      );

      vi.setSystemTime(new Date('2024-01-01T00:00:06'));
      fireEvent.touchEnd(sheetEl);
      requestAnimationFrameMock.triggerNextAnimationFrame();
      fireEvent.transitionEnd(sheetEl);
      fireEvent.transitionEnd(backdropEl);
    });
  });
});
