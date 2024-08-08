import { render, screen } from '@testing-library/react';
import { fakeTimers, userEvent } from '../../testing/utils';
import { CalendarDay, CalendarDayProps } from './CalendarDay';
import styles from './CalendarDay.module.css';

const day = new Date('1970-01-01');
const onChange = jest.fn();

const CalendarDayTest = (testProps: Omit<CalendarDayProps, 'day' | 'onChange'>) => (
  <CalendarDay day={day} onChange={onChange} {...testProps} />
);

describe('CalendarDay', () => {
  fakeTimers();

  it('calls callback with day on click', async () => {
    render(<CalendarDayTest />);
    await userEvent.click(screen.getByText('1'));

    expect(onChange).toHaveBeenCalledWith(day);
  });
  it('renders hidden div', () => {
    render(<CalendarDayTest hidden />);

    expect(document.querySelector('.vkuiCalendarDay__hidden')).toBeInTheDocument();
  });
  it('check hinted className', () => {
    render(<CalendarDayTest hinted data-testid="day" />);
    const calendarDay = screen.getByTestId('day').firstElementChild!;
    expect(calendarDay).toHaveClass(styles['CalendarDay__hinted--active']);
  });

  it('check children render', () => {
    render(
      <CalendarDayTest>
        <span>Children</span>
      </CalendarDayTest>,
    );
    expect(screen.getByText('Children')).toBeInTheDocument();
  });
});
