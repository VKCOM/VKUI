import { render, screen } from '@testing-library/react';
import { baselineComponent } from '../../testing/utils';
import Button, { ButtonProps } from './Button';

const ButtonTest = (props: ButtonProps) => <Button Component="div" data-testid="custom-btn" {...props} />;
const button = () => screen.getByTestId('custom-btn');

describe('Button', () => {
  baselineComponent(Button);

  it('button with valid href is handled as a native link', () => {
    render(<ButtonTest href="#">Native Link</ButtonTest>);

    expect(screen.getByRole('link')).toBe(button());
  });

  it('a11y: custom button has role="button" and tabindex', () => {
    render(<ButtonTest>Custom Button</ButtonTest>);

    expect(button()).toHaveAttribute('role', 'button');
    expect(button()).toHaveAttribute('tabindex', '0');
  });

  it('a11y: button with role="link" is handled as a custom link and has tabIndex', () => {
    render(<ButtonTest role="link">Custom Link</ButtonTest>);

    expect(button()).toHaveAttribute('role', 'link');
    expect(button()).toHaveAttribute('tabindex', '0');
  });
});
