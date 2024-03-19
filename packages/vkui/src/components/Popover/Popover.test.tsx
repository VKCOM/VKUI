import * as React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { baselineComponent, waitForFloatingPosition } from '../../testing/utils';
import { Popover, type PopoverProps } from './Popover';
import styles from './Popover.module.css';

describe(Popover, () => {
  baselineComponent((props) => (
    <Popover defaultShown {...props}>
      <div>Test</div>
    </Popover>
  ));

  it('should provide zIndex to popover element', async () => {
    const result = render(
      <Popover
        defaultShown
        content="Some popover"
        aria-describedby="target"
        role="tooltip"
        data-testid="popover"
        zIndex="100500"
      >
        <div id="target">Target</div>
      </Popover>,
    );
    await waitForFloatingPosition();
    expect(result.getByTestId('popover').parentElement).toHaveStyle('z-index: 100500');
  });

  it('should injects aria-expanded attr to target element if correct role provided', async () => {
    const Fixture = ({ shown }: PopoverProps) => (
      <Popover
        shown={shown}
        id="menu"
        role="menu"
        aria-labelledby="target"
        content={<div role="menuitem">1</div>}
      >
        <div id="target" aria-haspopup="true" aria-controls="menu" data-testid="target">
          Target
        </div>
      </Popover>
    );
    const result = render(<Fixture shown />);
    await waitForFloatingPosition();
    expect(result.getByTestId('target')).toHaveAttribute('aria-expanded', 'true');
    result.rerender(<Fixture shown={false} />);
    await waitForFloatingPosition();
    expect(result.getByTestId('target')).toHaveAttribute('aria-expanded', 'false');
  });

  it('should call onPlacementChange', async () => {
    const onPlacementChange = jest.fn();

    const Fixture = (props: PopoverProps) => (
      <Popover defaultShown {...props}>
        <div>Target</div>
      </Popover>
    );

    const result = render(<Fixture placement="bottom" onPlacementChange={onPlacementChange} />);
    await waitForFloatingPosition();

    expect(onPlacementChange).not.toHaveBeenCalled();

    result.rerender(<Fixture placement="auto" onPlacementChange={onPlacementChange} />);
    await waitForFloatingPosition();

    expect(onPlacementChange).toHaveBeenCalledWith('top');
  });

  it('passes popover ref to ref prop of children that uses React.forwardRef', async () => {
    let componentRef: React.ForwardedRef<HTMLDivElement> | undefined = undefined;
    const ComponentWithForwardRef = React.forwardRef<
      HTMLDivElement,
      React.HTMLAttributes<HTMLDivElement>
    >(function Component(props, ref) {
      componentRef = ref;
      return (
        <div {...props} ref={ref}>
          Component with ref
        </div>
      );
    });

    render(
      <Popover
        defaultShown
        content="Some popover"
        aria-describedby="target"
        role="tooltip"
        data-testid="popover"
        zIndex="100500"
      >
        <ComponentWithForwardRef id="target" />
      </Popover>,
    );

    await waitForFloatingPosition();

    expect(componentRef).toBeTruthy();
  });

  it('accepts arrow feature', async () => {
    const result = render(
      <Popover
        defaultShown
        role="tooltip"
        arrow
        arrowProps={{ 'data-testid': 'popover-arrow' }}
        content="Some popover"
      >
        <div id="target" data-testid="target">
          Target
        </div>
      </Popover>,
    );

    await waitForFloatingPosition();

    expect(result.getByTestId('popover-arrow')).toBeInTheDocument();
  });

  it('disables any styling', async () => {
    const Fixture = (props: PopoverProps) => (
      <Popover
        defaultShown
        role="tooltip"
        arrow
        arrowProps={{ 'data-testid': 'popover-arrow' }}
        content="Some popover"
        data-testid="popover"
        {...props}
      >
        <div id="target" data-testid="target">
          Target
        </div>
      </Popover>
    );

    const result = render(<Fixture />);
    await waitForFloatingPosition();
    expect(result.getByTestId('popover')).toHaveClass(styles['Popover__in--withStyling']);
    expect(result.getByTestId('popover-arrow').firstElementChild).toHaveClass(
      styles['Popover__arrow'],
    );

    result.rerender(<Fixture noStyling />);
    await waitForFloatingPosition();
    expect(result.getByTestId('popover')).not.toHaveClass(styles['Popover__in--withStyling']);
    expect(result.getByTestId('popover-arrow').firstElementChild).not.toHaveClass(
      styles['Popover__arrow'],
    );
  });

  it('should call onClose by content', async () => {
    const onShownChange = jest.fn();

    const Fixture = () => (
      <Popover
        defaultShown
        content={({ onClose }) => (
          <button data-testid="popover-content-close-button" onClick={onClose}>
            close
          </button>
        )}
        data-testid="popover"
        onShownChange={onShownChange}
      >
        <div>Target</div>
      </Popover>
    );

    const result = render(<Fixture />);
    await waitForFloatingPosition();
    expect(result.getByTestId('popover')).toBeInTheDocument();

    fireEvent.click(result.getByTestId('popover-content-close-button'));

    result.rerender(<Fixture />);
    await waitForFloatingPosition();
    expect(result.queryByTestId('popover')).not.toBeInTheDocument();
    expect(onShownChange).toHaveBeenCalledWith(false, 'callback');
  });
});
