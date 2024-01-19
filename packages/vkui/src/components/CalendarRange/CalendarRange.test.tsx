import * as React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { baselineComponent } from '../../testing/utils';
import { CalendarRange } from './CalendarRange';

describe('CalendarRange', () => {
  baselineComponent(CalendarRange, {
    // TODO [a11y]: "Exceeded timeout of 5000 ms for a test.
    //              Add a timeout value to this test to increase the timeout, if this is a long-running test. See https://jestjs.io/docs/api#testname-fn-timeout."
    a11y: false,
  });

  it('calls onChange when initial value is [null, null]', () => {
    const onChangeStub = jest.fn();
    render(
      <CalendarRange data-testid="calendar-range" onChange={onChangeStub} value={[null, null]} />,
    );

    fireEvent.click(screen.getAllByText('6')[0]);
    expect(onChangeStub).not.toHaveBeenLastCalledWith([null, null]);

    fireEvent.click(screen.getAllByText('6')[1]);
    expect(onChangeStub).not.toHaveBeenLastCalledWith([null, null]);
  });
});
