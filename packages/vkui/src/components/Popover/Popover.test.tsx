import * as React from 'react';
import { render } from '@testing-library/react';
import { baselineComponent, waitForFloatingPosition } from '../../testing/utils';
import { Popover, type PopoverProps } from './Popover';

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

  test('passes popover ref to ref prop of children that uses React.forwardRef', async () => {
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
});
