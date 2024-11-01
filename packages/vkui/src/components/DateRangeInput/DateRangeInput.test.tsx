import { render, screen } from '@testing-library/react';
import { baselineComponent, userEvent } from '../../testing/utils';
import { DateRangeInput } from './DateRangeInput';
import styles from '../DateInput/DateInput.module.css';
import inputLikeStyles from '../InputLike/InputLike.module.css';

const startDate = new Date(2024, 6, 20);
const endDate = new Date(2024, 6, 31);

const getInputsLike = (container: HTMLElement) => {
  const dateInput = container.getElementsByClassName(styles.input)[0];
  return Array.prototype.filter.call(
    dateInput.children,
    (child) => !child.classList.contains(inputLikeStyles.divider),
  );
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
    const { container } = render(
      <DateRangeInput
        value={[startDate, endDate]}
        changeStartDayLabel=""
        changeStartMonthLabel=""
        changeStartYearLabel=""
        changeEndDayLabel=""
        changeEndMonthLabel=""
        changeEndYearLabel=""
      />,
    );
    const inputLikes = getInputsLike(container);
    const normalizedDate = convertInputsToNumbers(inputLikes);
    expect(normalizedDate).toEqual([20, 7, 2024, 31, 7, 2024]);
  });

  it('should correct update value when typing text in input', async () => {
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
      />,
    );
    const inputLikes = getInputsLike(container);
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
      />,
    );
    const inputLikes = getInputsLike(container);
    const [dates] = inputLikes;

    await userEvent.click(dates);

    expect(container.contains(document.activeElement)).toBeTruthy();
    await userEvent.click(screen.getAllByText('15')[0]);

    const resultStartDate = new Date(startDate);
    resultStartDate.setDate(15);

    expect(onChange.mock.calls).toEqual([[[resultStartDate, null]]]);

    expect(container.contains(document.activeElement)).toBeTruthy();
  });

  it('should not update value when typing incorrect date in input', async () => {
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
      />,
    );
    const inputLikes = getInputsLike(container);
    const startDates = inputLikes[0];
    const endDates = inputLikes[3];

    await userEvent.type(startDates, '40');
    await userEvent.type(endDates, '32');

    expect(onChange).toBeCalledTimes(0);
  });

  it('should call onCalendarClose callback when calendar was closed', async () => {
    jest.useFakeTimers();
    const onCalendarClose = jest.fn();
    const { container } = render(
      <DateRangeInput value={[startDate, null]} onCalendarClose={onCalendarClose} />,
    );
    const inputLikes = getInputsLike(container);
    const [dates] = inputLikes;

    await userEvent.click(dates);
    expect(onCalendarClose).toHaveBeenCalledTimes(0);

    expect(container.contains(document.activeElement)).toBeTruthy();
    await userEvent.click(screen.getAllByText('15')[0]);

    expect(onCalendarClose).toHaveBeenCalledTimes(1);

    expect(container.contains(document.activeElement)).toBeFalsy();
  });
});
