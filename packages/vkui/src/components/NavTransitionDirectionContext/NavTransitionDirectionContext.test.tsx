import { act } from 'react';
import { render, screen } from '@testing-library/react';
import { fakeTimersForScope, waitCSSKeyframesAnimation } from '../../testing/utils';
import { ConfigProvider } from '../ConfigProvider/ConfigProvider';
import { Panel } from '../Panel/Panel';
import { Root } from '../Root/Root';
import { View } from '../View/View';
import { useNavDirection } from './NavTransitionDirectionContext';
import rootStyles from '../Root/Root.module.css';
import viewStyles from '../View/View.module.css';

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
    activePanel?: string | undefined;
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

  it('Root bubbling animation events have no effect', async () => {
    const { TestComponent } = setup({ withAnimationsMode: true });
    // transition between views
    const component = render(<TestComponent activeView="v1" />);
    await act(vi.runOnlyPendingTimers);
    expect(component.getByTestId('test-content')).toHaveTextContent('Direction: undefined');

    component.rerender(<TestComponent activeView="v3" />);
    await waitCSSKeyframesAnimation(screen.queryByTestId('v1'));
    await waitCSSKeyframesAnimation(screen.queryByTestId('v3'), { runOnlyPendingTimers: true });
    expect(component.getAllByTestId('test-content')[0]).toHaveTextContent('Direction: undefined');
  });

  it('View bubbling animation events have no effect', async () => {
    const { TestComponent } = setup({ withAnimationsMode: true });
    // transition between views
    const component = render(<TestComponent activeView="v2" activePanel="v2.1" />);
    await act(vi.runOnlyPendingTimers);
    expect(component.getByTestId('test-content')).toHaveTextContent('Direction: undefined');

    component.rerender(<TestComponent activeView="v2" activePanel="v2.2" />);
    await waitCSSKeyframesAnimation(screen.queryByTestId('v2.1'));
    await waitCSSKeyframesAnimation(screen.queryByTestId('v2.2'), { runOnlyPendingTimers: true });
    expect(component.getAllByTestId('test-content')[0]).toHaveTextContent('Direction: undefined');
  });

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
    await waitCSSKeyframesAnimation(getViewById('v1'));
    await waitCSSKeyframesAnimation(getViewById('v3'), { runOnlyPendingTimers: true });
    expect(component.getByTestId('test-content')).toHaveTextContent('Direction: forwards');

    component.rerender(<TestComponent activeView="v2" />);
    await waitCSSKeyframesAnimation(getViewById('v3'));
    await waitCSSKeyframesAnimation(getViewById('v2'), { runOnlyPendingTimers: true });
    expect(component.getByTestId('test-content')).toHaveTextContent('Direction: backwards');

    component.rerender(<TestComponent activeView="v1" />);
    await waitCSSKeyframesAnimation(getViewById('v2'));
    await waitCSSKeyframesAnimation(getViewById('v1'), { runOnlyPendingTimers: true });
    expect(component.getByTestId('test-content')).toHaveTextContent('Direction: backwards');

    component.rerender(<TestComponent activeView="v2" />);
    await waitCSSKeyframesAnimation(getViewById('v1'));
    await waitCSSKeyframesAnimation(getViewById('v2'), { runOnlyPendingTimers: true });
    expect(component.getByTestId('test-content')).toHaveTextContent('Direction: forwards');

    component.rerender(<TestComponent activeView="v3" />);
    await waitCSSKeyframesAnimation(getViewById('v2'));
    await waitCSSKeyframesAnimation(getViewById('v3'), { runOnlyPendingTimers: true });
    expect(component.getByTestId('test-content')).toHaveTextContent('Direction: forwards');

    // transition between panels
    component.rerender(<TestComponent activeView="v2" activePanel="v2.1" />);
    await waitCSSKeyframesAnimation(getViewById('v3'));
    await waitCSSKeyframesAnimation(getViewById('v2'), { runOnlyPendingTimers: true });
    expect(component.getByTestId('test-content')).toHaveTextContent('Direction: backwards');

    component.rerender(<TestComponent activeView="v2" activePanel="v2.2" />);
    await waitCSSKeyframesAnimation(getPanelById('v2.1'));
    await waitCSSKeyframesAnimation(getPanelById('v2.2'), { runOnlyPendingTimers: true });
    expect(component.getByTestId('test-content')).toHaveTextContent('Direction: forwards');

    component.rerender(<TestComponent activeView="v2" activePanel="v2.1" />);
    await waitCSSKeyframesAnimation(getPanelById('v2.2'));
    await waitCSSKeyframesAnimation(getPanelById('v2.1'), { runOnlyPendingTimers: true });
    expect(component.getByTestId('test-content')).toHaveTextContent('Direction: backwards');

    component.rerender(<TestComponent activeView="v2" activePanel="v2.3" />);
    await waitCSSKeyframesAnimation(getPanelById('v2.1'));
    await waitCSSKeyframesAnimation(getPanelById('v2.3'), { runOnlyPendingTimers: true });
    expect(component.getByTestId('test-content')).toHaveTextContent('Direction: forwards');

    component.rerender(<TestComponent activeView="v2" activePanel="v2.2" />);
    await waitCSSKeyframesAnimation(getPanelById('v2.3'));
    await waitCSSKeyframesAnimation(getPanelById('v2.2'), { runOnlyPendingTimers: true });
    expect(component.getByTestId('test-content')).toHaveTextContent('Direction: backwards');

    // transition to another view
    component.rerender(<TestComponent activeView="v3" />);
    await waitCSSKeyframesAnimation(getViewById('v2'));
    await waitCSSKeyframesAnimation(getViewById('v3'), { runOnlyPendingTimers: true });
    expect(component.getByTestId('test-content')).toHaveTextContent('Direction: forwards');
  });
});

function getViewById(viewId: string) {
  const element = screen.queryByTestId(viewId);
  return element?.closest<HTMLElement>(`.${rootStyles.view}`) ?? null;
}

function getPanelById(panelId: string) {
  const element = screen.queryByTestId(panelId);
  return element?.closest<HTMLElement>(`.${viewStyles.panel}`) ?? null;
}
