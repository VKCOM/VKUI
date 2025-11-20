import { act } from 'react';
import { render } from '@testing-library/react';
import { fakeTimersForScope, waitCSSKeyframesAnimation } from '../../testing/utils';
import { ConfigProvider } from '../ConfigProvider/ConfigProvider';
import { Panel } from '../Panel/Panel';
import { Root } from '../Root/Root';
import { View } from '../View/View';
import { useNavDirection } from './NavTransitionDirectionContext';

function setup({ withAnimationsMode }: { withAnimationsMode: boolean }) {
  const TestContent = () => {
    const direction = useNavDirection();
    return <span data-testid="test-content">Direction: {direction || 'undefined'}</span>;
  };

  const TestComponent = ({
    activeView,
    activePanel = 'v2.1',
  }: {
    activeView: string;
    activePanel?: string;
  }) => {
    return (
      <ConfigProvider transitionMotionEnabled={withAnimationsMode}>
        <Root activeView={activeView}>
          <View id="v1" data-testid="v1" key="1" activePanel="v1.1">
            <Panel id="v1.1" data-testid="v1.1">
              <TestContent />
            </Panel>
          </View>
          <View id="v2" data-testid="v2" key="2" activePanel={activePanel}>
            <Panel id="v2.1" data-testid="v2.1" key="1">
              <TestContent />
            </Panel>
            <Panel id="v2.2" data-testid="v2.2" key="2">
              <TestContent />
            </Panel>
            <Panel id="v2.3" data-testid="v2.3" key="3">
              <TestContent />
            </Panel>
          </View>
          <View id="v3" data-testid="v3" key="3" activePanel="v3.1">
            <Panel id="v3.1" data-testid="v3.1">
              <TestContent />
            </Panel>
          </View>
        </Root>
      </ConfigProvider>
    );
  };

  return { TestComponent };
}

describe('useNavTransition', () => {
  fakeTimersForScope();

  it.each([
    ['properly detects transition direction without animations', false],
    ['properly detects transition direction with animations', true],
  ])('%s', async (_name, withAnimationsMode) => {
    const { TestComponent } = setup({ withAnimationsMode });
    // transition between views
    const component = render(<TestComponent activeView="v1" />);
    await act(vi.runOnlyPendingTimers);
    expect(component.getByTestId('test-content')).toHaveTextContent('Direction: undefined');

    component.rerender(<TestComponent activeView="v3" />);
    await waitCSSKeyframesAnimation(component.queryByTestId('v1'));
    await waitCSSKeyframesAnimation(component.getByTestId('v3'), { runOnlyPendingTimers: true });
    expect(component.getByTestId('test-content')).toHaveTextContent('Direction: forwards');

    component.rerender(<TestComponent activeView="v2" />);
    await waitCSSKeyframesAnimation(component.queryByTestId('v3'));
    await waitCSSKeyframesAnimation(component.getByTestId('v2'), { runOnlyPendingTimers: true });
    expect(component.getByTestId('test-content')).toHaveTextContent('Direction: backwards');

    component.rerender(<TestComponent activeView="v1" />);
    await waitCSSKeyframesAnimation(component.queryByTestId('v2'));
    await waitCSSKeyframesAnimation(component.getByTestId('v1'), { runOnlyPendingTimers: true });
    expect(component.getByTestId('test-content')).toHaveTextContent('Direction: backwards');

    component.rerender(<TestComponent activeView="v2" />);
    await waitCSSKeyframesAnimation(component.queryByTestId('v1'));
    await waitCSSKeyframesAnimation(component.getByTestId('v2'), { runOnlyPendingTimers: true });
    expect(component.getByTestId('test-content')).toHaveTextContent('Direction: forwards');

    component.rerender(<TestComponent activeView="v3" />);
    await waitCSSKeyframesAnimation(component.queryByTestId('v2'));
    await waitCSSKeyframesAnimation(component.getByTestId('v3'), { runOnlyPendingTimers: true });
    expect(component.getByTestId('test-content')).toHaveTextContent('Direction: forwards');

    // transition between panels
    component.rerender(<TestComponent activeView="v2" activePanel="v2.1" />);
    await waitCSSKeyframesAnimation(component.queryByTestId('v3'));
    await waitCSSKeyframesAnimation(component.getByTestId('v2'), { runOnlyPendingTimers: true });
    expect(component.getByTestId('test-content')).toHaveTextContent('Direction: backwards');

    component.rerender(<TestComponent activeView="v2" activePanel="v2.2" />);
    await waitCSSKeyframesAnimation(component.queryByTestId('v2.1'));
    await waitCSSKeyframesAnimation(component.getByTestId('v2.2'), { runOnlyPendingTimers: true });
    expect(component.getByTestId('test-content')).toHaveTextContent('Direction: forwards');

    component.rerender(<TestComponent activeView="v2" activePanel="v2.1" />);
    await waitCSSKeyframesAnimation(component.queryByTestId('v2.2'));
    await waitCSSKeyframesAnimation(component.getByTestId('v2.1'), { runOnlyPendingTimers: true });
    expect(component.getByTestId('test-content')).toHaveTextContent('Direction: backwards');

    component.rerender(<TestComponent activeView="v2" activePanel="v2.3" />);
    await waitCSSKeyframesAnimation(component.queryByTestId('v2.1'));
    await waitCSSKeyframesAnimation(component.getByTestId('v2.3'), { runOnlyPendingTimers: true });
    expect(component.getByTestId('test-content')).toHaveTextContent('Direction: forwards');

    component.rerender(<TestComponent activeView="v2" activePanel="v2.2" />);
    await waitCSSKeyframesAnimation(component.queryByTestId('v2.3'));
    await waitCSSKeyframesAnimation(component.getByTestId('v2.2'), { runOnlyPendingTimers: true });
    expect(component.getByTestId('test-content')).toHaveTextContent('Direction: backwards');

    // transition to another view
    component.rerender(<TestComponent activeView="v3" />);
    await waitCSSKeyframesAnimation(component.queryByTestId('v2'));
    await waitCSSKeyframesAnimation(component.getByTestId('v3'), { runOnlyPendingTimers: true });
    expect(component.getByTestId('test-content')).toHaveTextContent('Direction: forwards');
  });
});
