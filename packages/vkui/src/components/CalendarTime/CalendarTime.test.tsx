import { render, screen } from '@testing-library/react';
import { setHours, setMinutes } from 'date-fns';
import { userEvent } from '../../testing/utils';
import { CalendarTime } from './CalendarTime';
import styles from './CalendarTime.module.css';

const dayDate = new Date('2023-09-01T07:40:00.000Z');

describe('CalendarTime', () => {
  it('check onChange should called when select hours and minutes', async () => {
    jest.useFakeTimers();
    const onChange = jest.fn();
    const { container } = render(<CalendarTime onChange={onChange} value={dayDate} />);

    const [hourSelect, minuteSelect] = Array.from(
      container.getElementsByClassName(styles['CalendarTime__picker']),
    ).map((picker) => picker.firstElementChild as HTMLElement);

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
    const { container } = render(
      <CalendarTime onChange={onChange} value={dayDate} isDayDisabled={() => true} />,
    );

    const [hourSelect, minuteSelect] = Array.from(
      container.getElementsByClassName(styles['CalendarTime__picker']),
    ).map((picker) => picker.firstElementChild as HTMLElement);

    await userEvent.click(hourSelect);

    const unselectedHourOption = screen.getByRole('option', { selected: false, name: '01' });
    await userEvent.click(unselectedHourOption);

    await userEvent.click(minuteSelect);

    const unselectedMinuteOption = screen.getByRole('option', { selected: false, name: '55' });
    await userEvent.click(unselectedMinuteOption);

    expect(onChange).toHaveBeenCalledTimes(0);
  });
});
