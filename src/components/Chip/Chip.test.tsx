import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { baselineComponent } from '../../testing/utils';
import Chip from './Chip';

const getChip = () => screen.queryByText('Белый');

describe('Chip', () => {
  baselineComponent(Chip);

  it('renders value, before, after, and children', () => {
    render(
      <Chip before="before" value="white" after="after">Белый</Chip>,
    );

    expect(getChip()).not.toBeNull();
  });

  it('removes chip on onRemove click', () => {
    const onRemove = jest.fn(() => getChip().parentElement.remove());

    render(
      <Chip value="white" onRemove={onRemove}>Белый</Chip>,
    );

    userEvent.click(screen.queryByLabelText('Удалить чип'));

    expect(getChip()).toBeNull();
  });
});
