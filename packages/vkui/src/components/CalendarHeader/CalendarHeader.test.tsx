import { render } from '@testing-library/react';
import { noop } from '@vkontakte/vkjs';
import { baselineComponent, userEvent } from '../../testing/utils';
import { CalendarHeader } from './CalendarHeader';
import styles from './CalendarHeader.module.css';
import customSelectOptionStyles from '../CustomSelectOption/CustomSelectOption.module.css';

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
    const { container } = render(<CalendarHeader viewDate={viewDate} onChange={onChange} />);

    expect(container.getElementsByClassName(styles.navIconPrev)[0]).toBeTruthy();
  });
  it('displays next month button by default', () => {
    const viewDate = new Date('1970-01-01');
    const onChange = jest.fn();
    const { container } = render(<CalendarHeader viewDate={viewDate} onChange={onChange} />);

    expect(container.getElementsByClassName(styles.navIconNext)[0]).toBeTruthy();
  });
  it('do not display prev month and next month buttons if they hidden', () => {
    const viewDate = new Date('1970-01-01');
    const onChange = jest.fn();
    const { container } = render(
      <CalendarHeader viewDate={viewDate} onChange={onChange} prevMonthHidden nextMonthHidden />,
    );

    expect(container.getElementsByClassName(styles.navIconPrev)[0]).not.toBeTruthy();
    expect(container.getElementsByClassName(styles.navIconNext)[0]).not.toBeTruthy();
  });
  it('do not display prev and next month buttons if isMonthDisabled return true', () => {
    const onChange = jest.fn();
    const { container } = render(
      <CalendarHeader viewDate={targetDate} onChange={onChange} isMonthDisabled={() => true} />,
    );

    expect(container.getElementsByClassName(styles.navIconPrev)[0]).not.toBeTruthy();

    expect(container.getElementsByClassName(styles.navIconNext)[0]).not.toBeTruthy();
  });
  it('do not display prev month button when set prevMonthHidden prop', () => {
    const onChange = jest.fn();
    const { container } = render(
      <CalendarHeader viewDate={targetDate} onChange={onChange} prevMonthHidden />,
    );

    expect(container.getElementsByClassName(styles.navIconPrev)[0]).not.toBeTruthy();
  });
  it('do not display next month button when set nextMonthHidden prop', () => {
    const onChange = jest.fn();
    const { container } = render(
      <CalendarHeader viewDate={targetDate} onChange={onChange} nextMonthHidden />,
    );

    expect(container.getElementsByClassName(styles.navIconNext)[0]).not.toBeTruthy();
  });

  it('does not fire onChange when click on month dropdown item if isMonthDisabled return true', async () => {
    const onChange = jest.fn();
    jest.useFakeTimers();
    const { container } = render(
      <CalendarHeader viewDate={targetDate} isMonthDisabled={() => true} onChange={onChange} />,
    );

    const [monthPicker] = container.getElementsByClassName(styles.picker);
    await userEvent.click(monthPicker);
    const [januarySelectOption] = container.getElementsByClassName(customSelectOptionStyles.host);
    await userEvent.click(januarySelectOption);

    expect(onChange).not.toHaveBeenCalled();
  });

  it('does not fire onChange when click on year dropdown item if isYearDisabled return true', async () => {
    const onChange = jest.fn();
    jest.useFakeTimers();
    const { container } = render(
      <CalendarHeader viewDate={targetDate} isYearDisabled={() => true} onChange={onChange} />,
    );

    const [, yearPicker] = container.getElementsByClassName(styles.picker);
    await userEvent.click(yearPicker);
    const [minYearSelectOption] = container.getElementsByClassName(customSelectOptionStyles.host);
    await userEvent.click(minYearSelectOption);

    expect(onChange).not.toHaveBeenCalled();
  });

  it('fire onChange when click on year dropdown item', async () => {
    const onChange = jest.fn();
    jest.useFakeTimers();
    const { container } = render(<CalendarHeader viewDate={targetDate} onChange={onChange} />);

    const [, yearPicker] = container.getElementsByClassName(styles.picker);
    await userEvent.click(yearPicker);
    const [minYearSelectOption] = container.getElementsByClassName(customSelectOptionStyles.host);
    await userEvent.click(minYearSelectOption);

    expect(onChange).toHaveBeenCalled();
  });

  it('should not find prev month button', () => {
    const onChange = jest.fn();
    const isMonthDisabled = jest.fn();
    isMonthDisabled.mockImplementation(() => true);
    jest.useFakeTimers();
    const { container } = render(
      <CalendarHeader
        viewDate={new Date('2023-01-20T07:40:00.000Z')}
        nextMonthHidden={false}
        onChange={onChange}
        isMonthDisabled={isMonthDisabled}
      />,
    );
    expect(isMonthDisabled).toHaveBeenCalledWith(11, 2022);
    expect(container.getElementsByClassName(styles.navIconPrev).length).toBe(0);
  });

  it('should not find next month button', () => {
    const onChange = jest.fn();
    const isMonthDisabled = jest.fn();
    isMonthDisabled.mockImplementation(() => true);
    jest.useFakeTimers();
    const { container } = render(
      <CalendarHeader
        viewDate={new Date('2023-12-20T07:40:00.000Z')}
        prevMonthHidden={false}
        onChange={onChange}
        isMonthDisabled={isMonthDisabled}
      />,
    );
    expect(isMonthDisabled).toHaveBeenCalledWith(0, 2024);
    expect(container.getElementsByClassName(styles.navIconNext).length).toBe(0);
  });
});
