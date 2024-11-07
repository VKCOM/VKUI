import { render, screen } from '@testing-library/react';
import { baselineComponent, userEvent } from '../../testing/utils';
import { DateInput } from './DateInput';
import styles from './DateInput.module.css';
import inputLikeStyles from '../InputLike/InputLike.module.css';

const date = new Date(2024, 6, 31, 11, 20, 0, 0);

const getInputsLike = (container: HTMLElement) => {
  const dateInput = container.getElementsByClassName(styles['DateInput__input'])[0];
  return Array.prototype.filter.call(
    dateInput.children,
    (child) => !child.classList.contains(inputLikeStyles['InputLike__divider']),
  );
};

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
    const { container } = render(
      <DateInput
        value={date}
        onChange={onChange}
        changeMonthLabel=""
        changeYearLabel=""
        changeDayLabel=""
        changeHoursLabel=""
        changeMinutesLabel=""
      />,
    );
    const inputLikes = getInputsLike(container);
    const normalizedDate = convertInputsToNumbers(inputLikes);
    expect(normalizedDate).toEqual([31, 7, 2024]);
  });

  it('should be correct input value with time', () => {
    const onChange = jest.fn();
    const { container } = render(
      <DateInput
        value={date}
        onChange={onChange}
        enableTime={true}
        changeMonthLabel=""
        changeYearLabel=""
        changeDayLabel=""
        changeHoursLabel=""
        changeMinutesLabel=""
      />,
    );
    const inputLikes = getInputsLike(container);
    const normalizedDate = convertInputsToNumbers(inputLikes);
    expect(normalizedDate).toEqual([31, 7, 2024, 11, 20]);
  });

  it('should correct update value when typing text in input', async () => {
    jest.useFakeTimers();
    const onChange = jest.fn();
    const { container } = render(
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
      />,
    );
    const inputLikes = getInputsLike(container);

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
    const { container } = render(<DateInput value={undefined} onChange={onChange} />);
    const inputLikes = getInputsLike(container);

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
      />,
    );
    const inputLikes = getInputsLike(container);

    const [dates] = inputLikes;

    await userEvent.click(dates);

    expect(container.contains(document.activeElement)).toBeTruthy();
    await userEvent.click(screen.getByText(`${date.getDate() - 1}`));

    const resultDate = new Date(date);
    resultDate.setDate(date.getDate() - 1);
    expect(onChange).toHaveBeenCalledWith(resultDate);

    expect(container.contains(document.activeElement)).toBeFalsy();
  });

  it('should call onCloseCalendar calendar was closed', async () => {
    jest.useFakeTimers();
    const onCalendarOpenChanged = jest.fn();
    const { container } = render(
      <DateInput value={date} onCalendarOpenChanged={onCalendarOpenChanged} />,
    );
    const inputLikes = getInputsLike(container);

    const [dates] = inputLikes;

    await userEvent.click(dates);
    expect(onCalendarOpenChanged).toHaveBeenCalledTimes(1);
    expect(onCalendarOpenChanged.mock.calls[0][0]).toBeTruthy();

    expect(container.contains(document.activeElement)).toBeTruthy();
    await userEvent.click(screen.getByText(`${date.getDate() - 1}`));

    expect(onCalendarOpenChanged).toHaveBeenCalledTimes(2);
    expect(onCalendarOpenChanged.mock.calls[1][0]).toBeFalsy();

    expect(container.contains(document.activeElement)).toBeFalsy();
  });
});
