import { render, screen } from '@testing-library/react';
import { baselineComponent } from '../../testing/utils';
import Button, { ButtonProps } from './Button';

const ButtonTest = (props: ButtonProps) => <Button data-testid="custom-btn" {...props} />;
const button = () => screen.getByTestId('custom-btn');

describe('Button', () => {
  baselineComponent(Button);

  it('button is handled as a native button', () => {
    render(<ButtonTest>Native Button</ButtonTest>);

    expect(screen.getByRole('button')).toBe(button());
    expect(button()).toHaveAttribute('type', 'button');
    expect(button()).not.toHaveAttribute('role');
  });

  it('button with valid href is handled as a native link', () => {
    render(<ButtonTest href="#">Native Link</ButtonTest>);

    expect(screen.getByRole('link')).toBe(button());
    expect(button()).not.toHaveAttribute('type');
    expect(button()).not.toHaveAttribute('role');
  });

  it('a11y: custom button', () => {
    render(<ButtonTest Component="div">Custom Button</ButtonTest>);

    expect(button()).toHaveAttribute('role', 'button');
    expect(button()).toHaveAttribute('tabindex', '0');
    expect(button()).not.toHaveAttribute('type');
  });

  it('a11y: custom link', () => {
    render(<ButtonTest Component="div" role="link">Custom Link</ButtonTest>);

    expect(button()).toHaveAttribute('role', 'link');
    expect(button()).toHaveAttribute('tabindex', '0');
    expect(button()).not.toHaveAttribute('type');
  });
});
