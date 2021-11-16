import { render, screen } from '@testing-library/react';
import { AvatarProps } from '../../components/Avatar/Avatar';
import { baselineComponent } from '../../testing/utils';
import { InitialsAvatar, InitialsAvatarProps } from './InitialsAvatar';

const InitialsAvatarTest = (props: InitialsAvatarProps & AvatarProps) => (<InitialsAvatar {...props} data-testid="initials_avatar" />);

const avatar = () => screen.getByTestId('initials_avatar');
const img = () => avatar().querySelector('img');

describe('InitialsAvatar', () => {
  baselineComponent(InitialsAvatar);

  it('[forbidden props] don\'t show image even if src was passed', () => {
    render(<InitialsAvatarTest src="#" />);
    expect(img()).not.toBeInTheDocument();
  });

  it('[forbidden props] don\'t allow to set shadow', () => {
    render(<InitialsAvatarTest shadow={true} />);
    expect(avatar()).not.toHaveClass('Avatar--shadow');
  });

  it('[forbidden props] don\'t allow to set mode', () => {
    const { rerender } = render(<InitialsAvatarTest mode="app" />);
    expect(avatar()).not.toHaveClass('Avatar--type-app');
    rerender(<InitialsAvatarTest mode="image" />);
    expect(avatar()).not.toHaveClass('Avatar--type-image');
  });
});
