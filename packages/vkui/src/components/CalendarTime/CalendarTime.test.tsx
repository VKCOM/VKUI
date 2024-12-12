import { fireEvent, render, screen } from '@testing-library/react';
import { setHours, setMinutes } from 'date-fns';
import { userEvent } from '../../testing/utils';
import { Button } from '../Button/Button';
import { CalendarTime } from './CalendarTime';

const dayDate = new Date('2023-09-01T07:40:00.000Z');

describe('CalendarTime', () => {
  it('check onChange should called when select hours and minutes', async () => {
    jest.useFakeTimers();
    const onChange = jest.fn();
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
    jest.useFakeTimers();
    const onChange = jest.fn();
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
    const onChange = jest.fn();
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
    const onChange = jest.fn();
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
    const onChange = jest.fn();
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
    const tab = (element: HTMLElement, shiftKey = false) => {
      fireEvent.keyDown(element, {
        key: 'Tab',
        code: 'Tab',
        shiftKey,
      });
    };
    it('should handle Tab navigation between hours, minutes and done button', async () => {
      const onChange = jest.fn();
      render(
        <CalendarTime
          onChange={onChange}
          value={dayDate}
          hoursTestId="hours-picker"
          minutesTestId="minutes-picker"
          doneButtonTestId="done-button"
        />,
      );

      const hoursInput = screen.getByTestId('hours-picker');
      const minutesInput = screen.getByTestId('minutes-picker');
      const doneButton = screen.getByTestId('done-button');

      // Начинаем с часов
      hoursInput.focus();
      expect(document.activeElement).toBe(hoursInput);

      // Tab к минутам
      tab(hoursInput);
      expect(document.activeElement).toBe(minutesInput);

      // Tab к кнопке "Готово"
      tab(minutesInput);
      expect(document.activeElement).toBe(doneButton);
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
      doneButton.focus();
      expect(document.activeElement).toBe(doneButton);

      // Shift+Tab к минутам
      tab(doneButton, true);
      expect(document.activeElement).toBe(minutesInput);

      // // Shift+Tab к часам
      tab(minutesInput, true);
      expect(document.activeElement).toBe(hoursInput);
    });
  });

  describe('Time Input', () => {
    it('should handle direct time input in hours field', async () => {
      const onChange = jest.fn();
      render(<CalendarTime onChange={onChange} value={dayDate} hoursTestId="hours-picker" />);

      const hoursInput = screen.getByTestId('hours-picker');
      await userEvent.type(hoursInput, '15');

      expect(onChange).toHaveBeenCalledWith(setHours(dayDate, 15));
    });

    it('should handle direct time input in minutes field', async () => {
      const onChange = jest.fn();
      render(<CalendarTime onChange={onChange} value={dayDate} minutesTestId="minutes-picker" />);

      const minutesInput = screen.getByTestId('minutes-picker');
      await userEvent.type(minutesInput, '30');

      expect(onChange).toHaveBeenCalledWith(setMinutes(dayDate, 30));
    });

    it('should not call onChange for invalid hours input', async () => {
      const onChange = jest.fn();
      render(<CalendarTime onChange={onChange} value={dayDate} hoursTestId="hours-picker" />);

      const hoursInput = screen.getByTestId('hours-picker');
      await userEvent.type(hoursInput, '25'); // Невалидное значение часов

      expect(onChange).toHaveBeenCalledWith(setHours(dayDate, 2));
      expect(onChange).toHaveBeenCalledTimes(1);
    });

    it('should not call onChange for invalid minutes input', async () => {
      const onChange = jest.fn();
      render(<CalendarTime onChange={onChange} value={dayDate} minutesTestId="minutes-picker" />);

      const minutesInput = screen.getByTestId('minutes-picker');
      await userEvent.type(minutesInput, '61'); // Невалидное значение минут

      expect(onChange).toHaveBeenCalledWith(setMinutes(dayDate, 6));
      expect(onChange).toHaveBeenCalledTimes(1);
    });
  });

  describe('Done Button', () => {
    it('should call onDoneButtonClick when done button is clicked', async () => {
      const onDoneButtonClick = jest.fn();
      render(
        <CalendarTime
          value={dayDate}
          onDoneButtonClick={onDoneButtonClick}
          doneButtonTestId="done-button"
        />,
      );

      const doneButton = screen.getByTestId('done-button');
      await userEvent.click(doneButton);

      expect(onDoneButtonClick).toHaveBeenCalledTimes(1);
    });
  });
});
