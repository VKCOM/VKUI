import { type EventType, render } from '@testing-library/react';
import { MEDIA_QUERIES, ViewWidth } from '../../lib/adaptivity';
import {
  baselineComponent,
  fireEventPatch,
  matchMediaMock,
  mockRect,
  mouseEventMock,
  requestAnimationFrameMock,
  touchEventMock,
  userEvent,
  waitCSSKeyframesAnimation,
} from '../../testing/utils';
import { AdaptivityProvider } from '../AdaptivityProvider/AdaptivityProvider';
import { PlatformProvider } from '../PlatformProvider/PlatformProvider';
import { Snackbar } from './Snackbar';
import type { SnackbarPlacement } from './types';
import styles from './Snackbar.module.css';
import basicStyles from './subcomponents/Basic/Basic.module.css';

const PLACEMENT_JEST_EACH_TABLE: SnackbarPlacement[] = [
  'top',
  'top-start',
  'top-end',
  'bottom',
  'bottom-start',
  'bottom-end',
];

const GESTURES_JEST_EACH_TABLE = [
  {
    name: 'touch',
    start: 'touchStart',
    move: 'touchMove',
    end: 'touchEnd',
    fireEventOptions: undefined,
  },
  {
    name: 'mouse (with `mouseUp`)',
    start: 'mouseDown',
    move: 'mouseMove',
    end: 'mouseUp',
    fireEventOptions: undefined,
  },
  {
    name: 'mouse (with `mouseLeave`)',
    start: 'mouseDown',
    move: 'mouseMove',
    end: 'mouseLeave',
    fireEventOptions: false,
  },
] as const;

