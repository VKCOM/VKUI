import { fireEvent, render, screen } from '@testing-library/react';
import { noop } from '@vkontakte/vkjs';
import { baselineComponent } from '../../testing/utils';
import { CalendarHeader } from './CalendarHeader';

const targetDate = new Date('2023-09-20T07:40:00.000Z');

describe('CalendarHeader', () => {
  baselineComponent((props) => (
    <CalendarHeader
      onNextMonth={noop}
      onPrevMonth={noop}
      viewDate={new Date()}
      onChange={noop}
      {...props}
    />
  ));

  it('displays prev month button by default', () => {
    const viewDate = new Date('1970-01-01');
    const onChange = jest.fn();
    render(
      <CalendarHeader viewDate={viewDate} onChange={onChange} prevMonthButtonTestId="prev-month" />,
    );

    expect(screen.queryByTestId('prev-month')).toBeTruthy();
  });
  it('displays next month button by default', () => {
    const viewDate = new Date('1970-01-01');
    const onChange = jest.fn();
    render(
      <CalendarHeader viewDate={viewDate} onChange={onChange} nextMonthButtonTestId="next-month" />,
    );

    expect(screen.queryByTestId('next-month')).toBeTruthy();
  });
  it('do not display prev month and next month buttons if they hidden', () => {
    const viewDate = new Date('1970-01-01');
    const onChange = jest.fn();
    render(
      <CalendarHeader
        viewDate={viewDate}
        onChange={onChange}
        prevMonthHidden
        nextMonthHidden
        prevMonthButtonTestId="prev-month"
        nextMonthButtonTestId="next-month"
      />,
    );

    expect(screen.queryByTestId('prev-month')).toBeFalsy();
    expect(screen.queryByTestId('next-month')).toBeFalsy();
  });
  it('do not display prev and next month buttons if isMonthDisabled return true', () => {
    const onChange = jest.fn();
    render(
      <CalendarHeader
        viewDate={targetDate}
        onChange={onChange}
        isMonthDisabled={() => true}
        prevMonthButtonTestId="prev-month"
        nextMonthButtonTestId="next-month"
      />,
    );

    expect(screen.queryByTestId('prev-month')).toBeFalsy();
    expect(screen.queryByTestId('next-month')).toBeFalsy();
  });
  it('do not display prev month button when set prevMonthHidden prop', () => {
    const onChange = jest.fn();
    render(
      <CalendarHeader
        viewDate={targetDate}
        onChange={onChange}
        prevMonthHidden
        prevMonthButtonTestId="prev-month"
      />,
    );

    expect(screen.queryByTestId('prev-month')).toBeFalsy();
  });
  it('do not display next month button when set nextMonthHidden prop', () => {
    const onChange = jest.fn();
    render(
      <CalendarHeader
        viewDate={targetDate}
        onChange={onChange}
        nextMonthHidden
        nextMonthButtonTestId="next-month"
      />,
    );

    expect(screen.queryByTestId('next-month')).toBeFalsy();
  });

  it('does not fire onChange when click on month dropdown item if isMonthDisabled return true', async () => {
    const onChange = jest.fn();
    jest.useFakeTimers();
    render(
      <CalendarHeader
        viewDate={targetDate}
        isMonthDisabled={() => true}
        onChange={onChange}
        monthDropdownTestId="month-picker"
      />,
    );

    const monthPicker = screen.getByTestId('month-picker');
    fireEvent.click(monthPicker);
    const [januarySelectOption] = screen.getAllByRole('option');
    fireEvent.click(januarySelectOption);

    expect(onChange).not.toHaveBeenCalled();
  });

  it('does not fire onChange when click on year dropdown item if isYearDisabled return true', async () => {
    const onChange = jest.fn();
    jest.useFakeTimers();
    render(
      <CalendarHeader
        viewDate={targetDate}
        isYearDisabled={() => true}
        onChange={onChange}
        yearDropdownTestId="year-picker"
      />,
    );

    const yearPicker = screen.getByTestId('year-picker');
    fireEvent.click(yearPicker);
    const [minYearSelectOption] = screen.getAllByRole('option');
    fireEvent.click(minYearSelectOption);

    expect(onChange).not.toHaveBeenCalled();
  });

  it('fire onChange when click on year dropdown item', async () => {
    const onChange = jest.fn();
    jest.useFakeTimers();
    render(
      <CalendarHeader viewDate={targetDate} onChange={onChange} yearDropdownTestId="year-picker" />,
    );

    const yearPicker = screen.getByTestId('year-picker');
    fireEvent.click(yearPicker);
    const [minYearSelectOption] = screen.getAllByRole('option');
    fireEvent.click(minYearSelectOption);

    expect(onChange).toHaveBeenCalled();
  });

  it('should not find prev month button', () => {
    const onChange = jest.fn();
    const isMonthDisabled = jest.fn();
    isMonthDisabled.mockImplementation(() => true);
    jest.useFakeTimers();
    render(
      <CalendarHeader
        viewDate={new Date('2023-01-20T07:40:00.000Z')}
        nextMonthHidden={false}
        onChange={onChange}
        isMonthDisabled={isMonthDisabled}
        prevMonthButtonTestId="prev-month-button"
      />,
    );
    expect(isMonthDisabled).toHaveBeenCalledWith(11, 2022);
    expect(screen.queryByTestId('prev-month-button')).toBeFalsy();
  });

  it('should not find next month button', () => {
    const onChange = jest.fn();
    const isMonthDisabled = jest.fn();
    isMonthDisabled.mockImplementation(() => true);
    jest.useFakeTimers();
    render(
      <CalendarHeader
        viewDate={new Date('2023-12-20T07:40:00.000Z')}
        prevMonthHidden={false}
        onChange={onChange}
        isMonthDisabled={isMonthDisabled}
        nextMonthButtonTestId="next-month"
      />,
    );
    expect(isMonthDisabled).toHaveBeenCalledWith(0, 2024);
    expect(screen.queryByTestId('next-month')).toBeFalsy();
  });
});
