import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { baselineComponent } from '../../testing/utils';
import Tappable, { TappableProps } from './Tappable';

const TappableTest = (props: TappableProps) => <Tappable data-testid="tappable" {...props} />;
const tappable = () => screen.getByTestId('tappable');

describe('Tappable', () => {
  baselineComponent(TappableTest);

  it('a11y: tabIndex is properly set for custom accessible button', () => {
    const { rerender } = render(<TappableTest Component="button" tabIndex={0}>native element has no tabIndex</TappableTest>);
    expect(tappable()).not.toHaveAttribute('tabIndex');

    rerender(<TappableTest>custom button has tabIndex 0</TappableTest>);
    expect(tappable()).toHaveAttribute('tabIndex', '0');

    rerender(<TappableTest tabIndex={1}>custom button as __dangerous__ tabIndex 1</TappableTest>);
    expect(tappable()).toHaveAttribute('tabIndex', '1');
  });

  it('a11y: tabIndex is properly set for custom accessible link', () => {
    const { rerender } = render(<TappableTest Component="a" href="#" tabIndex={0}>native element has no tabIndex</TappableTest>);
    expect(tappable()).not.toHaveAttribute('tabIndex');

    rerender(<TappableTest role="link">custom link has tabIndex 0</TappableTest>);
    expect(tappable()).toHaveAttribute('tabIndex', '0');

    rerender(<TappableTest role="link" tabIndex={1}>custom link has __dangerous__ tabIndex 1</TappableTest>);
    expect(tappable()).toHaveAttribute('tabIndex', '1');
  });

  it('a11y: custom button get focused on tab', () => {
    render(<TappableTest Component="div" role="button">Focused Button</TappableTest>);

    userEvent.tab();
    expect(tappable()).toHaveFocus();
  });

  it('a11y: custom link gets focused on tab', () => {
    render(<TappableTest Component="div" role="link">Focused Link</TappableTest>);

    userEvent.tab();
    expect(tappable()).toHaveFocus();
  });

  it('a11y: custom button works on Enter and Space', () => {
    const handleClick = jest.fn();

    render(<TappableTest role="button" onClick={handleClick}>Custom Button</TappableTest>);

    fireEvent.keyDown(tappable(), { key: 'Enter', code: 'Enter' });
    fireEvent.keyDown(tappable(), { key: ' ', code: 'Space' });

    expect(handleClick).toHaveBeenCalledTimes(2);
  });

  it('a11y: custom link works on Enter and does not on Space', () => {
    const handleClick = jest.fn();

    render(<TappableTest role="link" onClick={handleClick}>Custom Link</TappableTest>);

    fireEvent.keyDown(tappable(), { key: 'Enter', code: 'Enter' });
    fireEvent.keyDown(tappable(), { key: ' ', code: 'Space' });

    expect(handleClick).toHaveBeenCalledTimes(1);
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
});
