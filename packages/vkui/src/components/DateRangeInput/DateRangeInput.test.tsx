import * as React from 'react';
import { act, fireEvent, render, screen } from '@testing-library/react';
import { addDays, format } from 'date-fns';
import { baselineComponent, userEvent } from '../../testing/utils';
import { DateRangeInput } from './DateRangeInput';

const startDate = new Date(2024, 6, 20);
const endDate = new Date(2024, 6, 31);

const dayTestId = (day: Date) => format(day, 'dd.MM.yyyy');

const testsProps = {
  startDateTestsProps: {
    day: 'start-day',
    month: 'start-month',
    year: 'start-year',
  },
  endDateTestsProps: {
    day: 'end-day',
    month: 'end-month',
    year: 'end-year',
  },
  clearButtonTestId: 'clear-button',
  showCalendarButtonTestId: 'show-calendar-button',
};

const getInputsLike = () => {
  return [
    screen.getByTestId(testsProps.startDateTestsProps.day),
    screen.getByTestId(testsProps.startDateTestsProps.month),
    screen.getByTestId(testsProps.startDateTestsProps.year),
    screen.getByTestId(testsProps.endDateTestsProps.day),
    screen.getByTestId(testsProps.endDateTestsProps.month),
    screen.getByTestId(testsProps.endDateTestsProps.year),
  ];
};

const convertInputsToNumbers = (inputs: HTMLElement[]) => {
  return inputs.map((input) => Number(input.textContent));
};

