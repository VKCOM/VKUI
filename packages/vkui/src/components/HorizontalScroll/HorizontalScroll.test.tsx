import * as React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { baselineComponent } from '../../testing/utils';
import { HorizontalScroll } from './HorizontalScroll';

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

    expect(scrollBy).toBeCalledTimes(1);
  });

  it('calculates and shows arrow on hover', async () => {
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

    render(
      <HorizontalScroll getRef={mockRef} data-testid="horizontal-scroll">
        <div style={{ width: '800px', height: '50px' }} />
      </HorizontalScroll>,
    );
    // no arrow button on the screen on first render
    expect(screen.queryByTestId('ScrollArrow')).toBeFalsy();

    fireEvent.mouseEnter(screen.getByTestId('horizontal-scroll'));

    await screen.findByTestId('ScrollArrow');
  });
});
