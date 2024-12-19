import * as React from 'react';
import { act } from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { noop } from '@vkontakte/vkjs';
import { baselineComponent, mockRtlDirection, userEvent } from '../../testing/utils';
import { AdaptivityProvider } from '../AdaptivityProvider/AdaptivityProvider';
import { HorizontalScroll } from './HorizontalScroll';

const setup = (element: HTMLElement, startScrollLeft = 0) => {
  let scrollLeft = startScrollLeft;
  jest.spyOn(element, 'scrollLeft', 'get').mockImplementation(() => scrollLeft);
  jest.spyOn(element, 'scrollLeft', 'set').mockImplementation((newValue) => {
    scrollLeft = newValue;
  });

  jest.spyOn(element, 'scrollWidth', 'get').mockImplementation(() => 300);

  jest.spyOn(element, 'offsetWidth', 'get').mockImplementation(() => 200);

  jest.spyOn(element.firstElementChild!, 'scrollWidth', 'get').mockImplementation(() => 500);

  // @ts-expect-error: TS2322 есть другой тип, но в компоненте он не используется
  element.scrollBy = (options?: ScrollToOptions) => {
    scrollLeft = scrollLeft + (options?.left || 0);
  };

  return {
    get scrollLeft() {
      return scrollLeft;
    },
  };
};

