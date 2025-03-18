import * as React from 'react';
import { act, fireEvent, render, screen } from '@testing-library/react';
import { noop } from '@vkontakte/vkjs';
import { format, isToday, isYesterday, subDays } from 'date-fns';
import { baselineComponent, userEvent } from '../../testing/utils';
import { Button } from '../Button/Button';
import { DateInput, type DateInputPropsTestsProps } from './DateInput';

const date = new Date(2024, 6, 31, 11, 20, 0, 0);

const testIds: Required<DateInputPropsTestsProps> = {
  dayFieldTestId: 'day-picker',
  monthFieldTestId: 'month-picker',
  yearFieldTestId: 'year-picker',
  hourFieldTestId: 'hour-picker',
  minuteFieldTestId: 'minute-picker',
  clearButtonTestId: 'clear-button',
  showCalendarButtonTestId: 'show-calendar-button',
};

const getInputsLike = () => {
  return [
    screen.queryByTestId(testIds.dayFieldTestId),
    screen.queryByTestId(testIds.monthFieldTestId),
    screen.queryByTestId(testIds.yearFieldTestId),
    screen.queryByTestId(testIds.hourFieldTestId),
    screen.queryByTestId(testIds.minuteFieldTestId),
  ].filter(Boolean) as HTMLElement[];
};

const dayTestId = (day: Date) => format(day, 'dd.MM.yyyy');

const convertInputsToNumbers = (inputs: HTMLElement[]) => {
  return inputs.map((input) => Number(input.textContent));
};

