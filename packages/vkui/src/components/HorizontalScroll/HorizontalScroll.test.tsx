import * as React from 'react';
import { fireEvent, render } from '@testing-library/react';
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
});
