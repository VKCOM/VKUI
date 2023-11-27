import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { fakeTimers, runAllTimers } from '../../testing/utils';
import { ConfigProvider } from '../ConfigProvider/ConfigProvider';
import { Panel } from '../Panel/Panel';
import { Root } from '../Root/Root';
import { View } from '../View/View';
import { useNavDirection } from './NavTransitionDirectionContext';

function setup({ withAnimationsMode }: { withAnimationsMode: boolean }) {
  const TestContent = () => {
    const direction = useNavDirection();
    return <span>Direction: {direction || 'undefined'}</span>;
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
          <View id="v1" key="1" activePanel="v1.1">
            <Panel id="v1.1">
              <TestContent />
            </Panel>
          </View>
          <View id="v2" key="2" activePanel={activePanel}>
            <Panel id="v2.1" key="1">
              <TestContent />
            </Panel>
            <Panel id="v2.2" key="2">
              <TestContent />
            </Panel>
            <Panel id="v2.3" key="3">
              <TestContent />
            </Panel>
          </View>
          <View id="v3" key="3" activePanel="v3.1">
            <Panel id="v3.1">
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
  fakeTimers();

  it.each([
    ['properly detects transition direction without animations', false],
    ['properly detects transition direction with animations', true],
  ])('%s', (_name, withAnimationsMode) => {
    const { TestComponent } = setup({ withAnimationsMode });
    // transition between views
    const component = render(<TestComponent activeView="v1" />);
    expect(screen.queryByText('Direction: undefined')).toBeTruthy();

    component.rerender(<TestComponent activeView="v3" />);
    expect(screen.queryByText('Direction: forwards')).toBeTruthy();

    component.rerender(<TestComponent activeView="v2" />);
    expect(screen.queryByText('Direction: backwards')).toBeTruthy();

    component.rerender(<TestComponent activeView="v1" />);
    runAllTimers();
    expect(screen.queryByText('Direction: backwards')).toBeTruthy();

    component.rerender(<TestComponent activeView="v2" />);
    runAllTimers();
    expect(screen.queryByText('Direction: forwards')).toBeTruthy();

    component.rerender(<TestComponent activeView="v3" />);
    runAllTimers();
    expect(screen.queryByText('Direction: forwards')).toBeTruthy();

    // transition between panels
    component.rerender(<TestComponent activeView="v2" activePanel="v2.1" />);
    runAllTimers();
    expect(screen.queryByText('Direction: backwards')).toBeTruthy();

    component.rerender(<TestComponent activeView="v2" activePanel="v2.2" />);
    expect(screen.queryByText('Direction: forwards')).toBeTruthy();

    component.rerender(<TestComponent activeView="v2" activePanel="v2.1" />);
    expect(screen.queryByText('Direction: backwards')).toBeTruthy();

    component.rerender(<TestComponent activeView="v2" activePanel="v2.3" />);
    expect(screen.queryByText('Direction: forwards')).toBeTruthy();

    component.rerender(<TestComponent activeView="v2" activePanel="v2.2" />);
    expect(screen.queryByText('Direction: backwards')).toBeTruthy();

    // transition to another view
    component.rerender(<TestComponent activeView="v3" />);
    expect(screen.queryByText('Direction: forwards')).toBeTruthy();
  });
});
