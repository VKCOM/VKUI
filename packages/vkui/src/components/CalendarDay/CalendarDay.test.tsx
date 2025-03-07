import { fireEvent, render, screen } from '@testing-library/react';
import { fakeTimers } from '../../testing/utils';
import { CalendarDay, type CalendarDayProps } from './CalendarDay';
import styles from './CalendarDay.module.css';

const day = new Date('1970-01-01');
const onChange = jest.fn();

const CalendarDayTest = (testProps: Omit<CalendarDayProps, 'day' | 'onChange'>) => (
  <CalendarDay day={day} onChange={onChange} {...testProps} />
);

describe('CalendarDay', () => {
  fakeTimers();

  it('calls callback with day on click', () => {
    render(<CalendarDayTest />);
    fireEvent.click(screen.getByText('1'));

    expect(onChange).toHaveBeenCalledWith(day);
  });
  it('renders hidden div', () => {
    render(<CalendarDayTest hidden />);

    expect(document.querySelector(`.${styles.hidden}`)).toBeInTheDocument();
  });
  it('check hinted className', () => {
    render(<CalendarDayTest hinted testId="day" />);
    const calendarDay = screen.getByTestId('day').firstElementChild!.firstElementChild!;
    expect(calendarDay).toHaveClass(styles.hintedActive);
  });

  it('check children render', () => {
    render(
      <CalendarDayTest>
        <span>Children</span>
      </CalendarDayTest>,
    );
    expect(screen.getByText('Children')).toBeInTheDocument();
  });

  it('check renderDayContent render', () => {
    render(
      <CalendarDayTest
        renderDayContent={(day) => <span data-testid="day">{day.getDate()}</span>}
      />,
    );
    expect(screen.queryByTestId('day')).toBeTruthy();
    expect(screen.queryByText('1')).toBeTruthy();
  });
});
