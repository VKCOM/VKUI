import { render, screen } from '@testing-library/react';
import { setHours, setMinutes } from 'date-fns';
import { userEvent } from '../../testing/utils';
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
    const buttonText = 'Текст';
    render(
      <CalendarTime
        onChange={onChange}
        value={dayDate}
        doneButtonShow={false}
        doneButtonText={buttonText}
      />,
    );
    expect(screen.queryByText(buttonText)).toBeFalsy();
  });

  it('should disable done button with doneButtonDisabled=false', () => {
    const onChange = jest.fn();
    const buttonText = 'Текст';
    render(
      <CalendarTime
        onChange={onChange}
        value={dayDate}
        doneButtonText={buttonText}
        doneButtonDisabled={true}
      />,
    );
    const text = screen.queryByText(buttonText);
    expect(text).toBeTruthy();
    const button = text!.closest('button');
    expect(button!.disabled).toBeTruthy();
  });
});
