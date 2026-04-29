import { render, screen } from '@testing-library/react';
import { baselineComponent } from '../../../testing/utils';
import { FlexItem } from './FlexItem';

describe(FlexItem, () => {
  baselineComponent(FlexItem);

  it('should override flex prop with flexBasis', () => {
    render(
      <FlexItem data-testid="content" flex="grow" flexBasis={0}>
        Content
      </FlexItem>,
    );
    const content = screen.getByTestId('content');
    expect(content).toHaveClass('vkui-flex-basis');
    expect(content).toHaveClass('vkui-flex-shrink');
    expect(content).toHaveClass('vkui-flex-grow');

    expect(content).toHaveStyle('--vkui_internal--flex-grow: 1');
    expect(content).toHaveStyle('--vkui_internal--flex-shrink: 0');
    expect(content).toHaveStyle('--vkui_internal--flex-basis: 0px');
  });
});
