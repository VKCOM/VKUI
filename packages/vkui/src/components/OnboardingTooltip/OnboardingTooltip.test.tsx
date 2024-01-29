import * as React from 'react';
import { Fragment, HtmlHTMLAttributes, ReactElement } from 'react';
import { render, screen } from '@testing-library/react';
import { baselineComponent, waitForFloatingPosition } from '../../testing/utils';
import { HasRootRef } from '../../types';
import { OnboardingTooltip, OnboardingTooltipProps } from './OnboardingTooltip';
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
        <OnboardingTooltip shown text="text" {...props}>
          <div />
        </OnboardingTooltip>
      </OnboardingTooltipContainer>
    ),
    { forward: false, getRootRef: false },
  );

  it('renders tooltip when shown=true', async () => {
    await renderTooltip(
      <OnboardingTooltip shown text="text">
        <div />
      </OnboardingTooltip>,
    );
    expect(screen.getByText('text')).toBeTruthy();
  });

  it('supports child with getRootRef', async () => {
    await renderTooltip(
      <OnboardingTooltip shown text="text">
        <RootRef />
      </OnboardingTooltip>,
    );
    expect(screen.getByText('text')).toBeTruthy();
  });

  it('does not create extra markup when shown=false', () => {
    render(
      <OnboardingTooltipContainer data-testid="container">
        <OnboardingTooltip shown={false} text="text">
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
      const ref = jest.fn();
      await renderTooltip(
        <OnboardingTooltip>
          <div ref={ref} data-testid="xxx" />
        </OnboardingTooltip>,
      );
      expect(ref).toHaveBeenCalledWith(screen.getByTestId('xxx'));
    });
    it('on VKUI child', async () => {
      const ref = jest.fn();
      await renderTooltip(
        <OnboardingTooltip>
          <RootRef getRootRef={ref} data-testid="xxx" />
        </OnboardingTooltip>,
      );
      expect(ref).toHaveBeenCalledWith(screen.getByTestId('xxx'));
    });
  });

  it('should call onPlacementChange', async () => {
    const onPlacementChange = jest.fn();

    const Fixture = (props: OnboardingTooltipProps) => (
      <OnboardingTooltipContainer data-testid="container">
        <OnboardingTooltip shown text="text" {...props}>
          <div data-testid="xxx" />
        </OnboardingTooltip>
      </OnboardingTooltipContainer>
    );

    const result = render(<Fixture placement="bottom" onPlacementChange={onPlacementChange} />);
    await waitForFloatingPosition();

    expect(onPlacementChange).not.toHaveBeenCalled();

    result.rerender(<Fixture placement="auto" onPlacementChange={onPlacementChange} />);
    await waitForFloatingPosition();

    expect(onPlacementChange).toHaveBeenCalledWith('top');
  });
});
