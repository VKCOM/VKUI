import { render, screen } from '@testing-library/react';
import { AvatarProps } from '../Avatar/Avatar';
import { baselineComponent } from '../../testing/utils';
import { GridAvatar, GridAvatarProps } from './GridAvatar';

const GridAvatarTest = (props: GridAvatarProps & Pick<AvatarProps, 'mode'>) => (<GridAvatar {...props} data-testid="grid_avatar" />);

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

  it('don\'t show more than 4 items in grid', () => {
    render(<GridAvatarTest src={['#', '#', '#', '#', '#']} />);
    expect(items().length).toBe(4);
  });
});
