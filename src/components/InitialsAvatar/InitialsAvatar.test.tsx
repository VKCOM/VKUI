import { render, screen } from '@testing-library/react';
import { AvatarProps } from '../../components/Avatar/Avatar';
import { baselineComponent } from '../../testing/utils';
import { InitialsAvatar, InitialsAvatarProps } from './InitialsAvatar';

const InitialsAvatarTest = (props: InitialsAvatarProps & AvatarProps) => (<InitialsAvatar {...props} data-testid="initials_avatar" />);

const avatar = () => screen.getByTestId('initials_avatar');
const img = () => avatar().querySelector('img');

describe('InitialsAvatar', () => {
  baselineComponent(InitialsAvatar);

  it('don\'t show image even if src was passed', () => {
    render(<InitialsAvatarTest src="#" />);
    expect(img()).not.toBeInTheDocument();
  });
});
