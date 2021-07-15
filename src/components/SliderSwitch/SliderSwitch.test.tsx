import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { baselineComponent } from '../../testing/utils';
import SliderSwitch from './SliderSwitch';

const options = [{ name: 'vk', value: 'vk' }, { name: 'ok', value: 'ok' }];

describe('SliderSwitch', () => {
  baselineComponent(SliderSwitch);

  it('does not trigger form submit', () => {
    const onSubmit = jest.fn((e) => e.preventDefault());
    render(<form onSubmit={onSubmit}><SliderSwitch options={options} /></form>);
    userEvent.click(screen.getByText('vk'));
    expect(onSubmit).not.toHaveBeenCalled();
  });
});
