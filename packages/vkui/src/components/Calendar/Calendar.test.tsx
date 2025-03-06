import { fireEvent, render, screen } from '@testing-library/react';
import { format } from 'date-fns';
import { baselineComponent, setNodeEnv, userEvent } from '../../testing/utils';
import { Calendar } from './Calendar';

const targetDate = new Date('2023-09-20T07:40:00.000Z');
const firstDayDate = new Date('2023-09-01T07:40:00.000Z');
const lastDayDate = new Date('2023-09-30T07:40:00.000Z');
const minDate = new Date('2023-09-15T10:35:00.000Z');
const maxDate = new Date('2023-09-29T07:20:00.000Z');

const dayTestId = (day: Date) => format(day, 'dd.MM.yyyy');

describe('Calendar', () => {
  baselineComponent(Calendar);

  it('fires onChange', () => {
    const onChange = jest.fn();

    render(<Calendar value={targetDate} onChange={onChange} dayTestId={dayTestId} />);
    fireEvent.click(screen.getByTestId(dayTestId(firstDayDate)));
    expect(onChange).toHaveBeenCalledWith(firstDayDate);
  });

  it('does not fire onChange with the value out of minDateTime/maxDateTime', () => {
    const onChange = jest.fn();

    render(
      <Calendar
        value={targetDate}
        minDateTime={minDate}
        maxDateTime={maxDate}
        onChange={onChange}
        dayTestId={dayTestId}
      />,
    );
    fireEvent.click(screen.getByTestId(dayTestId(firstDayDate)));
    expect(onChange).not.toHaveBeenCalled();
    fireEvent.click(screen.getByTestId(dayTestId(firstDayDate)));
    expect(onChange).not.toHaveBeenCalled();
  });

  it('onChange respects minDateTime', () => {
    const onChange = jest.fn();

    render(
      <Calendar
        value={targetDate}
        minDateTime={minDate}
        onChange={onChange}
        dayTestId={dayTestId}
      />,
    );
    fireEvent.click(screen.getByTestId(dayTestId(minDate)));
    expect(onChange).toHaveBeenCalledWith(minDate);
  });

  it('onChange respects maxDateTime', () => {
    const onChange = jest.fn();

    render(
      <Calendar
        value={targetDate}
        maxDateTime={maxDate}
        onChange={onChange}
        dayTestId={dayTestId}
      />,
    );
    fireEvent.click(screen.getByTestId(dayTestId(maxDate)));
    expect(onChange).toHaveBeenCalledWith(maxDate);
  });

  it('check navigation by keyboard between two months', async () => {
    jest.useFakeTimers();

    const monthDropdownTestId = (monthIndex: number) => `month-picker-${monthIndex}`;

    render(
      <Calendar
        value={lastDayDate}
        dayTestId={dayTestId}
        monthDropdownTestId={monthDropdownTestId}
      />,
    );
    fireEvent.click(screen.getByTestId(dayTestId(lastDayDate)));
    await userEvent.keyboard('{ArrowRight}');

    expect(screen.getByTestId(monthDropdownTestId(9))).toBeInTheDocument();

    await userEvent.keyboard('{ArrowLeft}');

    expect(screen.getByTestId(monthDropdownTestId(8))).toBeInTheDocument();

    await userEvent.keyboard('{ArrowDown}');

    expect(screen.getByTestId(monthDropdownTestId(9))).toBeInTheDocument();

    await userEvent.keyboard('{ArrowUp}');

    expect(screen.getByTestId(monthDropdownTestId(8))).toBeInTheDocument();
  });

  it('should display correct timezone time', () => {
    const onChange = jest.fn();
    render(
      <Calendar
        value={targetDate}
        onChange={onChange}
        minutesTestId="minutes"
        hoursTestId="hours"
        timezone="America/New_York"
        enableTime
      />,
    );

    const minuteSelect = screen.getByTestId<HTMLInputElement>('minutes');
    const hourSelect = screen.getByTestId<HTMLInputElement>('hours');

    fireEvent.click(hourSelect);
    expect(screen.queryByRole('option', { selected: true, name: '03' })).toBeInTheDocument();

    fireEvent.click(minuteSelect);
    expect(screen.queryByRole('option', { selected: true, name: '40' })).toBeInTheDocument();
  });

  describe('DEV errors', () => {
    beforeEach(() => setNodeEnv('development'));
    afterEach(() => setNodeEnv('test'));

    it('check calls Calendar', () => {
      const consoleErrorMock = jest.spyOn(console, 'error').mockImplementation();

      const { rerender } = render(<Calendar value={lastDayDate} disablePickers={false} size="s" />);

      expect(consoleErrorMock).toHaveBeenCalledTimes(1);
      expect(consoleErrorMock).toHaveBeenCalledWith(
        "%c[VKUI/Calendar] Нельзя включить селекты выбора месяца/года, если размер календаря 's'",
        undefined,
      );

      rerender(<Calendar value={lastDayDate} enableTime size="s" />);

      expect(consoleErrorMock).toHaveBeenCalledTimes(2);
      expect(consoleErrorMock.mock.calls).toEqual([
        [
          "%c[VKUI/Calendar] Нельзя включить селекты выбора месяца/года, если размер календаря 's'",
          undefined,
        ],
        ["%c[VKUI/Calendar] Нельзя включить выбор времени, если размер календаря 's'", undefined],
      ]);
    });
  });
});
