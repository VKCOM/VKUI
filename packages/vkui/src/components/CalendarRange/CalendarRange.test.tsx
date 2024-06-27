import { fireEvent, render, screen } from '@testing-library/react';
import { baselineComponent } from '../../testing/utils';
import { CalendarRange } from './CalendarRange';
import styles from './CalendarRange.module.css';

describe('CalendarRange', () => {
  baselineComponent(CalendarRange);

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
      const headers = result.container.getElementsByClassName(styles['CalendarRange__header']);
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
});
