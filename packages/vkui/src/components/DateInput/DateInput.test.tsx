import * as React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { noop } from '@vkontakte/vkjs';
import { format, isToday, isYesterday, subDays } from 'date-fns';
import { baselineComponent, userEvent } from '../../testing/utils';
import { Button } from '../Button/Button';
import { DateInput, type DateInputPropsTestsProps } from './DateInput';

const date = new Date(2024, 6, 31, 11, 20, 0, 0);

const testIds: DateInputPropsTestsProps = {
  dayFieldTestId: 'day-picker',
  monthFieldTestId: 'month-picker',
  yearFieldTestId: 'year-picker',
  hourFieldTestId: 'hour-picker',
  minuteFieldTestId: 'minute-picker',
};

const getInputsLike = () => {
  return [
    screen.queryByTestId('day-picker'),
    screen.queryByTestId('month-picker'),
    screen.queryByTestId('year-picker'),
    screen.queryByTestId('hour-picker'),
    screen.queryByTestId('minute-picker'),
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
    const { container } = render(
      <DateInput
        value={date}
        onChange={onChange}
        closeOnChange={true}
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
    const inputLikes = getInputsLike();

    const [dates] = inputLikes;

    await userEvent.click(dates);

    const resultDate = new Date(date);
    resultDate.setDate(date.getDate() - 1);

    expect(container.contains(document.activeElement)).toBeTruthy();
    fireEvent.click(screen.getByTestId(dayTestId(resultDate)));

    expect(onChange).toHaveBeenCalledWith(resultDate);

    expect(container.contains(document.activeElement)).toBeFalsy();
  });

  it('should call onCloseCalendar calendar was closed', async () => {
    jest.useFakeTimers();
    const onCalendarOpenChanged = jest.fn();
    const { container } = render(
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

    expect(container.contains(document.activeElement)).toBeTruthy();
    fireEvent.click(screen.getByTestId(dayTestId(subDays(date, 1))));

    expect(onCalendarOpenChanged).toHaveBeenCalledTimes(2);
    expect(onCalendarOpenChanged.mock.calls[1][0]).toBeFalsy();

    expect(container.contains(document.activeElement)).toBeFalsy();
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
});
