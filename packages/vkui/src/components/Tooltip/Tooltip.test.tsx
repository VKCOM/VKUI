import * as React from 'react';
import { render } from '@testing-library/react';
import { baselineComponent, waitForFloatingPosition } from '../../testing/utils';
import { Tooltip, TooltipProps } from './Tooltip';

describe(Tooltip, () => {
  baselineComponent((props) => (
    <Tooltip shown text="test" {...props}>
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
});
