import * as React from 'react';
import { render } from '@testing-library/react';
import { noop } from '@vkontakte/vkjs';
import { baselineComponent } from '../../testing/utils';
import { CalendarHeader } from './CalendarHeader';
import styles from './CalendarHeader.module.css';

describe('CalendarHeader', () => {
  baselineComponent((props) => (
    <CalendarHeader
      onNextMonth={noop}
      onPrevMonth={noop}
      viewDate={new Date()}
      onChange={noop}
      {...props}
    />
  ));

  it('displays prev month button by default', () => {
    const viewDate = new Date('1970-01-01');
    const onChange = jest.fn();
    const { container } = render(<CalendarHeader viewDate={viewDate} onChange={onChange} />);

    expect(
      container.getElementsByClassName(styles['CalendarHeader__nav-icon-prev'])[0],
    ).toBeTruthy();
  });
  it('displays next month button by default', () => {
    const viewDate = new Date('1970-01-01');
    const onChange = jest.fn();
    const { container } = render(<CalendarHeader viewDate={viewDate} onChange={onChange} />);

    expect(
      container.getElementsByClassName(styles['CalendarHeader__nav-icon-next'])[0],
    ).toBeTruthy();
  });
  it('do not display prev month and next month buttons if they hidden', () => {
    const viewDate = new Date('1970-01-01');
    const onChange = jest.fn();
    const { container } = render(
      <CalendarHeader viewDate={viewDate} onChange={onChange} prevMonthHidden nextMonthHidden />,
    );

    expect(
      container.getElementsByClassName(styles['CalendarHeader__nav-icon-prev'])[0],
    ).not.toBeTruthy();
    expect(
      container.getElementsByClassName(styles['CalendarHeader__nav-icon-next'])[0],
    ).not.toBeTruthy();
  });
});
