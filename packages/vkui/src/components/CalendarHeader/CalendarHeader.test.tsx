/**
 * jest-runners-groups
 * @group unit
 */

import * as React from 'react';
import { render } from '@testing-library/react';
import { CalendarHeader } from './CalendarHeader';

describe('CalendarHeader', () => {
  it('displays prev month button', () => {
    const viewDate = new Date('1970-01-01');
    const onChange = jest.fn();
    const { container } = render(
      <CalendarHeader viewDate={viewDate} onChange={onChange} prevMonth />,
    );

    expect(container.getElementsByClassName('vkuiCalendarHeader__nav-icon-prev')[0]).toBeTruthy();
  });
  it('displays next month button', () => {
    const viewDate = new Date('1970-01-01');
    const onChange = jest.fn();
    const { container } = render(
      <CalendarHeader viewDate={viewDate} onChange={onChange} nextMonth />,
    );

    expect(container.getElementsByClassName('vkuiCalendarHeader__nav-icon-next')[0]).toBeTruthy();
  });
});