describe('HorizontalScroll', () => {
  baselineComponent(HorizontalScroll);

  it('scrollOnAnyWheel', () => {
    const ref = React.createRef<HTMLDivElement>();
    render(
      <HorizontalScroll getRef={ref} scrollOnAnyWheel>
        <div />
        <div />
      </HorizontalScroll>,
    );

    const scrollBy: Element['scrollBy'] = jest.fn();
    ref.current!.scrollBy = scrollBy;

    fireEvent.wheel(ref.current!, {
      deltaX: 10,
      deltaY: 10,
    });

    expect(scrollBy).toHaveBeenCalledTimes(1);
  });

  it('calculates and shows arrow on hover', async () => {
    render(
      <HorizontalScroll
        getRef={mockRef}
        data-testid="horizontal-scroll"
        nextButtonTestId="scroll-arrow-right"
      >
        <div style={{ width: '800px', height: '50px' }} />
      </HorizontalScroll>,
    );
    // no arrow button on the screen on first render
    expect(screen.queryByTestId('scroll-arrow-right')).toBeFalsy();

    fireEvent.mouseEnter(screen.getByTestId('horizontal-scroll'));

    await screen.findByTestId('scroll-arrow-right');
  });

  it('disables navigation to arrows by keyboard', async () => {
    jest.useFakeTimers();

    const result = render(
      <AdaptivityProvider hasPointer>
        <HorizontalScroll getRef={mockRef} data-testid="horizontal-scroll" showArrows="always">
          <button
            type="button"
            data-testid="focusable-element"
            style={{ width: '800px', height: '50px' }}
            onClick={noop}
          >
            Button
          </button>
        </HorizontalScroll>
      </AdaptivityProvider>,
    );

    expect(document.activeElement).toBe(document.body);

    await userEvent.tab();
    expect(document.activeElement).toBe(result.getByTestId('focusable-element'));

    await userEvent.tab();
    expect(document.activeElement).toBe(document.body);

    act(jest.runAllTimers);
  });

  it('click on arrow right should change scrollLeft', async () => {
    const ref: React.RefObject<HTMLDivElement | null> = {
      current: null,
    };
    render(
      <HorizontalScroll
        getRef={ref}
        data-testid="horizontal-scroll"
        nextButtonTestId="scroll-arrow-right"
      >
        <div style={{ width: '1800px', height: '50px' }} />
      </HorizontalScroll>,
    );

    const mockedData = setup(ref.current!);

    fireEvent.mouseEnter(screen.getByTestId('horizontal-scroll'));

    const arrowRight = screen.getByTestId('scroll-arrow-right');
    fireEvent.click(arrowRight);
    fireEvent.click(arrowRight);

    await waitFor(() => {
      expect(mockedData.scrollLeft).toBe(300);
      expect(screen.queryByTestId('scroll-arrow-right')).toBeNull();
    });
  });

  it('click on arrow left should change scrollLeft', async () => {
    const ref: React.RefObject<HTMLDivElement | null> = {
      current: null,
    };
    render(
      <HorizontalScroll
        getRef={ref}
        data-testid="horizontal-scroll"
        prevButtonTestId="scroll-arrow-left"
      >
        <div style={{ width: '1800px', height: '50px' }} />
      </HorizontalScroll>,
    );

    const mockedData = setup(ref.current!, 300);

    fireEvent.mouseEnter(screen.getByTestId('horizontal-scroll'));

    const arrowLeft = screen.getByTestId('scroll-arrow-left');
    fireEvent.click(arrowLeft);

    await waitFor(() => {
      expect(mockedData.scrollLeft).toBe(100);
    });

    fireEvent.click(arrowLeft);
    await waitFor(() => {
      expect(mockedData.scrollLeft).toBe(0);
    });
  });

  it('use custom scroll function to left and right', async () => {
    const ref: React.RefObject<HTMLDivElement | null> = {
      current: null,
    };
    render(
      <HorizontalScroll
        getRef={ref}
        data-testid="horizontal-scroll"
        getScrollToLeft={(left) => left - 100}
        getScrollToRight={(left) => left + 250}
        prevButtonTestId="scroll-arrow-left"
        nextButtonTestId="scroll-arrow-right"
      >
        <div style={{ width: '1800px', height: '50px' }} />
      </HorizontalScroll>,
    );

    const mockedData = setup(ref.current!, 50);

    fireEvent.mouseEnter(screen.getByTestId('horizontal-scroll'));

    const arrowRight = screen.getByTestId('scroll-arrow-right');
    fireEvent.click(arrowRight);

    await waitFor(() => {
      expect(mockedData.scrollLeft).toBe(300);
    });

    const arrowLeft = screen.getByTestId('scroll-arrow-left');
    fireEvent.click(arrowLeft);

    await waitFor(() => {
      expect(mockedData.scrollLeft).toBe(200);
    });
  });

  it('scroll by arrow', () => {
    const ref: React.RefObject<HTMLDivElement | null> = {
      current: null,
    };
    render(
      <HorizontalScroll
        getRef={ref}
        data-testid="horizontal-scroll"
        prevButtonTestId="scroll-arrow-left"
        nextButtonTestId="scroll-arrow-right"
      >
        <div style={{ width: '1800px', height: '50px' }} />
      </HorizontalScroll>,
    );

    const mockedData = setup(ref.current!, 50);

    fireEvent.mouseEnter(screen.getByTestId('horizontal-scroll'));

    const arrowLeft = screen.getByTestId('scroll-arrow-left');
    const arrowRight = screen.getByTestId('scroll-arrow-right');

    fireEvent.wheel(arrowRight, {
      deltaX: 20,
    });
    expect(mockedData.scrollLeft).toBe(70);

    fireEvent.wheel(arrowLeft, {
      deltaX: 20,
    });
    expect(mockedData.scrollLeft).toBe(90);
  });

  describe('check rtl working', () => {
    mockRtlDirection();

    it('click on arrows should change scrollLeft', async () => {
      const ref: React.RefObject<HTMLDivElement | null> = {
        current: null,
      };
      render(
        <HorizontalScroll
          getRef={ref}
          data-testid="horizontal-scroll"
          nextButtonTestId="next-scroll-arrow"
          prevButtonTestId="prev-scroll-arrow"
          dir="rtl"
        >
          <div style={{ width: '1800px', height: '50px' }} />
        </HorizontalScroll>,
      );

      const mockedData = setup(ref.current!);
      expect(mockedData.scrollLeft).toBe(0);

      fireEvent.mouseEnter(screen.getByTestId('horizontal-scroll'));

      const arrowNext = screen.getByTestId('next-scroll-arrow');
      fireEvent.click(arrowNext);
      fireEvent.click(arrowNext);

      await waitFor(() => {
        expect(mockedData.scrollLeft).toBe(-300);
      });

      fireEvent.mouseEnter(screen.getByTestId('horizontal-scroll'));

      const arrowPrev = screen.getByTestId('prev-scroll-arrow');
      fireEvent.click(arrowPrev);
      fireEvent.click(arrowPrev);

      await waitFor(() => {
        expect(mockedData.scrollLeft).toBe(0);
      });
    });
  });
});

function mockRef(element: HTMLDivElement) {
  if (!element) {
    return;
  }

  // to make sure we really call the logic that calculates show flag using element properties
  // we return 0 for first initial render, so, arrow won't be visible,
  // and on second call, we return value, which will allows us to see arrow on hover.
  jest
    .spyOn(element, 'scrollWidth', 'get')
    .mockImplementationOnce(() => {
      return 0;
    })
    .mockImplementation(() => {
      return 300;
    });
}
