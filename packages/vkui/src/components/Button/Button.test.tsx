import { fireEvent, render, screen } from '@testing-library/react';
import { baselineComponent } from '../../testing/utils';
import { Button, type ButtonProps } from './Button';

const ButtonTest = (props: ButtonProps) => <Button data-testid="custom-btn" {...props} />;
const ButtonAsLinkLoading = () => <ButtonTest href="#" data-testid="loading-btn" loading>Loading Link</ButtonTest>
const ButtonAsLinkDisabled = () => <ButtonTest href="#" data-testid="disabled-btn" disabled>Disabled Link</ButtonTest>

const button = {
  default: () => screen.getByTestId('custom-btn'),
  loading: () => screen.getByTestId('loading-btn'),
  disabled: () => screen.getByTestId('disabled-btn')
}

describe('Button', () => {
  baselineComponent((props) => <>
    <ButtonTest {...props}>Button</ButtonTest>

    <ButtonTest loading>
      Button
    </ButtonTest>

    <ButtonTest href="#" loading>
      Button with href
    </ButtonTest>
  </>);

  it('should be handled as a native button', () => {
    render(<ButtonTest>Native Button</ButtonTest>);
    expect(button.default().tagName.toLowerCase()).toMatch('button');
  });

  it('should not be clickable with loading prop', () => {
    const handleClick = jest.fn();
    render(
      <ButtonTest onClick={handleClick} loading>
        Button
      </ButtonTest>,
    );

    fireEvent.click(button.default());
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

  describe('Button as a link', () => {
    it('should be handled as a native link with valid href', () => {
      render(<ButtonTest href="#">Native Link</ButtonTest>);
      expect(button.default().tagName.toLowerCase()).toMatch('a');
    });

    it('should not have href with disabled or loading prop', () => {
      render(<>
        <ButtonAsLinkDisabled />
        <ButtonAsLinkLoading />
      </>);

      expect(button.disabled()).not.toHaveAttribute('href')
      expect(button.loading()).not.toHaveAttribute('href')
    })

    it('should have role="link" while being disabled or loading', () => {
      render(<>
        <ButtonAsLinkDisabled />
        <ButtonAsLinkLoading />
      </>);

      expect(button.disabled()).toHaveAttribute('role', 'link')
      expect(button.loading()).toHaveAttribute('role', 'link')
    })
  })
});
