import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { baselineComponent } from '../../testing/utils';
import Tappable, { TappableProps } from './Tappable';

const TappableTest = (props: TappableProps) => <Tappable data-testid="tappable" {...props} />;
const tappable = () => screen.getByTestId('tappable');

describe('Tappable', () => {
  baselineComponent(TappableTest);

  it('Component: if no Component is passed Tappable becomes a div', () => {
    render(<TappableTest>Look, ma, no Component!</TappableTest>);
    expect(tappable().tagName.toLowerCase()).toMatch('div');
  });

  it('Component: if a href is passed w/ no Component Tappable becomes a native link', () => {
    render(<TappableTest href="https://vk.com">VK Link</TappableTest>);
    expect(tappable().tagName.toLowerCase()).toMatch('a');
  });

  it('Component: if a href is passed w/ Component Tappable becomes a [Component]', () => {
    render(<TappableTest href="https://vk.com" Component="div" role="link">VK Link Div</TappableTest>);
    expect(tappable().tagName.toLowerCase()).toMatch('div');
  });

  it('a11y(role): role gets set for custom button', () => {
    render(<TappableTest>Custom Button</TappableTest>);
    expect(tappable()).toHaveAttribute('role', 'button');
  });

  it('a11y(role): default role gets reassigned', () => {
    render(<TappableTest role="link">Custom Link</TappableTest>);
    expect(tappable()).toHaveAttribute('role', 'link');
  });

  it('a11y(role): role gets reset for native button', () => {
    render(<TappableTest Component="button">Native Button</TappableTest>);
    expect(tappable()).not.toHaveAttribute('role');
  });

  it('a11y(role): role gets reset for native link', () => {
    render(<TappableTest href="#">Native Link</TappableTest>);
    expect(tappable()).not.toHaveAttribute('role');
  });

  it('a11y(tabindex): custom button has tabindex={0}', () => {
    render(<TappableTest>Custom Button</TappableTest>);
    expect(tappable()).toHaveAttribute('tabIndex', '0');
  });

  it('a11y(tabindex): custom disabled button has no tabindex', () => {
    render(<TappableTest disabled>Custom Disabled Button</TappableTest>);
    expect(tappable()).not.toHaveAttribute('tabIndex');
  });

  it('a11y(tabindex): custom link has tabindex={0}', () => {
    render(<TappableTest role="link">Custom Link</TappableTest>);
    expect(tappable()).toHaveAttribute('tabIndex', '0');
  });

  it('a11y(tabindex): positive tabindex overrides default tabindex', () => {
    render(<TappableTest tabIndex={1}>custom button has __dangerous__ tabIndex {1}</TappableTest>);
    expect(tappable()).toHaveAttribute('tabIndex', '1');
  });

  it('a11y(tabindex): negative tabindex overrides default tabindex', () => {
    render(<TappableTest role="link" tabIndex={-1}>custom link has tabIndex {-1}</TappableTest>);
    expect(tappable()).toHaveAttribute('tabIndex', '-1');
  });

  it('a11y(tabindex): native button has no tabindex', () => {
    render(<TappableTest Component="button">Native Button</TappableTest>);
    expect(tappable()).not.toHaveAttribute('tabIndex');
  });

  it('a11y(tabindex): native link has no tabindex', () => {
    render(<TappableTest href="#">Native Link</TappableTest>);
    expect(tappable()).not.toHaveAttribute('tabIndex');
  });

  it('a11y(type): custom button has no type', () => {
    render(<TappableTest>Custom Button</TappableTest>);
    expect(tappable()).not.toHaveAttribute('type');
  });

  it('a11y(type): native button has default type="button"', () => {
    render(<TappableTest Component="button">Native Button</TappableTest>);
    expect(tappable()).toHaveAttribute('type', 'button');
  });

  it('a11y(type): default type gets overwritten if type is passed to a native button', () => {
    render(<TappableTest Component="button" type="submit">Submit Button</TappableTest>);
    expect(tappable()).toHaveAttribute('type', 'submit');
  });

  it('a11y(type): type exists if passed to a non-button', () => {
    render(<TappableTest href="https://google.com" type="external">Go to Google.com</TappableTest>);
    expect(tappable()).toHaveAttribute('type', 'external');
  });

  it('a11y(disabled): custom Tappable element has aria-disabled', () => {
    render(<TappableTest>Tappable w/ aria-disabled</TappableTest>);
    expect(tappable()).toHaveAttribute('aria-disabled');
  });

  it('a11y(button): custom button keyboard events', () => {
    const handleClick = jest.fn();
    render(<TappableTest onClick={handleClick}>Custom Button</TappableTest>);

    // gets focused on tab
    userEvent.tab();
    expect(tappable()).toHaveFocus();

    // onClick gets called on Enter and Space
    fireEvent.keyDown(tappable(), { key: 'Enter', code: 'Enter' });
    expect(handleClick).toHaveBeenCalledTimes(1);

    fireEvent.keyDown(tappable(), { key: ' ', code: 'Space' });
    expect(handleClick).toHaveBeenCalledTimes(2);
  });

  it('a11y(link): custom link keyboard events', () => {
    const handleClick = jest.fn();
    render(<TappableTest role="link" onClick={handleClick}>Custom Link</TappableTest>);

    // gets focused on tab
    userEvent.tab();
    expect(tappable()).toHaveFocus();

    // onClick gets called on Enter only
    fireEvent.keyDown(tappable(), { key: 'Enter', code: 'Enter' });
    expect(handleClick).toHaveBeenCalledTimes(1);

    fireEvent.keyDown(tappable(), { key: ' ', code: 'Space' });
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('disabled: default Tappable w/ disabled does not react to events', () => {
    const handleClick = jest.fn();
    render(<TappableTest onClick={handleClick} disabled />);

    fireEvent.click(tappable());
    expect(handleClick).toHaveBeenCalledTimes(0);

    fireEvent.keyDown(tappable(), { key: 'Enter', code: 'Enter' });
    expect(handleClick).toHaveBeenCalledTimes(0);
  });

  // [a11y] remove hasFocusVisible tests once a11y work on components based on Tappable is finished
  it('a11y: no .Tappable--focus-visible class gets added by default', () => {
    render(<TappableTest>hasFocusVisible FALSE</TappableTest>);
    expect(tappable()).not.toHaveClass('Tappable--focus-visible');
  });

  it('a11y: hasFocusVisible adds .Tappable--focus-visible class', () => {
    render(<TappableTest hasFocusVisible>hasFocusVisible TRUE</TappableTest>);
    expect(tappable()).toHaveClass('Tappable--focus-visible');
  });

  it('checks that hover state is removed if component becomes disabled', () => {
    const { rerender } = render(<TappableTest>Test</TappableTest>);
    fireEvent.mouseEnter(tappable());
    expect(tappable()).toHaveClass('Tappable--hover-background');
    rerender(<TappableTest disabled>Test</TappableTest>);
    expect(tappable()).not.toHaveClass('Tappable--hover-background');
  });
});
