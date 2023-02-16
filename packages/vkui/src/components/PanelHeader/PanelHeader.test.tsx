import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { Platform } from '../../lib/platform';
import { baselineComponent } from '../../testing/utils';
import { ConfigProvider } from '../ConfigProvider/ConfigProvider';
import { PanelHeader, PanelHeaderProps } from './PanelHeader';

const PanelHeaderTest = (props: PanelHeaderProps) => (
  <PanelHeader data-testid="header" {...props} />
);
const panelHeader = () => screen.getByTestId('header');

describe('PanelHeader', () => {
  baselineComponent(PanelHeader);

  it('resolves isFixed if fixed prop if it is passed', () => {
    const { rerender } = render(<PanelHeaderTest fixed />);
    expect(panelHeader()).toHaveClass('vkuiPanelHeader--fixed');
    rerender(<PanelHeaderTest fixed={false} />);
    expect(panelHeader()).not.toHaveClass('vkuiPanelHeader--fixed');
  });

  it('resolves isFixed if fixed prop is undefined', () => {
    render(<PanelHeaderTest />);
    expect(panelHeader()).toHaveClass('vkuiPanelHeader--fixed');
  });

  it('resolves isFixed if platform is VKCOM', () => {
    const { rerender } = render(
      <ConfigProvider platform={Platform.VKCOM}>
        <PanelHeaderTest />
      </ConfigProvider>,
    );

    expect(panelHeader()).not.toHaveClass('vkuiPanelHeader--fixed');

    rerender(
      <ConfigProvider platform={Platform.VKCOM}>
        <PanelHeaderTest fixed={true} />
      </ConfigProvider>,
    );

    expect(panelHeader()).toHaveClass('vkuiPanelHeader--fixed');
  });
});
