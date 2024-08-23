import { render, screen } from '@testing-library/react';
import { baselineComponent, userEvent } from '../../testing/utils';
import { Calendar } from './Calendar';

const targetDate = new Date('2023-09-20T07:40:00.000Z');
const firstDayDate = new Date('2023-09-01T07:40:00.000Z');
const lastDayDate = new Date('2023-09-30T07:40:00.000Z');
const minDate = new Date('2023-09-15T10:35:00.000Z');
const maxDate = new Date('2023-09-29T07:20:00.000Z');

describe('Calendar', () => {
  baselineComponent(Calendar);

  beforeEach(() => (process.env.NODE_ENV = 'development'));
  afterEach(() => (process.env.NODE_ENV = 'test'));

  it('fires onChange', async () => {
    const onChange = jest.fn();

    render(<Calendar value={targetDate} onChange={onChange} />);
    await userEvent.click(screen.getByText(`${firstDayDate.getDate()}`));
    expect(onChange).toHaveBeenCalledWith(firstDayDate);
  });

  it('does not fire onChange with the value out of minDateTime/maxDateTime', async () => {
    const onChange = jest.fn();

    render(
      <Calendar
        value={targetDate}
        minDateTime={minDate}
        maxDateTime={maxDate}
        onChange={onChange}
      />,
    );
    await userEvent.click(screen.getByText(`${firstDayDate.getDate()}`));
    expect(onChange).not.toHaveBeenCalled();
    await userEvent.click(screen.getByText(`${maxDate.getDate() + 1}`));
    expect(onChange).not.toHaveBeenCalled();
  });

  it('onChange respects minDateTime', async () => {
    const onChange = jest.fn();

    render(<Calendar value={targetDate} minDateTime={minDate} onChange={onChange} />);
    await userEvent.click(screen.getByText(`${minDate.getDate()}`));
    expect(onChange).toHaveBeenCalledWith(minDate);
  });

  it('onChange respects maxDateTime', async () => {
    const onChange = jest.fn();

    render(<Calendar value={targetDate} maxDateTime={maxDate} onChange={onChange} />);
    await userEvent.click(screen.getByText(`${maxDate.getDate()}`));
    expect(onChange).toHaveBeenCalledWith(maxDate);
  });

  it('check navigation by keyboard between two months', async () => {
    jest.useFakeTimers();

    render(<Calendar value={lastDayDate} />);
    await userEvent.click(screen.getByText(`${lastDayDate.getDate()}`));
    await userEvent.keyboard('{ArrowRight}');

    expect(screen.getByText('октябрь')).toBeInTheDocument();

    await userEvent.keyboard('{ArrowLeft}');

    expect(screen.getByText('сентябрь')).toBeInTheDocument();

    await userEvent.keyboard('{ArrowDown}');

    expect(screen.getByText('октябрь')).toBeInTheDocument();

    await userEvent.keyboard('{ArrowUp}');

    expect(screen.getByText('сентябрь')).toBeInTheDocument();
  });

  it('check calls Calendar DEV errors', () => {
    const consoleErrorMock = jest.spyOn(console, 'error').mockImplementation();

    process.env.NODE_ENV = 'development';

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

    process.env.NODE_ENV = 'test';
  });
});
