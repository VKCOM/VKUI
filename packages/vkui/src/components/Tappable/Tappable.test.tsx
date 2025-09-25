import { act } from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { noop } from '@vkontakte/vkjs';
import { baselineComponent, fakeTimers, userEvent } from '../../testing/utils';
import { AdaptivityProvider } from '../AdaptivityProvider/AdaptivityProvider';
import { ConfigProvider } from '../ConfigProvider/ConfigProvider';
import { Tappable, type TappableProps } from './Tappable';
import styles from './Tappable.module.css';

const TappableTest = (props: TappableProps) => <Tappable data-testid="tappable" {...props} />;

const tappable = () => screen.getByTestId('tappable');

describe(Tappable, () => {
  baselineComponent(TappableTest);

  fakeTimers();
  afterEach(() => delete window['ontouchstart']);

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

  it('Component: if Component is undefined it should respect component autodetect', () => {
    render(
      <TappableTest href="https://vk.com" Component={undefined}>
        VK Link
      </TappableTest>,
    );
    expect(tappable().tagName.toLowerCase()).toMatch('a');
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
    const handleClick = vi.fn();
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
    const handleClick = vi.fn();
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
    const onKeyDown = vi.fn();
    render(<TappableTest Component="div" onKeyDown={onKeyDown} />);
    fireEvent.keyDown(tappable(), {});
    expect(onKeyDown).toHaveBeenCalledTimes(1);
  });

  it('disabled: default Tappable w/ disabled does not react to events', () => {
    const handleClick = vi.fn();
    render(<TappableTest onClick={handleClick} disabled />);

    fireEvent.click(tappable());
    expect(handleClick).toHaveBeenCalledTimes(0);

    fireEvent.keyDown(tappable(), { key: 'Enter', code: 'Enter' });
    expect(handleClick).toHaveBeenCalledTimes(0);
  });

  describe('active', () => {
    afterEach(() => vi.clearAllMocks());

    it('shows waves on android', async () => {
      const waveCount = () => document.querySelectorAll(`.${styles.wave}`).length;
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
      act(vi.runAllTimers);
      // removes waves
      expect(waveCount()).toBe(0);
    });

    it('activates on click', async () => {
      render(<TappableTest onClick={noop} />);
      await userEvent.click(tappable());
      await waitFor(() => expect(tappable()).toHaveClass(styles.activatedBackground));
      act(vi.runOnlyPendingTimers);
      expect(tappable()).not.toHaveClass(styles.activatedBackground);
    });

    it('activates during longtap', async () => {
      render(<TappableTest onClick={noop} />);
      fireEvent.pointerDown(tappable());
      act(vi.runOnlyPendingTimers);
      expect(tappable()).toHaveClass(styles.activatedBackground);

      fireEvent.pointerUp(tappable());
      act(vi.runOnlyPendingTimers);
      expect(tappable()).not.toHaveClass(styles.activatedBackground);
    });

    it('does not activate on child Tappable click', async () => {
      const result = render(
        <Tappable onClick={vi.fn()} data-testid="parent">
          <TappableTest onClick={vi.fn()} data-testid="child" />
        </Tappable>,
      );
      const child = result.getByTestId('child');
      await userEvent.click(child);
      expect(child).toHaveClass(styles.activatedBackground);
      expect(result.getByTestId('parent')).not.toHaveClass(styles.activatedBackground);
      act(vi.runAllTimers);
    });

    describe('prevents early', () => {
      it('on slide', () => {
        render(<TappableTest />);
        fireEvent.mouseDown(tappable(), { clientX: 10 });
        act(vi.runOnlyPendingTimers);
        fireEvent.mouseMove(tappable(), { clientX: 40 });
        expect(tappable()).not.toHaveClass(styles.activatedBackground);
      });

      it('on multi-touch', () => {
        window.ontouchstart = null;
        render(<TappableTest />);
        fireEvent.touchStart(tappable(), {
          touches: [{}],
          changedTouches: [{}],
        });
        act(vi.runOnlyPendingTimers);
        fireEvent.touchStart(tappable(), {
          touches: [{}, {}],
          changedTouches: [{}],
        });
        expect(tappable()).not.toHaveClass(styles.activatedBackground);
      });

      it('on disable', () => {
        const h = render(<TappableTest />);
        fireEvent.mouseDown(tappable());
        act(vi.runOnlyPendingTimers);
        h.rerender(<TappableTest disabled />);
        expect(tappable()).not.toHaveClass(styles.activatedBackground);
      });

      it('on hasActive=false', async () => {
        render(<TappableTest hasActive={false} onClick={noop} />);
        await userEvent.click(tappable());
        let errored = false;
        await waitFor(() => expect(tappable()).toHaveClass(styles.activatedBackground)).catch(
          () => {
            errored = true;
          },
        );
        expect(errored).toBeTruthy();
      });

      it('on child hover', async () => {
        render(
          <TappableTest>
            <Tappable data-testid="c" />
          </TappableTest>,
        );
        fireEvent.mouseDown(tappable());
        act(vi.runAllTimers);
        await userEvent.hover(screen.getByTestId('c'));
        expect(tappable()).not.toHaveClass(styles.activatedBackground);
      });
    });
  });

  describe('hover', () => {
    it('is not hovered by default', () => {
      const result = render(<Tappable onClick={noop} data-testid="x" />);
      expect(result.getByTestId('x')).not.toHaveClass(styles.hoveredBackground);
    });

    it('tracks mouse', async () => {
      const result = render(<Tappable onClick={noop} data-testid="x" />);
      await userEvent.hover(screen.getByTestId('x'));
      expect(result.getByTestId('x')).toHaveClass(styles.hoveredBackground);
      await userEvent.unhover(screen.getByTestId('x'));
      expect(result.getByTestId('x')).not.toHaveClass(styles.hoveredBackground);
    });

    describe('no hover when disabled', () => {
      it('does not hover when disabled', async () => {
        const result = render(<Tappable onClick={noop} data-testid="x" disabled />);
        await userEvent.hover(screen.getByTestId('x'));
        expect(result.getByTestId('x')).not.toHaveClass(styles.hoveredBackground);
      });
    });

    describe('nested hover', () => {
      it('unhovers parent on child hover', async () => {
        const result = render(
          <Tappable data-testid="parent" onClick={noop}>
            <Tappable data-testid="children" onClick={noop} />
          </Tappable>,
        );
        await userEvent.hover(screen.getByTestId('parent'));
        expect(result.getByTestId('parent')).toHaveClass(styles.hoveredBackground);
        expect(result.getByTestId('children')).not.toHaveClass(styles.hoveredBackground);

        await userEvent.hover(screen.getByTestId('children'));
        expect(result.getByTestId('parent')).not.toHaveClass(styles.hoveredBackground);
        expect(result.getByTestId('children')).toHaveClass(styles.hoveredBackground);

        await userEvent.hover(screen.getByTestId('parent'));
        expect(result.getByTestId('parent')).toHaveClass(styles.hoveredBackground);
        expect(result.getByTestId('children')).not.toHaveClass(styles.hoveredBackground);
      });

      it('hovers parent on every child hover when parent has hasHoverWithChildren', async () => {
        const result = render(
          <Tappable data-testid="parent" onClick={noop} hasHoverWithChildren>
            <Tappable data-testid="children-1" onClick={noop} />
            <Tappable data-testid="children-2" onClick={noop} />
          </Tappable>,
        );

        // hover на родителе
        await userEvent.hover(screen.getByTestId('parent'));
        expect(result.getByTestId('parent')).toHaveClass(styles.hoveredBackground);
        expect(result.getByTestId('children-1')).not.toHaveClass(styles.hoveredBackground);
        expect(result.getByTestId('children-2')).not.toHaveClass(styles.hoveredBackground);

        // hover на первом дочернем элементе: родитель тоже имеет hover
        await userEvent.hover(screen.getByTestId('children-1'));
        expect(result.getByTestId('parent')).toHaveClass(styles.hoveredBackground);
        expect(result.getByTestId('children-1')).toHaveClass(styles.hoveredBackground);
        expect(result.getByTestId('children-2')).not.toHaveClass(styles.hoveredBackground);

        // hover на родителе, дочерние hover не имеют
        await userEvent.hover(screen.getByTestId('parent'));
        expect(result.getByTestId('parent')).toHaveClass(styles.hoveredBackground);
        expect(result.getByTestId('children-1')).not.toHaveClass(styles.hoveredBackground);
        expect(result.getByTestId('children-2')).not.toHaveClass(styles.hoveredBackground);

        // hover на втором дочернем элементе: родитель тоже имеет hover
        await userEvent.hover(screen.getByTestId('children-2'));
        expect(result.getByTestId('parent')).toHaveClass(styles.hoveredBackground);
        expect(result.getByTestId('children-1')).not.toHaveClass(styles.hoveredBackground);
        expect(result.getByTestId('children-2')).toHaveClass(styles.hoveredBackground);
      });

      it('hovers parent only on child hover with unlockParentHover', async () => {
        const result = render(
          <Tappable data-testid="parent" onClick={noop}>
            <Tappable data-testid="children-1" onClick={noop} unlockParentHover />
            <Tappable data-testid="children-2" onClick={noop} />
          </Tappable>,
        );

        // hover на родителе
        await userEvent.hover(screen.getByTestId('parent'));
        expect(result.getByTestId('parent')).toHaveClass(styles.hoveredBackground);
        expect(result.getByTestId('children-1')).not.toHaveClass(styles.hoveredBackground);
        expect(result.getByTestId('children-2')).not.toHaveClass(styles.hoveredBackground);

        // hover на первом дочернем элементе: родитель имеет hover
        await userEvent.hover(screen.getByTestId('children-1'));
        expect(result.getByTestId('parent')).toHaveClass(styles.hoveredBackground);
        expect(result.getByTestId('children-1')).toHaveClass(styles.hoveredBackground);
        expect(result.getByTestId('children-2')).not.toHaveClass(styles.hoveredBackground);

        // hover на втором дочернем элементе: родитель не имеет hover
        await userEvent.hover(screen.getByTestId('children-2'));
        expect(result.getByTestId('parent')).not.toHaveClass(styles.hoveredBackground);
        expect(result.getByTestId('children-1')).not.toHaveClass(styles.hoveredBackground);
        expect(result.getByTestId('children-2')).toHaveClass(styles.hoveredBackground);
      });

      describe('handles disabled children', () => {
        it('hovers on disabled child hover', async () => {
          const result = render(
            <Tappable onClick={noop} data-testid="parent">
              <Tappable onClick={noop} data-testid="children" disabled />
            </Tappable>,
          );
          await userEvent.hover(screen.getByTestId('children'));
          expect(result.getByTestId('parent')).toHaveClass(styles.hoveredBackground);
        });
      });
    });
  });
});
