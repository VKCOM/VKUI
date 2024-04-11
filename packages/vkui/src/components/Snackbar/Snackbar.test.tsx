import * as React from 'react';
import { render } from '@testing-library/react';
import { ViewWidth } from '../../lib/adaptivity';
import {
  baselineComponent,
  fireEventPatch,
  matchMediaReduceMotionMock,
  requestAnimationFrameMock,
  testIf,
  userEvent,
  waitCSSKeyframesAnimation,
} from '../../testing/utils';
import { AdaptivityProvider } from '../AdaptivityProvider/AdaptivityProvider';
import { PlatformProvider } from '../PlatformProvider/PlatformProvider';
import { Snackbar } from './Snackbar';
import type { SnackbarPlacement } from './types';
import styles from './Snackbar.module.css';

const PLACEMENT: SnackbarPlacement[] = [
  'top',
  'top-start',
  'top-end',
  'bottom',
  'bottom-start',
  'bottom-end',
];

describe(Snackbar, () => {
  beforeEach(() => jest.useFakeTimers());

  baselineComponent((props) => <Snackbar onClose={jest.fn()} {...props} />);

  it.each(PLACEMENT)('should set offsetY relative placement="%s"', (placement) => {
    const result = render(<Snackbar placement={placement} offsetY={8} onClose={jest.fn()} />);
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
        <Snackbar onClose={jest.fn()}>Text message</Snackbar>
      </PlatformProvider>,
    );
    expect(result.getByRole('presentation')).toHaveClass(styles['Snackbar--ios']);
    result.rerender(<Snackbar onClose={jest.fn()}>Text message</Snackbar>);
    expect(result.getByRole('presentation')).not.toHaveClass(styles['Snackbar--ios']);
  });

  it('renders in horizontal layout on desktop if layout prop is set', () => {
    const { container, rerender } = render(
      <AdaptivityProvider viewWidth={ViewWidth.DESKTOP}>
        <Snackbar action="Close me" onClose={jest.fn()}>
          Text message
        </Snackbar>
      </AdaptivityProvider>,
    );

    // renders in vertical layout on desktop by default
    expect(container.querySelector(`.${styles['Snackbar--layout-none']}`)).not.toBeNull();

    rerender(
      <Snackbar layout="horizontal" action="Close me" onClose={jest.fn()}>
        Text message
      </Snackbar>,
    );
    // renders in horizontal layout on desktop according to layout prop
    expect(container.querySelector(`.${styles['Snackbar--layout-vertical']}`)).toBeNull();
    expect(container.querySelector(`.${styles['Snackbar--layout-horizontal']}`)).not.toBeNull();
  });

  describe.each(['reduce', 'no-reduce'])('for `(prefers-reduced-motion: %s)`', (value) => {
    beforeEach(() => {
      matchMediaReduceMotionMock(value === 'reduce');
    });

    it('should be closed after timeout', async () => {
      const onClose = jest.fn();
      const result = render(<Snackbar onClose={onClose} />);
      await waitCSSKeyframesAnimation(result.getByRole('alert'), true);
      expect(onClose).toHaveBeenCalled();
    });

    it('should use focused state for start or end timeout for close', async () => {
      const onClose = jest.fn();
      const result = render(<Snackbar action="Action" onClose={onClose} />);

      await userEvent.keyboard('{Tab}');
      await waitCSSKeyframesAnimation(result.getByRole('alert'), true);
      expect(onClose).not.toHaveBeenCalled();

      await userEvent.keyboard('{Tab}');
      await waitCSSKeyframesAnimation(result.getByRole('alert'), true);
      expect(onClose).toHaveBeenCalled();
    });

    it('should be closed after click to action', async () => {
      const onActionClick = jest.fn();
      const onClose = jest.fn();
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
      const onClose = jest.fn();
      const result = render(<Snackbar onClose={onClose} />);
      await userEvent.keyboard('{Escape}');
      await waitCSSKeyframesAnimation(result.getByRole('alert'));
      expect(onClose).toHaveBeenCalled();
    });

    testIf(value === 'no-reduce').each(['touch', 'mouse (case 1)', 'mouse (case 2)'])(
      'should prevent or continue closing relative user %s manipulation',
      async (eventType) => {
        const onClose = jest.fn();
        const result = render(<Snackbar onClose={onClose} />);
        const elContent = result.getByRole('alert');

        await fireEventPatch(elContent, eventType === 'touch' ? 'touchStart' : 'mouseDown');
        await waitCSSKeyframesAnimation(elContent, true);
        expect(onClose).not.toHaveBeenCalled();

        switch (eventType) {
          case 'touch':
            await fireEventPatch(elContent, 'touchEnd');
            break;
          case 'mouse (case 1)':
            await fireEventPatch(elContent, 'mouseUp');
            break;
          case 'mouse (case 2)':
            await fireEventPatch(elContent, 'mouseLeave', false);
            break;
        }
        await waitCSSKeyframesAnimation(elContent, true);
        expect(onClose).toHaveBeenCalled();
      },
    );

    testIf(value === 'no-reduce').each(PLACEMENT)(
      'should use touched state for start or end timeout for close 2',
      async (placement) => {
        const onClose = jest.fn();
        const result = render(<Snackbar placement={placement} onClose={onClose} />);

        const rootEl = result.getByRole('presentation');
        const rootRect = { x: 0, y: 0, width: 320, height: 100 };

        const contentEl = result.getByRole('alert');
        const contentRect = getContentRectByPlacement(placement);

        await fireEventPatch(contentEl, 'mouseDown', transformDomRectToEventData(rootRect));
        await waitCSSKeyframesAnimation(contentEl, true);
        mockGetBoundingClientRect(rootEl, rootRect);

        requestAnimationFrameMock.init();
        await fireEventPatch(contentEl, 'mouseMove', transformDomRectToEventData(contentRect));
        requestAnimationFrameMock.triggerNextAnimationFrame();

        mockGetBoundingClientRect(contentEl, contentRect);
        await fireEventPatch(contentEl, 'mouseUp', transformDomRectToEventData(contentRect));
        await waitCSSKeyframesAnimation(contentEl, false);
        expect(onClose).toHaveBeenCalled();
      },
    );
  });
});

function mockGetBoundingClientRect(el: HTMLElement, data: DOMRectInit) {
  Object.defineProperty(el, 'getBoundingClientRect', {
    value() {
      return DOMRect.fromRect(data);
    },
  });
}

function transformDomRectToEventData(data: DOMRectInit) {
  return { clientX: data.x, clientY: data.y };
}

function getContentRectByPlacement(placement: SnackbarPlacement) {
  const width = 304;
  const height = 84;

  switch (placement) {
    case 'top': {
      return {
        x: 0,
        y: -1 * (height / 2 + 1),
        width,
        height,
      };
    }
    case 'bottom': {
      return {
        x: 0,
        y: height / 2 + 1,
        width,
        height,
      };
    }
    case 'top-start':
    case 'bottom-start': {
      return {
        x: -1 * (width / 2 + 1),
        y: 0,
        width,
        height,
      };
    }
    case 'top-end':
    case 'bottom-end': {
      return {
        x: width / 2 + 1,
        y: 0,
        width,
        height,
      };
    }
  }
}
