import * as React from 'react';
import { Fragment, HtmlHTMLAttributes, ReactElement } from 'react';
import { render, screen } from '@testing-library/react';
import { baselineComponent, waitForFloatingPosition } from '../../testing/utils';
import { HasRootRef } from '../../types';
import { Tooltip } from './Tooltip';
import { TooltipContainer } from './TooltipContainer';

const renderTooltip = async (jsx: ReactElement) => {
  render(<TooltipContainer>{jsx}</TooltipContainer>);
  await waitForFloatingPosition();
};
const RootRef = ({
  getRootRef,
  ...props
}: HasRootRef<HTMLDivElement> & HtmlHTMLAttributes<HTMLDivElement>) => (
  <div ref={getRootRef} {...props} />
);

describe('Tooltip', () => {
  baselineComponent(
    (props) => (
      <TooltipContainer>
        <Tooltip isShown {...props}>
          <div />
        </Tooltip>
      </TooltipContainer>
    ),
    { forward: false, getRootRef: false },
  );

  it('renders tooltip when isShown=true', async () => {
    await renderTooltip(
      <Tooltip isShown text="text">
        <div />
      </Tooltip>,
    );
    expect(screen.getByText('text')).toBeTruthy();
  });

  it('supports child with getRootRef', async () => {
    await renderTooltip(
      <Tooltip isShown text="text">
        <RootRef />
      </Tooltip>,
    );
    expect(screen.getByText('text')).toBeTruthy();
  });

  it('does not create extra markup when isShown=false', () => {
    render(
      <TooltipContainer data-testid="container">
        <Tooltip isShown={false} text="text">
          <div data-testid="xxx" />
        </Tooltip>
      </TooltipContainer>,
    );
    expect(screen.queryByText('text')).toBeFalsy();
    const container = screen.getByTestId('container');
    expect(container.childElementCount).toBe(1);
    expect(container.firstElementChild).toBe(screen.getByTestId('xxx'));
  });

  it('does not explode when children does not accept ref', () => {
    expect(() => render(<Tooltip isShown {...({} as any)} />)).not.toThrow();
    expect(() => render(<Tooltip isShown>{'text' as any}</Tooltip>)).not.toThrow();
    expect(() =>
      render(<Tooltip isShown>{[<div key="1" />, <div key="2" />] as any}</Tooltip>),
    ).not.toThrow();
    expect(() =>
      render(
        <Tooltip isShown>
          <Fragment>
            text
            <div />
          </Fragment>
        </Tooltip>,
      ),
    ).not.toThrow();
  });

  describe('preserves child ref', () => {
    it('on DOM child', async () => {
      const ref = jest.fn();
      await renderTooltip(
        <Tooltip>
          <div ref={ref} data-testid="xxx" />
        </Tooltip>,
      );
      expect(ref).toHaveBeenCalledWith(screen.getByTestId('xxx'));
    });
    it('on VKUI child', async () => {
      const ref = jest.fn();
      await renderTooltip(
        <Tooltip>
          <RootRef getRootRef={ref} data-testid="xxx" />
        </Tooltip>,
      );
      expect(ref).toHaveBeenCalledWith(screen.getByTestId('xxx'));
    });
  });
});
