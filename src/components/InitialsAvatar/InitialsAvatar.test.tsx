import { render, screen } from '@testing-library/react';
import { baselineComponent } from '../../testing/utils';
import { InitialsAvatar, InitialsAvatarProps } from './InitialsAvatar';

const InitialsAvatarTest = (props: InitialsAvatarProps) => (<InitialsAvatar {...props} data-testid="initials_avatar" />);

const avatar = () => screen.getByTestId('initials_avatar');
const img = () => avatar().querySelector('img');

describe('InitialsAvatar', () => {
  baselineComponent(InitialsAvatar);

  it('don\'t show image even if src was passed', () => {
    // @ts-ignore (Проверка работы без TypeScript)
    render(<InitialsAvatarTest src="#" />);
    expect(img()).not.toBeInTheDocument();
  });
});
