import * as React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { noop } from '@vkontakte/vkjs';
import { baselineComponent } from '../../testing/utils';
import { Clickable } from './Clickable';

describe('Clickable', () => {
  baselineComponent(Clickable);

  baselineComponent((props) => (
    <Clickable onClick={noop} {...props}>
      content
    </Clickable>
  ));

  baselineComponent((props) => (
    <Clickable href="" {...props}>
      content
    </Clickable>
  ));
  baselineComponent((props) => (
    <Clickable onClick={noop} disabled {...props}>
      content
    </Clickable>
  ));

  baselineComponent((props) => (
    <Clickable href="" disabled {...props}>
      content
    </Clickable>
  ));

  baselineComponent((props) => (
    <Clickable Component="span" {...props}>
      content
    </Clickable>
  ));

  it('href: should be link', () => {
    const result = render(<Clickable href="https://vk.com" />);
    expect(result.getByRole('link')).toBeInTheDocument();
  });

  it('href && disabled: should be link', () => {
    const result = render(<Clickable href="https://vk.com" disabled />);
    expect(result.getByRole('link')).toBeInTheDocument();
  });

  // https://github.com/VKCOM/VKUI/issues/8738
  it('disabled check re-render', () => {
    const Cmp = () => {
      const [disabled, setDisabled] = React.useState(false);

      return (
        <Clickable onClick={() => setDisabled(true)} disabled={disabled}>
          <div data-testid="inner-element" />
        </Clickable>
      );
    };
    const result = render(<Cmp />);

    const innerElementFirstRender = result.getByTestId('inner-element');
    const enabledElement = result.getByRole('button');
    fireEvent.click(enabledElement);

    const disabledElement = result.getByRole('button');

    expect(disabledElement.ariaDisabled).toBeTruthy();
    expect(disabledElement).toBe(enabledElement);
    expect(result.getByTestId('inner-element')).toBe(innerElementFirstRender);
  });

  it('resets hover state when hasHover becomes false (e.g. loading), so hover is not shown after hasHover is true again', () => {
    const hoverClass = 'test-hover-class';

    const TestWrapper = () => {
      const [loading, setLoading] = React.useState(false);
      return (
        <>
          <Clickable
            onClick={() => setLoading(true)}
            hasHover={!loading}
            hoverClassName={hoverClass}
            data-testid="clickable"
          >
            Load
          </Clickable>
          <button data-testid="done-button" onClick={() => setLoading(false)}>
            Done
          </button>
        </>
      );
    };
    render(<TestWrapper />);
    const clickable = screen.getByTestId('clickable');
    const doneButton = screen.getByTestId('done-button');

    fireEvent.pointerEnter(clickable, { pointerType: 'mouse', pointerId: 1 });
    expect(clickable).toHaveClass(hoverClass);

    fireEvent.click(clickable);
    expect(clickable).not.toHaveClass(hoverClass);

    fireEvent.click(doneButton);
    expect(clickable).not.toHaveClass(hoverClass);
  });
});
