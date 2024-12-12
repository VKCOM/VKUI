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
    const onPlacementChange = jest.fn();

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

    expect(onPlacementChange).toHaveBeenCalledWith('top');
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
    const onShownChange = jest.fn();
    const Fixture = () => {
      const { referenceRef, referenceProps, tooltip } = useTooltip({
        'description': 'Some tooltip',
        'data-testid': 'tooltip',
        onShownChange,
        'hoverDelay': 0,
      });
      return (
        <>
          {tooltip}
          <Button {...referenceProps} data-testid="target" getRootRef={referenceRef}>
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
