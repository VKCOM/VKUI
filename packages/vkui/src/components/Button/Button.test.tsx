import { fireEvent, render, screen } from '@testing-library/react';
import { a11yTest, baselineComponent } from '../../testing/utils';
import { Button, type ButtonProps } from './Button';

const ButtonTest = (props: ButtonProps) => <Button data-testid="custom-btn" {...props} />;
const button = () => screen.getByTestId('custom-btn');

describe('Button', () => {
  a11yTest(() => (
    <>
      <ButtonTest loading>
        Button
      </ButtonTest>

      <ButtonTest href="#" loading>
        Button with href
      </ButtonTest>
    </>
  ));

  baselineComponent((props) => <Button {...props}>Button</Button>);

  it('Component: Button is handled as a native button', () => {
    render(<ButtonTest>Native Button</ButtonTest>);
    expect(button().tagName.toLowerCase()).toMatch('button');
  });

  it('Component: Button with valid href is handled as a native link', () => {
    render(<ButtonTest href="#">Native Link</ButtonTest>);
    expect(button().tagName.toLowerCase()).toMatch('a');
  });

  it('Component: Button with loading is not clickable', () => {
    const handleClick = jest.fn();
    render(
      <ButtonTest onClick={handleClick} loading>
        Button
      </ButtonTest>,
    );

    fireEvent.click(button());
    expect(handleClick).toHaveBeenCalledTimes(0);
  });

  it('should handle zero in props', () => {
    render(
      <ButtonTest before={0} after={0}>
        0
      </ButtonTest>,
    );

    expect(screen.getByTestId('before')).toHaveTextContent('0')
    expect(screen.getByTestId('children')).toHaveTextContent('0')
    expect(screen.getByTestId('after')).toHaveTextContent('0')
  });
});
