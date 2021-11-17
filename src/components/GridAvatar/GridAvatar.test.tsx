import { render, screen } from '@testing-library/react';
import { AvatarProps } from '../Avatar/Avatar';
import { baselineComponent } from '../../testing/utils';
import { GridAvatar, GridAvatarProps } from './GridAvatar';

const GridAvatarTest = (props: GridAvatarProps & Pick<AvatarProps, 'mode'>) => (<GridAvatar {...props} data-testid="grid_avatar" />);

const avatar = () => screen.getByTestId('grid_avatar');
const items = () => avatar().querySelectorAll('.vkuiGridAvatar__item');

describe('GridAvatar', () => {
  baselineComponent(GridAvatar);

  it('[forbidden props] don\'t allow to set mode', () => {
    const { rerender } = render(<GridAvatarTest mode="app" src={['#']} />);
    expect(avatar()).not.toHaveClass('Avatar--type-app');
    rerender(<GridAvatarTest mode="image" src={['#']} />);
    expect(avatar()).not.toHaveClass('Avatar--type-image');
  });

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
    render(<GridAvatarTest src={['#', '#', '#', '#', '#']} />);
    expect(items().length).toBe(4);
  });
});
