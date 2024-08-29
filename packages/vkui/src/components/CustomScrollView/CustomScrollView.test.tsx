import * as React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { noop } from '@vkontakte/vkjs';
import { baselineComponent } from '../../testing/utils';
import { AdaptivityContext } from '../AdaptivityProvider/AdaptivityContext';
import { CustomScrollView } from './CustomScrollView';
import styles from './CustomScrollView.module.css';

/**
 * Конвертирует неконечное значение прокрутки (Infinity, -Infinity, NaN) в 0
 *
 * @see https://drafts.csswg.org/cssom-view/#normalize-non-finite-values
 */
function normalizeNonFiniteScroll(x: number) {
  return Number.isFinite(x) ? x : 0.0;
}

const parseTransform = (value: string): [number, number] => {
  const match = value.match(/translate\((.+),(.+)\)/);
  if (!match) {
    return [0, 0];
  }
  const x = match[1];
  const y = match[2];
  return [parseFloat(x), parseFloat(y)];
};

const checkSize = (value: string | number, size: number) => {
  expect(Math.floor(typeof value === 'string' ? parseInt(value) : value)).toBe(size);
};

const checkTransformX = (value: string, x: number) => {
  const [xValue] = parseTransform(value);
  expect(Math.floor(xValue)).toBe(x);
};

const checkTransformY = (value: string, y: number) => {
  const [, yValue] = parseTransform(value);
  expect(Math.floor(yValue)).toBe(y);
};

const simulateDrag = ({
  element,
  position = {},
  checkAfterDragStart = noop,
  checkAfterDragEnd = noop,
}: {
  element: HTMLElement;
  position: { startY?: number; endY?: number; startX?: number; endX?: number };
  checkAfterDragStart: VoidFunction;
  checkAfterDragEnd: VoidFunction;
}) => {
  const { startY = 0, startX = 0, endY = 0, endX = 0 } = position;
  fireEvent.mouseDown(element, {
    clientY: startY,
    clientX: startX,
  });
  checkAfterDragStart();

  fireEvent.mouseMove(document, {
    clientY: endY,
    clientX: endX,
  });

  fireEvent.mouseUp(document, {
    clientY: endY,
    clientX: endX,
  });
  checkAfterDragEnd();

  fireEvent.resize(window);
};

const setup = ({
  container,
  clientHeight,
  scrollWidth,
  scrollHeight,
  clientWidth,
}: {
  container: HTMLElement;
  clientHeight: number;
  scrollHeight: number;
  clientWidth: number;
  scrollWidth: number;
}) => {
  const box = container.getElementsByClassName(styles['CustomScrollView__box'])[0] as HTMLElement;

  const barY = container.getElementsByClassName(styles['CustomScrollView__barY'])[0] as HTMLElement;
  const trackerY = container.getElementsByClassName(
    styles['CustomScrollView__trackerY'],
  )[0] as HTMLElement;

  const barX = container.getElementsByClassName(styles['CustomScrollView__barX'])[0] as HTMLElement;
  const trackerX = container.getElementsByClassName(
    styles['CustomScrollView__trackerX'],
  )[0] as HTMLElement;

  jest.spyOn(box, 'clientHeight', 'get').mockReturnValue(clientHeight);
  jest.spyOn(box, 'scrollHeight', 'get').mockReturnValue(scrollHeight);
  jest.spyOn(box, 'clientWidth', 'get').mockReturnValue(clientWidth);
  jest.spyOn(box, 'scrollWidth', 'get').mockReturnValue(scrollWidth);

  // https://drafts.csswg.org/cssom-view/#dom-window-scroll
  Object.defineProperty(box, 'scroll', {
    value: (arg1: number | ScrollToOptions, arg2: number | undefined) => {
      const scrollTo = (options: ScrollToOptions) => {
        if (options.left) {
          box.scrollLeft = normalizeNonFiniteScroll(options.left);
        }
        if (options.top) {
          box.scrollTop = normalizeNonFiniteScroll(options.top);
        }
      };

      if (typeof arg1 === 'number') {
        scrollTo({
          left: arg1,
          top: arg2,
        });
      } else {
        scrollTo(arg1);
      }
    },
    writable: false,
  });

  let trackerYHeight = '';
  jest
    .spyOn(trackerY.style, 'height', 'set')
    .mockImplementation((newHeight) => (trackerYHeight = newHeight));

  let trackerXWidth = '';
  jest
    .spyOn(trackerX.style, 'width', 'set')
    .mockImplementation((newWidth) => (trackerXWidth = newWidth));

  let trackerYDisplay = '';
  jest
    .spyOn(barY.style, 'display', 'set')
    .mockImplementation((newDisplay) => (trackerYDisplay = newDisplay));

  let trackerXDisplay = '';
  jest
    .spyOn(barX.style, 'display', 'set')
    .mockImplementation((newDisplay) => (trackerXDisplay = newDisplay));

  let trackerYTransform = '';
  jest
    .spyOn(trackerY.style, 'transform', 'set')
    .mockImplementation((newTransform) => (trackerYTransform = newTransform));

  let trackerXTransform = '';
  jest
    .spyOn(trackerX.style, 'transform', 'set')
    .mockImplementation((newTransform) => (trackerXTransform = newTransform));

  return {
    box,
    barY,
    barX,
    trackerX,
    trackerY,
    set scrollTop(newValue: number) {
      box.scrollTop = newValue;
    },
    get scrollTop() {
      return box.scrollTop;
    },
    get scrollLeft() {
      return box.scrollLeft;
    },
    set scrollLeft(newValue: number) {
      box.scrollLeft = newValue;
    },
    get trackerYHeight() {
      return trackerYHeight;
    },
    get trackerXWidth() {
      return trackerXWidth;
    },
    get trackerYDisplay() {
      return trackerYDisplay;
    },
    get trackerXDisplay() {
      return trackerXDisplay;
    },
    get trackerYTransform() {
      return trackerYTransform;
    },
    get trackerXTransform() {
      return trackerXTransform;
    },
  };
};

