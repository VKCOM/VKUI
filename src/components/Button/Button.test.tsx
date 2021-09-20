import { fireEvent, render, screen } from '@testing-library/react';
import { baselineComponent } from '../../testing/utils';
import Button, { ButtonProps } from './Button';

const ButtonTest = (props: ButtonProps) => <Button data-testid="custom-btn" {...props} />;
const button = () => screen.getByTestId('custom-btn');

describe('Button', () => {
  baselineComponent(Button);

  it('Component: Button is handled as a native button', () => {
    render(<ButtonTest>Native Button</ButtonTest>);
    expect(button().tagName.toLowerCase()).toMatch('button');
  });

  it('Component: Button with valid href is handled as a native link', () => {
    render(<ButtonTest href="#">Native Link</ButtonTest>);
    expect(button().tagName.toLowerCase()).toMatch('a');
  });

  it('Component: Button with valid href overrides passed Component', () => {
    render(<ButtonTest href="#" Component="div">Native Link</ButtonTest>);
    expect(button().tagName.toLowerCase()).toMatch('a');
  });

  it('Component: Button with loading is not clickable', () => {
    const handleClick = jest.fn();
    render(<ButtonTest onClick={handleClick} loading>Button</ButtonTest>);

    fireEvent.click(button());
    expect(handleClick).toHaveBeenCalledTimes(0);
  });
});
