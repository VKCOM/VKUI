import { fireEvent, render, screen } from '@testing-library/react';
import { baselineComponent, waitForFloatingPosition } from '../../testing/utils';
import { Button } from '../Button/Button';
import { Tooltip, type TooltipProps } from './Tooltip';
import { useTooltip } from './useTooltip';

describe(Tooltip, () => {
  baselineComponent((props) => (
    <Tooltip shown description="test" {...props}>
      <div>Target</div>
    </Tooltip>
  ));

  it('should call onPlacementChange', async () => {
    const onPlacementChange = vi.fn();

    const Fixture = (props: TooltipProps) => (
      <Tooltip defaultShown {...props}>
        <div>Target</div>
      </Tooltip>
    );

    const result = render(<Fixture placement="bottom" onPlacementChange={onPlacementChange} />);
    await waitForFloatingPosition();

    expect(onPlacementChange).not.toHaveBeenCalled();

    result.rerender(<Fixture placement="auto" onPlacementChange={onPlacementChange} />);
    await waitForFloatingPosition();

    expect(onPlacementChange).toHaveBeenCalledExactlyOnceWith('top');
  });

  it('should position tooltip with provided strategy', async () => {
    const result = render(
      <Tooltip defaultShown description="test" strategy="absolute" data-testid="tooltip">
        <div>Target</div>
      </Tooltip>,
    );

    await waitForFloatingPosition();

    expect(result.getByTestId('tooltip')).toHaveStyle('position: absolute');
  });

  it('check working with useTooltip hook', async () => {
    const onShownChange = vi.fn();
    const Fixture = () => {
      const { anchorRef, anchorProps, tooltip } = useTooltip({
        'description': 'Some tooltip',
        'data-testid': 'tooltip',
        onShownChange,
        'hoverDelay': 0,
      });
      return (
        <>
          {tooltip}
          <Button {...anchorProps} data-testid="target" getRootRef={anchorRef}>
            Hover me
          </Button>
        </>
      );
    };

    const result = render(<Fixture />);
    await waitForFloatingPosition();
    expect(result.queryByTestId('tooltip')).toBeFalsy();

    fireEvent.focus(screen.getByTestId('target'));
    await waitForFloatingPosition();
    expect(result.queryByTestId('tooltip')).toBeTruthy();
    expect(onShownChange).toHaveBeenCalledTimes(1);
  });
});
