import { fireEvent, render, screen } from '@testing-library/react';
import {
  AppRootContext,
  DEFAULT_APP_ROOT_CONTEXT_VALUE,
} from '../../components/AppRoot/AppRootContext';
import { fakeTimers, userEvent } from '../../testing/utils';
import { CalendarDay, type CalendarDayProps } from './CalendarDay';
import styles from './CalendarDay.module.css';
import stylesFocusVisible from '../../styles/focusVisible.module.css';

const day = new Date('1970-01-01');
const onChange = vi.fn();

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

  it('can be disabled but focusable with focus visible', async () => {
    // Важно видеть фокус в календаре при переходе по задисейбленным дням
    // Так как дни могут быть запрещены произвольным образом,
    // то прыгать через них при навигации выглядит как плохое решение как в плане написания логики для проверки ближайшего незадисейбленного дня,
    // так и для пользователя, для которого может быть неожиданно оказаться на несколько месяцев впереди при переходе по таблице, а значит видеть где фокус даже на disabled дне при навигации с клавиатуры нужно.
    vi.useFakeTimers();
    render(
      <AppRootContext.Provider value={{ ...DEFAULT_APP_ROOT_CONTEXT_VALUE, keyboardInput: true }}>
        <CalendarDayTest disabled testId="day" tabIndex={0}>
          31
        </CalendarDayTest>
      </AppRootContext.Provider>,
    );

    expect(screen.getByTestId('day')).not.toHaveClass(
      stylesFocusVisible['-focus-visible--focused'],
    );

    await userEvent.tab();

    expect(screen.getByTestId('day')).toHaveClass(stylesFocusVisible['-focus-visible--focused']);
  });
});
