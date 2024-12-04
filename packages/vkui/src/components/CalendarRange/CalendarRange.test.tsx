import { fireEvent, render, screen } from '@testing-library/react';
import { addDays, endOfDay, format, startOfDay } from 'date-fns';
import { getDocumentBody } from '../../lib/dom';
import { baselineComponent } from '../../testing/utils';
import { CalendarRange } from './CalendarRange';
import dayStyles from '../CalendarDay/CalendarDay.module.css';
import daysStyles from '../CalendarDays/CalendarDays.module.css';

const firstDayDate = new Date('2023-09-01T07:40:00.000Z');

describe('CalendarRange', () => {
  baselineComponent(CalendarRange);

  const triggerKeyDownEvent = (key: string) => {
    fireEvent.keyDown(getDocumentBody().getElementsByClassName(daysStyles.host)[0], {
      key,
      code: key,
    });
  };

  const dayTestId = (day: Date) => format(day, 'dd.MM.yyyy');

  it('calls onChange when initial value is [null, null]', () => {
    const onChangeStub = jest.fn();
    render(
      <CalendarRange
        data-testid="calendar-range"
        onChange={onChangeStub}
        value={[null, null]}
        dayTestId={(day) => `${day.getDate()}`}
      />,
    );
    fireEvent.click(screen.getAllByTestId('6')[0]);
    expect(onChangeStub).not.toHaveBeenLastCalledWith([null, null]);

    fireEvent.click(screen.getAllByTestId('6')[1]);
    expect(onChangeStub).not.toHaveBeenLastCalledWith([null, null]);
  });

  it('check left part date when change in right part', async () => {
    const startDate = new Date(2024, 2, 1);
    const endDate = new Date(2024, 2, 10);

    render(
      <CalendarRange
        data-testid="calendar-range"
        value={[startDate, endDate]}
        leftPartHeaderTestsData={{
          monthDropdownTestId: 'left-month-dropdown',
        }}
        rightPartHeaderTestsData={{
          monthDropdownTestId: 'right-month-dropdown',
        }}
      />,
    );

    // Кликаем по дропдауну месяца в правой части, чтобы открылся дропдаун
    const rightPartSelect = screen.getByTestId('right-month-dropdown');
    expect(rightPartSelect).not.toBeNull();
    fireEvent.click(rightPartSelect);

    // Кликаем по месяцу Июнь в селекте
    const unselectedOption = screen.getByRole('option', { selected: false, name: 'июнь' });
    fireEvent.mouseEnter(unselectedOption);
    fireEvent.click(unselectedOption);

    // Кликаем по дропдауну месяца в левой части, чтобы открылся дропдаун
    const leftPartSelect = screen.getByTestId('left-month-dropdown');
    expect(leftPartSelect).not.toBeNull();
    fireEvent.click(leftPartSelect);

    expect(screen.getByRole('option', { selected: true, name: 'май' }));
  });

  it('check navigation by keyboard between two months', async () => {
    jest.useFakeTimers();
    render(
      <CalendarRange
        value={[firstDayDate, firstDayDate]}
        leftPartHeaderTestsData={{
          monthDropdownTestId: (index) => `left-month-picker-${index}`,
        }}
        rightPartHeaderTestsData={{
          monthDropdownTestId: (index) => `right-month-picker-${index}`,
        }}
        dayTestId={dayTestId}
      />,
    );
    const checkActiveDay = (date: Date) => {
      expect(document.activeElement as HTMLElement).toBe(screen.getByTestId(dayTestId(date)));
    };

    expect(screen.getByTestId(`left-month-picker-8`));

    triggerKeyDownEvent('ArrowLeft');

    expect(screen.getByTestId(`left-month-picker-7`));
    checkActiveDay(new Date(2023, 7, 31));

    triggerKeyDownEvent('ArrowRight');

    expect(screen.getByTestId(`left-month-picker-7`));
    checkActiveDay(new Date(2023, 8, 1));

    triggerKeyDownEvent('ArrowUp');

    expect(screen.getByTestId(`left-month-picker-7`));
    checkActiveDay(new Date(2023, 7, 25));

    triggerKeyDownEvent('ArrowDown');

    expect(screen.getByTestId(`left-month-picker-7`));
    checkActiveDay(new Date(2023, 8, 1));
  });

  it('check click on same day', () => {
    const onChange = jest.fn();
    render(
      <CalendarRange value={[firstDayDate, null]} onChange={onChange} dayTestId={dayTestId} />,
    );

    const dayElement = screen.getByTestId(dayTestId(new Date(2023, 8, 1)));

    fireEvent.click(dayElement);

    expect(dayElement.firstElementChild!).toHaveClass(dayStyles.selectionStart);
    expect(dayElement.firstElementChild!).not.toHaveClass(dayStyles.selectionEnd);
  });

  it('check range working', () => {
    const onChange = jest.fn();
    render(
      <CalendarRange value={[firstDayDate, null]} onChange={onChange} dayTestId={dayTestId} />,
    );

    const dayElement = screen.getByTestId(dayTestId(new Date(2023, 8, 3)));

    fireEvent.click(dayElement);

    expect(screen.getByTestId(dayTestId(firstDayDate)).firstElementChild!).toHaveClass(
      dayStyles.selectionStart,
    );
    expect(dayElement.firstElementChild!).toHaveClass(dayStyles.selectionEnd);
  });

  it('check reverse range select working', () => {
    const onChange = jest.fn();
    const end = addDays(firstDayDate, 10);
    const start = firstDayDate;
    render(<CalendarRange value={[end, null]} onChange={onChange} dayTestId={dayTestId} />);

    fireEvent.click(screen.getByTestId(dayTestId(start)));

    expect(onChange.mock.calls).toEqual([[[startOfDay(start), endOfDay(end)]]]);
  });

  it('check reselect range after range selected', async () => {
    jest.useFakeTimers();
    const onChange = jest.fn();
    const start = firstDayDate;
    const end = addDays(firstDayDate, 10);
    render(<CalendarRange value={[start, end]} onChange={onChange} dayTestId={dayTestId} />);

    const newStart = addDays(firstDayDate, 5);
    fireEvent.click(screen.getByTestId(dayTestId(newStart)));

    expect(onChange.mock.calls).toEqual([[[startOfDay(newStart), null]]]);
  });
});
