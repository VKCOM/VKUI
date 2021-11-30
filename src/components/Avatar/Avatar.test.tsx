import { baselineComponent, imgOnlyAttributes } from '../../testing/utils';
import { render, screen } from '@testing-library/react';
import Avatar, { AvatarProps } from './Avatar';
import { Icon20GiftCircleFillRed } from '@vkontakte/icons';

const AvatarTest = (props: AvatarProps) => (<Avatar {...props} data-testid="avatar" />);

const avatar = () => screen.getByTestId('avatar');
const img = () => avatar().querySelector('img');

describe('Avatar', () => {
  baselineComponent(Avatar);

  describe('Image', () => {
    it('Renders img if src is passed', () => {
      render(<AvatarTest src="#" />);

      expect(img()).toBeInTheDocument();
    });

    it('does not render img if there is no src', () => {
      render(<AvatarTest />);

      expect(img()).not.toBeInTheDocument();
    });

    it('Passes ref to img', () => {
      const refCallback = jest.fn();
      render(<AvatarTest src="#" getRef={refCallback} />);

      expect(refCallback).toBeCalled();
    });

    it('Passes all img attributes to img', () => {
      render(<AvatarTest src="#" {...imgOnlyAttributes} />);

      Object.keys(imgOnlyAttributes).forEach((attr) => {
        expect(img()).toHaveAttribute(attr);
      });
    });
  });

  describe('Badge', () => {
    it('Renders badge if passed', () => {
      render(<AvatarTest badge={<Icon20GiftCircleFillRed />} />);

      expect(avatar().querySelector('.Avatar__badge')).toBeInTheDocument();
    });

    it('Doesn\'t render badge if not passed', () => {
      render(<AvatarTest />);

      expect(avatar().querySelector('.Avatar__badge')).not.toBeInTheDocument();
    });

    it('Renders badge if online status passed', () => {
      render(<AvatarTest badge={<Icon20GiftCircleFillRed />} online />);

      expect(avatar().querySelector('.Avatar__badge')).toBeInTheDocument();
    });

    it('Adds large class if size >= then 96', () => {
      render(<AvatarTest badge={<Icon20GiftCircleFillRed />} size={96} />);

      expect(avatar().querySelector('.Avatar__badge--large')).toBeInTheDocument();
    });
  });

  describe('Online', () => {
    it('Renders online icon if online status passed', () => {
      render(<AvatarTest online />);

      expect(avatar().querySelector('.Avatar__online')).toBeInTheDocument();
    });

    it('Doesn\'t render online icon if online status not passed', () => {
      render(<AvatarTest />);

      expect(avatar().querySelector('.Avatar__online')).not.toBeInTheDocument();
    });

    it('Doesn\'t render online icon if badge passed', () => {
      render(<AvatarTest badge={<Icon20GiftCircleFillRed />} online />);

      expect(avatar().querySelector('.Avatar__online')).not.toBeInTheDocument();
    });

    it('Doesn\'t render online icon if mode isn\'t default', () => {
      render(<AvatarTest online mode="app" />);

      expect(avatar().querySelector('.Avatar__online')).not.toBeInTheDocument();
    });

    it('Adds large class if size >= then 72', () => {
      render(<AvatarTest online size={72} />);

      expect(avatar().querySelector('.Avatar__online--large')).toBeInTheDocument();
    });
  });
});
