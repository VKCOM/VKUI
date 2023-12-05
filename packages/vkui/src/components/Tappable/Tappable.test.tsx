import * as React from 'react';
import { act } from 'react-dom/test-utils';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { noop } from '@vkontakte/vkjs';
import { baselineComponent, fakeTimers, runAllTimers, userEvent } from '../../testing/utils';
import { AdaptivityProvider } from '../AdaptivityProvider/AdaptivityProvider';
import { ConfigProvider } from '../ConfigProvider/ConfigProvider';
import { Tappable, TappableProps } from './Tappable';
import styles from './Tappable.module.css';

const TappableTest = (props: TappableProps) => <Tappable data-testid="tappable" {...props} />;

const tappable = () => screen.getByTestId('tappable');

describe('Tappable', () => {
  fakeTimers();
  afterEach(() => delete window['ontouchstart']);

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
    render(
      <TappableTest href="https://vk.com" Component="div" role="link">
        VK Link Div
      </TappableTest>,
    );
    expect(tappable().tagName.toLowerCase()).toMatch('div');
  });

  it('a11y(role): role gets set for custom button', () => {
    render(<TappableTest onClick={noop}>Custom Button</TappableTest>);
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
    render(<TappableTest onClick={noop}>Custom Button</TappableTest>);
    expect(tappable()).toHaveAttribute('tabIndex', '0');
  });

  it('a11y(tabindex): custom disabled button has no tabindex', () => {
    render(<TappableTest disabled>Custom Disabled Button</TappableTest>);
    expect(tappable()).not.toHaveAttribute('tabIndex');
  });

  it('a11y(tabindex): positive tabindex overrides default tabindex', () => {
    render(<TappableTest tabIndex={1}>custom button has __dangerous__ tabIndex {1}</TappableTest>);
    expect(tappable()).toHaveAttribute('tabIndex', '1');
  });

  it('a11y(tabindex): negative tabindex overrides default tabindex', () => {
    render(
      <TappableTest role="link" tabIndex={-1}>
        custom link has tabIndex {-1}
      </TappableTest>,
    );
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

  it('a11y(type): default type gets overwritten if type is passed to a native button', () => {
    render(
      <TappableTest Component="button" type="submit">
        Submit Button
      </TappableTest>,
    );
    expect(tappable()).toHaveAttribute('type', 'submit');
  });

  it('a11y(type): type exists if passed to a non-button', () => {
    render(
      <TappableTest href="https://google.com" type="external">
        Go to Google.com
      </TappableTest>,
    );
    expect(tappable()).toHaveAttribute('type', 'external');
  });

  it('a11y(disabled): custom Tappable element has aria-disabled', () => {
    render(
      <TappableTest onClick={noop} disabled>
        Tappable w/ aria-disabled
      </TappableTest>,
    );
    expect(tappable()).toHaveAttribute('aria-disabled', 'true');
  });

  it('a11y(button): custom button keyboard events', async () => {
    const handleClick = jest.fn();
    render(<TappableTest onClick={handleClick}>Custom Button</TappableTest>);

    // gets focused on tab
    await userEvent.tab();
    expect(tappable()).toHaveFocus();

    // onClick gets called on Enter and Space
    fireEvent.keyDown(tappable(), { key: 'Enter', code: 'Enter' });
    expect(handleClick).toHaveBeenCalledTimes(1);

    fireEvent.keyDown(tappable(), { key: ' ', code: 'Space' });
    expect(handleClick).toHaveBeenCalledTimes(2);
  });

  it('a11y(link): custom link keyboard events', async () => {
    const handleClick = jest.fn();
    render(
      <TappableTest role="link" onClick={handleClick}>
        Custom Link
      </TappableTest>,
    );

    // gets focused on tab
    await userEvent.tab();
    expect(tappable()).toHaveFocus();

    // onClick gets called on Enter only
    fireEvent.keyDown(tappable(), { key: 'Enter', code: 'Enter' });
    expect(handleClick).toHaveBeenCalledTimes(1);

    fireEvent.keyDown(tappable(), { key: ' ', code: 'Space' });
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('Tappable calls onKeyDown prop', () => {
    const onKeyDown = jest.fn();
    render(<TappableTest Component="div" onKeyDown={onKeyDown} />);
    fireEvent.keyDown(tappable(), {});
    expect(onKeyDown).toHaveBeenCalledTimes(1);
  });

  it('disabled: default Tappable w/ disabled does not react to events', () => {
    const handleClick = jest.fn();
    render(<TappableTest onClick={handleClick} disabled />);

    fireEvent.click(tappable());
    expect(handleClick).toHaveBeenCalledTimes(0);

    fireEvent.keyDown(tappable(), { key: 'Enter', code: 'Enter' });
    expect(handleClick).toHaveBeenCalledTimes(0);
  });

  describe('active', () => {
    afterEach(() => jest.clearAllMocks());
    it('shows waves on android', async () => {
      const waveCount = () => document.querySelectorAll(`.${styles.Tappable__wave}`).length;
      render(
        <AdaptivityProvider hasPointer={false}>
          <ConfigProvider platform="android">
            <Tappable data-testid="x" onClick={noop} />
          </ConfigProvider>
        </AdaptivityProvider>,
      );

      // TODO: Warning: Encountered two children with the same key
      await userEvent.click(screen.getByTestId('x'));
      await waitFor(() => expect(waveCount()).toBe(1));
      await userEvent.click(screen.getByTestId('x'));
      await waitFor(() => expect(waveCount()).toBe(2));
      act(() => {
        jest.runAllTimers();
      });
      // removes waves
      expect(waveCount()).toBe(0);
    });
    const isActive = (e = tappable()) =>
      e.classList.contains(styles['Tappable--activated-background']);

    // TODO (@SevereCloud): пофиксить тест
    it('activates on click', async () => {
      render(<TappableTest onClick={noop} />);
      await userEvent.click(tappable());
      await waitFor(() => expect(isActive()).toBe(true));
      act(() => {
        jest.runOnlyPendingTimers();
      });
      expect(isActive()).toBe(false);
    });

    // TODO (@SevereCloud): пофиксить тест
    it.skip('activates during longtap', async () => {
      render(<TappableTest onClick={noop} />);
      fireEvent.mouseDown(tappable());
      expect(isActive()).toBe(false);
      await waitFor(() => expect(isActive()).toBe(true));

      fireEvent.mouseUp(tappable());
      expect(isActive()).toBe(true);
    });

    it('does not activate on child Tappable click', async () => {
      render(
        <Tappable onClick={noop} data-testid="parent">
          <TappableTest onClick={noop} data-testid="child" />
        </Tappable>,
      );
      const child = screen.getByTestId('child');
      await userEvent.click(child);
      expect(isActive(child)).toBe(true);
      expect(isActive(screen.getByTestId('parent'))).toBe(false);
    });
    describe('prevents early', () => {
      it('on slide', () => {
        render(<TappableTest />);
        fireEvent.mouseDown(tappable(), { clientX: 10 });
        act(() => {
          jest.runOnlyPendingTimers();
        });
        fireEvent.mouseMove(tappable(), { clientX: 40 });
        expect(isActive()).toBe(false);
      });
      it('on multi-touch', () => {
        window.ontouchstart = null;
        render(<TappableTest />);
        fireEvent.touchStart(tappable(), {
          touches: [{}],
          changedTouches: [{}],
        });
        act(() => {
          jest.runOnlyPendingTimers();
        });
        fireEvent.touchStart(tappable(), {
          touches: [{}, {}],
          changedTouches: [{}],
        });
        expect(isActive()).toBe(false);
      });
      it('on disable', () => {
        const h = render(<TappableTest />);
        fireEvent.mouseDown(tappable());
        act(() => {
          jest.runOnlyPendingTimers();
        });
        h.rerender(<TappableTest disabled />);
        expect(isActive()).toBe(false);
      });
      it('on hasActive=false', () => {
        const h = render(<TappableTest />);
        fireEvent.mouseDown(tappable());
        runAllTimers();
        h.rerender(<TappableTest hasActive={false} />);
        expect(isActive()).toBe(false);
      });
      it('on child hover', async () => {
        render(
          <TappableTest>
            <Tappable data-testid="c" />
          </TappableTest>,
        );
        fireEvent.mouseDown(tappable());
        runAllTimers();
        await userEvent.hover(screen.getByTestId('c'));
        expect(isActive()).toBe(false);
      });
    });
  });

  describe('hover', () => {
    const isHovered = (testId = 'x') =>
      screen.getByTestId(testId).classList.contains(styles['Tappable--hovered-background']);

    it('is not hovered by default', () => {
      render(<Tappable onClick={noop} data-testid="x" />);
      expect(isHovered()).toBe(false);
    });
    it('tracks mouse', async () => {
      render(<Tappable onClick={noop} data-testid="x" />);
      await userEvent.hover(screen.getByTestId('x'));
      expect(isHovered()).toBe(true);
      await userEvent.unhover(screen.getByTestId('x'));
      expect(isHovered()).toBe(false);
    });
    describe('no hover when disabled', () => {
      it('does not hover when disabled', async () => {
        render(<Tappable onClick={noop} data-testid="x" disabled />);
        await userEvent.hover(screen.getByTestId('x'));
        expect(isHovered()).toBe(false);
      });
    });
    describe('nested hover', () => {
      it('unhovers on child hover', async () => {
        render(
          <Tappable data-testid="x" onClick={noop}>
            <Tappable data-testid="c" onClick={noop} />
          </Tappable>,
        );
        await userEvent.hover(screen.getByTestId('c'));
        expect(isHovered()).toBe(false);
        fireEvent.pointerLeave(screen.getByTestId('c'));
        expect(isHovered()).toBe(true);
      });
      describe('handles disabled children', () => {
        it('hovers on disabled child hover', async () => {
          render(
            <Tappable onClick={noop} data-testid="x">
              <Tappable onClick={noop} data-testid="c" disabled />
            </Tappable>,
          );
          await userEvent.hover(screen.getByTestId('c'));
          expect(isHovered()).toBe(true);
        });
      });
    });
  });
});