describe('DateRangeInput', () => {
  baselineComponent((props) => (
    <React.Fragment>
      <label htmlFor="range-input">Date range</label>
      <DateRangeInput {...props} id="range-input" />
    </React.Fragment>
  ));

  it('should be correct input value', () => {
    render(
      <DateRangeInput
        value={[startDate, endDate]}
        changeStartDayLabel=""
        changeStartMonthLabel=""
        changeStartYearLabel=""
        changeEndDayLabel=""
        changeEndMonthLabel=""
        changeEndYearLabel=""
        {...testsProps}
      />,
    );
    const inputLikes = getInputsLike();
    const normalizedDate = convertInputsToNumbers(inputLikes);
    expect(normalizedDate).toEqual([20, 7, 2024, 31, 7, 2024]);
  });

  it('check correct readonly state', async () => {
    jest.useFakeTimers();
    render(
      <DateRangeInput
        value={[startDate, endDate]}
        changeStartDayLabel=""
        changeStartMonthLabel=""
        changeStartYearLabel=""
        changeEndDayLabel=""
        changeEndMonthLabel=""
        changeEndYearLabel=""
        readOnly={true}
        {...testsProps}
      />,
    );
    const inputLikes = getInputsLike();
    const [startDates, startMonths, startYears, endDates, endMonths, endYears] = inputLikes;

    inputLikes.forEach((inputLike) => {
      expect(inputLike).toHaveAttribute('aria-readonly', 'true');
    });

    await userEvent.type(startDates, '10');
    await userEvent.type(startMonths, '04');
    await userEvent.type(startYears, '2023');

    await userEvent.type(endDates, '15');
    await userEvent.type(endMonths, '06');
    await userEvent.type(endYears, '2024');

    const normalizedDate = convertInputsToNumbers(inputLikes);
    expect(normalizedDate).toEqual([20, 7, 2024, 31, 7, 2024]);
  });

  it('should correct update value when typing text in input', async () => {
    jest.useFakeTimers();
    const onChange = jest.fn();
    render(
      <DateRangeInput
        value={[startDate, endDate]}
        onChange={onChange}
        changeStartDayLabel=""
        changeStartMonthLabel=""
        changeStartYearLabel=""
        changeEndDayLabel=""
        changeEndMonthLabel=""
        changeEndYearLabel=""
        {...testsProps}
      />,
    );
    const inputLikes = getInputsLike();
    const [startDates, startMonths, startYears, endDates, endMonths, endYears] = inputLikes;

    await userEvent.type(startDates, '10');
    await userEvent.type(startMonths, '04');
    await userEvent.type(startYears, '2023');

    await userEvent.type(endDates, '15');
    await userEvent.type(endMonths, '06');
    await userEvent.type(endYears, '2024');

    const normalized = convertInputsToNumbers(inputLikes);
    expect(normalized).toEqual([10, 4, 2023, 15, 6, 2024]);

    expect(onChange).toBeCalledTimes(6);
  });

  it('should call onChange callback when change data by calendar', async () => {
    jest.useFakeTimers();
    const onChange = jest.fn();
    const { container } = render(
      <DateRangeInput
        value={[startDate, endDate]}
        onChange={onChange}
        changeStartDayLabel=""
        changeStartMonthLabel=""
        changeStartYearLabel=""
        changeEndDayLabel=""
        changeEndMonthLabel=""
        changeEndYearLabel=""
        {...testsProps}
        calendarTestsProps={{
          dayTestId,
        }}
      />,
    );
    const inputLikes = getInputsLike();
    const [dates] = inputLikes;

    await userEvent.click(dates);

    expect(container.contains(document.activeElement)).toBeTruthy();

    const resultStartDate = new Date(startDate);
    resultStartDate.setDate(15);

    fireEvent.click(screen.getByTestId(dayTestId(resultStartDate)));

    expect(onChange.mock.calls).toEqual([[[resultStartDate, null]]]);

    expect(container.contains(document.activeElement)).toBeTruthy();
  });

  it('should not update value when typing incorrect date in input', async () => {
    jest.useFakeTimers();
    const onChange = jest.fn();
    render(
      <DateRangeInput
        value={[startDate, endDate]}
        onChange={onChange}
        changeStartDayLabel=""
        changeStartMonthLabel=""
        changeStartYearLabel=""
        changeEndDayLabel=""
        changeEndMonthLabel=""
        changeEndYearLabel=""
        {...testsProps}
      />,
    );
    const inputLikes = getInputsLike();
    const startDates = inputLikes[0];
    const endDates = inputLikes[3];

    await userEvent.type(startDates, '40');
    await userEvent.type(endDates, '32');

    expect(onChange).toBeCalledTimes(0);
  });

  it('should call onCalendarClose callback when calendar was closed', async () => {
    jest.useFakeTimers();
    const onCalendarOpenChanged = jest.fn();
    const { container } = render(
      <DateRangeInput
        value={[startDate, null]}
        onCalendarOpenChanged={onCalendarOpenChanged}
        {...testsProps}
        calendarTestsProps={{
          dayTestId,
        }}
      />,
    );
    const inputLikes = getInputsLike();
    const [dates] = inputLikes;

    await userEvent.click(dates);

    expect(onCalendarOpenChanged).toHaveBeenCalledTimes(1);
    expect(onCalendarOpenChanged).toHaveBeenCalledWith(true);

    expect(container.contains(document.activeElement)).toBeTruthy();
    await userEvent.click(screen.getByTestId(dayTestId(addDays(startDate, 10))));

    expect(onCalendarOpenChanged).toHaveBeenCalledTimes(2);
    expect(onCalendarOpenChanged).toHaveBeenCalledWith(false);

    expect(container.contains(document.activeElement)).toBeFalsy();
  });

  it('should call onChange with undefined when click on clear button', async () => {
    const onChange = jest.fn();
    render(<DateRangeInput value={[startDate, endDate]} onChange={onChange} {...testsProps} />);

    fireEvent.click(screen.getByTestId(testsProps.clearButtonTestId));

    expect(onChange).toHaveBeenCalledWith(undefined);
  });

  it('should not show clear button when allowClearButton=false', async () => {
    const onChange = jest.fn();
    render(
      <DateRangeInput
        value={[startDate, endDate]}
        onChange={onChange}
        allowClearButton={false}
        {...testsProps}
      />,
    );

    expect(screen.queryByTestId(testsProps.clearButtonTestId)).toBeNull();
  });

  it('should toggle calendar open state on calendar icon click', async () => {
    jest.useFakeTimers();
    const onCalendarOpenChanged = jest.fn();
    render(
      <DateRangeInput
        showCalendarLabel="Показать календарь"
        onCalendarOpenChanged={onCalendarOpenChanged}
        showCalendarButtonTestId="show-calendar"
      />,
    );

    // проверяем, что календарь закрыт
    expect(screen.queryByRole('dialog', { name: 'Календарь' })).toBeFalsy();

    const calendarIcon = screen.getByTestId('show-calendar');
    await act(() => userEvent.click(calendarIcon));

    expect(onCalendarOpenChanged).toHaveBeenCalledTimes(1);
    expect(onCalendarOpenChanged).toHaveBeenCalledWith(true);
    expect(screen.queryByRole('dialog', { name: 'Календарь' })).toBeTruthy();

    await act(() => userEvent.click(calendarIcon));

    expect(onCalendarOpenChanged).toHaveBeenCalledTimes(2);
    expect(onCalendarOpenChanged).toHaveBeenCalledWith(false);
    expect(screen.queryByRole('dialog', { name: 'Календарь' })).toBeFalsy();
  });

  describe('keyboard', () => {
    it('controls focus when arrows or tab keys are pressed', async () => {
      jest.useFakeTimers();
      render(
        <div>
          <button type="button">Предыдущая кнопка</button>
          <DateRangeInput {...testsProps} />
        </div>,
      );

      const [
        startDayPicker,
        startMonthPicker,
        startYearPicker,
        endDayPicker,
        endMonthPicker,
        endYearPicker,
      ] = getInputsLike();

      await act(() => userEvent.click(startDayPicker));
      expect(document.activeElement).toBe(startDayPicker);

      await act(() => userEvent.tab());
      expect(document.activeElement).toBe(startMonthPicker);

      await act(() => userEvent.tab());
      expect(document.activeElement).toBe(startYearPicker);

      await act(() => userEvent.tab());
      expect(document.activeElement).toBe(endDayPicker);

      await act(() => userEvent.tab());
      expect(document.activeElement).toBe(endMonthPicker);

      await act(() => userEvent.tab());
      expect(document.activeElement).toBe(endYearPicker);

      await act(() => userEvent.tab());
      expect(document.activeElement).toBe(
        screen.getByRole('button', { name: 'Показать календарь' }),
      );

      await act(() => userEvent.tab({ shift: true }));
      expect(document.activeElement).toBe(endYearPicker);

      await act(() => userEvent.tab({ shift: true }));
      expect(document.activeElement).toBe(endMonthPicker);

      await act(() => userEvent.tab({ shift: true }));
      expect(document.activeElement).toBe(endDayPicker);

      await act(() => userEvent.tab({ shift: true }));
      expect(document.activeElement).toBe(startYearPicker);

      await act(() => userEvent.tab({ shift: true }));
      expect(document.activeElement).toBe(startMonthPicker);

      await act(() => userEvent.tab({ shift: true }));
      expect(document.activeElement).toBe(startDayPicker);

      await act(() => userEvent.keyboard('{ArrowRight}'));
      expect(document.activeElement).toBe(startMonthPicker);

      await act(() => userEvent.keyboard('{ArrowLeft}'));
      expect(document.activeElement).toBe(startDayPicker);

      await act(() => userEvent.keyboard('{ArrowLeft}'));
      expect(document.activeElement).toBe(startDayPicker);

      await act(() => userEvent.tab({ shift: true }));
      expect(document.activeElement).toBe(screen.getByText('Предыдущая кнопка'));
    });

    it('clears part of input data by pressing delete', async () => {
      jest.useFakeTimers();
      render(
        <DateRangeInput
          changeStartDayLabel=""
          changeStartMonthLabel=""
          changeStartYearLabel=""
          changeEndDayLabel=""
          changeEndMonthLabel=""
          changeEndYearLabel=""
          value={[startDate, endDate]}
          onChange={jest.fn()}
          {...testsProps}
        />,
      );

      const inputLikes = getInputsLike();
      const [startDayPicker] = inputLikes;

      await act(() => userEvent.click(startDayPicker));
      expect(document.activeElement).toBe(startDayPicker);

      let normalizedDate = convertInputsToNumbers(inputLikes);
      expect(normalizedDate).toEqual([20, 7, 2024, 31, 7, 2024]);

      await act(() => userEvent.keyboard('{Del}'));

      normalizedDate = convertInputsToNumbers(inputLikes);
      expect(normalizedDate).toEqual([0, 7, 2024, 31, 7, 2024]);
    });

    it('changes input values by arrow keys', async () => {
      jest.useFakeTimers();
      render(
        <DateRangeInput
          changeStartDayLabel=""
          changeStartMonthLabel=""
          changeStartYearLabel=""
          changeEndDayLabel=""
          changeEndMonthLabel=""
          changeEndYearLabel=""
          value={[startDate, endDate]}
          onChange={jest.fn()}
          {...testsProps}
        />,
      );

      const inputLikes = getInputsLike();
      const [dayPicker] = inputLikes;

      await act(() => userEvent.click(dayPicker));
      expect(document.activeElement).toBe(dayPicker);

      let normalizedDate = convertInputsToNumbers(inputLikes);
      expect(normalizedDate).toEqual([20, 7, 2024, 31, 7, 2024]);

      await act(() => userEvent.keyboard('{ArrowUp}'));

      normalizedDate = convertInputsToNumbers(inputLikes);
      expect(normalizedDate).toEqual([21, 7, 2024, 31, 7, 2024]);

      await act(() => userEvent.keyboard('{ArrowRight}'));
      await act(() => userEvent.keyboard('{ArrowDown}'));
      normalizedDate = convertInputsToNumbers(inputLikes);
      expect(normalizedDate).toEqual([21, 6, 2024, 31, 7, 2024]);

      await act(() => userEvent.keyboard('{ArrowRight}'));
      await act(() => userEvent.keyboard('{ArrowDown}'));

      normalizedDate = convertInputsToNumbers(inputLikes);
      expect(normalizedDate).toEqual([21, 6, 2023, 31, 7, 2024]);

      await act(() => userEvent.keyboard('{Del}'));
      await act(() => userEvent.keyboard('2'));
      await act(() => userEvent.keyboard('0'));
      await act(() => userEvent.keyboard('0'));
      await act(() => userEvent.keyboard('1'));
      normalizedDate = convertInputsToNumbers(inputLikes);
      expect(normalizedDate).toEqual([21, 6, 2001, 31, 7, 2024]);
    });
  });

  describe('accessible mode', () => {
    it('opens/closes calendar with keyboard/mouse', async () => {
      jest.useFakeTimers();
      const onCalendarOpenChangedStub = jest.fn();
      render(
        <DateRangeInput
          accessible
          onCalendarOpenChanged={onCalendarOpenChangedStub}
          {...testsProps}
        />,
      );

      const inputLikesLabels = [
        'День начала',
        'Месяц начала',
        'Год начала',
        'День окончания',
        'Месяц окончания',
        'Год окончания',
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

        // onCalendarOpenChanged вызван лишь раз
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

        // onCalendarOpenChanged вызван лишь раз
        expect(onCalendarOpenChangedStub).toHaveBeenCalledTimes(1);
        onCalendarOpenChangedStub.mockClear();

        // фокус возвращается на часть инпутa
        expect(document.activeElement).toBe(inputPart);

        // кликаем на ту же часть инпута чтобы открыть календарь
        await act(() => userEvent.click(inputPart));
        expect(screen.queryByRole('dialog', { name: 'Календарь' })).toBeTruthy();

        // onCalendarOpenChanged вызван лишь раз
        expect(onCalendarOpenChangedStub).toHaveBeenCalledTimes(1);
        onCalendarOpenChangedStub.mockClear();

        // закрываем, нажимая Esc
        await act(() => userEvent.keyboard('{Escape}'));
        jest.runOnlyPendingTimers();

        // фокус возвращается на часть инпутa
        expect(document.activeElement).toBe(inputPart);
      }
    });

    it('does not close calendar when Escape is pressed to close inner dropdown (month, year)', async () => {
      jest.useFakeTimers();
      const onCalendarOpenChangedStub = jest.fn();
      const dateNow = new Date();
      render(
        <DateRangeInput
          value={[dateNow, addDays(dateNow, 1)]}
          accessible
          onCalendarOpenChanged={onCalendarOpenChangedStub}
          calendarTestsProps={{
            leftPartHeaderTestsData: {
              monthDropdownTestId: 'month-dropdown',
              yearDropdownTestId: 'year-dropdown',
            },
          }}
        />,
      );

      // проверяем, что календарь закрыт
      expect(screen.queryByRole('dialog', { name: 'Календарь' })).toBeFalsy();

      const calendarIcon = screen.getByText('Показать календарь');
      await act(() => userEvent.click(calendarIcon));

      expect(screen.queryByRole('dialog', { name: 'Календарь' })).toBeTruthy();
      expect(onCalendarOpenChangedStub).toHaveBeenCalledTimes(1);

      const calendarSelectsIds = ['month-dropdown', 'year-dropdown'];

      for (const selectTestId of calendarSelectsIds) {
        // dropdown закрыт
        expect(screen.queryByRole('listbox')).toBeFalsy();
        // открываем дропдаун одного из селектов
        await act(() => userEvent.click(screen.getByTestId(selectTestId)));
        // dropdown открыт
        expect(screen.queryByRole('listbox')).toBeTruthy();

        // закрываем дропдаун с помощью Escape
        await act(() => userEvent.keyboard('{Escape}'));
        expect(screen.queryByRole('listbox')).toBeFalsy();

        // календарь всё ещё должен быть открыт
        expect(screen.queryByRole('dialog', { name: 'Календарь' })).toBeTruthy();
        expect(onCalendarOpenChangedStub).toHaveBeenCalledTimes(1);
      }

      // закрываем календарь с помощью Escape
      await act(() => userEvent.keyboard('{Escape}'));
      // календарь закрыт
      expect(screen.queryByRole('dialog', { name: 'Календарь' })).toBeFalsy();
      expect(onCalendarOpenChangedStub).toHaveBeenCalledTimes(2);
    });
  });
});
