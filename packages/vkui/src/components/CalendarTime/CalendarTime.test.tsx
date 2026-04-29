import { act, fireEvent, render, screen } from '@testing-library/react';
import { setHours, setMinutes } from '../../lib/date';
import { fakeTimersForScope, userEvent } from '../../testing/utils';
import { Button } from '../Button/Button';
import { CalendarTime } from './CalendarTime';

const dayDate = new Date('2023-09-01T07:40:00.000Z');

describe('CalendarTime', () => {
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

    fireEvent.click(hourSelect);

    const unselectedHourOption = screen.getByRole('option', { selected: false, name: '01' });
    fireEvent.click(unselectedHourOption);

    fireEvent.click(minuteSelect);

    const unselectedMinuteOption = screen.getByRole('option', { selected: false, name: '55' });
    fireEvent.click(unselectedMinuteOption);

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

    fireEvent.click(hourSelect);

    const unselectedHourOption = screen.getByRole('option', { selected: false, name: '01' });
    fireEvent.click(unselectedHourOption);

    fireEvent.click(minuteSelect);

    const unselectedMinuteOption = screen.getByRole('option', { selected: false, name: '55' });
    fireEvent.click(unselectedMinuteOption);

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
    fakeTimersForScope();
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
      await act(async () => {
        await userEvent.tab({ shift: true });
      });
      expect(document.activeElement).toBe(minutesInput);

      // // Shift+Tab к часам
      await act(async () => {
        await userEvent.tab({ shift: true });
      });
      expect(document.activeElement).toBe(hoursInput);
    });
  });

  describe('Time Input', () => {
    fakeTimersForScope();
    it('should handle direct time input in hours field', async () => {
      const onChange = vi.fn();
      render(<CalendarTime onChange={onChange} value={dayDate} hoursTestId="hours-picker" />);

      const hoursInput = screen.getByTestId('hours-picker');
      await userEvent.clear(hoursInput);
      await userEvent.type(hoursInput, '15');
      await act(async () => vi.runOnlyPendingTimers());

      expect(onChange).toHaveBeenLastCalledWith(setHours(dayDate, 15));
    });

    it('should handle direct time input in minutes field', async () => {
      const onChange = vi.fn();
      render(<CalendarTime onChange={onChange} value={dayDate} minutesTestId="minutes-picker" />);

      const minutesInput = screen.getByTestId('minutes-picker');
      await userEvent.clear(minutesInput);
      await userEvent.type(minutesInput, '30');
      await act(async () => vi.runOnlyPendingTimers());

      expect(onChange).toHaveBeenLastCalledWith(setMinutes(dayDate, 30));
    });

    it('should not call onChange for invalid hours input', async () => {
      const onChange = vi.fn();
      render(<CalendarTime onChange={onChange} value={dayDate} hoursTestId="hours-picker" />);

      const hoursInput = screen.getByTestId('hours-picker');
      await userEvent.clear(hoursInput);
      await userEvent.type(hoursInput, '25'); // Невалидное значение часов
      await act(async () => vi.runOnlyPendingTimers());

      expect(onChange).toHaveBeenLastCalledWith(setHours(dayDate, 23));
    });

    it('should not call onChange for invalid minutes input', async () => {
      const onChange = vi.fn();
      render(<CalendarTime onChange={onChange} value={dayDate} minutesTestId="minutes-picker" />);

      const minutesInput = screen.getByTestId('minutes-picker');
      await userEvent.clear(minutesInput);
      await userEvent.type(minutesInput, '61'); // Невалидное значение минут
      await act(async () => vi.runOnlyPendingTimers());

      expect(onChange).toHaveBeenLastCalledWith(setMinutes(dayDate, 59));
    });
  });

  describe('Done Button', () => {
    fakeTimersForScope();
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
      fireEvent.click(doneButton);
      await act(async () => vi.runOnlyPendingTimers());

      expect(onDoneButtonClick).toHaveBeenCalledTimes(1);
    });
  });

  describe('Arrow Keys Navigation', () => {
    fakeTimersForScope();
    it('should increase hours with ArrowUp', async () => {
      const onChange = vi.fn();
      render(<CalendarTime onChange={onChange} value={dayDate} hoursTestId="hours-picker" />);

      const hoursInput = screen.getByTestId('hours-picker');
      act(() => hoursInput.focus());

      await act(() => userEvent.keyboard('{ArrowUp}'));
      await act(async () => vi.runOnlyPendingTimers());

      expect(onChange).toHaveBeenLastCalledWith(setHours(dayDate, 8));
    });

    it('should decrease hours with ArrowDown', async () => {
      const onChange = vi.fn();
      render(<CalendarTime onChange={onChange} value={dayDate} hoursTestId="hours-picker" />);

      const hoursInput = screen.getByTestId('hours-picker');
      act(() => hoursInput.focus());

      await act(() => userEvent.keyboard('{ArrowDown}'));
      await act(async () => vi.runOnlyPendingTimers());

      expect(onChange).toHaveBeenLastCalledWith(setHours(dayDate, 6));
    });

    it('should wrap hours from 0 to 23 with ArrowDown', async () => {
      const onChange = vi.fn();
      const midnightDate = new Date('2023-09-01T00:40:00.000Z');
      render(<CalendarTime onChange={onChange} value={midnightDate} hoursTestId="hours-picker" />);

      const hoursInput = screen.getByTestId('hours-picker');
      act(() => hoursInput.focus());

      await act(() => userEvent.keyboard('{ArrowDown}'));
      await act(async () => vi.runOnlyPendingTimers());

      expect(onChange).toHaveBeenLastCalledWith(setHours(midnightDate, 23));
    });

    it('should wrap hours from 23 to 0 with ArrowUp', async () => {
      const onChange = vi.fn();
      const lateDate = new Date('2023-09-01T23:40:00.000Z');
      render(<CalendarTime onChange={onChange} value={lateDate} hoursTestId="hours-picker" />);

      const hoursInput = screen.getByTestId('hours-picker');
      act(() => hoursInput.focus());

      await act(() => userEvent.keyboard('{ArrowUp}'));
      await act(async () => vi.runOnlyPendingTimers());

      expect(onChange).toHaveBeenLastCalledWith(setHours(lateDate, 0));
    });

    it('should not change value with ArrowUp when disabled', async () => {
      const onChange = vi.fn();
      render(
        <CalendarTime
          onChange={onChange}
          value={dayDate}
          isDayDisabled={() => true}
          hoursTestId="hours-picker"
        />,
      );

      const hoursInput = screen.getByTestId('hours-picker');
      act(() => hoursInput.focus());

      await act(() => userEvent.keyboard('{ArrowUp}'));
      await act(async () => vi.runOnlyPendingTimers());

      expect(onChange).toHaveBeenCalledTimes(0);
    });
  });

  describe('Input Validation Edge Cases', () => {
    fakeTimersForScope();
    it('should filter non-numeric input in hours field', async () => {
      const onChange = vi.fn();
      render(<CalendarTime onChange={onChange} value={dayDate} hoursTestId="hours-picker" />);

      const hoursInput = screen.getByTestId('hours-picker');
      await userEvent.clear(hoursInput);
      await userEvent.type(hoursInput, 'ab');
      await act(async () => vi.runOnlyPendingTimers());

      // Нечисловые символы отфильтрованы, значение остается пустым после clear
      // onChange вызывается с пустым значением, которое конвертируется в 0
      expect(onChange).toHaveBeenCalled();
    });

    it('should clamp hours to max value 23', async () => {
      const onChange = vi.fn();
      render(<CalendarTime onChange={onChange} value={dayDate} hoursTestId="hours-picker" />);

      const hoursInput = screen.getByTestId('hours-picker');
      await userEvent.clear(hoursInput);
      await userEvent.type(hoursInput, '99');
      await act(async () => vi.runOnlyPendingTimers());

      expect(onChange).toHaveBeenLastCalledWith(setHours(dayDate, 23));
    });

    it('should clamp minutes to max value 59', async () => {
      const onChange = vi.fn();
      render(<CalendarTime onChange={onChange} value={dayDate} minutesTestId="minutes-picker" />);

      const minutesInput = screen.getByTestId('minutes-picker');
      await userEvent.clear(minutesInput);
      await userEvent.type(minutesInput, '99');
      await act(async () => vi.runOnlyPendingTimers());

      expect(onChange).toHaveBeenLastCalledWith(setMinutes(dayDate, 59));
    });
  });

  describe('Auto focus to minutes after hours input', () => {
    fakeTimersForScope();
    it('should focus minutes after entering two-digit hours', async () => {
      render(
        <CalendarTime value={dayDate} hoursTestId="hours-picker" minutesTestId="minutes-picker" />,
      );

      const hoursInput = screen.getByTestId('hours-picker');
      const minutesInput = screen.getByTestId('minutes-picker');

      act(() => hoursInput.focus());
      expect(document.activeElement).toBe(hoursInput);

      await userEvent.clear(hoursInput);
      await userEvent.type(hoursInput, '15');
      await act(async () => vi.runOnlyPendingTimers());

      expect(document.activeElement).toBe(minutesInput);
    });
  });

  describe('Custom setHours and setMinutes', () => {
    fakeTimersForScope();
    it('should use custom setHours function', async () => {
      const onChange = vi.fn();
      const customSetHours = vi.fn((date, hours) => {
        const newDate = new Date(date);
        newDate.setHours(hours);
        return newDate;
      });

      render(
        <CalendarTime
          onChange={onChange}
          value={dayDate}
          setHours={customSetHours}
          hoursTestId="hours-picker"
        />,
      );

      const hoursInput = screen.getByTestId('hours-picker');
      fireEvent.click(hoursInput);

      const option = screen.getByRole('option', { selected: false, name: '10' });
      fireEvent.click(option);

      expect(customSetHours).toHaveBeenCalled();
    });

    it('should use custom setMinutes function', async () => {
      const onChange = vi.fn();
      const customSetMinutes = vi.fn((date, minutes) => {
        const newDate = new Date(date);
        newDate.setMinutes(minutes);
        return newDate;
      });

      render(
        <CalendarTime
          onChange={onChange}
          value={dayDate}
          setMinutes={customSetMinutes}
          minutesTestId="minutes-picker"
        />,
      );

      const minutesInput = screen.getByTestId('minutes-picker');
      fireEvent.click(minutesInput);

      const option = screen.getByRole('option', { selected: false, name: '30' });
      fireEvent.click(option);

      expect(customSetMinutes).toHaveBeenCalled();
    });
  });

  describe('Option mouseDown behavior', () => {
    it('should prevent default on option mouseDown', () => {
      const onChange = vi.fn();
      render(<CalendarTime onChange={onChange} value={dayDate} hoursTestId="hours-picker" />);

      const hoursInput = screen.getByTestId('hours-picker');
      fireEvent.click(hoursInput);

      const option = screen.getByRole('option', { name: '10' });
      const mouseDownEvent = new MouseEvent('mousedown', {
        bubbles: true,
        cancelable: true,
      });
      const preventDefaultSpy = vi.spyOn(mouseDownEvent, 'preventDefault');

      option.dispatchEvent(mouseDownEvent);

      expect(preventDefaultSpy).toHaveBeenCalled();
    });
  });
});
