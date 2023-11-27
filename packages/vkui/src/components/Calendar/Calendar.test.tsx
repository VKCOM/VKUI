import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { baselineComponent, userEvent } from '../../testing/utils';
import { Calendar } from './Calendar';

const targetDate = new Date('2023-09-20T07:40:00.000Z');
const firstDayDate = new Date('2023-09-01T07:40:00.000Z');
const minDate = new Date('2023-09-15T10:35:00.000Z');
const maxDate = new Date('2023-09-29T07:20:00.000Z');

describe('Calendar', () => {
  baselineComponent(Calendar);

  it('fires onChange', async () => {
    const onChange = jest.fn();

    render(<Calendar value={targetDate} onChange={onChange} />);
    await userEvent.click(screen.getByText(`${firstDayDate.getDate()}`));
    expect(onChange).toHaveBeenCalledWith(firstDayDate);
  });

  it('does not fire onChange with the value out of minDateTime/maxDateTime', async () => {
    const onChange = jest.fn();

    render(
      <Calendar
        value={targetDate}
        minDateTime={minDate}
        maxDateTime={maxDate}
        onChange={onChange}
      />,
    );
    await userEvent.click(screen.getByText(`${firstDayDate.getDate()}`));
    expect(onChange).not.toBeCalled();
    await userEvent.click(screen.getByText(`${maxDate.getDate() + 1}`));
    expect(onChange).not.toBeCalled();
  });

  it('onChange respects minDateTime', async () => {
    const onChange = jest.fn();

    render(<Calendar value={targetDate} minDateTime={minDate} onChange={onChange} />);
    await userEvent.click(screen.getByText(`${minDate.getDate()}`));
    expect(onChange).toHaveBeenCalledWith(minDate);
  });

  it('onChange respects maxDateTime', async () => {
    const onChange = jest.fn();

    render(<Calendar value={targetDate} maxDateTime={maxDate} onChange={onChange} />);
    await userEvent.click(screen.getByText(`${maxDate.getDate()}`));
    expect(onChange).toHaveBeenCalledWith(maxDate);
  });
});
