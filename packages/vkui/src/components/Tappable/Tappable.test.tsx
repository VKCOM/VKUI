import * as React from 'react';
import { act } from 'react-dom/test-utils';
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Platform } from '../../lib/platform';
import { baselineComponent } from '../../testing/utils';
import { AdaptivityProvider } from '../AdaptivityProvider/AdaptivityProvider';
import { ConfigProvider } from '../ConfigProvider/ConfigProvider';
import { Tappable, TappableProps } from './Tappable';
import styles from './Tappable.module.css';

const TappableTest = (props: TappableProps) => (
  <Tappable activeMode="Tappable--active" data-testid="tappable" {...props} />
);
const tappable = () => screen.getByTestId('tappable');

describe('Tappable', () => {
  beforeAll(() => jest.useFakeTimers());
  afterAll(() => jest.useRealTimers());
  afterEach(() => delete window['ontouchstart']);

  baselineComponent(TappableTest, {
    // TODO [a11y]: "Exceeded timeout of 5000 ms for a test.
    //              Add a timeout value to this test to increase the timeout, if this is a long-running test. See https://jestjs.io/docs/api#testname-fn-timeout."
    a11y: false,
  });

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

  it('a11y(type): native button has default type="button"', () => {
    render(<TappableTest Component="button">Native Button</TappableTest>);
    expect(tappable()).toHaveAttribute('type', 'button');
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
    render(<TappableTest disabled>Tappable w/ aria-disabled</TappableTest>);
    expect(tappable()).toHaveAttribute('aria-disabled', 'true');
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
    render(
      <TappableTest role="link" onClick={handleClick}>
        Custom Link
      </TappableTest>,
    );

    // gets focused on tab
    userEvent.tab();
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
    it('shows waves on android', () => {
      const waveCount = () => document.querySelectorAll(`.${styles.Tappable__wave}`).length;
      render(
        <AdaptivityProvider hasPointer={false}>
          <ConfigProvider platform={Platform.ANDROID}>
            <Tappable data-testid="x" />
          </ConfigProvider>
        </AdaptivityProvider>,
      );

      // TODO: Warning: Encountered two children with the same key
      userEvent.click(screen.getByTestId('x'));
      expect(waveCount()).toBe(1);
      userEvent.click(screen.getByTestId('x'));
      expect(waveCount()).toBe(2);
      act(() => {
        jest.runAllTimers();
      });
      // removes waves
      expect(waveCount()).toBe(0);
    });
    const isActive = (e = tappable()) => e.classList.contains('Tappable--active');
    it('activates on click', () => {
      render(<TappableTest />);
      userEvent.click(tappable());
      expect(isActive()).toBe(true);
      act(() => {
        jest.runOnlyPendingTimers();
      });
      expect(isActive()).toBe(false);
    });
    it('activates during longtap', () => {
      render(<TappableTest />);
      fireEvent.mouseDown(tappable());
      expect(isActive()).toBe(false);
      act(() => {
        jest.runOnlyPendingTimers();
      });
      expect(isActive()).toBe(true);
      fireEvent.mouseUp(tappable());
      expect(isActive()).toBe(true);
    });
    it('does not activate on child Tappable click', () => {
      render(
        <Tappable data-testid="parent">
          <TappableTest data-testid="child" />
        </Tappable>,
      );
      const child = screen.getByTestId('child');
      userEvent.click(child);
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
        act(() => {
          jest.runOnlyPendingTimers();
        });
        h.rerender(<TappableTest hasActive={false} />);
        expect(isActive()).toBe(false);
      });
      it('on child hover', () => {
        render(
          <TappableTest>
            <Tappable data-testid="c" />
          </TappableTest>,
        );
        fireEvent.mouseDown(tappable());
        act(() => {
          jest.runOnlyPendingTimers();
        });
        userEvent.hover(screen.getByTestId('c'));
        expect(isActive()).toBe(false);
      });
    });
  });

  describe('hover', () => {
    const isHovered = (testId = 'x') =>
      screen.getByTestId(testId).classList.contains(styles['Tappable--hover-background']);

    it('is not hovered by default', () => {
      render(<Tappable data-testid="x" />);
      expect(isHovered()).toBe(false);
    });
    it('tracks mouse', () => {
      render(<Tappable data-testid="x" />);
      userEvent.hover(screen.getByTestId('x'));
      expect(isHovered()).toBe(true);
      userEvent.unhover(screen.getByTestId('x'));
      expect(isHovered()).toBe(false);
    });
    describe('no hover when disabled', () => {
      describe.each([
        ['as form item', 'button'],
        ['as div', 'div'],
      ] as const)('%s', (_, cmp) => {
        it('does not hover when disabled', () => {
          render(<Tappable Component={cmp} data-testid="x" disabled />);
          userEvent.hover(screen.getByTestId('x'));
          expect(isHovered()).toBe(false);
        });
        it('suspends hover while disabled', () => {
          const h = render(<Tappable Component={cmp} data-testid="x" />);
          userEvent.hover(screen.getByTestId('x'));
          h.rerender(<Tappable Component={cmp} data-testid="x" disabled />);
          expect(isHovered()).toBe(false);
          h.rerender(<Tappable Component={cmp} data-testid="x" />);
          expect(isHovered()).toBe(true);
        });
        it('tracks hover occurred while disabled', () => {
          const h = render(<Tappable Component={cmp} data-testid="x" disabled />);
          userEvent.hover(screen.getByTestId('x'));
          h.rerender(<Tappable Component={cmp} data-testid="x" />);
          expect(isHovered()).toBe(true);
        });
      });
    });
    describe('nested hover', () => {
      it('unhovers on child hover', () => {
        render(
          <Tappable data-testid="x">
            <Tappable data-testid="c" />
          </Tappable>,
        );
        userEvent.hover(screen.getByTestId('c'));
        expect(isHovered()).toBe(false);
        fireEvent.pointerLeave(screen.getByTestId('c'));
        expect(isHovered()).toBe(true);
      });
      it('restores hover on child unmount', () => {
        const h = render(
          <Tappable data-testid="x">
            <Tappable data-testid="c" />
          </Tappable>,
        );
        userEvent.hover(screen.getByTestId('c'));
        h.rerender(<Tappable data-testid="x" />);
        expect(isHovered()).toBe(true);
      });
      describe('handles disabled children', () => {
        describe.each([
          ['as form item', 'button'],
          ['as div', 'div'],
        ] as const)('%s', (_, cmp) => {
          it('hovers on disabled child hover', () => {
            render(
              <Tappable data-testid="x">
                <Tappable Component={cmp} data-testid="c" disabled />
              </Tappable>,
            );
            userEvent.hover(screen.getByTestId('c'));
            expect(isHovered()).toBe(true);
          });
          it('restores hover on child disable', () => {
            const h = render(
              <Tappable data-testid="x">
                <Tappable data-testid="c" />
              </Tappable>,
            );
            userEvent.hover(screen.getByTestId('c'));
            h.rerender(
              <Tappable data-testid="x">
                <Tappable Component={cmp} data-testid="c" disabled />
              </Tappable>,
            );
            expect(isHovered()).toBe(true);
            h.rerender(
              <Tappable data-testid="x">
                <Tappable data-testid="c" />
              </Tappable>,
            );
            expect(isHovered()).toBe(false);
          });
        });
      });
    });
  });
});