describe('DateInput', () => {
  baselineComponent((props) => (
    <React.Fragment>
      <label htmlFor="date-input">Date range</label>
      <DateInput {...props} id="date-input" />
    </React.Fragment>
  ));

  it('should be correct input value', () => {
    const onChange = jest.fn();
    render(
      <DateInput
        value={date}
        onChange={onChange}
        changeMonthLabel=""
        changeYearLabel=""
        changeDayLabel=""
        changeHoursLabel=""
        changeMinutesLabel=""
        {...testIds}
      />,
    );
    const inputLikes = getInputsLike();
    const normalizedDate = convertInputsToNumbers(inputLikes);
    expect(normalizedDate).toEqual([31, 7, 2024]);
  });

  it('should be correct input value with time', () => {
    const onChange = jest.fn();
    render(
      <DateInput
        value={date}
        onChange={onChange}
        enableTime={true}
        changeMonthLabel=""
        changeYearLabel=""
        changeDayLabel=""
        changeHoursLabel=""
        changeMinutesLabel=""
        {...testIds}
      />,
    );
    const inputLikes = getInputsLike();
    const normalizedDate = convertInputsToNumbers(inputLikes);
    expect(normalizedDate).toEqual([31, 7, 2024, 11, 20]);
  });

  it('should be correct input value with time and specific timezone', () => {
    const onChange = jest.fn();
    render(
      <DateInput
        value={date}
        onChange={onChange}
        enableTime={true}
        timezone="America/New_York"
        changeMonthLabel=""
        changeYearLabel=""
        changeDayLabel=""
        changeHoursLabel=""
        changeMinutesLabel=""
        {...testIds}
      />,
    );
    const inputLikes = getInputsLike();
    const normalizedDate = convertInputsToNumbers(inputLikes);
    expect(normalizedDate).toEqual([31, 7, 2024, 7, 20]);
  });

  it('should correct update value when typing text in input', async () => {
    jest.useFakeTimers();
    const onChange = jest.fn();
    render(
      <DateInput
        value={date}
        onChange={onChange}
        enableTime={true}
        closeOnChange={true}
        changeMonthLabel=""
        changeYearLabel=""
        changeDayLabel=""
        changeHoursLabel=""
        changeMinutesLabel=""
        {...testIds}
      />,
    );
    const inputLikes = getInputsLike();

    const [dates, months, years, hours, minutes] = inputLikes;

    await userEvent.type(dates, '30');
    await userEvent.type(months, '06');
    await userEvent.type(years, '2023');
    await userEvent.type(hours, '15');
    await userEvent.type(minutes, '40');

    const normalizedDate = convertInputsToNumbers(inputLikes);
    expect(normalizedDate).toEqual([30, 6, 2023, 15, 40]);

    expect(onChange).toHaveBeenCalledTimes(5);
    expect(onChange).toHaveBeenCalledWith(new Date(2023, 5, 30, 15, 40, 0, 0));
  });

  it('should call onChange with zero sec/ms', async () => {
    jest.useFakeTimers();
    const onChange = jest.fn();
    render(<DateInput value={undefined} onChange={onChange} {...testIds} />);
    const inputLikes = getInputsLike();

    const [dates, months, years] = inputLikes;

    await userEvent.type(dates, '30');
    await userEvent.type(months, '06');
    await userEvent.type(years, '2023');

    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith(new Date(2023, 5, 30, 0, 0, 0, 0));
  });

  it('should call onChange callback when change data by calendar', async () => {
    jest.useFakeTimers();
    const onChange = jest.fn();
    render(
      <DateInput
        value={date}
        onChange={onChange}
        closeOnChange={true}
        {...testIds}
        calendarTestsProps={{
          dayTestId,
        }}
      />,
    );
    const inputLikes = getInputsLike();

    const [dates] = inputLikes;

    await userEvent.click(dates);

    const resultDate = new Date(date);
    resultDate.setDate(date.getDate() - 1);

    expect(screen.queryByRole('dialog', { name: 'Календарь' })).toBeTruthy();
    fireEvent.click(screen.getByTestId(dayTestId(resultDate)));

    expect(onChange).toHaveBeenCalledWith(resultDate);

    expect(screen.queryByRole('dialog', { name: 'Календарь' })).toBeFalsy();
  });

  it('should call onCloseCalendar calendar was closed', async () => {
    jest.useFakeTimers();
    const onCalendarOpenChanged = jest.fn();
    render(
      <DateInput
        value={date}
        onCalendarOpenChanged={onCalendarOpenChanged}
        {...testIds}
        calendarTestsProps={{
          dayTestId,
        }}
      />,
    );
    const inputLikes = getInputsLike();

    const [dates] = inputLikes;

    await userEvent.click(dates);
    expect(onCalendarOpenChanged).toHaveBeenCalledTimes(1);
    expect(onCalendarOpenChanged.mock.calls[0][0]).toBeTruthy();

    expect(screen.queryByRole('dialog', { name: 'Календарь' })).toBeTruthy();
    fireEvent.click(screen.getByTestId(dayTestId(subDays(date, 1))));

    expect(onCalendarOpenChanged).toHaveBeenCalledTimes(2);
    expect(onCalendarOpenChanged.mock.calls[1][0]).toBeFalsy();

    expect(screen.queryByRole('dialog', { name: 'Календарь' })).toBeFalsy();
  });

  it('should call onApply when clicking Done button', async () => {
    jest.useFakeTimers();
    const onApply = jest.fn();
    const onChange = jest.fn();
    const onCalendarOpenChanged = jest.fn();
    render(
      <DateInput
        value={date}
        onChange={onChange}
        onApply={onApply}
        enableTime={true}
        onCalendarOpenChanged={onCalendarOpenChanged}
        {...testIds}
        calendarTestsProps={{
          dayTestId,
          doneButtonTestId: 'done-button',
        }}
      />,
    );

    const [dates] = getInputsLike();
    fireEvent.click(dates);

    expect(onCalendarOpenChanged).toHaveBeenCalledTimes(1);

    const doneButton = screen.getByTestId('done-button');
    fireEvent.click(doneButton);

    expect(onApply).toHaveBeenCalledWith(date);
    expect(onChange).toHaveBeenCalledWith(date);
  });

  it('should not call onChange when selecting date in calendar with enableTime', async () => {
    jest.useFakeTimers();
    const onChange = jest.fn();
    render(
      <DateInput
        value={date}
        onChange={onChange}
        enableTime={true}
        changeMonthLabel=""
        changeYearLabel=""
        changeDayLabel=""
        changeHoursLabel=""
        changeMinutesLabel=""
        {...testIds}
        calendarTestsProps={{
          dayTestId,
        }}
      />,
    );

    const [dates] = getInputsLike();
    await userEvent.click(dates);

    const resultDate = subDays(date, 1);
    fireEvent.click(screen.getByTestId(dayTestId(resultDate)));

    const inputLikes = getInputsLike();
    const normalizedDate = convertInputsToNumbers(inputLikes);

    expect(normalizedDate).toEqual([
      resultDate.getDate(),
      resultDate.getMonth() + 1,
      resultDate.getFullYear(),
      resultDate.getHours(),
      resultDate.getMinutes(),
    ]);

    expect(onChange).not.toHaveBeenCalled();
  });

  it('check customValue visibility', async () => {
    let newDate: Date | undefined = undefined;
    const Fixture = () => {
      const [dateValue, setDateValue] = React.useState<Date | undefined>(undefined);
      return (
        <>
          <DateInput
            value={dateValue}
            renderCustomValue={(date) => {
              if (!date) {
                return undefined;
              }
              if (isToday(date)) {
                return 'Сегодня';
              }
              if (isYesterday(date)) {
                return 'Вчера';
              }
              return undefined;
            }}
            onChange={noop}
            {...testIds}
          />
          <Button data-testid="add-date" onClick={() => setDateValue(newDate)}>
            Добавить дату
          </Button>
        </>
      );
    };

    render(<Fixture />);
    expect(screen.queryByText('Сегодня')).toBeFalsy();
    expect(screen.queryByText('Вчера')).toBeFalsy();

    newDate = new Date();
    fireEvent.click(screen.getByTestId('add-date'));
    expect(screen.queryByText('Сегодня')).toBeTruthy();

    newDate = subDays(new Date(), 1);
    fireEvent.click(screen.getByTestId('add-date'));
    expect(screen.queryByText('Вчера')).toBeTruthy();

    const inputLikes = getInputsLike();
    const [dates] = inputLikes;
    await userEvent.click(dates);

    expect(screen.queryByText('Вчера')).toBeFalsy();
  });

  it('should call onChange with undefined when click on clear button', async () => {
    const onChange = jest.fn();

    render(<DateInput value={new Date(2023, 5, 30)} onChange={onChange} {...testIds} />);

    fireEvent.click(screen.getByTestId(testIds.clearButtonTestId));

    expect(onChange).toHaveBeenCalledWith(undefined);
  });

  it('should toggle calendar open state on calendar icon click', async () => {
    jest.useFakeTimers();
    const onCalendarOpenChanged = jest.fn();
    render(
      <DateInput
        showCalendarLabel="Показать календарь"
        onCalendarOpenChanged={onCalendarOpenChanged}
      />,
    );

    // проверяем, что календарь закрыт
    expect(screen.queryByRole('dialog', { name: 'Календарь' })).toBeFalsy();

    const calendarIcon = screen.getByText('Показать календарь');
    await act(() => userEvent.click(calendarIcon));

    expect(onCalendarOpenChanged).toHaveBeenCalledTimes(1);
    expect(onCalendarOpenChanged.mock.calls[0][0]).toBeTruthy();
    expect(screen.queryByRole('dialog', { name: 'Календарь' })).toBeTruthy();

    await act(() => userEvent.click(calendarIcon));

    expect(onCalendarOpenChanged).toHaveBeenCalledTimes(2);
    expect(onCalendarOpenChanged.mock.calls[1][0]).toBeFalsy();
    expect(screen.queryByRole('dialog', { name: 'Календарь' })).toBeFalsy();
  });

  describe('keyboard', () => {
    it('controls focus when arrows or tab keys are pressed', async () => {
      jest.useFakeTimers();
      render(
        <div>
          <button type="button">Предыдущая кнопка</button>
          <DateInput {...testIds} />
        </div>,
      );

      const [dayPicker, monthPicker, yearPicker] = getInputsLike();

      await act(() => userEvent.click(dayPicker));
      expect(document.activeElement).toBe(dayPicker);

      await act(() => userEvent.tab());
      expect(document.activeElement).toBe(monthPicker);

      await act(() => userEvent.tab());
      expect(document.activeElement).toBe(yearPicker);

      await act(() => userEvent.tab());
      expect(document.activeElement).toBe(
        screen.getByRole('button', { name: 'Показать календарь' }),
      );

      await act(() => userEvent.tab({ shift: true }));
      expect(document.activeElement).toBe(yearPicker);

      await act(() => userEvent.tab({ shift: true }));
      expect(document.activeElement).toBe(monthPicker);

      await act(() => userEvent.keyboard('{ArrowRight}'));
      expect(document.activeElement).toBe(yearPicker);

      await act(() => userEvent.keyboard('{ArrowLeft}'));
      expect(document.activeElement).toBe(monthPicker);

      await act(() => userEvent.keyboard('{ArrowLeft}'));
      expect(document.activeElement).toBe(dayPicker);

      await act(() => userEvent.tab({ shift: true }));
      expect(document.activeElement).toBe(screen.getByText('Предыдущая кнопка'));
    });

    it('clears part of input data by pressing delete', async () => {
      jest.useFakeTimers();
      render(
        <DateInput
          changeMonthLabel=""
          changeYearLabel=""
          changeDayLabel=""
          changeHoursLabel=""
          changeMinutesLabel=""
          value={date}
          onChange={jest.fn()}
          {...testIds}
        />,
      );

      const inputLikes = getInputsLike();
      const [dayPicker] = inputLikes;

      await act(() => userEvent.click(dayPicker));
      expect(document.activeElement).toBe(dayPicker);

      let normalizedDate = convertInputsToNumbers(inputLikes);
      expect(normalizedDate).toEqual([31, 7, 2024]);

      await act(() => userEvent.keyboard('{Del}'));

      normalizedDate = convertInputsToNumbers(inputLikes);
      expect(normalizedDate).toEqual([0, 7, 2024]);
    });

    it('changes input values by arrow keys', async () => {
      jest.useFakeTimers();
      render(
        <DateInput
          changeMonthLabel=""
          changeYearLabel=""
          changeDayLabel=""
          changeHoursLabel=""
          changeMinutesLabel=""
          value={date}
          onChange={jest.fn()}
          {...testIds}
        />,
      );

      const inputLikes = getInputsLike();
      const [dayPicker] = inputLikes;

      await act(() => userEvent.click(dayPicker));
      expect(document.activeElement).toBe(dayPicker);

      let normalizedDate = convertInputsToNumbers(inputLikes);
      expect(normalizedDate).toEqual([31, 7, 2024]);

      await act(() => userEvent.keyboard('{ArrowUp}'));

      normalizedDate = convertInputsToNumbers(inputLikes);
      expect(normalizedDate).toEqual([1, 7, 2024]);

      await act(() => userEvent.keyboard('{ArrowRight}'));
      await act(() => userEvent.keyboard('{ArrowDown}'));
      normalizedDate = convertInputsToNumbers(inputLikes);
      expect(normalizedDate).toEqual([1, 6, 2024]);

      await act(() => userEvent.keyboard('{ArrowRight}'));
      await act(() => userEvent.keyboard('{ArrowDown}'));

      normalizedDate = convertInputsToNumbers(inputLikes);
      expect(normalizedDate).toEqual([1, 6, 2023]);

      await act(() => userEvent.keyboard('{Del}'));
      await act(() => userEvent.keyboard('2'));
      await act(() => userEvent.keyboard('0'));
      await act(() => userEvent.keyboard('0'));
      await act(() => userEvent.keyboard('1'));
      normalizedDate = convertInputsToNumbers(inputLikes);
      expect(normalizedDate).toEqual([1, 6, 2001]);
    });
  });

  describe('accessible mode', () => {
    it('opens/closes calendar with keyboard/mouse', async () => {
      jest.useFakeTimers();
      const onCalendarOpenChangedStub = jest.fn();
      render(
        <DateInput
          accessible
          enableTime
          onCalendarOpenChanged={onCalendarOpenChangedStub}
          {...testIds}
        />,
      );

      const inputLikesLabels = [
        'Изменить день',
        'Изменить месяц',
        'Изменить год',
        'Изменить час',
        'Изменить минуту',
      ];

      for (const inputLabel of inputLikesLabels) {
        onCalendarOpenChangedStub.mockClear();
        // фокусируемся на одном из полей инпута
        await act(() => userEvent.tab());
        // фокус на инпуте
        const inputPart = screen.getByRole('spinbutton', { name: inputLabel });
        expect(document.activeElement).toBe(inputPart);

        // календарь при фокусе закрыт
        expect(screen.queryByRole('dialog', { name: 'Календарь' })).toBeFalsy();

        // нажимаем пробел
        await act(() => userEvent.keyboard(' '));
        // календарь открыт
        expect(screen.queryByRole('dialog', { name: 'Календарь' })).toBeTruthy();
        jest.runOnlyPendingTimers();

        // onCalendarOpenChanged вызан лишь раз
        expect(onCalendarOpenChangedStub).toHaveBeenCalledTimes(1);
        onCalendarOpenChangedStub.mockClear();

        // фокус на кнопке в календаре
        expect(document.activeElement).toBe(
          screen.getByRole('button', { name: /Предыдущий месяц/ }),
        );

        // закрываем, нажимая Esc
        await act(() => userEvent.keyboard('{Escape}'));
        // календарь закрыт
        expect(screen.queryByRole('dialog', { name: 'Календарь' })).toBeFalsy();
        jest.runOnlyPendingTimers();

        // onCalendarOpenChanged вызан лишь раз
        expect(onCalendarOpenChangedStub).toHaveBeenCalledTimes(1);
        onCalendarOpenChangedStub.mockClear();

        // фокус возвращается на часть инпутa
        expect(document.activeElement).toBe(inputPart);

        // кликаем на ту же часть инпута чтобы открыть календарь
        await act(() => userEvent.click(inputPart));
        expect(screen.queryByRole('dialog', { name: 'Календарь' })).toBeTruthy();

        // onCalendarOpenChanged вызан лишь раз
        expect(onCalendarOpenChangedStub).toHaveBeenCalledTimes(1);
        onCalendarOpenChangedStub.mockClear();

        // закрываем, нажимая Esc
        await act(() => userEvent.keyboard('{Escape}'));
        jest.runOnlyPendingTimers();

        // фокус возвращается на часть инпутa
        expect(document.activeElement).toBe(inputPart);
      }
    });
  });
});
