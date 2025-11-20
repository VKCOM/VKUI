import { Fragment, type HtmlHTMLAttributes, type ReactElement } from 'react';
import { render, screen } from '@testing-library/react';
import { noop } from '@vkontakte/vkjs';
import { baselineComponent, setNodeEnv, waitForFloatingPosition } from '../../testing/utils';
import type { HasRootRef } from '../../types';
import { OnboardingTooltip, type OnboardingTooltipProps } from './OnboardingTooltip';
import { OnboardingTooltipContainer } from './OnboardingTooltipContainer';

const renderTooltip = async (jsx: ReactElement) => {
  render(<OnboardingTooltipContainer>{jsx}</OnboardingTooltipContainer>);
  await waitForFloatingPosition();
};
const RootRef = ({
  getRootRef,
  ...props
}: HasRootRef<HTMLDivElement> & HtmlHTMLAttributes<HTMLDivElement>) => (
  <div ref={getRootRef} {...props} />
);

describe(OnboardingTooltip, () => {
  baselineComponent(
    (props) => (
      <OnboardingTooltipContainer>
        <OnboardingTooltip shown title="Text element" description="text" {...props}>
          <div />
        </OnboardingTooltip>
      </OnboardingTooltipContainer>
    ),
    { forward: false, getRootRef: false },
  );

  it('renders tooltip when shown=true', async () => {
    await renderTooltip(
      <OnboardingTooltip shown description="text">
        <div />
      </OnboardingTooltip>,
    );
    expect(screen.getByText('text')).toBeTruthy();
  });

  it('supports child with getRootRef', async () => {
    await renderTooltip(
      <OnboardingTooltip shown description="text">
        <RootRef />
      </OnboardingTooltip>,
    );
    expect(screen.getByText('text')).toBeTruthy();
  });

  it('does not create extra markup when shown=false', () => {
    render(
      <OnboardingTooltipContainer data-testid="container">
        <OnboardingTooltip shown={false} description="text">
          <div data-testid="xxx" />
        </OnboardingTooltip>
      </OnboardingTooltipContainer>,
    );
    expect(screen.queryByText('text')).toBeFalsy();
    const container = screen.getByTestId('container');
    expect(container.childElementCount).toBe(1);
    expect(container.firstElementChild).toBe(screen.getByTestId('xxx'));
  });

  it('does not explode when children does not accept ref', () => {
    expect(() => render(<OnboardingTooltip shown {...({} as any)} />)).not.toThrow();
    expect(() =>
      render(<OnboardingTooltip shown>{'text' as any}</OnboardingTooltip>),
    ).not.toThrow();
    expect(() =>
      render(
        <OnboardingTooltip shown>{[<div key="1" />, <div key="2" />] as any}</OnboardingTooltip>,
      ),
    ).not.toThrow();
    expect(() =>
      render(
        <OnboardingTooltip shown>
          <Fragment>
            text
            <div />
          </Fragment>
        </OnboardingTooltip>,
      ),
    ).not.toThrow();
  });

  describe('preserves child ref', () => {
    it('on DOM child', async () => {
      const ref = vi.fn();
      await renderTooltip(
        <OnboardingTooltip>
          <div ref={ref} data-testid="xxx" />
        </OnboardingTooltip>,
      );
      expect(ref).toHaveBeenCalledExactlyOnceWith(screen.getByTestId('xxx'));
    });
    it('on VKUI child', async () => {
      const ref = vi.fn();
      await renderTooltip(
        <OnboardingTooltip>
          <RootRef getRootRef={ref} data-testid="xxx" />
        </OnboardingTooltip>,
      );
      expect(ref).toHaveBeenCalledExactlyOnceWith(screen.getByTestId('xxx'));
    });
  });

  it('should call onPlacementChange', async () => {
    const onPlacementChange = vi.fn();

    const Fixture = (props: OnboardingTooltipProps) => (
      <OnboardingTooltipContainer data-testid="container">
        <OnboardingTooltip shown description="text" {...props}>
          <div data-testid="xxx" />
        </OnboardingTooltip>
      </OnboardingTooltipContainer>
    );

    const result = render(<Fixture placement="bottom" onPlacementChange={onPlacementChange} />);
    await waitForFloatingPosition();

    expect(onPlacementChange).not.toHaveBeenCalled();

    result.rerender(<Fixture placement="auto" onPlacementChange={onPlacementChange} />);
    await waitForFloatingPosition();

    expect(onPlacementChange).toHaveBeenCalledExactlyOnceWith('top');
  });

  it('shows warning if title and area attributes are not provided', () => {
    setNodeEnv('development');
    const warn = vi.spyOn(console, 'warn').mockImplementation(noop);

    const component = render(<OnboardingTooltip onClose={noop} title="title" />);
    expect(warn).not.toHaveBeenCalled();

    component.rerender(<OnboardingTooltip onClose={noop} aria-label="title" />);
    expect(warn).not.toHaveBeenCalled();

    component.rerender(<OnboardingTooltip onClose={noop} aria-labelledby="labelId" />);
    expect(warn).not.toHaveBeenCalled();

    component.rerender(<OnboardingTooltip onClose={noop} />);

    expect(warn.mock.calls[0][0]).toBe(
      '%c[VKUI/OnboardingTooltip] Если "title" не используется, то необходимо задать либо "aria-label", либо "aria-labelledby" (см. правило axe aria-dialog-name)',
    );

    setNodeEnv('test');
  });
});
