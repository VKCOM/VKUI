import { fireEvent, getByText, render, screen } from '@testing-library/react';
import { addDays, endOfDay, startOfDay } from 'date-fns';
import { getDocumentBody } from '../../lib/dom';
import { baselineComponent } from '../../testing/utils';
import { CalendarRange } from './CalendarRange';
import styles from './CalendarRange.module.css';
import dayStyles from '../CalendarDay/CalendarDay.module.css';
import daysStyles from '../CalendarDays/CalendarDays.module.css';

const firstDayDate = new Date('2023-09-01T07:40:00.000Z');

describe('CalendarRange', () => {
  baselineComponent(CalendarRange);

  const getParts = () => {
    return getDocumentBody().getElementsByClassName(styles.inner) as HTMLCollectionOf<HTMLElement>;
  };

  const clickDayInPart = (part: HTMLElement, date: string) => {
    fireEvent.click(getByText(part, date));
  };

  const getCalendarDayBlock = (part: HTMLElement, date: string) => {
    return getByText(part, date).closest(`.${dayStyles.host}`) as HTMLElement;
  };

  const getLeftPart = () => {
    const [leftPart] = getParts();
    return leftPart;
  };

  const checkLeftPartMonth = (monthName: string) => {
    expect(getByText(getLeftPart(), monthName)).toBeTruthy();
  };

  const triggerKeyDownEvent = (key: string) => {
    fireEvent.keyDown(getDocumentBody().getElementsByClassName(daysStyles.host)[0], {
      key,
      code: key,
    });
  };

  it('calls onChange when initial value is [null, null]', () => {
    const onChangeStub = jest.fn();
    render(
      <CalendarRange data-testid="calendar-range" onChange={onChangeStub} value={[null, null]} />,
    );

    fireEvent.click(screen.getAllByText('6')[0]);
    expect(onChangeStub).not.toHaveBeenLastCalledWith([null, null]);

    fireEvent.click(screen.getAllByText('6')[1]);
    expect(onChangeStub).not.toHaveBeenLastCalledWith([null, null]);
  });

  it('check left part date when change in right part', async () => {
    const startDate = new Date(2024, 2, 1);
    const endDate = new Date(2024, 2, 10);

    const result = render(
      <CalendarRange data-testid="calendar-range" value={[startDate, endDate]} />,
    );

    const getSelect = (index: number) => {
      const headers = result.container.getElementsByClassName(styles.header);
      expect(headers.length).toBe(2);
      const header = headers[index];
      return header.querySelector('select');
    };

    // Кликаем по дропдауну месяца в правой части, чтобы открылся дропдаун
    const rightPartSelect = getSelect(1);
    expect(rightPartSelect).not.toBeNull();
    fireEvent.click(rightPartSelect!);

    // Кликаем по месяцу Июнь в селекте
    const unselectedOption = screen.getByRole('option', { selected: false, name: 'июнь' });
    fireEvent.mouseEnter(unselectedOption);
    fireEvent.click(unselectedOption);

    // Кликаем по дропдауну месяца в левой части, чтобы открылся дропдаун
    const leftPartSelect = getSelect(0);
    expect(leftPartSelect).not.toBeNull();
    fireEvent.click(leftPartSelect!);

    expect(screen.getByRole('option', { selected: true, name: 'май' }));
  });

  it('check navigation by keyboard between two months', async () => {
    jest.useFakeTimers();
    render(<CalendarRange value={[firstDayDate, firstDayDate]} />);

    checkLeftPartMonth('сентябрь');

    triggerKeyDownEvent('ArrowLeft');

    checkLeftPartMonth('август');
    expect(getByText(document.activeElement as HTMLElement, '31')).toBeInTheDocument();

    triggerKeyDownEvent('ArrowRight');

    checkLeftPartMonth('август');
    expect(getByText(document.activeElement as HTMLElement, '1')).toBeInTheDocument();

    triggerKeyDownEvent('ArrowUp');

    checkLeftPartMonth('август');
    expect(getByText(document.activeElement as HTMLElement, '25')).toBeInTheDocument();

    triggerKeyDownEvent('ArrowDown');

    checkLeftPartMonth('август');
    expect(getByText(document.activeElement as HTMLElement, '1')).toBeInTheDocument();
  });

  it('check click on same day', async () => {
    jest.useFakeTimers();
    const onChange = jest.fn();
    render(<CalendarRange value={[firstDayDate, null]} onChange={onChange} />);

    const [leftPart] = getParts();
    clickDayInPart(leftPart, '1');

    expect(getCalendarDayBlock(leftPart, '1')).toHaveClass(dayStyles.selectionStart);
    expect(getCalendarDayBlock(leftPart, '1')).not.toHaveClass(dayStyles.selectionEnd);
  });

  it('check range working', async () => {
    jest.useFakeTimers();
    const onChange = jest.fn();
    render(<CalendarRange value={[firstDayDate, null]} onChange={onChange} />);

    const [leftPart] = getParts();
    clickDayInPart(leftPart, '3');

    expect(getCalendarDayBlock(leftPart, '1')).toHaveClass(dayStyles.selectionStart);
    expect(getCalendarDayBlock(leftPart, '3')).toHaveClass(dayStyles.selectionEnd);
  });

  it('check reverse range select working', async () => {
    jest.useFakeTimers();
    const onChange = jest.fn();
    const end = addDays(firstDayDate, 10);
    const start = firstDayDate;
    render(<CalendarRange value={[end, null]} onChange={onChange} />);

    const [leftPart] = getParts();
    clickDayInPart(leftPart, start.getDate().toString());

    expect(onChange.mock.calls).toEqual([[[startOfDay(start), endOfDay(end)]]]);
  });

  it('check reselect range after range selected', async () => {
    jest.useFakeTimers();
    const onChange = jest.fn();
    const start = firstDayDate;
    const end = addDays(firstDayDate, 10);
    render(<CalendarRange value={[start, end]} onChange={onChange} />);

    const newStart = addDays(firstDayDate, 5);
    const [leftPart] = getParts();
    clickDayInPart(leftPart, newStart.getDate().toString());

    expect(onChange.mock.calls).toEqual([[[startOfDay(newStart), null]]]);
  });
});
