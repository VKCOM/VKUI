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

  it('displays prev month button', () => {
    const viewDate = new Date('1970-01-01');
    const onChange = jest.fn();
    const { container } = render(
      <CalendarHeader viewDate={viewDate} onChange={onChange} prevMonth />,
    );

    expect(container.getElementsByClassName(styles.navIconPrev)[0]).toBeTruthy();
  });
  it('displays next month button', () => {
    const viewDate = new Date('1970-01-01');
    const onChange = jest.fn();
    const { container } = render(
      <CalendarHeader viewDate={viewDate} onChange={onChange} nextMonth />,
    );

    expect(container.getElementsByClassName(styles.navIconNext)[0]).toBeTruthy();
  });
});
