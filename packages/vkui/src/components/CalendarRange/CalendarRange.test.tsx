import { fireEvent, render, screen } from '@testing-library/react';
import { addDays, dateFormatter, endOfDay, startOfDay } from '../../lib/date';
import { getDocumentBody } from '../../lib/dom';
import { baselineComponent, userEvent, withFakeTimers } from '../../testing/utils';
import { CalendarRange } from './CalendarRange';
import dayStyles from '../CalendarDay/CalendarDay.module.css';
import daysStyles from '../CalendarDays/CalendarDays.module.css';

const firstDayDate = new Date('2023-09-01T07:40:00.000Z');

describe('CalendarRange', () => {
  baselineComponent(CalendarRange);

  const triggerKeyDownEvent = (key: string, first: boolean) => {
    fireEvent.keyDown(getDocumentBody().getElementsByClassName(daysStyles.host)[first ? 0 : 1], {
      key,
      code: key,
    });
  };

  const dayTestId = (day: Date) => dateFormatter.format(day);

  it(
    'checks aria roles',
    withFakeTimers(
      async () => {
        const targetDate = new Date('2023-09-20T07:40:00.000Z');
        render(<CalendarRange defaultValue={[targetDate, targetDate]} dayTestId={dayTestId} />);

        expect(screen.getByRole('grid', { name: 'сентябрь 2023 г.' })).toBeDefined();
        expect(screen.getByRole('grid', { name: 'октябрь 2023 г.' })).toBeDefined();
        expect(screen.getByRole('gridcell', { name: 'среда, 20 сентября' })).toBeDefined();
        expect(screen.getAllByRole('columnheader', { name: 'понедельник' })).toHaveLength(2);
        expect(screen.getAllByRole('columnheader', { name: 'вторник' })).toHaveLength(2);
        expect(screen.getAllByRole('columnheader', { name: 'среда' })).toHaveLength(2);
        expect(screen.getAllByRole('columnheader', { name: 'четверг' })).toHaveLength(2);
        expect(screen.getAllByRole('columnheader', { name: 'пятница' })).toHaveLength(2);
        expect(screen.getAllByRole('columnheader', { name: 'суббота' })).toHaveLength(2);
        expect(screen.getAllByRole('columnheader', { name: 'воскресенье' })).toHaveLength(2);

        let currentDate = screen.getByRole('gridcell', { name: 'среда, 20 сентября' });
        expect(currentDate.getAttribute('aria-current')).toBe('date');
        expect(currentDate.getAttribute('aria-selected')).toBe('true');

        fireEvent.click(screen.getByRole('gridcell', { name: 'вторник, 19 сентября' }));

        currentDate = screen.getByRole('gridcell', { name: 'среда, 20 сентября' });
        expect(currentDate.getAttribute('aria-current')).toBe('date');
        expect(currentDate.getAttribute('aria-selected')).toBe('false');

        const selectedDate = screen.getByRole('gridcell', { name: 'вторник, 19 сентября' });
        expect(selectedDate.getAttribute('aria-current')).toBe(null);
        expect(selectedDate.getAttribute('aria-selected')).toBe('true');
      },
      { now: new Date('2023-09-20T07:40:00.000Z') },
    ),
  );

  it('calls onChange when initial value is [null, null]', () => {
    const onChangeStub = vi.fn();
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

    expect(screen.getByRole('option', { selected: true, name: 'май' })).toBeInTheDocument();
  });

  it('check navigation by keyboard between two months', async () => {
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

    expect(screen.getByTestId(`left-month-picker-8`)).toBeInTheDocument();

    triggerKeyDownEvent('ArrowLeft', true);

    expect(screen.getByTestId(`left-month-picker-7`)).toBeInTheDocument();
    checkActiveDay(new Date(2023, 7, 31));

    triggerKeyDownEvent('ArrowRight', true);

    expect(screen.getByTestId(`left-month-picker-7`)).toBeInTheDocument();
    checkActiveDay(new Date(2023, 8, 1));

    triggerKeyDownEvent('ArrowRight', false);
    checkActiveDay(new Date(2023, 8, 2));

    triggerKeyDownEvent('ArrowUp', false);

    expect(screen.getByTestId(`left-month-picker-7`)).toBeInTheDocument();
    checkActiveDay(new Date(2023, 7, 26));

    triggerKeyDownEvent('ArrowDown', true);

    expect(screen.getByTestId(`left-month-picker-7`)).toBeInTheDocument();
    checkActiveDay(new Date(2023, 8, 2));
  });

  it(
    'checks day selection by keyboard',
    withFakeTimers(async () => {
      const onChangeStub = vi.fn();
      const startDate = new Date(2024, 2, 1);
      const endDate = new Date(2024, 2, 10);

      render(
        <CalendarRange
          value={[startDate, endDate]}
          onChange={onChangeStub}
          dayTestId={(day) => `${day.getDate()}`}
        />,
      );
      await userEvent.click(screen.getAllByRole('gridcell', { selected: true })[0]);
      expect(onChangeStub).toHaveBeenCalledTimes(1);

      await userEvent.keyboard('{ArrowLeft}');

      // выбираем день с помощью Space
      await userEvent.keyboard(' ');
      expect(onChangeStub).toHaveBeenCalledTimes(2);
      await userEvent.keyboard('{ArrowLeft}');
      await userEvent.keyboard('{ArrowLeft}');
      // выбираем день с помощью Enter
      await userEvent.keyboard('{Enter}');
      expect(onChangeStub).toHaveBeenCalledTimes(3);
    }),
  );

  it(
    'checks focusable days on each part of calendar',
    withFakeTimers(async () => {
      const startDate = new Date(2024, 2, 1);
      const endDate = new Date(2024, 3, 10);
      const onChangeStub = vi.fn();
      render(
        <CalendarRange
          defaultValue={[startDate, endDate]}
          onChange={onChangeStub}
          dayTestId={dayTestId}
        />,
      );

      // выбираем новый диапазон где первая дата на левом календаре, а вторая на правом
      await userEvent.click(screen.getByTestId(dayTestId(startDate)));
      await userEvent.click(screen.getByTestId(dayTestId(endDate)));

      // выбранные в данный момент дни диапазона имеют tabIndex = 0
      expect(screen.getByTestId(dayTestId(startDate)).getAttribute('tabindex')).toBe('0');
      expect(screen.getByTestId(dayTestId(endDate)).getAttribute('tabindex')).toBe('0');

      // выбираем новый диапазон в пределах левого календаря
      await userEvent.click(screen.getByTestId(dayTestId(startDate)));
      const sameMonthDate = addDays(startDate, 10);
      await userEvent.click(screen.getByTestId(dayTestId(sameMonthDate)));

      // уйдём с календаря и вернёмся
      await userEvent.tab();
      await userEvent.tab({ shift: true });

      // только последний выбранный день диапазона имеет tabIndex="0"
      expect(screen.getByTestId(dayTestId(startDate)).getAttribute('tabindex')).toBe('-1');
      expect(screen.getByTestId(dayTestId(sameMonthDate)).getAttribute('tabindex')).toBe('0');

      // выбираем новый диапазон где первая дата на левом календаре, а вторая на правом
      await userEvent.click(screen.getByTestId(dayTestId(startDate)));
      await userEvent.click(screen.getByTestId(dayTestId(endDate)));

      // уйдём с календаря и вернёмся
      await userEvent.tab();
      await userEvent.tab({ shift: true });

      // на каждом календре дни на которые пришлись последние клики имеют tabIndex="0"
      expect(screen.getByTestId(dayTestId(endDate)).getAttribute('tabindex')).toBe('0');
      await userEvent.tab({ shift: true });
      await userEvent.tab({ shift: true });
      await userEvent.tab({ shift: true });
      await userEvent.tab({ shift: true });
      expect(document.activeElement).toBe(screen.getByTestId(dayTestId(startDate)));
      expect(screen.getByTestId(dayTestId(startDate)).getAttribute('tabindex')).toBe('0');
    }),
  );

  it('check click on same day', () => {
    const onChange = vi.fn();
    render(
      <CalendarRange value={[firstDayDate, null]} onChange={onChange} dayTestId={dayTestId} />,
    );

    const dayElement = screen.getByTestId(dayTestId(new Date(2023, 8, 1)));

    fireEvent.click(dayElement);

    expect(dayElement.firstElementChild!).toHaveClass(dayStyles.selectionStart);
    expect(dayElement.firstElementChild!).not.toHaveClass(dayStyles.selectionEnd);
  });

  it('check range working', () => {
    const onChange = vi.fn();
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
    const onChange = vi.fn();
    const end = addDays(firstDayDate, 10);
    const start = firstDayDate;
    render(<CalendarRange value={[end, null]} onChange={onChange} dayTestId={dayTestId} />);

    fireEvent.click(screen.getByTestId(dayTestId(start)));

    expect(onChange.mock.calls).toEqual([[[startOfDay(start), endOfDay(end)]]]);
  });

  it('check reselect range after range selected', async () => {
    const onChange = vi.fn();
    const start = firstDayDate;
    const end = addDays(firstDayDate, 10);
    render(<CalendarRange value={[start, end]} onChange={onChange} dayTestId={dayTestId} />);

    const newStart = addDays(firstDayDate, 5);
    fireEvent.click(screen.getByTestId(dayTestId(newStart)));

    expect(onChange.mock.calls).toEqual([[[startOfDay(newStart), null]]]);
  });
});
