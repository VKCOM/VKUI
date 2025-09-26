import { act, render, screen } from '@testing-library/react';
import { setHours, setMinutes } from '../../lib/date';
import { fakeTimers, userEvent } from '../../testing/utils';
import { Button } from '../Button/Button';
import { CalendarTime } from './CalendarTime';

const dayDate = new Date('2023-09-01T07:40:00.000Z');

describe('CalendarTime', () => {
  fakeTimers();
  it('check onChange should called when select hours and minutes', async () => {
    const onChange = vi.fn();
    render(
      <CalendarTime
        onChange={onChange}
        value={dayDate}
        hoursTestId="hours-picker"
        minutesTestId="minutes-picker"
      />,
    );

    const [hourSelect, minuteSelect] = [
      screen.getByTestId('hours-picker'),
      screen.getByTestId('minutes-picker'),
    ];

    await userEvent.click(hourSelect);

    const unselectedHourOption = screen.getByRole('option', { selected: false, name: '01' });
    await userEvent.click(unselectedHourOption);

    await userEvent.click(minuteSelect);

    const unselectedMinuteOption = screen.getByRole('option', { selected: false, name: '55' });
    await userEvent.click(unselectedMinuteOption);

    expect(onChange.mock.calls).toEqual([[setHours(dayDate, 1)], [setMinutes(dayDate, 55)]]);
  });

  it('check onChange should not called when isDisabled true', async () => {
    const onChange = vi.fn();
    render(
      <CalendarTime
        onChange={onChange}
        value={dayDate}
        isDayDisabled={() => true}
        hoursTestId="hours-picker"
        minutesTestId="minutes-picker"
      />,
    );

    const [hourSelect, minuteSelect] = [
      screen.getByTestId('hours-picker'),
      screen.getByTestId('minutes-picker'),
    ];

    await userEvent.click(hourSelect);

    const unselectedHourOption = screen.getByRole('option', { selected: false, name: '01' });
    await userEvent.click(unselectedHourOption);

    await userEvent.click(minuteSelect);

    const unselectedMinuteOption = screen.getByRole('option', { selected: false, name: '55' });
    await userEvent.click(unselectedMinuteOption);

    expect(onChange).toHaveBeenCalledTimes(0);
  });

  it('should hide done button with doneButtonShow=false', () => {
    const onChange = vi.fn();
    render(
      <CalendarTime
        onChange={onChange}
        value={dayDate}
        doneButtonTestId="done-button"
        doneButtonShow={false}
      />,
    );
    expect(screen.queryByTestId('done-button')).toBeFalsy();
  });

  it('should disable done button with doneButtonDisabled=false', () => {
    const onChange = vi.fn();
    render(
      <CalendarTime
        onChange={onChange}
        value={dayDate}
        doneButtonTestId="done-button"
        doneButtonDisabled={true}
      />,
    );
    const button = screen.queryByTestId<HTMLButtonElement>('done-button');
    expect(button!.disabled).toBeTruthy();
  });

  it('should render custom done button', () => {
    const onChange = vi.fn();
    render(
      <CalendarTime
        onChange={onChange}
        value={dayDate}
        doneButtonTestId="done-button"
        DoneButton={(doneButtonProps) => (
          <Button {...doneButtonProps} data-testid="custom-done-button" />
        )}
      />,
    );
    expect(screen.queryByTestId('done-button')).toBeFalsy();
    expect(screen.queryByTestId('custom-done-button')).toBeTruthy();
  });

  describe('Keyboard Navigation', () => {
    it('should handle Tab navigation between hours, minutes and done button', async () => {
      render(
        <div>
          <CalendarTime
            value={dayDate}
            hoursTestId="hours-picker"
            minutesTestId="minutes-picker"
            doneButtonTestId="done-button"
          />
          <button type="button">Следующая кнопка</button>
        </div>,
      );

      const hoursInput = screen.getByTestId('hours-picker');
      const minutesInput = screen.getByTestId('minutes-picker');
      const doneButton = screen.getByTestId('done-button');

      // Начинаем с часов
      act(() => hoursInput.focus());
      expect(document.activeElement).toBe(hoursInput);

      // Tab к минутам
      await act(() => userEvent.tab());
      expect(document.activeElement).toBe(minutesInput);

      // Tab к кнопке "Готово"
      await act(() => userEvent.tab());
      expect(document.activeElement).toBe(doneButton);

      // Tab к кнопке "Следующая кнопка" после CalendarTime
      await act(() => userEvent.tab());
      expect(document.activeElement).toBe(screen.getByText('Следующая кнопка'));
    });

    it('should handle Enter navigation between hours, minutes and done button', async () => {
      render(
        <div>
          <CalendarTime
            value={dayDate}
            hoursTestId="hours-picker"
            minutesTestId="minutes-picker"
            doneButtonTestId="done-button"
          />
          <button type="button">Следующая кнопка</button>
        </div>,
      );

      const hoursInput = screen.getByTestId('hours-picker');
      const minutesInput = screen.getByTestId('minutes-picker');
      const doneButton = screen.getByTestId('done-button');

      // Начинаем с часов
      act(() => hoursInput.focus());
      expect(document.activeElement).toBe(hoursInput);

      // Enter к минутам
      await act(() => userEvent.keyboard('{Enter}'));
      expect(document.activeElement).toBe(minutesInput);

      // Enter к кнопке "Готово"
      await act(() => userEvent.keyboard('{Enter}'));
      expect(document.activeElement).toBe(doneButton);

      // C кнопки "Готово" Enter уже никуда фокус не уводит
      await act(() => userEvent.keyboard('{Enter}'));
      expect(document.activeElement).not.toBe(screen.getByText('Следующая кнопка'));
      expect(document.activeElement).toBe(doneButton);
    });

    it('should handle Tab navigation between hours, minutes without done button', async () => {
      render(
        <div>
          <CalendarTime
            value={dayDate}
            hoursTestId="hours-picker"
            minutesTestId="minutes-picker"
            doneButtonShow={false}
          />
          <button type="button">Следующая кнопка</button>
        </div>,
      );

      const hoursInput = screen.getByTestId('hours-picker');
      const minutesInput = screen.getByTestId('minutes-picker');

      // Начинаем с часов
      act(() => hoursInput.focus());
      expect(document.activeElement).toBe(hoursInput);

      // Tab к минутам
      await act(() => userEvent.tab());
      expect(document.activeElement).toBe(minutesInput);

      // Tab к кнопке "Следующая кнопка" после CalendarTime
      await act(() => userEvent.tab());
      expect(document.activeElement).toBe(screen.getByText('Следующая кнопка'));
    });

    it('should handle Enter navigation between hours, minutes without done button', async () => {
      render(
        <div>
          <CalendarTime
            value={dayDate}
            hoursTestId="hours-picker"
            minutesTestId="minutes-picker"
            doneButtonShow={false}
          />
          <button type="button">Следующая кнопка</button>
        </div>,
      );

      const hoursInput = screen.getByTestId('hours-picker');
      const minutesInput = screen.getByTestId('minutes-picker');

      // Начинаем с часов
      act(() => hoursInput.focus());
      expect(document.activeElement).toBe(hoursInput);

      // Enter к минутам
      await act(() => userEvent.keyboard('{Enter}'));
      expect(document.activeElement).toBe(minutesInput);

      // C минут Enter уже никуда фокус не уводит
      await act(() => userEvent.keyboard('{Enter}'));
      expect(document.activeElement).not.toBe(screen.getByText('Следующая кнопка'));
      expect(document.activeElement).toBe(minutesInput);
    });

    it('should handle Shift+Tab navigation', async () => {
      render(
        <CalendarTime
          value={dayDate}
          hoursTestId="hours-picker"
          minutesTestId="minutes-picker"
          doneButtonTestId="done-button"
        />,
      );

      const hoursInput = screen.getByTestId('hours-picker');
      const minutesInput = screen.getByTestId('minutes-picker');
      const doneButton = screen.getByTestId('done-button');

      // Начинаем с кнопки "Готово"
      act(() => {
        doneButton.focus();
      });
      expect(document.activeElement).toBe(doneButton);

      // Shift+Tab к минутам
      await userEvent.tab({ shift: true });
      expect(document.activeElement).toBe(minutesInput);

      // // Shift+Tab к часам
      await userEvent.tab({ shift: true });
      expect(document.activeElement).toBe(hoursInput);
    });
  });

  describe('Time Input', () => {
    it('should handle direct time input in hours field', async () => {
      const onChange = vi.fn();
      render(<CalendarTime onChange={onChange} value={dayDate} hoursTestId="hours-picker" />);

      const hoursInput = screen.getByTestId('hours-picker');
      await userEvent.type(hoursInput, '15');
      await act(async () => vi.runOnlyPendingTimers());

      expect(onChange).toHaveBeenCalledWith(setHours(dayDate, 15));
    });

    it('should handle direct time input in minutes field', async () => {
      const onChange = vi.fn();
      render(<CalendarTime onChange={onChange} value={dayDate} minutesTestId="minutes-picker" />);

      const minutesInput = screen.getByTestId('minutes-picker');
      await userEvent.type(minutesInput, '30');
      await act(async () => vi.runOnlyPendingTimers());

      expect(onChange).toHaveBeenCalledWith(setMinutes(dayDate, 30));
    });

    it('should not call onChange for invalid hours input', async () => {
      const onChange = vi.fn();
      render(<CalendarTime onChange={onChange} value={dayDate} hoursTestId="hours-picker" />);

      const hoursInput = screen.getByTestId('hours-picker');
      await userEvent.type(hoursInput, '25'); // Невалидное значение часов
      await act(async () => vi.runOnlyPendingTimers());

      expect(onChange).toHaveBeenCalledWith(setHours(dayDate, 2));
      expect(onChange).toHaveBeenCalledTimes(1);
    });

    it('should not call onChange for invalid minutes input', async () => {
      const onChange = vi.fn();
      render(<CalendarTime onChange={onChange} value={dayDate} minutesTestId="minutes-picker" />);

      const minutesInput = screen.getByTestId('minutes-picker');
      await userEvent.type(minutesInput, '61'); // Невалидное значение минут
      await act(async () => vi.runOnlyPendingTimers());

      expect(onChange).toHaveBeenCalledWith(setMinutes(dayDate, 6));
      expect(onChange).toHaveBeenCalledTimes(1);
    });
  });

  describe('Done Button', () => {
    it('should call onDoneButtonClick when done button is clicked', async () => {
      const onDoneButtonClick = vi.fn();
      render(
        <CalendarTime
          value={dayDate}
          onDoneButtonClick={onDoneButtonClick}
          doneButtonTestId="done-button"
        />,
      );

      const doneButton = screen.getByTestId('done-button');
      await userEvent.click(doneButton);
      await act(async () => vi.runOnlyPendingTimers());

      expect(onDoneButtonClick).toHaveBeenCalledTimes(1);
    });
  });
});