describe(Snackbar, () => {
  const onClose = vi.fn();

  beforeAll(() => {
    matchMediaMock(MEDIA_QUERIES.SMALL_TABLET_PLUS);
  });

  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    onClose.mockClear();
  });

  baselineComponent((props) => <Snackbar onClose={vi.fn()} {...props} />);

  it.each(PLACEMENT_JEST_EACH_TABLE)('should set offsetY relative placement="%s"', (placement) => {
    const result = render(<Snackbar placement={placement} offsetY={8} onClose={vi.fn()} />);
    const el = result.getByRole('presentation');
    switch (placement) {
      case 'top-start':
      case 'top':
      case 'top-end':
        expect(el.style.top).toBe('8px');
        expect(el.style.bottom).toBe('');
        break;
      case 'bottom-start':
      case 'bottom':
      case 'bottom-end':
        expect(el.style.top).toBe('');
        expect(el.style.bottom).toBe('8px');
        break;
    }
  });

  it('should set iOS CSS selector', () => {
    const result = render(
      <PlatformProvider value="ios">
        <Snackbar onClose={vi.fn()}>Text message</Snackbar>
      </PlatformProvider>,
    );
    expect(result.getByRole('presentation')).toHaveClass(styles.ios);
    result.rerender(<Snackbar onClose={vi.fn()}>Text message</Snackbar>);
    expect(result.getByRole('presentation')).not.toHaveClass(styles.ios);
  });

  it('renders in horizontal layout on desktop if layout prop is set', () => {
    const { container, rerender } = render(
      <AdaptivityProvider viewWidth={ViewWidth.DESKTOP}>
        <Snackbar action="Close me" onClose={vi.fn()}>
          Text message
        </Snackbar>
      </AdaptivityProvider>,
    );

    // renders in vertical layout on desktop by default
    expect(container.querySelector(`.${basicStyles.layoutNone}`)).not.toBeNull();

    rerender(
      <Snackbar layout="horizontal" action="Close me" onClose={vi.fn()}>
        Text message
      </Snackbar>,
    );
    // renders in horizontal layout on desktop according to layout prop
    expect(container.querySelector(`.${basicStyles.layoutVertical}`)).toBeNull();
    expect(container.querySelector(`.${basicStyles.layoutHorizontal}`)).not.toBeNull();
  });

  it('should be closed after timeout', async () => {
    const result = render(<Snackbar onClose={onClose} />);
    await waitCSSKeyframesAnimation(result.getByRole('alert'), { runOnlyPendingTimers: true });
    expect(onClose).toHaveBeenCalled();
  });

  it('should use focused state for start or end timeout for close', async () => {
    const result = render(<Snackbar action="Action" onClose={onClose} />);

    await userEvent.keyboard('{Tab}');
    await waitCSSKeyframesAnimation(result.getByRole('alert'), { runOnlyPendingTimers: true });
    expect(onClose).not.toHaveBeenCalled();

    await userEvent.keyboard('{Tab}');
    await waitCSSKeyframesAnimation(result.getByRole('alert'), { runOnlyPendingTimers: true });
    expect(onClose).toHaveBeenCalled();
  });

  it('should be closed after click to action', async () => {
    const onActionClick = vi.fn();
    const result = render(
      <Snackbar
        action={<span data-testid="action">action</span>}
        onActionClick={onActionClick}
        onClose={onClose}
      />,
    );
    await fireEventPatch(result.getByTestId('action'), 'click');
    expect(onActionClick).toHaveBeenCalled();
    await waitCSSKeyframesAnimation(result.getByRole('alert'));
    expect(onClose).toHaveBeenCalled();
  });

  it('should be closed after press to ESC', async () => {
    const result = render(<Snackbar onClose={onClose} />);
    await userEvent.keyboard('{Escape}');
    await waitCSSKeyframesAnimation(result.getByRole('alert'));
    expect(onClose).toHaveBeenCalled();
  });

  it('should force unmount', async () => {
    const result = render(<Snackbar placement="top" onClose={onClose} />);

    const rootEl = result.getByRole('presentation');
    const contentEl = result.getByRole('alert');

    const initialRect = { x: 0, y: 0, width: 320, height: 100 };
    const movedRect = getMovedContentRectByPlacement('top', { shouldTriggerClosing: true }); // prettier-ignore

    // start
    mockRect(rootEl, initialRect);
    mockRect(contentEl, initialRect);
    await fireEventPatch(contentEl, 'touchStart', transformDomRectToEventData('touchStart', initialRect)); // prettier-ignore
    await waitCSSKeyframesAnimation(contentEl, { runOnlyPendingTimers: true });

    // move
    mockRect(contentEl, movedRect);
    requestAnimationFrameMock.init();
    await fireEventPatch(contentEl, 'touchMove', transformDomRectToEventData('touchMove', movedRect)); // prettier-ignore
    requestAnimationFrameMock.triggerNextAnimationFrame();

    result.unmount();

    expect(rootEl).not.toBeInTheDocument();
  });

  describe.each(GESTURES_JEST_EACH_TABLE)(
    'should use touched state for start or end timeout for close (user $name manipulation)',
    ({ start, move, end, fireEventOptions }) => {
      it.each([
        ...PLACEMENT_JEST_EACH_TABLE.map((placement) => ({ placement, shifted: true })),
        { placement: 'top' as const, shifted: false },
      ])('placement="$placement" (shifted: $shifted)', async ({ placement, shifted }) => {
        const result = render(<Snackbar placement={placement} onClose={onClose} />);

        const rootEl = result.getByRole('presentation');
        const contentEl = result.getByRole('alert');

        const initialRect = { x: 0, y: 0, width: 320, height: 100 };
        const movedRect = getMovedContentRectByPlacement(placement, { shouldTriggerClosing: false }); // prettier-ignore

        // start
        mockRect(rootEl, initialRect);
        mockRect(contentEl, initialRect);
        await fireEventPatch(contentEl, start, transformDomRectToEventData(start, initialRect)); // prettier-ignore
        await waitCSSKeyframesAnimation(contentEl, { runOnlyPendingTimers: true });
        expect(onClose).not.toHaveBeenCalled();

        if (shifted) {
          // move
          mockRect(contentEl, movedRect);
          requestAnimationFrameMock.init();
          await fireEventPatch(contentEl, move, transformDomRectToEventData(move, movedRect)); // prettier-ignore
          requestAnimationFrameMock.triggerNextAnimationFrame();
          expect(onClose).not.toHaveBeenCalled();
        }

        // end
        requestAnimationFrameMock.init();
        await fireEventPatch(contentEl, end, fireEventOptions); // prettier-ignore
        await waitCSSKeyframesAnimation(contentEl, { runOnlyPendingTimers: true });
        requestAnimationFrameMock.triggerNextAnimationFrame();
        expect(onClose).toHaveBeenCalled();
      });
    },
  );

  describe.each(GESTURES_JEST_EACH_TABLE)(
    'should closing with user $name manipulation',
    ({ start, move, end, fireEventOptions }) => {
      it.each(PLACEMENT_JEST_EACH_TABLE)('placement="%s"', async (placement) => {
        const result = render(<Snackbar placement={placement} onClose={onClose} />);

        const rootEl = result.getByRole('presentation');
        const contentEl = result.getByRole('alert');

        const initialRect = { x: 0, y: 0, width: 320, height: 100 };
        const movedRect = getMovedContentRectByPlacement(placement, { shouldTriggerClosing: true }); // prettier-ignore

        // start
        mockRect(rootEl, initialRect);
        mockRect(contentEl, initialRect);
        await fireEventPatch(contentEl, start, transformDomRectToEventData(start, initialRect));
        await waitCSSKeyframesAnimation(contentEl, { runOnlyPendingTimers: true });

        // move
        mockRect(contentEl, movedRect);
        requestAnimationFrameMock.init();
        await fireEventPatch(contentEl, move, transformDomRectToEventData(move, movedRect));
        requestAnimationFrameMock.triggerNextAnimationFrame();

        // end
        requestAnimationFrameMock.init();
        await fireEventPatch(contentEl, end, fireEventOptions);
        await waitCSSKeyframesAnimation(contentEl, { runOnlyPendingTimers: false });
        requestAnimationFrameMock.triggerNextAnimationFrame();
        expect(onClose).toHaveBeenCalled();
      });
    },
  );
});

