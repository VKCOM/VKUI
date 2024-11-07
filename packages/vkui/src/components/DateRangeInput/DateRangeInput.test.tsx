import { render, screen } from '@testing-library/react';
import { addDays, format } from 'date-fns';
import { baselineComponent, userEvent } from '../../testing/utils';
import { DateRangeInput, type DateRangeInputTestsProps } from './DateRangeInput';

const startDate = new Date(2024, 6, 20);
const endDate = new Date(2024, 6, 31);

const dayTestId = (day: Date) => format(day, 'dd.MM.yyyy');

const testsProps: DateRangeInputTestsProps = {
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
};

const getInputsLike = () => {
  return [
    screen.getByTestId('start-day'),
    screen.getByTestId('start-month'),
    screen.getByTestId('start-year'),
    screen.getByTestId('end-day'),
    screen.getByTestId('end-month'),
    screen.getByTestId('end-year'),
  ];
};

const convertInputsToNumbers = (inputs: HTMLElement[]) => {
  return inputs.map((input) => Number(input.textContent));
};

describe('DateRangeInput', () => {
  baselineComponent(DateRangeInput, {
    // TODO [a11y]: "Elements must only use allowed ARIA attributes (aria-allowed-attr)"
    //              https://dequeuniversity.com/rules/axe/4.5/aria-allowed-attr?application=axeAPI
    a11y: false,
  });

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
    await userEvent.click(screen.getAllByText('15')[0]);
    await userEvent.click(screen.getAllByText('22')[1]);

    const resultStartDate = new Date(startDate);
    resultStartDate.setDate(15);

    const resultEndDate = new Date(endDate);
    resultEndDate.setDate(22);
    resultEndDate.setMonth(7);

    expect(onChange.mock.calls).toEqual([
      [[resultStartDate, endDate]],
      [[startDate, resultEndDate]],
    ]);

    expect(container.contains(document.activeElement)).toBeFalsy();
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
    expect(onCalendarOpenChanged.mock.calls[0][0]).toBeTruthy();

    expect(container.contains(document.activeElement)).toBeTruthy();
    await userEvent.click(screen.getByTestId(dayTestId(addDays(startDate, 10))));

    expect(onCalendarOpenChanged).toHaveBeenCalledTimes(2);
    expect(onCalendarOpenChanged.mock.calls[1][0]).toBeFalsy();

    expect(container.contains(document.activeElement)).toBeFalsy();
  });
});
