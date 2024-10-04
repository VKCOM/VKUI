import { fireEvent, render, screen } from '@testing-library/react';
import { format } from 'date-fns';
import { baselineComponent, userEvent } from '../../testing/utils';
import { DateInput, type DateInputPropsTestsProps } from './DateInput';

const date = new Date(2024, 6, 31, 11, 20);

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
  baselineComponent(DateInput, {
    // TODO [a11y]: "Elements must only use allowed ARIA attributes (aria-allowed-attr)"
    //              https://dequeuniversity.com/rules/axe/4.5/aria-allowed-attr?application=axeAPI
    a11y: false,
  });
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

    expect(onChange).toBeCalledTimes(5);
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
});