function transformDomRectToEventData(
  eventType: Extract<
    EventType,
    'touchStart' | 'touchMove' | 'touchEnd' | 'mouseDown' | 'mouseMove' | 'mouseUp' | 'mouseLeave'
  >,
  { x = 0, y = 0 }: DOMRectInit,
) {
  const nativeEventType = eventType.toLowerCase();
  if (eventType.startsWith('touch')) {
    return new TouchEvent(nativeEventType, touchEventMock({ clientX: x, clientY: y }));
  }
  return new MouseEvent(nativeEventType, mouseEventMock({ clientX: x, clientY: y }));
}

function getMovedContentRectByPlacement(
  placement: SnackbarPlacement,
  { shouldTriggerClosing: shouldTriggerClosing }: { shouldTriggerClosing: boolean },
) {
  const width = 304;
  const height = 84;

  const offsetForClose = shouldTriggerClosing ? 2 : 0;

  switch (placement) {
    case 'top': {
      return {
        x: 0,
        y: -1 * (height / 2 + offsetForClose),
        width,
        height,
      };
    }
    case 'bottom': {
      return {
        x: 0,
        y: height / 2 + offsetForClose,
        width,
        height,
      };
    }
    case 'top-start':
    case 'bottom-start': {
      return {
        x: -1 * (width / 2 + offsetForClose),
        y: 0,
        width,
        height,
      };
    }
    case 'top-end':
    case 'bottom-end': {
      return {
        x: width / 2 + offsetForClose,
        y: 0,
        width,
        height,
      };
    }
  }
}
