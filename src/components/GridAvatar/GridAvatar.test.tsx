import { render, screen } from '@testing-library/react';
import { baselineComponent } from '../../testing/utils';
import { GridAvatar, GridAvatarProps } from './GridAvatar';

const GridAvatarTest = (props: GridAvatarProps) => (<GridAvatar {...props} data-testid="grid_avatar" />);

const avatar = () => screen.getByTestId('grid_avatar');
const items = () => avatar().querySelectorAll('.vkuiGridAvatar__item');

describe('GridAvatar', () => {
  baselineComponent(GridAvatar);

  it('renders 1 grid item', () => {
    render(<GridAvatarTest src={['#']} />);
    expect(items().length).toBe(1);
  });

  it('renders 2 grid items', () => {
    render(<GridAvatarTest src={['#', '#']} />);
    expect(items().length).toBe(2);
  });

  it('renders 3 grid items', () => {
    render(<GridAvatarTest src={['#', '#', '#']} />);
    expect(items().length).toBe(3);
  });

  it('renders 4 grid item', () => {
    render(<GridAvatarTest src={['#', '#', '#', '#']} />);
    expect(items().length).toBe(4);
  });

  it('shows warn if src length larger than 4', () => {
    const errorLog = jest.spyOn(global.console, 'error').mockImplementation();

    render(<GridAvatarTest src={['#', '#', '#', '#', '#']} />);
    expect(items().length).toBe(4);
    expect(errorLog).toHaveBeenCalledWith(expect.stringContaining('Размер пропа src src (5) больше максимального (4)'));
  });
});
