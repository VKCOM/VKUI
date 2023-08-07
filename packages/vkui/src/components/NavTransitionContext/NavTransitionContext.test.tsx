import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { ConfigProvider } from '../ConfigProvider/ConfigProvider';
import { Panel } from '../Panel/Panel';
import { Root } from '../Root/Root';
import { View } from '../View/View';
import { useNavDirection } from './NavTransitionContext';

describe('useNavTransition', () => {
  beforeAll(() => jest.useFakeTimers());
  afterAll(() => jest.useRealTimers());

  it('properly detects transition direction', async () => {
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
        <ConfigProvider transitionMotionEnabled={false}>
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

    // transition between views
    const component = render(<TestComponent activeView="v1" />);
    expect(screen.queryByText('Direction: undefined')).toBeTruthy();

    component.rerender(<TestComponent activeView="v3" />);
    expect(screen.queryByText('Direction: forwards')).toBeTruthy();

    component.rerender(<TestComponent activeView="v2" />);
    expect(screen.queryByText('Direction: backwards')).toBeTruthy();

    component.rerender(<TestComponent activeView="v1" />);
    expect(screen.queryByText('Direction: backwards')).toBeTruthy();

    component.rerender(<TestComponent activeView="v2" />);
    expect(screen.queryByText('Direction: forwards')).toBeTruthy();

    component.rerender(<TestComponent activeView="v3" />);
    expect(screen.queryByText('Direction: forwards')).toBeTruthy();

    // transition between panels
    component.rerender(<TestComponent activeView="v2" activePanel="v2.1" />);
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
