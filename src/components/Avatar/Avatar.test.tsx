import { baselineComponent, imgOnlyAttributes } from '../../testing/utils';
import { render, screen } from '@testing-library/react';
import { Avatar, AvatarProps } from './Avatar';

const AvatarTest = (props: AvatarProps) => (<Avatar {...props} data-testid="avatar" />);

const avatar = () => screen.getByTestId('avatar');
const img = () => avatar().querySelector('img');

describe('Avatar', () => {
  baselineComponent(Avatar);

  it('[img] renders img if src is passed', () => {
    render(<AvatarTest src="#" />);

    expect(img()).toBeInTheDocument();
  });

  it('[img] does not render img if there is no src', () => {
    render(<AvatarTest />);

    expect(img()).not.toBeInTheDocument();
  });

  it('[img] passes ref to img', () => {
    const refCallback = jest.fn();
    render(<AvatarTest src="#" getRef={refCallback} />);

    expect(refCallback).toBeCalled();
  });

  it('[img] passes all img attributes to img', () => {
    render(<AvatarTest src="#" {...imgOnlyAttributes} />);

    Object.keys(imgOnlyAttributes).forEach((attr) => {
      expect(img()).toHaveAttribute(attr);
    });
  });
});
