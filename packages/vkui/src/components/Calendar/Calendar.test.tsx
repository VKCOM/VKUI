import { act, fireEvent, render, screen } from '@testing-library/react';
import { noop } from '@vkontakte/vkjs';
import { dateFormatter } from '../../lib/date';
import { baselineComponent, setNodeEnv, userEvent, withFakeTimers } from '../../testing/utils';
import { Calendar } from './Calendar';

const targetDate = new Date('2023-09-20T07:40:00.000Z');
const firstDayDate = new Date('2023-09-01T07:40:00.000Z');
const lastDayDate = new Date('2023-09-30T07:40:00.000Z');
const minDate = new Date('2023-09-15T10:35:00.000Z');
const maxDate = new Date('2023-09-29T07:20:00.000Z');

const dayTestId = (day: Date) => dateFormatter.format(day);

describe('Calendar', () => {
  baselineComponent(Calendar);

  it(
    'checks aria roles',
    withFakeTimers(
      async () => {
        render(<Calendar defaultValue={targetDate} dayTestId={dayTestId} />);

        expect(screen.getByRole('grid', { name: 'сентябрь 2023 г.' })).toBeDefined();
        expect(screen.getByRole('gridcell', { name: 'среда, 20 сентября' })).toBeDefined();
        expect(screen.getByRole('columnheader', { name: 'понедельник' })).toBeDefined();
        expect(screen.getByRole('columnheader', { name: 'вторник' })).toBeDefined();
        expect(screen.getByRole('columnheader', { name: 'среда' })).toBeDefined();
        expect(screen.getByRole('columnheader', { name: 'четверг' })).toBeDefined();
        expect(screen.getByRole('columnheader', { name: 'пятница' })).toBeDefined();
        expect(screen.getByRole('columnheader', { name: 'суббота' })).toBeDefined();
        expect(screen.getByRole('columnheader', { name: 'воскресенье' })).toBeDefined();

        let currentDate = screen.getByRole('gridcell', { name: 'среда, 20 сентября' });
        expect(currentDate.getAttribute('aria-current')).toBe('date');
        expect(currentDate.getAttribute('aria-selected')).toBe('true');

        await act(() =>
          userEvent.click(screen.getByRole('gridcell', { name: 'вторник, 19 сентября' })),
        );

        currentDate = screen.getByRole('gridcell', { name: 'среда, 20 сентября' });
        expect(currentDate.getAttribute('aria-current')).toBe('date');
        expect(currentDate.getAttribute('aria-selected')).toBe('false');

        const selectedDate = screen.getByRole('gridcell', { name: 'вторник, 19 сентября' });
        expect(selectedDate.getAttribute('aria-current')).toBe(null);
        expect(selectedDate.getAttribute('aria-selected')).toBe('true');
      },
      { now: targetDate },
    ),
  );

  it('fires onChange', () => {
    const onChange = vi.fn();

    render(<Calendar value={targetDate} onChange={onChange} dayTestId={dayTestId} />);
    fireEvent.click(screen.getByTestId(dayTestId(firstDayDate)));
    expect(onChange).toHaveBeenCalledWith(firstDayDate);
  });

  it('does not fire onChange with the value out of minDateTime/maxDateTime', () => {
    const onChange = vi.fn();

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
    const onChange = vi.fn();

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
    const onChange = vi.fn();

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

  it(
    'check navigation by keyboard between two months',
    withFakeTimers(async () => {
      const monthDropdownTestId = (monthIndex: number) => `month-picker-${monthIndex}`;

      render(
        <Calendar
          value={lastDayDate}
          dayTestId={dayTestId}
          monthDropdownTestId={monthDropdownTestId}
        />,
      );
      await userEvent.click(screen.getByTestId(dayTestId(lastDayDate)));
      await userEvent.keyboard('{ArrowRight}');

      expect(screen.getByTestId(monthDropdownTestId(9))).toBeInTheDocument();

      await userEvent.keyboard('{ArrowLeft}');

      expect(screen.getByTestId(monthDropdownTestId(8))).toBeInTheDocument();

      await userEvent.keyboard('{ArrowDown}');

      expect(screen.getByTestId(monthDropdownTestId(9))).toBeInTheDocument();

      await userEvent.keyboard('{ArrowUp}');

      expect(screen.getByTestId(monthDropdownTestId(8))).toBeInTheDocument();
    }),
  );

  it(
    'checks that previous focusable day still focusable after navigation out of Calendar using Tab',
    withFakeTimers(async () => {
      const day = new Date('2023-09-30T07:40:00.000Z');
      const dayBeforeTarget = new Date('2023-09-29T07:40:00.000Z');

      render(
        <div>
          <Calendar value={day} dayTestId={dayTestId} />
          <button type="button">Следующая кнопка</button>
        </div>,
      );

      const getTargetDay = () => screen.getByTestId(dayTestId(day));
      const getDayBeforeTarget = () => screen.getByTestId(dayTestId(dayBeforeTarget));

      // текущая дата календаря фокусируемая
      expect(getTargetDay().tabIndex).toBe(0);
      // соседний день нет
      expect(getDayBeforeTarget().tabIndex).toBe(-1);

      // фокусируемся с помощью клика на текущем дне
      await userEvent.click(getTargetDay());
      // переходим на предыдущий день с помощью клавиатуры
      await userEvent.keyboard('{ArrowLeft}');

      // текущая дата календаря больше не фокусируемая
      expect(getTargetDay().tabIndex).toBe(-1);
      // соседний день должен стать фокусируемым с клавиатуры
      expect(getDayBeforeTarget().tabIndex).toBe(0);

      // уводим фокус с помощью клавиатуры за пределы календаря
      await userEvent.tab();
      expect(document.activeElement).toBe(screen.getByText('Следующая кнопка'));

      // на последний выбранный день календаря всё ещё можно сфокусироваться
      expect(getDayBeforeTarget().tabIndex).toBe(0);

      // возвращаемся назад с помощью Shift + Tab
      await userEvent.tab({ shift: true });
      // последний выбранный день снова в фокусе
      expect(document.activeElement).toStrictEqual(getDayBeforeTarget());
    }),
  );

  it(
    'checks that Enter or Space triggers click on day cell',
    withFakeTimers(async () => {
      const day = new Date('2023-09-30T07:40:00.000Z');

      const onChangeStub = vi.fn();

      render(<Calendar value={day} dayTestId={dayTestId} onChange={onChangeStub} />);

      const getTargetDay = () => screen.getByTestId(dayTestId(day));

      // текущая дата календаря фокусируемая
      expect(getTargetDay().tabIndex).toBe(0);

      // фокусируемся с помощью клика на текущем дне
      await userEvent.click(getTargetDay());

      expect(onChangeStub).toHaveBeenCalledWith(day);
      // переходим на предыдущий день с помощью клавиатуры
      await userEvent.keyboard('{ArrowLeft}');
      await userEvent.keyboard('{ArrowLeft}');
      await userEvent.keyboard('{ArrowLeft}');

      // нажимаем Enter
      await userEvent.keyboard('{Enter}');
      expect(onChangeStub).toHaveBeenLastCalledWith(new Date('2023-09-27T07:40:00.000Z'));

      await userEvent.keyboard('{ArrowLeft}');

      // нажимаем Space
      await userEvent.keyboard(' ');
      expect(onChangeStub).toHaveBeenLastCalledWith(new Date('2023-09-26T07:40:00.000Z'));
    }),
  );

  it(
    'checks focusable days',
    withFakeTimers(async () => {
      render(<Calendar value={targetDate} dayTestId={dayTestId} />);

      // при открытии календаря focusable день соответствует значению в value
      expect(screen.getByTestId('20.09.2023').tabIndex).toBe(0);
      expect(screen.getByTestId('21.09.2023').tabIndex).toBe(-1);

      await userEvent.click(screen.getByTestId('20.09.2023'));
      // при переходе к следующему дню с клавиатуры, следующий день становится фокусируемым
      await userEvent.keyboard('{ArrowRight}');

      expect(screen.getByTestId('20.09.2023').tabIndex).toBe(-1);
      expect(screen.getByTestId('21.09.2023').tabIndex).toBe(0);

      // при смене месяца факусируемым становится первый день месяца
      await userEvent.click(screen.getByText(/Следующий месяц/));
      expect(screen.getByTestId('01.10.2023').tabIndex).toBe(0);
    }),
  );

  it('should display correct timezone time', () => {
    const onChange = vi.fn();
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
      const consoleErrorMock = vi.spyOn(console, 'error').mockImplementation(noop);

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