describe(CustomScrollView, () => {
  baselineComponent(CustomScrollView);

  it('should have specific className with hasPointer = false', () => {
    render(
      <AdaptivityContext.Provider value={{ hasPointer: false }}>
        <CustomScrollView data-testid="scroll-view">
          <span>content</span>
        </CustomScrollView>
      </AdaptivityContext.Provider>,
    );
    expect(screen.getByTestId('scroll-view')).toHaveClass(
      styles['CustomScrollView--hasPointer-false'],
    );
  });

  it('should have overscroll specific className', () => {
    const getBoxElement = () => screen.getByTestId('scroll-view').firstElementChild as HTMLElement;

    const { rerender } = render(
      <CustomScrollView data-testid="scroll-view" enableHorizontalScroll>
        <span>content</span>
      </CustomScrollView>,
    );

    expect(getBoxElement()).not.toHaveClass(
      styles['CustomScrollView__box--overscrollBehavior-contain'],
    );
    expect(getBoxElement()).not.toHaveClass(
      styles['CustomScrollView__box--overscrollBehavior-none'],
    );

    rerender(
      <CustomScrollView data-testid="scroll-view" overscrollBehavior="contain">
        <span>content</span>
      </CustomScrollView>,
    );

    expect(getBoxElement()).toHaveClass(
      styles['CustomScrollView__box--overscrollBehavior-contain'],
    );
    expect(getBoxElement()).not.toHaveClass(
      styles['CustomScrollView__box--overscrollBehavior-none'],
    );

    rerender(
      <CustomScrollView data-testid="scroll-view" overscrollBehavior="none">
        <span>content</span>
      </CustomScrollView>,
    );

    expect(getBoxElement()).not.toHaveClass(
      styles['CustomScrollView__box--overscrollBehavior-contain'],
    );
    expect(getBoxElement()).toHaveClass(styles['CustomScrollView__box--overscrollBehavior-none']);
  });

  it('bars should have display none when scroll doesnt need', () => {
    const { container } = render(
      <CustomScrollView
        data-testid="scroll-view"
        enableHorizontalScroll
        windowResize
        autoHideScrollbar
      >
        <span>content</span>
      </CustomScrollView>,
    );
    const mockedData = setup({
      container,
      clientHeight: 300,
      scrollHeight: 300,
      clientWidth: 900,
      scrollWidth: 900,
    });

    // форсим перерисовку и пересчет размеров уже с замоканными значениями
    fireEvent.resize(window);

    expect(mockedData.trackerXDisplay).toBe('none');
    expect(mockedData.trackerYDisplay).toBe('none');
  });

  it('check scroll by dragging horizontal and vertical tracker', () => {
    jest.useFakeTimers();
    const { container } = render(
      <CustomScrollView
        data-testid="scroll-view"
        enableHorizontalScroll
        windowResize
        autoHideScrollbar
      >
        <span>content</span>
      </CustomScrollView>,
    );
    const mockedData = setup({
      container,
      clientHeight: 300,
      scrollHeight: 480,
      clientWidth: 993,
      scrollWidth: 1464,
    });

    // форсим перерисовку и пересчет размеров уже с замоканными значениями
    fireEvent.resize(window);

    checkSize(mockedData.trackerYHeight, 187);
    checkSize(mockedData.trackerXWidth, 673);
    expect(mockedData.trackerXDisplay).toBe('');
    expect(mockedData.trackerYDisplay).toBe('');
    expect(mockedData.trackerY).toHaveClass(styles['CustomScrollView__trackerY--hidden']);
    expect(mockedData.trackerX).toHaveClass(styles['CustomScrollView__trackerX--hidden']);

    checkTransformX(mockedData.trackerXTransform, 0);
    checkTransformY(mockedData.trackerYTransform, 0);

    simulateDrag({
      element: mockedData.trackerY,
      position: { endY: 100 },
      checkAfterDragStart: () => {
        expect(mockedData.trackerY).not.toHaveClass(styles['CustomScrollView__trackerY--hidden']);
      },
      checkAfterDragEnd: () => {
        React.act(jest.runAllTimers);
        expect(mockedData.trackerY).toHaveClass(styles['CustomScrollView__trackerY--hidden']);
      },
    });

    checkSize(mockedData.scrollTop, 160);
    checkTransformY(mockedData.trackerYTransform, 100);

    simulateDrag({
      element: mockedData.trackerX,
      position: { endX: 100 },
      checkAfterDragStart: () =>
        expect(mockedData.trackerX).not.toHaveClass(styles['CustomScrollView__trackerX--hidden']),
      checkAfterDragEnd: () => {
        React.act(jest.runAllTimers);
        expect(mockedData.trackerX).toHaveClass(styles['CustomScrollView__trackerX--hidden']);
      },
    });

    checkSize(mockedData.scrollLeft, 147);
    checkTransformX(mockedData.trackerXTransform, 100);
  });

  it('check scroll by scroll event', () => {
    const onScroll = jest.fn();
    const { container } = render(
      <CustomScrollView
        data-testid="scroll-view"
        enableHorizontalScroll={true}
        windowResize={true}
        autoHideScrollbar={true}
        onScroll={onScroll}
      >
        <span>content</span>
      </CustomScrollView>,
    );
    const mockedData = setup({
      container,
      clientHeight: 300,
      scrollHeight: 480,
      clientWidth: 993,
      scrollWidth: 1464,
    });

    // форсим перерисовку и пересчет размеров уже с замоканными значениями
    fireEvent.resize(window);

    checkSize(mockedData.trackerYHeight, 187);
    checkSize(mockedData.trackerXWidth, 673);
    expect(mockedData.trackerXDisplay).toBe('');
    expect(mockedData.trackerYDisplay).toBe('');
    expect(mockedData.trackerY).toHaveClass(styles['CustomScrollView__trackerY--hidden']);
    expect(mockedData.trackerX).toHaveClass(styles['CustomScrollView__trackerX--hidden']);

    checkTransformX(mockedData.trackerXTransform, 0);
    checkTransformY(mockedData.trackerYTransform, 0);

    mockedData.scrollTop = 100;
    fireEvent.scroll(mockedData.box);

    checkSize(mockedData.scrollTop, 100);
    checkTransformY(mockedData.trackerYTransform, 62);
    expect(onScroll).toHaveBeenCalledTimes(1);

    mockedData.scrollLeft = 100;
    fireEvent.scroll(mockedData.box);

    checkSize(mockedData.scrollLeft, 100);
    checkTransformX(mockedData.trackerXTransform, 67);
    expect(onScroll).toHaveBeenCalledTimes(2);
  });
});
